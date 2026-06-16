
import React from 'react';
import './globals.css';
export const metadata = {
  title: 'ABDULLAH CHOUDARY',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
<script dangerouslySetInnerHTML={{__html: `(function(){try{
  var B='https://saliencesite.com/api/track-view';
  var pid='854afbf7-d4a9-4520-b1a4-ac2106d7b23e';
  var sid=(Math.random().toString(36).slice(2)+Date.now().toString(36)).slice(0,16);
  var ua=navigator.userAgent;
  var sw=screen.width;
  var dev=sw<768?'mobile':sw<1024?'tablet':'desktop';
  var os=/windows/i.test(ua)?'Windows':/macintosh/i.test(ua)?'macOS':/android/i.test(ua)?'Android':/iphone|ipad|ipod/i.test(ua)?'iOS':/linux/i.test(ua)?'Linux':'Other';
  var lang=navigator.language||'';
  var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}
  var sp=new URLSearchParams(location.search);
  var utms=sp.get('utm_source')||'';
  var utmm=sp.get('utm_medium')||'';
  var utmc=sp.get('utm_campaign')||'';
  var ret=false;try{var rk='pv_'+pid;ret=!!localStorage.getItem(rk);localStorage.setItem(rk,'1');}catch(e){}
  var maxScroll=0;
  window.addEventListener('scroll',function(){var d=document.documentElement;var h=d.scrollHeight-d.clientHeight;if(h>0){var p=Math.round((d.scrollTop/h)*100);if(p>maxScroll)maxScroll=p;}},{passive:true});
  var start=Date.now();
  fetch(B,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pid:pid,sid:sid,ref:document.referrer||'',ua:ua,dev:dev,tz:tz,lang:lang,sw:sw,os:os,ret:ret,utms:utms,utmm:utmm,utmc:utmc}),keepalive:true}).catch(function(){});
  var sent=false;
  function exit(){if(sent)return;sent=true;var dur=Math.round((Date.now()-start)/1000);fetch(B,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({_exit:true,sid:sid,dur:dur,sd:maxScroll}),keepalive:true}).catch(function(){});}
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')exit();});
  window.addEventListener('pagehide',exit);
}catch(e){}})();`}} />
      </body>
    </html>
  );
}
