module.exports=[83480,a=>{"use strict";async function b({req:a,res:b}){let c=function({hostname:a,users:b}){return`<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${a}</loc>
       </url>
       ${b.map(b=>`
         <url>
             <loc>${a}/${b}</loc>
         </url>
       `).join("")}
     </urlset>
   `}({hostname:"https://tranmani.com",users:[]});return b.setHeader("Content-Type","text/xml"),b.write(c),b.end(),{props:{}}}a.s(["default",0,function(){},"getServerSideProps",()=>b])},77059,a=>a.a(async(b,c)=>{try{var d=a.i(69281),e=a.i(21686),f=a.i(25566),g=a.i(5270),h=a.i(41269),i=a.i(83480),j=a.i(14831),k=b([h]);[h]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/sitemap.xml",pathname:"/sitemap.xml",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/sitemap.xml",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=_claude_worktrees_add-lorenly-perron-projects_91dac35c._.js.map