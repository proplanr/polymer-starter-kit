!function(e){"use strict";var o=e.querySelector("#app");"/"!==window.location.pathname?o.base=window.location.pathname.replace(/\/$/,""):o.base="/",o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),r=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),n=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),t=o.detail,l=t.height-t.condensedHeight,c=Math.min(1,t.y/l),i=.5,m=Math.max(i,(l-t.y)/(l/(1-i))+i),d=1-c;Polymer.Base.transform("translate3d(0,"+100*c+"%,0)",r),Polymer.Base.transform("scale("+d+") translateZ(0)",n),Polymer.Base.transform("scale("+m+") translateZ(0)",a)}),o.onDataRouteClick=function(){var o=Polymer.dom(e).querySelector("#paperDrawerPanel");o.narrow&&o.closeDrawer()},o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)}}(document);