(function(){var F,a,x,h,B,i,j,s,n,C,p,o,t,r,u,y,A,g,m,v,w,l,q,E,D,k,e,d,c,b,z=[].slice,f=[].indexOf||function(I){for(var H=0,G=this.length;H<G;H++){if(H in this&&this[H]===I){return H}}return -1};if((k=window.Dropbox)==null){window.Dropbox={}}if((e=Dropbox.baseUrl)==null){Dropbox.baseUrl="https://www.dropbox.com"}if((d=Dropbox.blockBaseUrl)==null){Dropbox.blockBaseUrl="https://dl.dropbox.com"}Dropbox.addListener=function(I,H,G){if(I.addEventListener){I.addEventListener(H,G,false)}else{I.attachEvent("on"+H,function(J){J.preventDefault=function(){return this.returnValue=false};return G(J)})}};Dropbox.removeListener=function(I,H,G){if(I.removeEventListener){I.removeEventListener(H,G,false)}else{I.detachEvent("on"+H,G)}};B=function(Q,M){var O,N,L,G,K,P,I,H,J;P=encodeURIComponent(window.location.protocol+"//"+window.location.host);O=encodeURIComponent(Dropbox.appKey);G=encodeURIComponent(Q.linkType||"");I=encodeURIComponent(Q._trigger||"js");K=Boolean(Q.multiselect);N=encodeURIComponent(((J=Q.extensions)!=null?typeof J.join==="function"?J.join(" "):void 0:void 0)||"");L=Boolean(Q.folderselect);M=Boolean(M);H=""+Dropbox.baseUrl+"/chooser?origin="+P+"&app_key="+O+"&link_type="+G;H+="&trigger="+I+"&multiselect="+K+"&extensions="+N+"&folderselect="+L+"&iframe="+M;return H};E=function(H){var I,G;G=encodeURIComponent(window.location.protocol+"//"+window.location.host);I=encodeURIComponent(Dropbox.appKey);return""+Dropbox.baseUrl+"/saver?origin="+G+"&app_key="+I};m=1;r=function(H,J){var L,I,K,G;L=encodeURIComponent(Dropbox.appKey);G=""+Dropbox.baseUrl+"/dropins/job_status?job="+J+"&app_key="+L;K=function(N){var M;if(N.status==="COMPLETE"){if(typeof H.progress==="function"){H.progress(1)}if(typeof H.success==="function"){H.success()}}else{if((M=N.status)==="PENDING"||M==="DOWNLOADING"){if(N.progress!=null){if(typeof H.progress==="function"){H.progress(N.progress/100)}}setTimeout(I,1500)}else{if(N.status==="FAILED"){if(typeof H.error==="function"){H.error(N.error)}}}}};if("withCredentials" in new XMLHttpRequest()){I=function(){var M;M=new XMLHttpRequest();M.onload=function(){return K(JSON.parse(M.responseText))};M.onerror=function(){return typeof H.error==="function"?H.error():void 0};M.open("GET",G,true);return M.send()}}else{I=function(){var O,N,M;O="DropboxJsonpCallback"+m++;N=false;window[O]=function(P){N=true;return K(P)};M=document.createElement("script");M.src=""+G+"&callback="+O;M.onreadystatechange=function(){var P;if(M.readyState==="loaded"){if(!N){if(typeof H.error==="function"){H.error()}}return(P=M.parentNode)!=null?P.removeChild(M):void 0}};return document.getElementsByTagName("head")[0].appendChild(M)}}if(typeof H.progress==="function"){H.progress(0)}return I()};u=function(G,L,I){var K,H,J;K=JSON.parse(G.data);switch(K.method){case"ready":if(I.files!=null){J=JSON.stringify({method:"files",params:I.files});if((typeof y!=="undefined"&&y!==null)&&I._popup){H=y.contentWindow}else{H=G.source}H.postMessage(J,Dropbox.baseUrl)}if(typeof I.ready==="function"){I.ready()}break;case"files_selected":case"files_saved":if(typeof L==="function"){L()}if(typeof I.success==="function"){I.success(K.params)}break;case"progress":if(typeof I.progress==="function"){I.progress(K.params)}break;case"close_dialog":if(typeof L==="function"){L()}if(typeof I.cancel==="function"){I.cancel()}break;case"web_session_error":if(typeof L==="function"){L()}if(typeof I.webSessionFailure==="function"){I.webSessionFailure()}break;case"web_session_unlinked":if(typeof L==="function"){L()}if(typeof I.webSessionUnlinked==="function"){I.webSessionUnlinked()}break;case"resize":if(typeof I.resize==="function"){I.resize(K.params)}break;case"error":if(typeof L==="function"){L()}if(typeof I.error==="function"){I.error(K.params)}break;case"job_id":if(typeof L==="function"){L()}r(I,K.params);break;case"_debug_log":if(typeof console!=="undefined"&&console!==null){console.log(K.params.msg)}}};y=null;j=function(){if(navigator.appName==="Microsoft Internet Explorer"){y=document.createElement("iframe");y.setAttribute("id","dropbox_xcomm");y.setAttribute("src",Dropbox.baseUrl+"/static/api/1/xcomm.html");y.style.display="none";document.getElementsByTagName("body")[0].appendChild(y)}};Dropbox.createChooserWidget=function(G){var H;H=s(B(G,true));H._handler=function(I){if(I.source===H.contentWindow&&I.origin===Dropbox.baseUrl){u(I,null,G)}};Dropbox.addListener(window,"message",H._handler);return H};Dropbox.cleanupWidget=function(G){if(!G._handler){throw"Invalid widget!"}Dropbox.removeListener(window,"message",G._handler);delete G._handler};q=function(G,H){var J,I;J=(window.screenX||window.screenLeft)+((window.outerWidth||document.documentElement.offsetWidth)-G)/2;I=(window.screenY||window.screenTop)+((window.outerHeight||document.documentElement.offsetHeight)-H)/2;return"width="+G+",height="+H+",left="+J+",top="+I};if(Dropbox._dropinsjs_loaded){if(typeof console!=="undefined"&&console!==null){if(typeof console.warn==="function"){console.warn("dropins.js included more than once")}}return}Dropbox._dropinsjs_loaded=true;if((c=Dropbox.appKey)==null){Dropbox.appKey=(b=document.getElementById("dropboxjs"))!=null?b.getAttribute("data-app-key"):void 0}F="https://www.dropbox.com/developers/dropins/chooser/js";x=["text","documents","images","video","audio"];Dropbox.init=function(G){Dropbox.appKey=G.appKey};s=function(G){var H;H=document.createElement("iframe");H.src=G;H.style.display="block";H.style.backgroundColor="white";H.style.border="none";return H};l=function(M){var K,G,O,H,L,N,J,I;if(typeof M[0]==="string"){H=M.shift();if(typeof M[0]==="string"){G=M.shift()}else{G=t(H)}O={files:[{url:H,filename:G}]}}else{O=M.shift();if(!(O!=null)){throw"Missing arguments. See documentation."}if(!(((J=O.files)!=null?J.length:void 0)||typeof O.files==="function")){throw"Missing files. See documentation."}I=O.files;for(L=0,N=I.length;L<N;L++){K=I[L];if(!K.filename){K.filename=t(K.url)}}}return O};Dropbox.save=function(){var I,K,J,H,M,G,L;I=1<=arguments.length?z.call(arguments,0):[];H=l(I);if(!Dropbox.isBrowserSupported()){alert("Your browser does not support the Dropbox Saver");return}H._popup=true;if(!(typeof H.files==="object"&&H.files.length)){throw"Opening the saver failed. The object passed in must have a 'files' property that contains a list of objects.  See documentation.";return}L=H.files;for(M=0,G=L.length;M<G;M++){J=L[M];if(typeof J.url!=="string"){throw"File urls to download incorrectly configured.  Each file must have a url. See documentation."}}K=q(352,237);return w(E(H),K,H)};w=function(I,J,H){var L,K,M,G,N;L=function(){if(!G.closed){G.close()}Dropbox.removeListener(window,"message",K);clearInterval(N)};K=function(O){if(O.source===G||O.source===(y!=null?y.contentWindow:void 0)){u(O,L,H)}};M=function(){if(G.closed){L();if(typeof H.cancel==="function"){H.cancel()}}};G=window.open(I,"dropbox",""+J+",resizable=yes,location=yes");G.focus();N=setInterval(M,100);Dropbox.addListener(window,"message",K);return G};D=function(I){var J,H,L,G,K;if(!(I.success!=null)){if(typeof console!=="undefined"&&console!==null){if(typeof console.warn==="function"){console.warn("You must provide a success callback to the Chooser to see the files that the user selects")}}}H=function(){if(typeof console!=="undefined"&&console!==null){if(typeof console.warn==="function"){console.warn("The provided list of extensions or file types is not valid. See Chooser documentation: "+F)}}if(typeof console!=="undefined"&&console!==null){if(typeof console.warn==="function"){console.warn("Available file types are: "+x.join(", "))}}return delete I.extensions};if(I.extensions!=null){if(Object.prototype.toString.call(I.extensions)==="[object Array]"){K=I.extensions;for(L=0,G=K.length;L<G;L++){J=K[L];if(!J.match(/^\.[\.\w$#&+@!()\-'`_~]+$/)&&f.call(x,J)<0){H()}}}else{H()}}return I};h=function(N){var I,G,L,K,O,M,J,H;if(!Dropbox.isBrowserSupported()){alert("Your browser does not support the Dropbox Chooser");return}H=660;K=440;if(N.iframe){J=s(B(N,true));J.style.width=H+"px";J.style.height=K+"px";M=document.createElement("div");M.style.position="fixed";M.style.left=M.style.right=M.style.top=M.style.bottom="0px";M.style.zIndex="1000";I=document.createElement("div");I.style.position="absolute";I.style.left=I.style.right=I.style.top=I.style.bottom="0px";I.style.backgroundColor="rgb(160, 160, 160)";I.style.opacity="0.2";I.style.filter="progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";O=document.createElement("div");O.style.position="relative";O.style.width=H+"px";O.style.margin="125px auto 0px auto";O.style.border="1px solid #ACACAC";O.style.boxShadow="rgba(0, 0, 0, .2) 0px 4px 16px";O.appendChild(J);M.appendChild(I);M.appendChild(O);document.body.appendChild(M);L=function(P){if(P.source===J.contentWindow){u(P,(function(){document.body.removeChild(M);Dropbox.removeListener(window,"message",L)}),N)}};Dropbox.addListener(window,"message",L)}else{G=q(H,K);w(B(N),G,N)}};Dropbox.choose=function(G){if(G==null){G={}}G=D(G);h(G)};Dropbox.isBrowserSupported=function(){var G;G=g();Dropbox.isBrowserSupported=function(){return G};return G};g=function(){var J,I,G,H;H=[/Windows Phone/,/BB10;/,/CriOS/];for(I=0,G=H.length;I<G;I++){J=H[I];if(J.test(navigator.userAgent)){return false}}return true};o=function(G){return G.replace(/\/+$/g,"").split("/").pop()};t=function(H){var G;G=document.createElement("a");G.href=H;return o(G.pathname)};i=function(H,I){var G;if(I!=null){I.innerHTML=""}else{I=document.createElement("a");I.href="#"}I.className+=" dropbox-dropin-btn";if(Dropbox.isBrowserSupported()){I.className+=" dropbox-dropin-default"}else{I.className+=" dropbox-dropin-disabled"}G=document.createElement("span");G.className="dropin-btn-status";I.appendChild(G);H=document.createTextNode(H);I.appendChild(H);return I};Dropbox.createChooseButton=function(G){var H;if(G==null){G={}}G=D(G);H=i("Choose from Dropbox");Dropbox.addListener(H,"click",function(I){I.preventDefault();h({success:function(J){H.className="dropbox-dropin-btn dropbox-dropin-success";if(typeof G.success==="function"){G.success(J)}},cancel:G.cancel,linkType:G.linkType,multiselect:G.multiselect,extensions:G.extensions,iframe:G.iframe,_trigger:"button"})});return H};Dropbox.createSaveButton=function(){var H,I,G;H=1<=arguments.length?z.call(arguments,0):[];G=l(H);I=H.shift();I=i("Save to Dropbox",I);Dropbox.addListener(I,"click",function(J){var K;J.preventDefault();if(!(I.className.indexOf("dropbox-dropin-error")>=0||I.className.indexOf("dropbox-dropin-default")>=0||I.className.indexOf("dropbox-dropin-disabled")>=0)){return}K=(typeof G.files==="function"?G.files():void 0)||G.files;if(!(K!=null?K.length:void 0)){I.className="dropbox-dropin-btn dropbox-dropin-error";if(typeof G.error==="function"){G.error("Missing files")}return}Dropbox.save({files:K,success:function(){I.className="dropbox-dropin-btn dropbox-dropin-success";if(typeof G.success==="function"){G.success()}},progress:function(L){I.className="dropbox-dropin-btn dropbox-dropin-progress";if(typeof G.progress==="function"){G.progress(L)}},cancel:function(){if(typeof G.cancel==="function"){G.cancel()}},error:function(L){I.className="dropbox-dropin-btn dropbox-dropin-error";if(typeof G.error==="function"){G.error(L)}}})});return I};v=function(H,G){return"background: "+H+";\nbackground: -moz-linear-gradient(top, "+H+" 0%, "+G+" 100%);\nbackground: -webkit-linear-gradient(top, "+H+" 0%, "+G+" 100%);\nbackground: linear-gradient(to bottom, "+H+" 0%, "+G+" 100%);\nfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr='"+H+"', endColorstr='"+G+"',GradientType=0);"};n=document.createElement("style");n.type="text/css";C='@-webkit-keyframes rotate {\n  from  { -webkit-transform: rotate(0deg); }\n  to   { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes rotate {\n  from  { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n.dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n  display: inline-block;\n  height: 14px;\n  font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n  color: #636363;\n  text-decoration: none;\n  padding: 1px 7px 5px 3px;\n  border: 1px solid #ebebeb;\n  border-radius: 2px;\n  border-bottom-color: #d4d4d4;\n  '+(v("#fcfcfc","#f5f5f5"))+"\n}\n\n.dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n  border-color: #dedede;\n  border-bottom-color: #cacaca;\n  "+(v("#fdfdfd","#f5f5f5"))+"\n}\n\n.dropbox-dropin-default:active, .dropbox-dropin-error:active {\n  border-color: #d1d1d1;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n}\n\n.dropbox-dropin-btn .dropin-btn-status {\n  display: inline-block;\n  width: 15px;\n  height: 14px;\n  vertical-align: bottom;\n  margin: 0 5px 0 2px;\n  background: transparent url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-saver-status.png') no-repeat;\n  position: relative;\n  top: 2px;\n}\n\n.dropbox-dropin-default .dropin-btn-status {\n  background-position: 0px 0px;\n}\n\n.dropbox-dropin-progress .dropin-btn-status {\n  width: 18px;\n  margin: 0 4px 0 0;\n  background: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-progress.png') no-repeat center center;\n  -webkit-animation-name: rotate;\n  -webkit-animation-duration: 1.7s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  animation-name: rotate;\n  animation-duration: 1.7s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n.dropbox-dropin-success .dropin-btn-status {\n  background-position: -15px 0px;\n}\n\n.dropbox-dropin-disabled {\n  background: #e0e0e0;\n  border: 1px #dadada solid;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none;\n}\n\n.dropbox-dropin-disabled .dropin-btn-status {\n  background-position: -30px 0px;\n}\n\n.dropbox-dropin-error .dropin-btn-status {\n  background-position: -45px 0px;\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n  .dropbox-dropin-btn .dropin-btn-status {\n    background-image: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-saver-status-2x.png');\n    background-size: 60px 14px;\n    -webkit-background-size: 60px 14px;\n  }\n\n  .dropbox-dropin-progress .dropin-btn-status {\n    background: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n    background-size: 20px 20px;\n    -webkit-background-size: 20px 20px;\n  }\n}\n\n.dropbox-saver:hover, .dropbox-chooser:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.dropbox-chooser, .dropbox-dropin-btn {\n  line-height: 11px !important;\n  text-decoration: none !important;\n  box-sizing: content-box !important;\n  -webkit-box-sizing: content-box !important;\n  -moz-box-sizing: content-box !important;\n}\n";if(n.styleSheet){n.styleSheet.cssText=C}else{n.textContent=C}document.getElementsByTagName("head")[0].appendChild(n);a=function(){j();if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",a,false)}else{if(document.detachEvent){document.detachEvent("onreadystatechange",a)}}return A()};if(document.readyState==="complete"){setTimeout(a,0)}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",a,false)}else{document.attachEvent("onreadystatechange",a)}}Dropbox.createWidget=Dropbox.createChooserWidget;Dropbox.cleanupChooserWidget=Dropbox.cleanupWidget;Dropbox.attach=Dropbox.choose;Dropbox.saveURL=function(){var G;if((G=window.console)!=null){if(typeof G.warn==="function"){G.warn("Dropbox.saveURL is deprecated.  Please use Dropbox.save")}}return Dropbox.save(arguments[0],arguments[1],arguments[2])};p=function(J,I,L){var K,H,G;if(L==null){L={}}if(document.createEvent!=null){K=document.createEvent("Event");K.initEvent(I,true,true);for(H in L){G=L[H];K[H]=G}J.dispatchEvent(K)}};A=function(){var I,M,K,H,G,L,J;L=document.getElementsByTagName("input");for(M=0,H=L.length;M<H;M++){I=L[M];if(I.getAttribute("type")==="dropbox-chooser"){(function(O){var N;N=i("Choose from Dropbox");O.style.display="none";Dropbox.addListener(N,"click",function(P){var R,Q;P.preventDefault();Dropbox.choose({success:function(T){var U,S;S=(function(){var X,W,V;V=[];for(X=0,W=T.length;X<W;X++){U=T[X];V.push(U.link)}return V})();O.value=S.join(", ");O.files=T;p(O,"DbxChooserSuccess",{files:T});N.className="dropbox-dropin-btn dropbox-dropin-success"},cancel:function(){p(O,"DbxChooserCancel")},linkType:O.getAttribute("data-link-type")||"preview",multiselect:((R=O.getAttribute("data-multiselect"))==="True"||R==="true"||R==="1")||false,extensions:((Q=O.getAttribute("data-extensions"))!=null?Q.split(/\s+/):void 0)||[],_trigger:"button"})});O.parentNode.insertBefore(N,O)})(I)}}J=document.getElementsByTagName("a");for(K=0,G=J.length;K<G;K++){I=J[K];if(f.call((I.getAttribute("class")||"").split(" "),"dropbox-saver")>=0){(function(N){Dropbox.createSaveButton({files:function(){return[{url:N.getAttribute("data-url")||N.href,filename:N.getAttribute("data-filename")||o(N.pathname)}]},success:function(){p(N,"DbxSaverSuccess")},progress:function(O){p(N,"DbxSaverProgress",{progress:O})},cancel:function(){p(N,"DbxSaverCancel")},error:function(O){p(N,"DbxSaverError",{error:O})}},N)})(I)}}}}).call(this);