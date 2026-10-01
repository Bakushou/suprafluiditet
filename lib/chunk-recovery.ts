// A tab opened before a deployment can still request a chunk from the previous build.
// Refresh its HTML once so new imports use the current build. Never loop on a real outage.
export function recoverMissingChunk(error:unknown):boolean{
 const message=error instanceof Error?error.message:String(error);
 if(!/error loading dynamically imported module|failed to fetch dynamically imported module|importing a module script failed|loading chunk .* failed|failed to load module script/i.test(message))return false;
 if(typeof navigator!=='undefined'&&navigator.onLine===false)return false;
 try{
  const key='elijah:chunk-recovery:'+location.pathname;
  const last=Number(sessionStorage.getItem(key)||0);
  if(Date.now()-last<5*60*1000)return false;
  sessionStorage.setItem(key,String(Date.now()));
  location.reload();
  return true;
 }catch{return false;}
}

export function listenForChunkPreloadErrors():void{
 window.addEventListener('vite:preloadError',event=>{
  const preload=event as Event&{payload?:unknown};
  if(recoverMissingChunk(preload.payload))event.preventDefault();
 });
}
