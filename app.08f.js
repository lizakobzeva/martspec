(self.webpackChunkrr_client=self.webpackChunkrr_client||[]).push([[143],{5266:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/electrolyte.svg"},9934:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/error_404.svg"},1493:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/logo.png"},1172:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/logo_256.png"},352:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/mass.svg"},9145:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/privacy.svg"},9019:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/vitamin.svg"},1083:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=l.p+"img/waist.svg"},6351:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=new class{constructor(){this.callbacksByEvents=new Map}send(e,t={},l=(e=>{})){if(this.callbacksByEvents.has(e))for(let a of this.callbacksByEvents.get(e))l(a(t))}addEvent(e,t){this.callbacksByEvents.has(e)?this.callbacksByEvents.get(e).push(t):this.callbacksByEvents.set(e,[t])}removeEvent(e){this.callbacksByEvents.delete(e)}removeCallback(e){for(let t of this.callbacksByEvents.values()){let l=t.findIndex((t=>t==e));-1!=l&&t.splice(l,1)}}}},587:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});var a=l(4078),n=l(6351);const c=new class{constructor(){this._polyglot=new a({allowMissing:!0}),this._translations={};const e=localStorage.getItem("locale")||"en";this.language=e}get language(){return this._polyglot.locale()}set language(e){e in this._translations?this.setTranslation(e,this._translations[e]):this.fetchTranslation(e)}setTranslation(e,t){this._translations[e]=t,this._polyglot.extend(t),this._polyglot.locale(e),localStorage.setItem("locale",e),n.Z.send("LANG")}fetchTranslation(e){console.log("Fetching Locale for "+e),fetch(`/i18n/${e}.json`).then((e=>e.json())).then((t=>this.setTranslation(e,t))).catch((e=>{console.error(e)}))}},r=c._polyglot.t.bind(c._polyglot)},9721:(e,t,l)=>{"use strict";l(3734);var a=l(7294),n=l(8901),c=l(3935),r=l(587),m=l(8764);class s{constructor(e="",t="",l=""){this.email="",this.name="",this.body="",this.email=t,this.body=e,this.name=l}}function o(e){const[t,l]=a.useState(new s);return a.createElement("section",{id:"ms-message-us","data-section":"contact",className:"rr-contact-us"},a.createElement("h1",null,"Get in Touch"),a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col-md-9"},a.createElement("p",null,"Please send us a message and we’ll be in touch soon."),a.createElement("form",{action:"#",onSubmit:function(l){l.preventDefault(),t.body.length<10?n.error("Please include more details in your message, so that we can address it in a better way.","Message is too short"):(console.log(t),e.setIsLoading(!0))}},a.createElement("input",{type:"text",className:"form-control",placeholder:"name (optional)",id:"name",value:t.name,onChange:e=>l({...t,name:e.target.value})}),a.createElement("input",{type:"text",className:"form-control",placeholder:"email (optional)",id:"email",value:t.email,onChange:e=>l({...t,email:e.target.value})}),a.createElement("textarea",{name:"message",id:"message",className:"form-control",cols:30,rows:7,placeholder:"write question or suggestion here",value:t.body,onChange:e=>l({...t,body:e.target.value})}),a.createElement("div",{className:"form-group "},a.createElement("input",{type:"submit",value:"SEND",className:"btn pw-btn-product "})))))))}class i extends a.Component{constructor(e){super(e)}render(){return this.props.show?a.createElement("div",{className:"cs-loader"},a.createElement("div",{className:"cs-loader-inner",style:{top:this.props.marginTop}},a.createElement("label",null,"\t●"),a.createElement("label",null,"\t●"),a.createElement("label",null,"\t●"),a.createElement("label",null,"\t●"),a.createElement("label",null,"\t●"),a.createElement("label",null,"\t●"))):a.createElement("div",null)}}function E(e){return a.createElement("nav",{className:"rr-navbar"},a.createElement("div",{className:"lButton",onClick:function(){e.leftButtonCommand?e.leftButtonCommand():e.letfButtonRedirectPage?history.pushState(null,null,e.letfButtonRedirectPage):history.back()}},a.createElement("i",{className:e.leftButtonIcon||"fo icon-left-open-big"}),a.createElement("span",{className:"lText"},e.leftButtonText||"Back")),a.createElement("h2",{className:"title"},e.title),a.createElement("div",{className:"btn btn-link rButton",onClick:function(){e.rightButtonCommand&&e.rightButtonCommand(),e.rightButtonRedirectPage&&history.pushState(null,null,e.rightButtonRedirectPage)}},a.createElement("span",{className:"rText"},e.rightButtonText),a.createElement("i",{className:e.rightButtonIcon||" "})))}function p(e){const t=a.useRef(null);return a.useEffect((()=>{if(!e.imgHi)return;const l=new Image;l.src=e.imgHi,l.onload=()=>{null!=e.imgHi&&(t.current.src=l.src,t.current.classList.add("fade-in"))}}),[]),a.createElement("span",null,a.createElement("img",{src:e.imgLo,ref:t,style:{width:"100%"},alt:e.text}))}const u=l(1172).Z;function d(){const[e,t]=a.useState(!1);return a.createElement("div",null,a.createElement(E,{leftButtonText:" ",leftButtonIcon:" ",rightButtonIcon:"fo icon-language",title:""}),a.createElement(i,{show:e,marginTop:"50%"}),a.createElement("section",{id:"header",className:"ms-s-header"},a.createElement("div",{className:"text-vertical-center"},a.createElement("img",{src:u,alt:(0,r.Z)("MAIN.HEAD")}),a.createElement("h1",null,(0,r.Z)("MAIN.HEAD")),a.createElement("h4",null,(0,r.Z)("MAIN.SUBHEAD")))),a.createElement("section",{className:"rr-s-product pw-color-bg-secondary"},a.createElement("div",{className:"ms-product-row"},a.createElement("div",{className:"col-md-6 align-self-center order-last order-md-1"},a.createElement("p",{className:"mt-2"},(0,r.Z)("MAIN.P1.SUBHEAD")),a.createElement("h1",null,(0,r.Z)("MAIN.P1.HEAD")),a.createElement("h2",null,(0,r.Z)("MAIN.P1.TEXT")),a.createElement("a",{href:"/product/electrolyte",className:"mt-3 rr-btn-large"},(0,r.Z)("MAIN.P1.BTN"))),a.createElement("div",{className:"col-md-4 order-sm-1"},a.createElement("a",{href:"/product/electrolyte"},a.createElement(p,{imgLo:"img/p_electrolyte_sm.png",imgHi:"img/p_electrolyte.png",text:(0,r.Z)("MAIN.P1.IMG")}))))),a.createElement("section",{className:"rr-s-product my-5"},a.createElement("div",{className:"ms-product-row"},a.createElement("div",{className:"col-md-4"},a.createElement(p,{imgLo:"img/p_mass_sm.png",imgHi:"img/p_mass.png",text:(0,r.Z)("MAIN.P2.IMG")})),a.createElement("div",{className:"col-md-6 align-self-center"},a.createElement("p",{className:"mt-2"},(0,r.Z)("MAIN.P2.SUBHEAD")),a.createElement("h1",null,(0,r.Z)("MAIN.P2.HEAD")),a.createElement("h2",null,(0,r.Z)("MAIN.P2.TEXT")),a.createElement("a",{href:"/product/logmass",className:"mt-3 rr-btn-large pull-right"},(0,r.Z)("MAIN.P2.BTN"))))),a.createElement("section",{className:"rr-s-product pw-color-bg-secondary"},a.createElement("div",{className:"ms-product-row"},a.createElement("div",{className:"col-md-6 align-self-center order-last order-md-1"},a.createElement("p",{className:"mt-2"},(0,r.Z)("MAIN.P3.SUBHEAD")),a.createElement("h1",null,(0,r.Z)("MAIN.P3.HEAD")),a.createElement("h2",null,(0,r.Z)("MAIN.P3.TEXT")),a.createElement("a",{href:"/product/logvitamin",className:"mt-3 rr-btn-large"},(0,r.Z)("MAIN.P3.BTN"))),a.createElement("div",{className:"col-md-4 order-sm-1"},a.createElement("a",{href:"/product/logvitamin"},a.createElement(p,{imgLo:"img/p_vitamin_sm.png",imgHi:"img/p_vitamin.png",text:(0,r.Z)("MAIN.P3.IMG")}))))),a.createElement("section",{className:"rr-s-product my-5"},a.createElement("div",{className:"ms-product-row"},a.createElement("div",{className:"col-md-4"},a.createElement("a",{href:"/product/logwaist"},a.createElement(p,{imgLo:"img/p_waist_sm.png",imgHi:"img/p_waist.png",text:(0,r.Z)("MAIN.P4.IMG")}))),a.createElement("div",{className:"col-md-6 align-self-center"},a.createElement("p",{className:"mt-2"},(0,r.Z)("MAIN.P4.SUBHEAD")),a.createElement("h1",null,(0,r.Z)("MAIN.P4.HEAD")),a.createElement("h2",null,(0,r.Z)("MAIN.P4.TEXT")),a.createElement("a",{href:"/product/logwaist",className:"mt-3 rr-btn-large pull-right"},(0,r.Z)("MAIN.P4.BTN"))))),a.createElement(o,{setIsLoading:t}),a.createElement(m.$,null))}const g=l(9934).Z;function h(){return a.createElement("div",null,a.createElement("div",{className:"container rr-status-page"},a.createElement("img",{src:g}),a.createElement("h1",null,(0,r.Z)("ERROR.404_HEAD")),a.createElement("p",{className:"lead"},(0,r.Z)("ERROR.404_TEXT")),a.createElement("a",{href:"/"},a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-lg ml-2"},(0,r.Z)("ERROR.404_BTN")))))}var N=l(1372);const P=l(1083).Z;function Z(){return a.createElement("div",null,a.createElement(N.ZP,null,a.createElement("meta",{property:"og:title",content:(0,r.Z)("MAIN.P4.HEAD")}),a.createElement("meta",{property:"og:image",content:"https://martspec.com/img/p_waist.png"}),a.createElement("meta",{property:"og:description",content:(0,r.Z)("MAIN.P4.TEXT")}),a.createElement("meta",{property:"og:url",content:"https://martspec.com/product/logwaist"}),a.createElement("meta",{name:"twitter:title",content:(0,r.Z)("MAIN.P4.HEAD")}),a.createElement("meta",{name:"twitter:description",content:(0,r.Z)("MAIN.P4.TEXT")}),a.createElement("title",null,(0,r.Z)("MAIN.P4.HEAD")),a.createElement("link",{rel:"canonical",href:"https://martspec.com/product/logwaist"}),a.createElement("meta",{name:"description",content:(0,r.Z)("MAIN.P4.TEXT")})),a.createElement("div",{className:"fixed-top bg-white"},a.createElement(E,{title:(0,r.Z)("MAIN.P4.HEAD")})),a.createElement("section",{className:"rr-s-about"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm-12 col-md-9 order-last order-md-1"},a.createElement("h3",{className:"mt-4"},(0,r.Z)("PRODUCT.P4.ABOUT")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P4.HEAD3")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P4.DESC3")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P4.HEAD2")),a.createElement("h3",{className:"mt-3"},a.createElement("a",{href:"https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women",target:"_blank"},(0,r.Z)("PRODUCT.P4.LINK2")),(0,r.Z)("PRODUCT.P4.DESC2")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P4.HEAD1")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P4.DESC1"),a.createElement("a",{href:"https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm",target:"_blank"},a.createElement("br",null),a.createElement("small",null,a.createElement("i",null,"National Institutes of Health Reference")))),a.createElement("h1",null,(0,r.Z)("PRODUCT.P4.HEAD4")),a.createElement("h3",{className:"mt-3"},a.createElement("ul",null,a.createElement("li",null,(0,r.Z)("PRODUCT.P4.DESC4_1")),a.createElement("li",null,(0,r.Z)("PRODUCT.P4.DESC4_2")),a.createElement("li",null,a.createElement("i",null,a.createElement("small",null,(0,r.Z)("PRODUCT.P4.DESC4_3"),a.createElement("a",{href:"https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.107.739714",target:"_blank"},"Circulation, Vol. 117, No. 13"))))))),a.createElement("div",{className:"col-sm-12 col-md-3 order-sm-1"},a.createElement("img",{src:P,className:"mx-auto",alt:"Recruiter"})))),a.createElement("div",{className:"container mb-5 pb-5"},a.createElement("div",{className:"row align-items-center justify-content-sm-center"},a.createElement("div",{className:"col-md-7 col-12 pb-5"},a.createElement(p,{imgLo:"/img/p_waist_screens_sm.png",imgHi:"/img/p_waist_screens.png",text:(0,r.Z)("MAIN.P1.IMG")})),a.createElement("div",{className:"col-md-5 col-12 text-center pb-5"},a.createElement("a",{href:`https://apps.apple.com/${(0,r.Z)("APPSTORE")}/app/log-waist/id1506250420`,target:"_blank",title:(0,r.Z)("MAIN.P1.DWN")},a.createElement("span",{className:"ms-btn-apple my-5 float-md-right text-center"}))))),a.createElement(m.$,null))}const v=l(5266).Z;function D(){return a.createElement("div",null,a.createElement(N.ZP,null,a.createElement("meta",{property:"og:title",content:(0,r.Z)("MAIN.P1.HEAD")}),a.createElement("meta",{property:"og:image",content:"https://martspec.com/img/p_electrolyte.png"}),a.createElement("meta",{property:"og:description",content:(0,r.Z)("MAIN.P1.TEXT")}),a.createElement("meta",{property:"og:url",content:"https://martspec.com/product/electrolyte"}),a.createElement("meta",{name:"twitter:title",content:(0,r.Z)("MAIN.P1.HEAD")}),a.createElement("meta",{name:"twitter:description",content:(0,r.Z)("MAIN.P1.TEXT")}),a.createElement("title",null,(0,r.Z)("MAIN.P1.HEAD")),a.createElement("link",{rel:"canonical",href:"https://martspec.com/product/logwaist"}),a.createElement("meta",{name:"description",content:(0,r.Z)("MAIN.P1.TEXT")})),a.createElement("div",{className:"fixed-top bg-white"},a.createElement(E,{title:(0,r.Z)("MAIN.P1.HEAD")})),a.createElement("section",{className:"rr-s-about"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm-12 col-md-9 order-last order-md-1"},a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.ABOUT")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P1.HEAD1")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.DESC1"),a.createElement("a",{href:"https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional",target:"_blank"},(0,r.Z)("BTN.SRC1"))),a.createElement("h1",null,(0,r.Z)("PRODUCT.P1.HEAD2")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.DESC2"),a.createElement("a",{href:"https://ods.od.nih.gov/factsheets/Calcium-Consumer",target:"_blank"},(0,r.Z)("BTN.FACT"))),a.createElement("h1",null,(0,r.Z)("PRODUCT.P1.HEAD3")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.DESC3"),a.createElement("a",{href:"https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional",target:"_blank"},(0,r.Z)("BTN.SRC2"))),a.createElement("h1",null,(0,r.Z)("PRODUCT.P1.HEAD4")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.DESC4"),a.createElement("a",{href:"https://ods.od.nih.gov/factsheets/Iron-HealthProfessional",target:"_blank"},(0,r.Z)("BTN.FACT"))),a.createElement("h1",{style:{color:"#BF4803"}},(0,r.Z)("PRODUCT.P1.HEAD5")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P1.DESC5"),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Electrolyte_imbalance",target:"_blank"},(0,r.Z)("BTN.WIKI")))),a.createElement("div",{className:"col-sm-12 col-md-3 order-sm-1"},a.createElement("img",{src:v,className:"mx-auto",alt:"Recruiter"})))),a.createElement("div",{className:"container mb-5 pb-5"},a.createElement("div",{className:"row align-items-center justify-content-sm-center"},a.createElement("div",{className:"col-md-7 col-12 pb-5"},a.createElement(p,{imgLo:"/img/p_electrolyte_screens_sm.png",imgHi:"/img/p_electrolyte_screens.png",text:(0,r.Z)("MAIN.P1.IMG")})),a.createElement("div",{className:"col-md-5 col-12 text-center pb-5"},a.createElement("a",{href:`https://apps.apple.com/${(0,r.Z)("APPSTORE")}/app/electrolyte/id1507719251`,target:"_blank",title:(0,r.Z)("MAIN.P1.DWN")},a.createElement("span",{className:"ms-btn-apple my-5 float-md-right text-center"}))))),a.createElement(m.$,null))}const A=l(352).Z;function f(){return a.createElement("div",null,a.createElement(N.ZP,null,a.createElement("meta",{property:"og:title",content:(0,r.Z)("MAIN.P2.HEAD")}),a.createElement("meta",{property:"og:image",content:"https://martspec.com/img/p_mass.png"}),a.createElement("meta",{property:"og:description",content:(0,r.Z)("MAIN.P2.TEXT")}),a.createElement("meta",{property:"og:url",content:"https://martspec.com/product/logmass"}),a.createElement("meta",{name:"twitter:title",content:(0,r.Z)("MAIN.P2.HEAD")}),a.createElement("meta",{name:"twitter:description",content:(0,r.Z)("MAIN.P2.TEXT")}),a.createElement("title",null,(0,r.Z)("MAIN.P2.HEAD")),a.createElement("link",{rel:"canonical",href:"https://martspec.com/product/logmass"}),a.createElement("meta",{name:"description",content:(0,r.Z)("MAIN.P2.TEXT")})),a.createElement("div",{className:"fixed-top bg-white"},a.createElement(E,{title:(0,r.Z)("MAIN.P2.HEAD")})),a.createElement("section",{className:"rr-s-about"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm-12 col-md-9 order-last order-md-1"},a.createElement("h1",null,(0,r.Z)("PRODUCT.P2.HEAD1")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P2.DESC1")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P2.HEAD2")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P2.DESC2")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P2.HEAD3")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P2.DESC3")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P2.HEAD4")),a.createElement("h3",{className:"mt-3"},a.createElement("ul",null,a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_1")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_2")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_3")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_4"))))),a.createElement("div",{className:"col-sm-12 col-md-3 order-sm-1"},a.createElement("img",{src:A,className:"mx-auto",alt:"Recruiter"})))),a.createElement("div",{className:"container mb-5 pb-5"},a.createElement("div",{className:"row align-items-center justify-content-sm-center"},a.createElement("div",{className:"col-md-7 col-12 pb-5"},a.createElement(p,{imgLo:"/img/p_mass_screens_sm.png",imgHi:"/img/p_mass_screens.png",text:(0,r.Z)("MAIN.P2.IMG")})),a.createElement("div",{className:"col-md-5 col-12 text-center pb-5"},a.createElement("a",{href:`https://apps.apple.com/${(0,r.Z)("APPSTORE")}/app/log-mass/id1507588203`,target:"_blank",title:(0,r.Z)("MAIN.P2.DWN")},a.createElement("span",{className:"ms-btn-apple my-5 float-md-right text-center"}))))),a.createElement(m.$,null))}const T=l(9019).Z;function C(){return a.createElement("div",null,a.createElement(N.ZP,null,a.createElement("meta",{property:"og:title",content:(0,r.Z)("MAIN.P3.HEAD")}),a.createElement("meta",{property:"og:image",content:"https://martspec.com/img/p_vitamin.png"}),a.createElement("meta",{property:"og:description",content:(0,r.Z)("MAIN.P3.TEXT")}),a.createElement("meta",{property:"og:url",content:"https://martspec.com/product/logvitamin"}),a.createElement("meta",{name:"twitter:title",content:(0,r.Z)("MAIN.P3.HEAD")}),a.createElement("meta",{name:"twitter:description",content:(0,r.Z)("MAIN.P3.TEXT")}),a.createElement("title",null,(0,r.Z)("MAIN.P3.HEAD")),a.createElement("link",{rel:"canonical",href:"https://martspec.com/product/logvitamin"}),a.createElement("meta",{name:"description",content:(0,r.Z)("MAIN.P3.TEXT")})),a.createElement("div",{className:"fixed-top bg-white"},a.createElement(E,{title:(0,r.Z)("MAIN.P3.HEAD")})),a.createElement("section",{className:"rr-s-about"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm-12 col-md-9 order-last order-md-1"},a.createElement("h1",null,(0,r.Z)("PRODUCT.P3.HEAD1")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P3.DESC1")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P3.HEAD2")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P3.DESC2")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P3.HEAD3")),a.createElement("h3",{className:"mt-3"},(0,r.Z)("PRODUCT.P3.DESC3")),a.createElement("h1",null,(0,r.Z)("PRODUCT.P2.HEAD4")),a.createElement("h3",{className:"mt-3"},a.createElement("ul",null,a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_1")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_2")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_3")),a.createElement("li",null,(0,r.Z)("PRODUCT.P2.DESC4_4"))))),a.createElement("div",{className:"col-sm-12 col-md-3 order-sm-1"},a.createElement("img",{src:T,className:"mx-auto",alt:"Recruiter"})))),a.createElement("div",{className:"container mb-5 pb-5"},a.createElement("div",{className:"row align-items-center justify-content-sm-center"},a.createElement("div",{className:"col-md-7 col-12 pb-5"},a.createElement(p,{imgLo:"/img/p_vitamin_screens_sm.png",imgHi:"/img/p_vitamin_screens.png",text:(0,r.Z)("MAIN.P3.IMG")})),a.createElement("div",{className:"col-md-5 col-12 text-center pb-5"},a.createElement("a",{href:`https://apps.apple.com/${(0,r.Z)("APPSTORE")}/app/log-vitamin/id1507629553`,target:"_blank",title:(0,r.Z)("MAIN.P3.DWN")},a.createElement("span",{className:"ms-btn-apple my-5 float-md-right text-center"}))))),a.createElement(m.$,null))}var b=l(7417);function y(){var e=sessionStorage.redirect;switch(delete sessionStorage.redirect,(e=null==e?location.pathname:e.replace(location.href,"/")).length>1&&(e=e.replace(/\/$/,"")),history.replaceState(null,null,e),e){case"/":return a.createElement(d,null);case"/product/electrolyte":return a.createElement(D,null);case"/product/logmass":return a.createElement(f,null);case"/product/logwaist":return a.createElement(Z,null);case"/product/logvitamin":return a.createElement(C,null);case"/privacy-policy":return a.createElement(b.Z,null);default:return a.createElement(h,null)}}l(6351).Z.addEvent("LANG",(e=>{c.render(a.createElement(y,null),document.getElementById("root"))})),n.options.positionClass="toast-top-center"},8764:(e,t,l)=>{"use strict";l.d(t,{$:()=>n});var a=l(7294);l(587);const n=()=>a.createElement("footer",{className:"rr-footer"},a.createElement("p",{className:"text-center"},"Copyright © 2021 Martspec LLC. All rights reserved. |",a.createElement("a",{href:"/privacy-policy"}," Privacy Policy")))},4696:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(7294);const n=l(1493).Z;function c(e){return a.createElement("nav",{className:"rr-navbar-signin"},!0===e.leftIsHomeLogo?a.createElement("div",{className:"lButton"},a.createElement("a",{className:"btn btn-link",href:"/"},a.createElement("img",{src:n,alt:"Recruiter Review Home"}))):a.createElement("div",{className:"lButton",onClick:function(){e.leftButtonCommand?e.leftButtonCommand():e.letfButtonRedirectPage?history.pushState(null,null,e.letfButtonRedirectPage):0==history.length?history.pushState(null,null,"/"):history.back()}},a.createElement("i",{className:e.leftButtonIcon||"fo icon-left-open-big"}),a.createElement("span",{className:"lText"},e.leftButtonText||"Back")),a.createElement("h2",{className:"title"},e.title),void 0)}}},0,[[9721,666,736,700,798]]]);
//# sourceMappingURL=app.08f.js.map