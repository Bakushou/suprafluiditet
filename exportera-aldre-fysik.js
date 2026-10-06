/* Kör endast ppå din gamla Suprafluiditet-sida. Läser dess egna lokala data.
   Inga data skickas till någon server. Resultatet laddas ned som en JSON-fil. */
(()=>{
 const stores={entities:[],versions:[],progress:[],reviews:[],knowledge:[],settings:[],attachments:[]};
 const now=Date.now();
 for(let n=1;n<=33;n++){const body=localStorage.getItem('suprafluiditet-notes-'+n);if(body)stores.entities.push({id:'physics:note:'+n,type:'note',title:'Anteckningar · kapitel '+n,body,tags:['Import från fysiksidan'],links:['physics:chapter:'+n],fields:{},revision:1,created:now,updated:now});}
 const completed=JSON.parse(localStorage.getItem('suprafluiditet-completed')||'[]');if(Array.isArray(completed))stores.settings.push({id:'physicsCompleted',value:completed.filter(n=>Number.isInteger(n)&&n>=1&&n<=33)});
 const chapter=Number(localStorage.getItem('suprafluiditet-last-chapter'));if(chapter>=1&&chapter<=33){stores.settings.push({id:'lastPhysicsChapter',value:chapter});stores.settings.push({id:'lastReading',value:{url:'?view=science&entry=physics%3Achapter%3A'+chapter,title:'Fysikläroboken · kapitel '+chapter}});}
 const layer=localStorage.getItem('suprafluiditet-learning-layer');if(layer)stores.settings.push({id:'physicsLearningLayer',value:layer});
 const scale=Number(localStorage.getItem('suprafluiditet-reader-scale'));if(scale>0)stores.settings.push({id:'textSize',value:String([100,110,125,150].reduce((a,b)=>Math.abs(a-scale*100)<Math.abs(b-scale*100)?a:b))});
 const blob=new Blob([JSON.stringify({format:'blatimmen',version:2,exportedAt:new Date().toISOString(),stores})],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='suprafluiditet-till-blatimmen.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),10000);
})();
