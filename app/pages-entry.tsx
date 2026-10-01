import {Component,type ReactNode} from 'react';
import {createRoot} from 'react-dom/client';
import StudyRoom from './study-room';
import {exportBackup} from '@/lib/local-store';
import {recoverMissingChunk,listenForChunkPreloadErrors} from '@/lib/chunk-recovery';
import './globals.css';
import './workspace.css';
class AppBoundary extends Component<{children:ReactNode},{failed:boolean;message:string;backupError:string}>{state={failed:false,message:'',backupError:''};static getDerivedStateFromError(error:Error){return {failed:true,message:error?.message||'Okänt fel'};}componentDidCatch(error:Error){console.error('Cornflower kunde inte visa vyn:',error);recoverMissingChunk(error);}render(){return this.state.failed?<main style={{maxWidth:700,margin:'10vh auto',padding:24}}><h1>Sidan kunde inte visas</h1><p>Din lokala data har inte raderats. Prova att ladda om sidan.</p><button className="primary-btn" onClick={()=>location.reload()}>Ladda om</button> <button onClick={()=>void exportBackup().catch(error=>this.setState({backupError:String(error)}))}>Hämta säkerhetskopia</button>{this.state.backupError&&<p role="alert">Kunde inte skapa kopian: {this.state.backupError}</p>}<p><a href="./">Till Elijah</a></p><details><summary>Teknisk felinformation</summary><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{this.state.message}</pre></details></main>:this.props.children;}}
listenForChunkPreloadErrors();
const legacy=new URLSearchParams(location.search);if(legacy.get('view')==='science'){const chapter=legacy.get('entry')?.match(/^physics:chapter:(\d+)$/)?.[1];location.replace('./physics.html'+(chapter?'#/chapter/'+chapter:''));}
createRoot(document.getElementById('root')!).render(<AppBoundary><StudyRoom/></AppBoundary>);
if(import.meta.env.PROD && 'serviceWorker' in navigator) window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{});});
