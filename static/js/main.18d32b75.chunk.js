(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{24:function(t,e,a){},25:function(t,e,a){},27:function(t,e,a){},45:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(15),i=a.n(s),o=(a(24),a(25),a(0));var l=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})},r=(a(27),a(4)),d="f32ff0df0b71f334e13511c784a4173b",u="https://image.tmdb.org/t/p/original",j=a(16),b=a.n(j).a.create({baseURL:"https://api.themoviedb.org/3"});a(45);var g=function(){var t=Object(c.useState)(),e=Object(r.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){b.get("trending/all/week?api_key=".concat(d,"&language=en-US")).then((function(t){console.log(t.data.results[0]);var e=t.data.results[Math.floor(Math.random()*t.data.results.length)];n(e)}))}),[]),Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(a?u+a.backdrop_path:"",")")},className:"banner",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:a?a.title:" "}),Object(o.jsxs)("div",{className:"banner-buttons",children:[Object(o.jsx)("button",{className:"button",children:"Play"}),Object(o.jsx)("button",{className:"button",children:"My list  "})]}),Object(o.jsx)("h1",{className:"discription",children:a?a.overview:" "}),Object(o.jsx)("div",{className:"fade_bottom"})]})})},h=a(17);a(59);var m=function(t){var e=Object(c.useState)([]),a=Object(r.a)(e,2),n=a[0],s=a[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),j=l[0],g=l[1];return Object(c.useEffect)((function(){b.get(t.url).then((function(t){console.log(t.data),s(t.data.results)}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h2",{children:t.title}),Object(o.jsx)("div",{className:"posters",children:n.map((function(e,a){return Object(o.jsx)("img",{onClick:function(){return t=e.id,console.log(t),void b.get("/movie/".concat(t,"/videos?api_key=").concat(d,"&language=en-US")).then((function(t){0!==t.data.resultslength?g(t.data.results[0]):console.log("No videos to play")}));var t},className:t.isSmall?"smallPoster":"poster",alt:"poster",src:"".concat(u+e.backdrop_path)},a)}))}),j&&Object(o.jsx)(h.a,{videoId:j.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},f="discover/tv?api_key=".concat(d,"&with_networks=213"),p="/discover/movie?api_key=".concat(d,"&with_genres=28");var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(g,{}),Object(o.jsx)(m,{title:"Netflix Originals",url:f}),Object(o.jsx)(m,{title:"Action",isSmall:!0,url:p})]})},O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.18d32b75.chunk.js.map