(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(2),n=a.n(c),r=a(21),i=a.n(r),l=function(){var e=JSON.parse(localStorage.getItem("articlesKey"));return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container mt-5",style:{boxShadow:"10px 15px 10px 10px rgba(0, 0, 0, 0.2)"},children:Object(s.jsxs)("div",{className:"bg-light p-5",children:[Object(s.jsxs)("div",{className:"container text-center",children:[Object(s.jsx)("h1",{className:"display-4 text-info",children:"Mes ARTICLES "}),Object(s.jsx)("p",{className:"lead",children:"Un peu de lecture pour la culture !"})]}),Object(s.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 mt-5",children:e.map((function(e,t){return Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{class:"card",children:[Object(s.jsx)("img",{src:"images/".concat(e.image),class:"card-img-top",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",{className:"card-title text-center text-warning",children:[" ",e.titre]}),Object(s.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(s.jsxs)("li",{className:"list-group-item",children:[" ",e.contenu]}),Object(s.jsxs)("li",{className:"list-group-item",children:["Date : ",e.parution]}),Object(s.jsxs)("li",{className:"list-group-item text-info",children:[" ",e.auteur]})]})]})]})})}))})]})})})},o=a(5),d=a(13),j=a(3),m=a(7),u=a(8),b=a(10),h=a(9),x=a(26),p=a.p+"static/media/bkc.768a907c.jpg",O=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"min-vh-100 min-wh-100",style:{backgroundImage:"url(".concat(p,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(s.jsxs)("div",{className:"ms-5",children:[Object(s.jsxs)("p",{className:"md position-absolute end-0 fs-2 ",children:[Object(s.jsx)(o.e,{}),Object(s.jsx)(o.k,{}),Object(s.jsx)(o.b,{}),Object(s.jsx)(o.d,{})]}),Object(s.jsx)("h1",{className:"titre text-dark",children:"Bonjour, je m'appelle "}),Object(s.jsxs)("p",{className:"nom ",children:[Object(s.jsx)("span",{className:"text-info",children:"Sofiane"})," Mameri"]}),Object(s.jsxs)("p",{className:"taille",children:["Je suis d\xe9veloppeur full-stack ","  ",Object(s.jsx)(x.a,{className:"text-danger",loop:1/0,wrapper:"b",steps:["en HTML & CSS",1e3,"en JS avec React",1e3,"et en Mysql & PHP",1e3,"Bonne visite Mr !",1e3]})]})]})})})}}]),a}(c.Component),g=a(15),v=a(23),f=a(18),N=(a(30),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).initArticle={id:1,titre:"",image:"",contenu:"",parution:"",auteur:""},e.state=e.initArticle,e.handleChange=function(t){var a=t.target,s=a.name,c=a.value;e.setState(Object(v.a)({},s,c))},e.handleSubmit=function(t){t.preventDefault();var a="";e.state.image&&(a=e.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0]);var s={titre:e.state.titre,image:a,contenu:e.state.contenu,parution:e.state.parution,auteur:e.state.auteur};e.props.ajouter(s),e.setState(e.initState),Object(f.b)("Article ajout\xe9e avec succ\xe8s !",{className:"bg-success text-white fw-bolder"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.titre,a=e.image,c=e.contenu,n=e.parution,r=e.auteur;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-6 offset-3",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header text-center bg-secondary text-white",children:" Formulaire d'ajout"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("form",{className:"container-fluid ",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"titre",className:"form-label",children:Object(s.jsx)("strong",{children:"Titre"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"titre",name:"titre",value:t,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"image",className:"form-label",children:Object(s.jsx)("strong",{children:"Image"})}),Object(s.jsx)("input",{type:"file",className:"form-control",id:"image",name:"image",value:a,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"contenu",className:"form-label",children:Object(s.jsx)("strong",{children:"Contenu"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"contenu",name:"contenu",value:c,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"parution",className:"form-label",children:Object(s.jsx)("strong",{children:"Parution"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"parution",name:"parution",value:n,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"auteur",className:"form-label",children:Object(s.jsx)("strong",{children:"Auteur"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"auteur",name:"auteur",value:r,onChange:this.handleChange})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("button",{className:"btn btn-warning col-12",type:"submit",children:"Ajouter mon nouvel Article !"})})]})}),Object(s.jsx)(d.b,{to:"/login/reload",children:Object(s.jsx)(o.i,{size:"48",color:"orange"})})]})})}),Object(s.jsx)(f.a,{})]})}}]),a}(c.Component)),y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.setState(s.props.artShared),console.log(s.props.artShared)},s.componentDidUpdate=function(){s.props.artShared.id!==s.props.id&&s.setState(s.state.artShared),console.log(s.props.artShared)},s.handleChange=function(e){var t=e.target,a=t.name,c=t.value;s.setState(Object(v.a)({},a,c)),console.log(c)},s.handleSubmit=function(e){e.preventDefault();s.state.image&&s.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];var t={titre:s.state.titre,image:s.state.image,contenu:s.state.contenu,parution:s.state.parution,auteur:s.state.auteur};s.props.update(t),s.setState(s.initArticle),Object(f.b)("Article Modifi\xe9 avec succ\xe8s !",{className:"bg-warning text-white fw-bolder"})},s.initArticle={id:-1,titre:"",image:"",contenu:"",parution:"",auteur:""},s.state=s.initArticle,s}return Object(u.a)(a,[{key:"render",value:function(){console.log(this.props.artShared);var e=this.state,t=e.titre,a=(e.image,e.contenu),c=e.parution,n=e.auteur;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-6 offset-3",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-header text-center bg-secondary text-white",children:" Modification de l'article"}),Object(s.jsx)("div",{className:"card-body",children:Object(s.jsxs)("form",{className:"container-fluid ",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"titre",className:"form-label",children:Object(s.jsx)("strong",{children:"Titre"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"titre",name:"titre",defaultValue:t,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"image",className:"form-label",children:Object(s.jsx)("strong",{children:"Image"})}),Object(s.jsx)("input",{type:"file",className:"form-control",id:"image",name:"image",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"contenu",className:"form-label",children:Object(s.jsx)("strong",{children:"Contenu"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"contenu",name:"contenu",value:a,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"parution",className:"form-label",children:Object(s.jsx)("strong",{children:"Parution"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"parution",name:"parution",value:c,onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"form-group col-md-10",children:[Object(s.jsx)("label",{htmlFor:"auteur",className:"form-label",children:Object(s.jsx)("strong",{children:"Auteur"})}),Object(s.jsx)("input",{type:"text",className:"form-control",id:"auteur",name:"auteur",value:n,onChange:this.handleChange})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("button",{className:"btn btn-info col-12",type:"submit",children:"Modifier"})})]})}),Object(s.jsx)(d.b,{to:"/login/reload",children:Object(s.jsx)(o.i,{size:"48",color:"orange"})})]})})}),Object(s.jsx)(f.a,{})]})}}]),a}(c.Component),C=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("table",{className:"table table-striped container border",children:[Object(s.jsx)("thead",{className:"thead-dark bg-dark text-white text-center",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"ID"}),Object(s.jsx)("th",{children:"Titre"}),Object(s.jsx)("th",{children:"Image"}),Object(s.jsx)("th",{children:"Contenu"}),Object(s.jsx)("th",{children:"Parution"}),Object(s.jsx)("th",{children:"Lien"}),Object(s.jsx)("th",{children:"Actions"}),Object(s.jsx)("th",{})]})}),Object(s.jsx)("tbody",{children:e.articles.map((function(t,a){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.id}),Object(s.jsx)("td",{children:t.titre}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:"images/".concat(t.image),alt:"",width:"120"})}),Object(s.jsx)("td",{children:t.contenu.substring(0,50)}),Object(s.jsx)("td",{children:t.parution}),Object(s.jsx)("td",{children:t.auteur}),Object(s.jsx)("td",{children:Object(s.jsxs)("button",{onClick:function(){e.handleEdit(a)},className:"btn btn-info",children:[Object(s.jsx)(o.a,{})," Modifier"]})}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("\xcates vous s\xfbr de vouloir supprimer cet article ?")&&e.deleteArticle(a)},children:Object(s.jsxs)("i",{className:"",children:[Object(s.jsx)(o.j,{})," Supprimer"]})})})]},a)}))})]})})},S=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("articlesKey"));if(e&&0!==e.length){var t=JSON.parse(localStorage.getItem("articlesKey"));s.setState({datas:t})}else{localStorage.setItem("articlesKey",JSON.stringify(s.state.datas));var a=JSON.parse(localStorage.getItem("articlesKey"));s.setState({datas:a})}},s.removeArticle=function(e){var t=Object(g.a)(s.state.datas).filter((function(t,a){return a!==e}));s.setState({datas:t},(function(){localStorage.setItem("articlesKey",JSON.stringify(s.state.datas)),console.log(s.state)}))},s.addArticle=function(e){e.id=s.state.datas[s.state.datas.length-1].id+1;var t=[].concat(Object(g.a)(s.state.datas),[e]);s.setState({datas:t},(function(){localStorage.setItem("articlesKey",JSON.stringify(s.state.datas))}))},s.handleShow=function(e){s.setState({editForm:!0})},s.handleItem=function(e){var t=s.state.datas[e];s.setState({editArt:t,indexMod:e}),console.log(e)},s.handleUpdate=function(e){var t=Object(g.a)(s.state.datas);t[s.state.indexMod]=e,s.setState({datas:t},(function(){localStorage.setItem("articlesKey",JSON.stringify(s.state.datas))}))},s.state={datas:[{id:1,titre:"8 habitudes de d\xe9veloppeur(euse)s qui font progresser.",image:"bkg.jpg",contenu:"Avec le temps, j\u2019ai fini par comprendre que ce qui comptait le plus dans ce m\xe9tier, c\u2019\xe9tait les habitudes. Toutes ces petites d\xe9cisions, ces fa\xe7ons de faire et de voir les choses. \xc7a a l\u2019air de rien au jour le jour, mais mis bout \xe0 bout, c\u2019est une putain de locomotive pour ta progression. OK vas-y on en parle! Aller vers l\u2019inconnu.Soyons honn\xeates, j\u2019ai pas toujours fait \xe7a. J\u2019\xe9tais plut\xf4t dans la team : prendre la t\xe2che pile taill\xe9e pour moi. La bonne techno qui va bien, la partie de l\u2019app que je connais par c\u0153ur. Peinard ! Je savais exactement comment faire avant m\xeame de regarder. Et choisir la facilit\xe9, quand \xe7a devient une habitude, \xe7a devient dangereux.",parution:"le 17/09/2020",auteur:"www.jesuisundev.com"},{id:2,titre:"Les meilleurs logiciels pour gagner du temps avec vos PDF.",image:"code5.jpg",contenu:"Sur le web, le PDF est l\u2019un des formats les plus populaires. Et ce n\u2019est pas pour rien ! Il a notamment l\u2019avantage d\u2019\xeatre l\xe9ger, et donc pratique \xe0 envoyer par email ou via un outil de messagerie. De plus, il est universel et facilement lisible sur tous les appareils et syst\xe8mes d\u2019exploitation.  Mais saviez-vous qu\u2019il est possible de gagner encore plus de temps avec vos PDF ? En effet, il existe des outils pratiques qui vous permettront de cr\xe9er, signer ou encore convertir vos documents en un clin d\u2019\u0153il.Voici une s\xe9lection de sites tr\xe8s pratiques pour vous faciliter la vie au quotidien ! G\xe9n\xe9rer un PDF.Il existe de nombreux moyens pour g\xe9n\xe9rer un PDF. \xc0 partir d\u2019un logiciel de traitement de texte (Word, Pages, etc.), depuis un navigateur web (Chrome, Firefox, etc.) Mais dans certains cas, il peut \xeatre utile de recourir \xe0 un outil sp\xe9cifique pour cr\xe9er vos documents.",parution:"le 02/11/2020",auteur:"www.blogduwebdesign.com"},{id:3,titre:"L\u2019avenir de la technologie web : Le SEO et UX.",image:"code6.jpg",contenu:"Les tendances SEO changent avec l\u2019innovation et la technologie. Ils sont en partie li\xe9s aux nouvelles technologies et au comportement humain envers les machines. Les progr\xe8s technologiques les plus importants qui influent sur les pratiques num\xe9riques et de marketing sont l\u2019apprentissage automatique et l\u2019intelligence artificielle. Ces technologies sont utilis\xe9es dans des produits tels que les assistants vocaux humains (Google Assistant, Cortana) ou les chatbots. Ces produits sont cr\xe9\xe9s pour permettre une meilleure experience, tant au niveau de la voix, du toucher que de la localisation. Comment ces changements se refl\xe8tent-ils directement sur le moteur de recherche google et les pratiques de r\xe9f\xe9rencement Afin d\u2019optimiser la praticit\xe9 et d\u2019aider les utilisateurs \xe0 trouver l\u2019information requise en quelques secondes, google se tourne vers les snippets, la recherche mobile et la recherche vocale. Afin de rendre votre site Web facile \xe0 trouver sur les moteurs de recherche et afin que les utilisateurs puissent trouver ce qu\u2019ils recherchent nous vous conseillons de faire ce qui suit :Familiarisez-vous avec RankBrain.Rank Brain est un programme d\u2019intelligence artificielle (IA) utilis\xe9 pour aider Google \xe0 traiter les demandes des utilisateurs des moteurs de recherche. Il utilise l\u2019intelligence artificielle pour traduire le langage \xe9crit en vecteurs afin que l\u2019ordinateur puisse comprendre. Ce qui est int\xe9ressant, c\u2019est qu\u2019il fait des connexions pour g\xe9rer de nouveaux types de recherches, comme les connexions concernant votre emplacement ou votre contenu. RankBrain est tr\xe8s utile car il s\u2019agit d\u2019un des signaux les plus importants pour d\xe9terminer les r\xe9sultats qui appara\xeetront sur le site web .Comment cela affecte-t-il le r\xe9f\xe9rencement ?",parution:"le 24/02/2020",auteur:"www.blog-web-marketing.fr"}],editForm:!1,indexMod:-1,editArt:{id:-1,titre:"",image:"",contenu:"",parution:"",auteur:""}},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"bg-secondary text-white text-center",children:"Administration"}),!this.state.editForm&&-1===this.state.indexMod&&Object(s.jsx)("button",{onClick:this.handleShow,className:"btn btn-warning offset-11 mb-1 ",children:"Ajouter"}),!this.state.editForm&&this.state.indexMod>-1?Object(s.jsx)(y,{artShared:this.state.editArt,update:this.handleUpdate}):this.state.editForm?Object(s.jsx)(N,{ajouter:this.addArticle}):Object(s.jsx)(C,{articles:this.state.datas,deleteArticle:this.removeArticle,handleEdit:this.handleItem})]})}}]),a}(c.Component),w=a(29),k=a(33),A=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container mt-5 mb-5 bg-light",style:{boxShadow:"10px 15px 10px 10px rgba(0, 0, 0, 0.2)"},children:Object(s.jsxs)("div",{className:"row ",children:[Object(s.jsx)("section",{className:"col-sm",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("h1",{className:"text-info text-center",children:"Formulaire d'inscription"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"name",className:"col-form-label",children:"Nom :"}),Object(s.jsx)("input",{type:"text",id:"name",name:"user_name",className:"form-control"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"last_name",className:"form-check-label",children:"Pr\xe9nom :"}),Object(s.jsx)("input",{type:"text",id:"last_name",name:"user_last_name",className:"form-control"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"telephone",className:"form-check-label",children:"T\xe9l\xe9phone :"}),Object(s.jsx)("input",{type:"tel",id:"telephone",name:"user_telephone",className:"form-control"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"mail",className:"form-check-label",children:"e-mail\u202f:"}),Object(s.jsx)("input",{type:"email",id:"mail",name:"user_mail",className:"form-control"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"msg",className:"form-check-label",children:"Message :"}),Object(s.jsx)("textarea",{id:"msg",name:"user_message",className:"form-control"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"button mb-3",children:Object(s.jsx)("button",{type:"submit",className:"bg-warning",children:"Envoyer le message"})})]})}),Object(s.jsxs)("section",{className:"col-sm text-center p-6",children:[Object(s.jsx)("h1",{className:"text-center text-info mb-5",children:"Contactez-moi"}),Object(s.jsxs)("div",{id:"mail",className:"text-center mt-2",children:[Object(s.jsx)(w.a,{}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:"mailto:sofiane.mameri7@gmail.com",style:{textDecoration:"none"},children:Object(s.jsx)("span",{children:"sofiane.mameri7@gmail.com"})})})]}),Object(s.jsxs)("div",{className:"text-center ",children:[Object(s.jsx)(w.b,{}),Object(s.jsxs)("p",{children:["Tel:",Object(s.jsx)("span",{className:"text-success",children:" +33 06 95 62 69 77"})]})]}),Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)(k.a,{color:"red"}),Object(s.jsx)("p",{className:"",children:"Mr Mameri"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{children:"24 rue des pins 77090 Coll\xe9gien"})," "]})]})]})]})}),Object(s.jsx)("section",{children:Object(s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3530354100626!2d2.6722002156734663!3d48.83240437928489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60523db641b5d%3A0xdeaeaf41ac1604c4!2s24%20Rue%20des%20Pins%2C%2077090%20Coll%C3%A9gien!5e0!3m2!1sfr!2sfr!4v1606401589003!5m2!1sfr!2sfr",width:"100%",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})})]})}}]),a}(c.Component),q=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container md",style:{boxShadow:"10px 10px 10px 10px rgba(0, 0, 0, 0.2)"},children:[Object(s.jsx)("p",{className:"bg-#1C044D"}),Object(s.jsx)("div",{className:"card mb-4",id:"bobo",children:Object(s.jsxs)("div",{className:"row g-0",children:[Object(s.jsx)("div",{className:"col-md-4 ",children:Object(s.jsx)("img",{src:"images/soso.jpg",alt:"...",width:"300",className:"border border-dark 6px"})}),Object(s.jsx)("div",{className:"col-md-8",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title text-center display-6 text-info",children:"\xc0 propos de moi "}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"card-text text-dark ml-4 mt-2 text-center display-7",children:Object(s.jsx)("strong",{children:"Grand passionn\xe9 de sport je pratique r\xe9guli\xe8rement du Cross-training, du run et de la boxe anglaise. Aimant les challenges et les d\xe9fis, j'ai particip\xe9 ces derni\xe8res ann\xe9es \xe0 plusieurs \xe9v\xe9nements sportifs qui m'ont permis de d\xe9pass\xe9s mes limites et d'acqu\xe9rir une force mentale et une rigueur dans ce que j'entreprends, fan aussi de lecture et de codage j'ai une envie insatiable d'apprendre de nouvelles choses. La formation d\xe9veloppeur web mobile full-stack m'a permise d'obtenir des connaissances concernant le front et le back avec \xe9galement des frameworks et des librairies pour certains languages tels que : HTML/CSS (ainsi que bootstrap), Javascript (jQuery & React)pour le front. C\xf4t\xe9 back mysql et php avec pour framework symfony4."})})]})})]})})]})})}}]),a}(c.Component),F=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("h1",{className:"",children:"Erreur 404 "}),Object(s.jsx)("p",{children:"Vous vous \xeates tromp\xe9s d'endroit"})]})})}}]),a}(c.Component),M=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(d.a,{basename:"/projet3",children:[Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-white",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)(d.c,{className:"navbar-brand ",activeClassName:"active",to:"/accueil",children:Object(s.jsx)("img",{src:"/images/so3.png",width:"120px",alt:"",exact:!0})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(d.c,{className:"nav-link",activeClassName:"active","aria-current":"page",to:"/accueil",exact:!0,children:[Object(s.jsx)(o.c,{}),"  Accueil "]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(d.c,{className:"nav-link",activeClassName:"active",to:"/apropos",children:[Object(s.jsx)(o.g,{})," A propos de moi"]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(d.c,{className:"nav-link",activeClassName:"active",to:"/articles",children:[Object(s.jsx)(o.f,{})," Articles"]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(d.c,{className:"nav-link",activeClassName:"active",to:"/contact",children:[Object(s.jsx)(o.h,{})," Contact"]})})]}),Object(s.jsx)("span",{className:"navbar-text ",children:Object(s.jsxs)(d.c,{className:"nav-link bg-info ",activeClassName:"active",to:"/login",children:[Object(s.jsx)(o.l,{})," Connexion"]})})]})]})}),Object(s.jsxs)(j.d,{children:[Object(s.jsx)(j.a,{from:"/login/reload",to:"/login"}),Object(s.jsx)(j.b,{path:"/apropos",component:q,exact:!0}),Object(s.jsx)(j.b,{path:"/contact",component:A}),Object(s.jsx)(j.b,{path:"/accueil",component:O,exact:!0}),Object(s.jsx)(j.b,{path:"/articles",component:l}),Object(s.jsx)(j.b,{path:"/login",component:S}),Object(s.jsx)(j.b,{path:"*",component:F})]})]})})},I=(a(45),a(46),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:" position-sticky bg-dark text-white text-center",children:[Object(s.jsx)("img",{src:"/images/so3.png",width:"300px",alt:""}),Object(s.jsx)("p",{className:"p-3 ",children:"Tous droits r\xe9serv\xe9s Copyright \xa9 2021"})]})})})});a(51);var D=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(M,{}),Object(s.jsx)(I,{})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.022ae452.chunk.js.map