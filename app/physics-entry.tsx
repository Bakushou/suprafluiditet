import {Component,type ReactNode} from 'react';
import {createRoot} from 'react-dom/client';
import PhysicsSite from './physics/site';
import {exportBackup} from '@/lib/local-store';
import {recoverMissingChunk,listenForChunkPreloadErrors} from '@/lib/chunk-recovery';
import './physics/original.css';
import './physics/additions.css';
import './physics/light.css';
class PhysicsBoundary extends Component<{children:ReactNode},{failed:boolean;message:string;backupError:string}>{state={failed:false,message:'',backupError:''};static getDerivedStateFromError(error:Error){return {failed:true,message:error?.message||'Okänt fel'};}componentDidCatch(error:Error){console.error('Azalea kunde inte visa vyn:',error);recoverMissingChunk(error);}render(){return this.state.failed?<main style={{padding:40,maxWidth:700,margin:'auto',minHeight:'100vh',background:'#0d241e',color:'#e6eee7'}}><h1>Läroboken kunde inte visas</h1><p>Din lokala data har inte raderats. Det kan hjälpa att ladda om sidan efter en uppdatering.</p><div style={{display:'flex',gap:16,flexWrap:'wrap'}}><button onClick={()=>location.reload()}>Ladda om</button><button onClick={()=>void exportBackup().catch(error=>this.setState({backupError:String(error)}))}>Hämta säkerhetskopia</button></div>{this.state.backupError&&<p role="alert">Kunde inte skapa kopian: {this.state.backupError}</p>}<p><a href="./" style={{color:'#b4d7c7'}}>Till Elijah</a></p><details><summary>Teknisk felinformation</summary><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{this.state.message}</pre></details></main>:this.props.children;}}
listenForChunkPreloadErrors();
createRoot(document.getElementById('root')!).render(<PhysicsBoundary><PhysicsSite/></PhysicsBoundary>);
if(import.meta.env.PROD&&'serviceWorker' in navigator)window.addEventListener('load',()=>void navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}));
