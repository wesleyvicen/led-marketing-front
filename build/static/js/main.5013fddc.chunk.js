(window.webpackJsonpledMarketing=window.webpackJsonpledMarketing||[]).push([[0],{104:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),c=n.n(o),i=n(77),l=n(28),u=n(26),s="@ledMarketing-Token",m=function(e){localStorage.setItem(s,e)},d=n(7),p=n.n(d),f=n(18),h=n(25),b=n(52),g=n.n(b),v=g.a.create({baseURL:"http://led-marketing-backend.herokuapp.com"});v.interceptors.request.use(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem(s))&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var E=g.a.create({baseURL:"http://newsapi.org/v2"}),x=(n(101),n(36),n(118));var j=function(e){var t=e.anuncio;return r.a.createElement("div",{className:"ad"},r.a.createElement(x.a,{fade:!0,controls:!1,interval:3e3,pauseOnHover:!1,indicators:!1},t.map((function(e,t){return r.a.createElement(x.a.Item,{key:t},r.a.createElement("img",{className:"d-block w-100 anuncio",src:e.urlImage,alt:"First slide"}))}))))},O=n(10),y=n(11),w=n(13),k=n(12),I=n(14),S=n(35),N=(n(103),function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(k.a)(t).call(this,e))).state={tempo:S().format("Do MMMM YYYY"),current:S().format("h:mm:ss a")},n}return Object(I.a)(t,e),Object(y.a)(t,[{key:"update",value:function(){this.setState((function(e){return{tempo:S().format("Do MMMM YYYY"),current:S().format("h:mm:ss a")}}))}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.update()}),1e3)}},{key:"render",value:function(){return a.createElement("div",{className:"date"},this.state.tempo,a.createElement("br",null),this.state.current)}}]),t}(a.PureComponent)),C=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"logo"},"LED Marketing")}}]),t}(a.PureComponent);var L=function(e){var t=e.noticia;return r.a.createElement("div",{className:"news"},r.a.createElement(x.a,{fade:!0,controls:!1,interval:6e3,pauseOnHover:!1,indicators:!1},t.map((function(e,t){return r.a.createElement(x.a.Item,{key:t},r.a.createElement("h2",null,e.title))}))))};var M=function(e){var t=e.noticia;return r.a.createElement("div",{className:"image"},r.a.createElement(x.a,{fade:!0,controls:!1,interval:6e3,pauseOnHover:!1,indicators:!1},t.map((function(e,t){return r.a.createElement(x.a.Item,{key:t},r.a.createElement("img",{className:"u-containProse",src:e.urlToImage,alt:"First slide"}))}))))};var z=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),i=Object(h.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/ad/lists");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("top-headlines?country=br&apiKey=9dc6a5ed9f0a4df49d2a23fc8d47fa89");case 2:t=e.sent,u(t.data.articles);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container2"},r.a.createElement("div",{className:"left"},r.a.createElement(j,{anuncio:n}),r.a.createElement(L,{noticia:l})),r.a.createElement("div",{className:"right"},r.a.createElement(C,null),r.a.createElement(N,null),r.a.createElement(M,{noticia:l})))},D=(n(104),n(116)),F=n(117),R=n(115),T=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{bg:"light",expand:"lg"},r.a.createElement(D.a.Brand,{href:"/dashboard"},"LED Marketing"),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(F.a,{className:"mr-auto"},r.a.createElement(R.a,{title:"An\xfancio",id:"basic-nav-dropdown"},r.a.createElement(R.a.Item,{href:"/registry/ad"},"Cadastrar"),r.a.createElement(R.a.Item,{href:"#action/3.2"},"Listar"),r.a.createElement(R.a.Item,{href:"#action/3.3"},"listar tudo"),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Item,{href:"#action/3.4"},"Remover")),r.a.createElement(R.a,{title:"Not\xedcia",id:"basic-nav-dropdown"},r.a.createElement(R.a.Item,{href:"#action/3.1"},"Cadastrar"),r.a.createElement(R.a.Item,{href:"#action/3.2"},"Listar"),r.a.createElement(R.a.Item,{href:"#action/3.3"},"listar tudo"),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Item,{href:"#action/3.4"},"Remover")),r.a.createElement(R.a,{title:"Usu\xe1rios",id:"basic-nav-dropdown"},r.a.createElement(R.a.Item,{href:"#action/3.1"},"Cadastrar"),r.a.createElement(R.a.Item,{href:"#action/3.2"},"Listar"),r.a.createElement(R.a.Item,{href:"#action/3.3"},"listar tudo"),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Item,{href:"#action/3.4"},"Remover"))),r.a.createElement(R.a,{title:"Wesley",id:"basic-nav-dropdown"},r.a.createElement(R.a.Item,{href:"#action/3.1"},"Informa\xe7\xf5es"),r.a.createElement(R.a.Item,{href:"#action/3.2"},"Editar"),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Item,{href:"#action/3.4"},"Sair"))))}}]),t}(a.Component);var Y=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(h.a)(c,2),l=i[0],u=i[1],s=Object(a.useState)(""),m=Object(h.a)(s,2),d=m[0],b=m[1],g=Object(a.useState)(""),E=Object(h.a)(g,2),x=E[0],j=E[1],O=Object(a.useState)(""),y=Object(h.a)(O,2),w=y[0],k=y[1];function I(){return(I=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.post("/ad/add",{nameResp:n,urlImage:l,latitude:d,longitude:x,nincho:w});case 3:a=e.sent,o(""),u(""),b(""),j(""),k(""),a?alert("Cadastrado com sucesso"):alert("Erro generico");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;b(n),j(a)}),(function(e){console.log(e)}),{timeout:3e4})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:"container2"},r.a.createElement("aside",null,r.a.createElement("strong",null,"Cadastrar"),r.a.createElement("form",{onSubmit:function(e){return I.apply(this,arguments)}},r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"nameResp"},"Nome do Responsavel"),r.a.createElement("input",{className:"nameResp",id:"nameResp",value:n,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"urlImage"},"URL da imagem"),r.a.createElement("input",{className:"urlImage",id:"urlImage",value:l,onChange:function(e){return u(e.target.value)},required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"latitude"},"Latitude"),r.a.createElement("input",{className:"latitude",id:"latitude",value:d,onChange:function(e){return b(e.target.value)},required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"longitude"},"Longitude"),r.a.createElement("input",{className:"longitude",id:"longitude",value:x,onChange:function(e){return j(e.target.value)},required:!0})),r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:"nincho"},"Nincho do an\xfancio"),r.a.createElement("select",{class:"form-control",id:"nincho",value:w,onChange:function(e){return k(e.target.value)}},r.a.createElement("option",null),r.a.createElement("option",{value:"games"},"Jogos"),r.a.createElement("option",{value:"food"},"Comida"))),r.a.createElement("button",{type:"submit"},"Salvar")))))},P=n(48),B=n.n(P),J=n(21),U=n(22);function q(){var e=Object(J.a)(["\n  width: 400px;\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  img {\n    width: 100px;\n    margin: 10px 0 40px;\n  }\n  p {\n    color: #ff3333;\n    margin-bottom: 15px;\n    border: 1px solid #ff3333;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  input {\n    flex: 1;\n    height: 46px;\n    margin-bottom: 15px;\n    padding: 0 20px;\n    color: #777;\n    font-size: 15px;\n    width: 100%;\n    border: 1px solid #ddd;\n    &::placeholder {\n      color: #999;\n    }\n  }\n  button {\n    color: #fff;\n    font-size: 16px;\n    background: #fc6963;\n    height: 56px;\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n  }\n  hr {\n    margin: 20px 0;\n    border: none;\n    border-bottom: 1px solid #cdcdcd;\n    width: 100%;\n  }\n  a {\n    font-size: 16;\n    font-weight: bold;\n    color: #999;\n    text-decoration: none;\n  }\n"]);return q=function(){return e},e}function A(){var e=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return A=function(){return e},e}var H=U.b.div(A()),V=U.b.form(q()),W=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",email:"",password:"",error:""},n.handleSignUp=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.username,o=a.email,c=a.password,r&&o&&c){e.next=6;break}n.setState({error:"Preencha todos os dados para se cadastrar"}),e.next=16;break;case 6:return e.prev=6,e.next=9,v.post("/users",{username:r,email:o,password:c});case 9:n.props.history.push("/"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0),n.setState({error:"Ocorreu um erro ao registrar sua conta. T.T"});case 16:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(H,null,r.a.createElement(V,{onSubmit:this.handleSignUp},r.a.createElement("img",{src:B.a,alt:"Led Marketing - Logo"}),this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("input",{type:"text",placeholder:"Nome de usu\xe1rio",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{type:"text",placeholder:"Endere\xe7o de Email",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{type:"text",placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{type:"submit"},"Cadastrar"),r.a.createElement("hr",null),r.a.createElement(u.b,{to:"/login"},"Fazer Login")))}}]),t}(a.Component),Z=Object(l.g)(W);function G(){var e=Object(J.a)(["\n  width: 400px;\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  img {\n    width: 100px;\n    margin: 10px 0 40px;\n  }\n  p {\n    color: #ff3333;\n    margin-bottom: 15px;\n    border: 1px solid #ff3333;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  input {\n    flex: 1;\n    height: 46px;\n    margin-bottom: 15px;\n    padding: 0 20px;\n    color: #777;\n    font-size: 15px;\n    width: 100%;\n    border: 1px solid #ddd;\n    &::placeholder {\n      color: #999;\n    }\n  }\n  button {\n    color: #fff;\n    font-size: 16px;\n    background: #fc6963;\n    height: 56px;\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n  }\n  hr {\n    margin: 20px 0;\n    border: none;\n    border-bottom: 1px solid #cdcdcd;\n    width: 100%;\n  }\n  a {\n    font-size: 16;\n    font-weight: bold;\n    color: #999;\n    text-decoration: none;\n  }\n"]);return G=function(){return e},e}function Q(){var e=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return Q=function(){return e},e}var X=U.b.div(Q()),K=U.b.form(G()),$=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:""},n.handleSignIn=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.email,o=a.password,r&&o){e.next=6;break}n.setState({error:"Preencha e-mail e senha para continuar"}),e.next=17;break;case 6:return e.prev=6,e.next=9,v.post("/sessions",{email:r,password:o});case 9:c=e.sent,m(c.data.token),n.props.history.push("/run"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),n.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"});case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),n}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(X,null,r.a.createElement(K,{onSubmit:this.handleSignIn},r.a.createElement("img",{src:B.a,alt:"Led Marketing - Logo"}),this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("input",{type:"email",placeholder:"Endere\xe7o de Email",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{type:"password",placeholder:"Senha",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{type:"submit"},"Entrar"),r.a.createElement("hr",null),r.a.createElement(u.b,{to:"/SignUp"},"Criar Conta")))}}]),t}(a.Component),_=Object(l.g)($),ee=n(32),te=n.n(ee);function ne(){var e=Object(J.a)(["\n  .sidebarStyle {\n    display: inline-block;\n    position: absolute;\n    top: 1;\n    left: 0;\n    margin: 12px;\n    background-color: #404040;\n    color: #ffffff;\n    z-index: 1 !important;\n    padding: 6px;\n    font-weight: bold;\n  }\n\n  .mapContainer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n"]);return ne=function(){return e},e}var ae=U.b.div(ne()),re=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(k.a)(t).call(this,e))).mapRef=r.a.createRef(),n.state={lat:-7.6573384,lng:-35.3138423,zoom:12},n}return Object(I.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.lng,a=t.lat,r=t.zoom,o=new te.a.Map({container:this.mapRef.current,style:"mapbox://styles/mapbox/streets-v11",center:[n,a],zoom:r});new te.a.Popup({closeButton:!1,offset:10,className:"currentPopup",anchor:"left"}).setLngLat([-35.3229506,-7.6553289]).setText("You are here").addTo(o),(new te.a.Marker).setLngLat([-35.3138423,-7.6573384]).addTo(o),(new te.a.Marker).setLngLat([-35.3138423,-7.7573384]).addTo(o),o.on("move",(function(){var t=o.getCenter(),n=t.lng,a=t.lat;e.setState({lng:n.toFixed(4),lat:a.toFixed(4),zoom:o.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this.state,t=e.lng,n=e.lat,a=e.zoom;return r.a.createElement(ae,null,r.a.createElement("div",{className:"sidebarStyle"},"Longitude: ".concat(t," Latitude: ").concat(n," Zoom: ").concat(a)),r.a.createElement("div",{ref:this.mapRef,className:"mapContainer"}))}}]),t}(a.Component),oe=Object(l.g)(re),ce=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(oe,null))}}]),t}(a.Component),ie=Object(l.g)(ce),le=function(e){var t=e.component,n=Object(i.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return null!=localStorage.getItem(s)?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ue=function(){return r.a.createElement(u.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:z}),r.a.createElement(l.b,{path:"/dashboard",component:ie}),r.a.createElement(l.b,{path:"/login",component:_}),r.a.createElement(l.b,{path:"/signup",component:Z}),r.a.createElement(le,{path:"/registry/ad",component:Y}),r.a.createElement(l.b,{path:"*",component:function(){return r.a.createElement("h1",null,"Page not found")}})))};n(112);function se(){var e=Object(J.a)(["\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n}\nbody, html {\n  background: #eee;\n  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  height: 100%;\n  width: 100%;\n}\n"]);return se=function(){return e},e}var me=Object(U.a)(se()),de=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(me,null))};te.a.accessToken="pk.eyJ1Ijoid2VzbGV5dmljZW4iLCJhIjoiY2s3cWdpaXBnMDNiNDNnazVra3QwMTh3dCJ9.wBSkVJXM6WNGF3z6A2yBQg",c.a.render(r.a.createElement(de,null),document.getElementById("root"))},36:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/logo.3d49f4ca.png"},79:function(e,t,n){e.exports=n(113)}},[[79,1,2]]]);
//# sourceMappingURL=main.5013fddc.chunk.js.map