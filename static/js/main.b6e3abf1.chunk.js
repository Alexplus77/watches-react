(this["webpackJsonpwatches-react"]=this["webpackJsonpwatches-react"]||[]).push([[0],{12:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=n(13),i=n.n(r),s=n(14),u=n(7),l=n(9),m=n(10),j=(n(12),n(1)),o=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.inputName;return Object(j.jsxs)("form",{className:"form",onSubmit:t,children:[Object(j.jsxs)("label",{htmlFor:"name1",className:"label-name",children:[" ","\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"," "]}),Object(j.jsx)("input",{id:"name1",ref:a,className:"input-name",defaultValue:"",type:"text",onChange:n,name:"name",required:!0,placeholder:"\u0413\u043e\u0440\u043e\u0434"}),Object(j.jsxs)("label",{htmlFor:"timeZone",className:"label-timezone",children:[" ","\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"]}),Object(j.jsx)("input",{id:"timeZone",className:"input-timezone",type:"number",onChange:n,name:"timeZone",defaultValue:"",required:!0,placeholder:"+ \u0447\u0430\u0441\u043e\u0432"}),Object(j.jsx)("button",{className:"btn-submit",onSubmit:t,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},b=n(24),d=n(23),h=function(e){var t=e.id,n=e.name,a=e.timeZone,c=e.handleRemove;return Object(j.jsxs)("div",{className:"watch-card",children:[Object(j.jsx)("i",{className:"fa fa-times-circle-o","aria-hidden":"true",onClick:function(){return c(t)}}),Object(j.jsx)("i",{className:"titleWatch",children:n}),Object(j.jsxs)("i",{className:"dataWatch",children:[" ",Object(b.a)(Object(d.a)(new Date,a),"HH:mm:ss"),"","+",a]})]},t)},O=n(15),f=function(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(m.a)(r,2),d=i[0],f=i[1],v=Object(a.useState)([]),x=Object(m.a)(v,2),p=x[0],N=x[1],w=Object(a.useRef)(),g=Object(a.useRef)();Object(a.useEffect)((function(){return g.current=setInterval((function(){return f(new Date)}),1e3),function(){return clearInterval(g.current)}}),[d]),Object(a.useEffect)((function(){w.current.focus()}),[]);var S=function(e){N((function(){return p.filter((function(t){return t.id!==e}))}))};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o,{handleSubmit:function(e){e.preventDefault(),function(){var e;return(null===(e=n.name)||void 0===e?void 0:e.trim().length)&&Number(n.timeZone)>0}()&&N([].concat(Object(s.a)(p),[Object(l.a)({id:Object(O.a)()},n)])),e.currentTarget.reset(),c({})},handleChange:function(e){var t=e.target,a=t.name,r=t.value;r.trim()&&c(Object(l.a)(Object(l.a)({},n),{},Object(u.a)({},a,r)))},inputName:w}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"local-watch",children:["\u041c\u0435\u0441\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f: ",Object(b.a)(new Date,"HH:mm:ss")]}),Object(j.jsxs)("div",{className:"container-watches",children:[" ",p.map((function(e){var t=e.name,n=e.timeZone,a=e.id;return Object(j.jsx)(h,{handleRemove:S,timeZone:n,id:a,name:t},a)}))]})]})]})},v=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{})})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b6e3abf1.chunk.js.map