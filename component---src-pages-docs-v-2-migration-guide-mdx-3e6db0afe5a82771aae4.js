(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{GMyT:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t("k1TG"),c=t("8o2o"),s=(t("FdF9"),t("7ljp")),o=t("7oih"),p={},r={_frontmatter:p},i=o.b;function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(i,Object(n.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"migrating-to-popper-2",style:{position:"relative"}},Object(s.b)("a",{parentName:"h1",href:"#migrating-to-popper-2","aria-label":"migrating to popper 2 permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Migrating to Popper 2"),Object(s.b)("p",null,"Popper 2 introduces a lot of changes for the better! Here's a guide to help you\nmigrate to the new version."),Object(s.b)("x-ad",null),Object(s.b)("h2",{id:"1-install-the-new-package",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#1-install-the-new-package","aria-label":"1 install the new package permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Install the new package"),Object(s.b)("p",null,"Remove the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"popper.js")," package from your ",Object(s.b)("code",{parentName:"p",className:"language-text"},"package.json")," or CDN script tag\nincludes, and install ",Object(s.b)("code",{parentName:"p",className:"language-text"},"@popperjs/core"),"."),Object(s.b)("p",null,"Popper has changed its package name to live under the scoped ",Object(s.b)("code",{parentName:"p",className:"language-text"},"@popperjs"),"\norganization. This is where other packages like ",Object(s.b)("code",{parentName:"p",className:"language-text"},"react-popper")," will now live\ntoo."),Object(s.b)("h2",{id:"2-change-the-import",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#2-change-the-import","aria-label":"2 change the import permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Change the import"),Object(s.b)("h3",{id:"modules",style:{position:"relative"}},Object(s.b)("a",{parentName:"h3",href:"#modules","aria-label":"modules permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Modules"),Object(s.b)("p",null,"In Popper 1, it was a class:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," Popper ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'popper.js'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"new")," ",Object(s.b)("span",{parentName:"code",className:"token class-name"},"Popper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," options",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"In Popper 2, it's now a function:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," createPopper ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," options",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h3",{id:"cdn--umd-version",style:{position:"relative"}},Object(s.b)("a",{parentName:"h3",href:"#cdn--umd-version","aria-label":"cdn  umd version permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"CDN / ",Object(s.b)("code",{parentName:"h3",className:"language-text"},"umd")," version"),Object(s.b)("p",null,"This named import lives under the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"Popper")," namespace object:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"Popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"createPopper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{id:"3-change-your-css-attribute-selectors",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#3-change-your-css-attribute-selectors","aria-label":"3 change your css attribute selectors permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Change your CSS attribute selectors"),Object(s.b)("p",null,"In v1, attributes were prefixed with ",Object(s.b)("code",{parentName:"p",className:"language-text"},"x-"),", for example, ",Object(s.b)("code",{parentName:"p",className:"language-text"},"x-placement"),". In v2,\nthese are now prefixed with ",Object(s.b)("code",{parentName:"p",className:"language-text"},"data-popper-"),", which matches the HTML5 spec, and\nhas its own data namespace to prevent conflicts."),Object(s.b)("p",null,"Also, ",Object(s.b)("code",{parentName:"p",className:"language-text"},"x-out-of-boundaries")," is now ",Object(s.b)("code",{parentName:"p",className:"language-text"},"data-popper-reference-hidden"),"."),Object(s.b)("h2",{id:"4-remove-all-css-margins",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#4-remove-all-css-margins","aria-label":"4 remove all css margins permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Remove all CSS margins"),Object(s.b)("p",null,"In Popper 2 we no longer consider CSS ",Object(s.b)("code",{parentName:"p",className:"language-text"},"margin")," because of inherent issues with\nit. Instead, to apply some padding between the popper and its reference element,\nuse the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"offset")," modifier. You also need to remove ",Object(s.b)("code",{parentName:"p",className:"language-text"},"margin")," from your arrows\ntoo; instead use the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"padding")," option in the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"arrow")," modifier."),Object(s.b)("h2",{id:"5-ensure-your-popper-and-arrow-box-size-is-constant-for-all-placements",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#5-ensure-your-popper-and-arrow-box-size-is-constant-for-all-placements","aria-label":"5 ensure your popper and arrow box size is constant for all placements permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"5. Ensure your popper and arrow box size is constant for all placements"),Object(s.b)("p",null,"Your popper and arrow cannot be a different width or height for different\nplacements; it must be constant in size. This is due to the way the Popper\nlifecycle works – which can't know ahead of time (before writing to the DOM)\nwhat the computed CSS will be, which can change the size of the elements. In\nPopper 1, this caused all sorts of flicker and jitter issues."),Object(s.b)("p",null,"We are looking into a way to allow this in the future, but it's currently a\ndifficult problem to solve efficiently."),Object(s.b)("h2",{id:"6-add-back-boundary-paddings-if-necessary",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#6-add-back-boundary-paddings-if-necessary","aria-label":"6 add back boundary paddings if necessary permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"6. Add back boundary paddings if necessary"),Object(s.b)("p",null,"In Popper 2, all ",Object(s.b)("code",{parentName:"p",className:"language-text"},"padding")," is now ",Object(s.b)("code",{parentName:"p",className:"language-text"},"0"),". In v1, these were ",Object(s.b)("code",{parentName:"p",className:"language-text"},"5")," for\n",Object(s.b)("code",{parentName:"p",className:"language-text"},"preventOverflow")," and ",Object(s.b)("code",{parentName:"p",className:"language-text"},"flip"),". If necessary, you can add these back using the\n",Object(s.b)("code",{parentName:"p",className:"language-text"},"padding")," option, which works the same as v1."),Object(s.b)("h2",{id:"7-change-positionfixed",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#7-change-positionfixed","aria-label":"7 change positionfixed permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"7. Change ",Object(s.b)("code",{parentName:"h2",className:"language-text"},"positionFixed")),Object(s.b)("p",null,"In Popper 2, this is now the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"strategy")," option:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  strategy",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'fixed'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{id:"8-update-method-names",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#8-update-method-names","aria-label":"8 update method names permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"8. Update method names"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"update()")," is now ",Object(s.b)("code",{parentName:"li",className:"language-text"},"forceUpdate()")," (and is sync)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"scheduleUpdate()")," is now ",Object(s.b)("code",{parentName:"li",className:"language-text"},"update()")," (and returns a promise)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"enableEventListeners")," / ",Object(s.b)("code",{parentName:"li",className:"language-text"},"disableEventListeners")," are gone; see the\n",Object(s.b)("code",{parentName:"li",className:"language-text"},"eventListeners")," modifier. You can use the ",Object(s.b)("code",{parentName:"li",className:"language-text"},"setOptions")," method to change the\n",Object(s.b)("code",{parentName:"li",className:"language-text"},"scroll")," and ",Object(s.b)("code",{parentName:"li",className:"language-text"},"resize")," options at will to replicate the original methods'\nfunctionality.")),Object(s.b)("h2",{id:"9-update-callbacks",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#9-update-callbacks","aria-label":"9 update callbacks permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"9. Update callbacks"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"onCreate")," is now ",Object(s.b)("code",{parentName:"li",className:"language-text"},"onFirstUpdate")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"onUpdate")," is gone; use a custom modifier with an ",Object(s.b)("code",{parentName:"li",className:"language-text"},"afterWrite")," phase")),Object(s.b)("h2",{id:"10-update-modifiers",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#10-update-modifiers","aria-label":"10 update modifiers permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"10. Update modifiers"),Object(s.b)("p",null,"In Popper 2 this is now an array of objects (modifiers), instead of an object\nwhere each property was the modifier name."),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  modifiers",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'flip'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      enabled",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token boolean"},"false"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"In addition, their options are grouped together in the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"options")," object:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  modifiers",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      name",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'flip'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      options",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        padding",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token number"},"5"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"We cannot list all the changes to them here (there are a lot!); you'll need to\nvisit each modifier in the menu to learn more about their new behavior."),Object(s.b)("p",null,"See ",Object(s.b)("a",{parentName:"p",href:"../modifiers/"},"Modifiers")," for more information on writing custom modifiers."),Object(s.b)("h2",{id:"11-inner-keeptogether-shift-modifiers-are-gone",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#11-inner-keeptogether-shift-modifiers-are-gone","aria-label":"11 inner keeptogether shift modifiers are gone permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"11. ",Object(s.b)("code",{parentName:"h2",className:"language-text"},"inner"),", ",Object(s.b)("code",{parentName:"h2",className:"language-text"},"keepTogether"),", ",Object(s.b)("code",{parentName:"h2",className:"language-text"},"shift")," modifiers are gone"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"inner")," can be replicated using the ",Object(s.b)("code",{parentName:"li",className:"language-text"},"offset")," modifier with negative values"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"keepTogether")," functionality lives in ",Object(s.b)("code",{parentName:"li",className:"language-text"},"preventOverflow")," in ",Object(s.b)("code",{parentName:"li",className:"language-text"},"tether")," options")),Object(s.b)("h2",{id:"12-remove-virtual-element-properties",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#12-remove-virtual-element-properties","aria-label":"12 remove virtual element properties permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"12. Remove virtual element properties"),Object(s.b)("p",null,"The only property your virtual elements (or Reference Objects in Popper 1) need\nis ",Object(s.b)("code",{parentName:"p",className:"language-text"},"getBoundingClientRect"),". The other properties are unnecessary now."),Object(s.b)("h2",{id:"13-transitions",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#13-transitions","aria-label":"13 transitions permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"13. Transitions"),Object(s.b)("p",null,"In Popper 2, the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"computeStyles")," modifier has a new option called ",Object(s.b)("code",{parentName:"p",className:"language-text"},"adaptive"),"\nenabled by default, which breaks CSS transitions. You should set this option to\n",Object(s.b)("code",{parentName:"p",className:"language-text"},"false")," if CSS transitions are enabled."),Object(s.b)("p",null,"Keep in mind, ",Object(s.b)("code",{parentName:"p",className:"language-text"},"adaptive")," has the benefit of allowing you to change the height or\nwidth of the popper in most cases without needing to update its position, so\nyou'll lose this benefit when disabling it."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-migration-guide-mdx-3e6db0afe5a82771aae4.js.map