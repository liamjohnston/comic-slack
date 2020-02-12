(this["webpackJsonpcomic-slack"]=this["webpackJsonpcomic-slack"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/slack-menu.c9ba6021.jpg"},16:function(e,t,a){e.exports=a.p+"static/media/add-to-slack.574364be.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/comic-slack.ee7b5459.png"},18:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),l=a.n(c),s=a(6),r=a(1),i={" ":{csMapping:":cs-s-sp:"},"?":{csMapping:":cs-s-qm:"},"!":{csMapping:":cs-s-em:"},"&":{csMapping:":cs-s-amp:"},"@":{csMapping:":cs-s-at:"},",":{csMapping:":cs-s-com:"},$:{csMapping:":cs-s-dol:"},".":{csMapping:":cs-s-fs:"},"#":{csMapping:":cs-s-hash:"},"%":{csMapping:":cs-s-pc:"}},m=new RegExp("[a-zA-Z0-9]"),u=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),u=Object(s.a)(l,2),d=u[0],p=u[1],h=Object(n.useState)(!1),g=Object(s.a)(h,2),E=g[0],f=g[1];return o.a.createElement(n.Fragment,null,o.a.createElement("h2",null,"Use Comic Sans in slack! (sort of)"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},o.a.createElement("label",{htmlFor:"cs-content",className:"m_b_sm"},"Your message:"),o.a.createElement("textarea",{id:"cs-content",className:"m_b_md",onChange:function(e){var t=e.target.value.toLowerCase();f(!1),c(t),0===e.target.value.length?p(!0):p(!1)},rows:"5"}),o.a.createElement("input",{type:"submit",value:"Copy as Comic Sans",disabled:d,onClick:function(){!function(){var e="";Array.from(a).forEach((function(t){m.test(t)?e+=":cs-".concat(t,":"):Object.keys(i).includes(t)?e+=i[t].csMapping:e+=t}));var t=document.createElement("input");t.style="position: absolute; left: -1000px; top: -1000px",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(),f(!0)}}),E&&o.a.createElement("div",{className:"copied-alert"},o.a.createElement("span",{role:"img","aria-label":"yay emoji"},"\ud83c\udf89"),o.a.createElement("strong",null,"Copied!")," Now paste it into a Slack message")),o.a.createElement("p",{className:"text-sm"},o.a.createElement("strong",null,"Heads up!")," Your slack team's account will need to have had the emojis added for this to work. See the"," ",o.a.createElement(r.Link,{to:"setup",href:"#",smooth:!0,duration:300},"setup")," ","section."))},d=a(15),p=a.n(d),h=a(16),g=a.n(h),E="".concat("/comic-slack","/files/"),f=function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h2",{className:"m_t_0"},"How it works")),o.a.createElement("div",null,o.a.createElement("p",{className:"m_t_0"},"Basically, we'll add a bunch of Comic Sans characters as images to your custom emoji list in Slack. Then you can use the"," ",o.a.createElement(r.Link,{to:"compose",href:"#",smooth:!0,duration:500},"message composer")," ","to convert your boring text into glorious Comic Sans."),o.a.createElement("p",null,"Follow the setup guide below and you'll be impressing your colleagues in no time."))),o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h3",{className:"m_t_0 m_b_sm"},"Step 1."),o.a.createElement("h2",{className:"m_t_0"},"Get the 'emojis'")),o.a.createElement("div",null,o.a.createElement("p",{className:"m_t_0"},o.a.createElement("a",{href:"".concat(E,"characters.zip"),download:!0},"\u2b07 Download the images")," ","(zip, 70KB)."),o.a.createElement("p",null,"Unzip it."))),o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h3",{className:"m_t_0 m_b_sm"},"Step 2."),o.a.createElement("h2",{className:"m_t_0"},"Enable bulk emoji uploading")),o.a.createElement("div",null,o.a.createElement("p",{className:"m_t_0"},"Add the"," ",o.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/slack-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej",rel:"noopener noreferrer",target:"_blank"},"Slack Emoji Tools")," ","Chrome extension."),o.a.createElement("p",null,"This will make step 3 a breeze."))),o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h3",{className:"m_t_0 m_b_sm"},"Step 3."),o.a.createElement("h2",{className:"m_t_0"},"Add the emojis to Slack")),o.a.createElement("div",null,o.a.createElement("p",{className:"m_t_0"},"Go to the 'Customize Slack' screen:"),o.a.createElement("img",{src:p.a,alt:"Menu showing link to Customize Slack"}),o.a.createElement("p",null,"The Chrome extension you just added should have enable a bulk upload area on this screen. Simply drag and drop the contents of the 'characters' folder."),o.a.createElement("img",{src:g.a,alt:"Bulk adding emojis."}))),o.a.createElement("section",null,o.a.createElement("h2",{className:"m_t_0"},"Profit"),o.a.createElement("div",null,o.a.createElement("p",{className:"m_t_0"},"You're ready to Slack in style. Head over to the"," ",o.a.createElement(r.Link,{to:"compose",href:"#",smooth:!0,duration:500},"message composer")," ","and type your message."))),o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h2",{className:"m_t_0"},"Known issues")),o.a.createElement("div",null,o.a.createElement("ul",{className:"m_t_0"},o.a.createElement("li",null,"Comic Slack uses images, not a font. So you can forget about kerning."),o.a.createElement("li",null,"I've had to remove transparency from each image so that they are still readable with Slack's dark mode."),o.a.createElement("li",null,"Comic Slack currently only supports a-z, 0-9 and a small selection of the most common symbols. Any other characters you type will render in whatever garbage font Slack usually uses ;)")))))},v=(a(33),a(34),a(17)),k=a.n(v);var b=function(){return function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&e&&"function"===typeof e&&e(t.getAllResponseHeaders())},t.open("HEAD",document.location,!0),console.log("request: ",t),t.send(null)}(),o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:k.a,alt:"Comic Slack logo",width:"50"}),o.a.createElement("div",null,o.a.createElement("h1",{className:"m_t_0 m_b_0"},"Comic Slack"))),o.a.createElement("main",null,o.a.createElement("div",{id:"compose",className:"use-wrap wrapper"},o.a.createElement(u,null)),o.a.createElement("div",{id:"setup",className:"setup-wrap wrapper"},o.a.createElement(f,null))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/comic-slack",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/comic-slack","/service-worker.js");w?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.686ac042.chunk.js.map