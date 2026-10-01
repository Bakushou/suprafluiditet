import {Component,type ReactNode} from 'react';
import {createRoot} from 'react-dom/client';
import BaiblemSite from './baiblem/site';
import {backup,saveFile} from '@/lib/baiblem/store';
import {recoverMissingChunk,listenForChunkPreloadErrors} from '@/lib/chunk-recovery';
class Boundary extends Component<{children:ReactNode},{failed:boolean;message:string;backupError:string}>{state={failed:false,message:'',backupError:''};static getDerivedStateFromError(error:Error){return {failed:true,message:error?.message||'Okänt fel'};}componentDidCatch(error:Error){console.error('Baiblem kunde inte visa vyn:',error);recoverMissingChunk(error);}render(){return this.state.failed?<main style={{fontFamily:'Georgia',padding:40,background:'#251d18',color:'#eddfc9',minHeight:'100vh'}}><h1>Baiblem kunde inte visas</h1><p>Din lokala data har inte raderats. Prova att ladda om sidan.</p><button onClick={()=>location.reload()}>Ladda om</button> <button onClick={()=>void backup().then(data=>saveFile('baiblem-backup-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(data))).catch(error=>this.setState({backupError:String(error)}))}>Hämta säkerhetskopia</button>{this.state.backupError&&<p role="alert">Kunde inte skapa kopian: {this.state.backupError}</p>}<p><a href="./" style={{color:'#eddfc9'}}>Till Elijah</a></p><details><summary>Teknisk felinformation</summary><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{this.state.message}</pre></details></main>:this.props.children;}}
listenForChunkPreloadErrors();
createRoot(document.getElementById('root')!).render(<Boundary><BaiblemSite/></Boundary>);
if(import.meta.env.PROD&&'serviceWorker' in navigator)window.addEventListener('load',()=>void navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}));
