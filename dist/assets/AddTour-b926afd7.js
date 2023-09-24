import{C as G,D as $,E as ee,r as g,o as oe,G as te,H as ne,I as le,J as R,K as F,_ as ae,L as ie,a as re,c as z,d as B,e,s as y,v as T,f as i,j as b,M as H,t as j,i as M,z as se,l as de,F as K,g as ce,N,O as ue,p as me,n as pe,b as fe,x as A}from"./index-52ac7a08.js";var ve=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],ge=function(o){return ve.map(function(a){return a.toLowerCase()}).indexOf(o.toLowerCase())!==-1},he=function(o,a,l){Object.keys(a).filter(ge).forEach(function(d){var c=a[d];typeof c=="function"&&(d==="onInit"?c(o,l):l.on(d.substring(2),function(p){return c(p,l)}))})},be=function(o,a,l,d){var c=o.modelEvents?o.modelEvents:null,p=Array.isArray(c)?c.join(" "):c;G(d,function(_,f){l&&typeof _=="string"&&_!==f&&_!==l.getContent({format:o.outputFormat})&&l.setContent(_)}),l.on(p||"change input undo redo",function(){a.emit("update:modelValue",l.getContent({format:o.outputFormat}))})},_e=function(o,a,l,d,c,p){d.setContent(p()),l.attrs["onUpdate:modelValue"]&&be(a,l,d,c),he(o,l.attrs,d)},q=0,W=function(o){var a=Date.now(),l=Math.floor(Math.random()*1e9);return q++,o+"_"+l+q+String(a)},ye=function(o){return o!==null&&o.tagName.toLowerCase()==="textarea"},J=function(o){return typeof o>"u"||o===""?[]:Array.isArray(o)?o:o.split(" ")},Ve=function(o,a){return J(o).concat(J(a))},we=function(o){return o==null},Q=function(){return{listeners:[],scriptId:W("tiny-script"),scriptLoaded:!1}},xe=function(){var o=Q(),a=function(c,p,_,f){var r=p.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=c,r.src=_;var h=function(){r.removeEventListener("load",h),f()};r.addEventListener("load",h),p.head&&p.head.appendChild(r)},l=function(c,p,_){o.scriptLoaded?_():(o.listeners.push(_),c.getElementById(o.scriptId)||a(o.scriptId,c,p,function(){o.listeners.forEach(function(f){return f()}),o.scriptLoaded=!0}))},d=function(){o=Q()};return{load:l,reinitialize:d}},Se=xe(),ke=function(){return typeof window<"u"?window:global},I=function(){var o=ke();return o&&o.tinymce?o.tinymce:null},Ce={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(o){return o==="html"||o==="text"}}},O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(o){for(var a,l=1,d=arguments.length;l<d;l++){a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(o[c]=a[c])}return o},O.apply(this,arguments)},Te=function(o,a,l,d){return o(d||"div",{id:a,ref:l})},Ue=function(o,a,l){return o("textarea",{id:a,visibility:"hidden",ref:l})},P=$({props:Ce,setup:function(o,a){var l=o.init?O({},o.init):{},d=ee(o),c=d.disabled,p=d.modelValue,_=d.tagName,f=g(null),r=null,h=o.id||W("tiny-vue"),x=o.init&&o.init.inline||o.inline,S=!!a.attrs["onUpdate:modelValue"],k=!0,U=o.initialValue?o.initialValue:"",w="",D=function(v){return S?function(){return p!=null&&p.value?p.value:""}:function(){return v?U:w}},V=function(){var v=D(k),s=O(O({},l),{readonly:o.disabled,target:f.value,plugins:Ve(l.plugins,o.plugins),toolbar:o.toolbar||l.toolbar,inline:x,setup:function(C){r=C,C.on("init",function(E){return _e(E,o,a,C,p,v)}),typeof l.setup=="function"&&l.setup(C)}});ye(f.value)&&(f.value.style.visibility=""),I().init(s),k=!1};G(c,function(v){var s;r!==null&&(typeof((s=r.mode)===null||s===void 0?void 0:s.set)=="function"?r.mode.set(v?"readonly":"design"):r.setMode(v?"readonly":"design"))}),G(_,function(v){var s;S||(w=r.getContent()),(s=I())===null||s===void 0||s.remove(r),F(function(){return V()})}),oe(function(){if(I()!==null)V();else if(f.value&&f.value.ownerDocument){var v=o.cloudChannel?o.cloudChannel:"6",s=o.apiKey?o.apiKey:"no-api-key",C=we(o.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(s,"/tinymce/").concat(v,"/tinymce.min.js"):o.tinymceScriptSrc;Se.load(f.value.ownerDocument,C,V)}}),te(function(){I()!==null&&I().remove(r)}),x||(ne(function(){k||V()}),le(function(){var v;S||(w=r.getContent()),(v=I())===null||v===void 0||v.remove(r)}));var L=function(v){var s;w=r.getContent(),(s=I())===null||s===void 0||s.remove(r),l=O(O({},l),v),F(function(){return V()})};return a.expose({rerender:L,getEditor:function(){return r}}),function(){return x?Te(R,h,f,o.tagName):Ue(R,h,f)}}});const u=o=>(me("data-v-871fa20e"),o=o(),pe(),o),De={class:"add-container"},Le=u(()=>e("h2",{style:{"text-align":"center","padding-top":"2rem"}},"Thêm Tour mới",-1)),Me={class:"mb-3"},Ie=u(()=>e("label",{for:"",class:"form-label"},"Tiêu đề tour",-1)),Oe={class:"mb-3 thumbnail"},Pe=u(()=>e("label",{for:"formFile",class:"form-label"},"Hình thu nhỏ",-1)),Ee={style:{width:"20rem","margin-top":"1rem"}},ze=["src"],Be={class:"mb-3"},je=u(()=>e("label",{for:"",class:"form-label"},"Lịch Trình",-1)),Ae={class:"category-type-from"},Ne={class:"mb-3 w-25"},Ge=u(()=>e("label",{for:"",class:"form-label"},"Danh mục ",-1)),Re=u(()=>e("option",{value:"1"},"Du lịch Trung Quốc",-1)),Fe=u(()=>e("option",{value:"2"},"Du lịch trong nước",-1)),He=u(()=>e("option",{value:"3"},"Du lịch quốc tế",-1)),Ke=[Re,Fe,He],qe={class:"mb-3 w-25"},Je=u(()=>e("label",{for:"",class:"form-label"},"Loại tour ",-1)),Qe=u(()=>e("option",{value:"Ghép đoàn",selected:""},"Ghép đoàn",-1)),We=u(()=>e("option",{value:"Đi riêng"},"Đi riêng",-1)),Xe=u(()=>e("option",{value:"Ghép đoàn / Đi riêng"},"Ghép đoàn/đi riêng",-1)),Ye=[Qe,We,Xe],Ze={class:"mb-3 w-25"},$e=u(()=>e("label",{for:"",class:"form-label"},"Khởi hành từ",-1)),eo={for:"",class:"form-label"},oo={style:{display:"flex","flex-direction":"row","align-items":"center"}},to={class:"w-25",style:{"margin-right":"5rem"}},no={style:{display:"flex","flex-direction":"row","align-items":"center"}},lo={key:0,style:{color:"orangered"},class:"fa-solid fa-fire fa-bounce"},ao={class:"mb-3 w-50"},io={for:"",class:"form-label"},ro={class:"form-check"},so=u(()=>e("label",{class:"form-check-label",for:"plane-check"}," Máy bay ",-1)),co={class:"form-check"},uo=u(()=>e("label",{class:"form-check-label",for:"car-check"}," Ô tô ",-1)),mo={class:"form-check"},po=u(()=>e("label",{class:"form-check-label",for:"train-check"}," Tàu hỏa ",-1)),fo={class:"recommend-container",style:{width:"60%",display:"flex","flex-direction":"row"}},vo=u(()=>e("label",{for:"customRange2",class:"form-label",style:{width:"10rem"}},"Mức độ đề xuất:",-1)),go={class:"age-price"},ho={class:"mb-3 w-25"},bo=u(()=>e("label",{for:"",class:"form-label"},"Giá Người lớn (VNĐ)",-1)),_o={class:"mb-3 w-25"},yo=u(()=>e("label",{for:"",class:"form-label"},"Giá trẻ em(Từ 5-11 tuổi) (VNĐ)",-1)),Vo={class:"mb-3 w-25"},wo=u(()=>e("label",{for:"",class:"form-label"},"Giá trẻ em (Dưới 5 tuổi) (VNĐ)",-1)),xo={class:"accordion",id:""},So={class:"accordion-item"},ko=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-special","aria-expanded":"true","aria-controls":"accordion-special"}," Điểm khác biệt ")],-1)),Co={id:"accordion-special",class:"accordion-collapse collapse show"},To={class:"accordion-item"},Uo=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-bonus","aria-expanded":"false","aria-controls":"accordion-bonus"}," Dịch vụ đi kèm ")],-1)),Do={id:"accordion-bonus",class:"accordion-collapse collapse"},Lo={class:"accordion-item"},Mo=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-visa","aria-expanded":"false","aria-controls":"accordion-visa"}," Visa ")],-1)),Io={id:"accordion-visa",class:"accordion-collapse collapse"},Oo={class:"accordion-item"},Po=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-detail","aria-expanded":"false","aria-controls":"accordion-detail"}," Lịch trình chi tiết ")],-1)),Eo={id:"accordion-detail",class:"accordion-collapse collapse"},zo={class:"accordion-item"},Bo=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-price-service","aria-expanded":"false","aria-controls":"accordion-price-service"}," Bảng giá và dịch vụ ")],-1)),jo={id:"accordion-price-service",class:"accordion-collapse collapse"},Ao={class:"accordion-item"},No=u(()=>e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#accordion-guide","aria-expanded":"false","aria-controls":"accordion-guide"}," Lưu ý và hướng dẫn ")],-1)),Go={id:"accordion-guide",class:"accordion-collapse collapse"},Ro=["innerHTML"],Fo={__name:"AddTour",setup(o){let a=g(""),l=g(null),d=g(""),c=g(),p=g(""),_=g(""),f=g(1),r=g(!1),h=g([]),x=g(),S=g(),k=g(),U=g(),w=g(),D=g(),V=g(),L=g(),v=g(),s=g(0),C=ie(()=>s.value>=0&&s.value<=3?"red":s.value>3&&s.value<=6?"orange":s.value>6&&s.value<=8?"blue":"green");const E=g();function X(m){console.log(m),m.target.files.length&&(E.value=URL.createObjectURL(m.target.files[0])),l.value=m.target.files[0]}function Y(){const m=new FormData;m.append("tourTitle",a.value),m.append("tourThumbnail",l.value),m.append("tourSchedule",d.value),m.append("tourCategory",c.value),m.append("tourType",p.value),m.append("tourFrom",_.value),m.append("tourLength",f.value),m.append("isHot",r.value),m.append("tourTransport",h.value.toString()),m.append("adultPrice",x.value),m.append("youngPrice",S.value),m.append("childPrice",k.value),m.append("tourSpecial",U.value),m.append("tourBonus",w.value),m.append("tourVisa",D.value),m.append("tourDetail",V.value),m.append("tourPriceService",L.value),m.append("tourGuide",v.value),fe.post("/admin/tour",m,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{console.log(n.data),A.success("Đã nhận thông tin",{autoClose:2e3,theme:"colored",position:A.POSITION.BOTTOM_RIGHT})}).catch(n=>{console.error(n),A.error("Lỗi "+n+" , đảm bảo là bạn đã điền đủ thông tin, hãy đợi 1p rồi submit lại hoặc là reload lại trang",{autoClose:2e3,theme:"colored",position:A.POSITION.BOTTOM_RIGHT})})}return(m,n)=>{const Z=re("v-switch");return z(),B(K,null,[e("div",De,[Le,e("div",Me,[Ie,y(e("input",{type:"text",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[0]||(n[0]=t=>b(a)?a.value=t:a=t)},null,512),[[T,i(a)]])]),e("div",Oe,[Pe,e("input",{class:"form-control",accept:"image/*",type:"file",id:"formFile",onChange:X},null,32),e("div",Ee,[e("img",{src:E.value,alt:"",style:{width:"100%"}},null,8,ze)])]),e("div",Be,[je,y(e("input",{type:"text",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[1]||(n[1]=t=>b(d)?d.value=t:d=t)},null,512),[[T,i(d)]])]),e("div",Ae,[e("div",Ne,[Ge,y(e("select",{class:"form-select mb-3","aria-label":"Smal select example","onUpdate:modelValue":n[2]||(n[2]=t=>b(c)?c.value=t:c=t)},Ke,512),[[H,i(c)]])]),e("div",qe,[Je,y(e("select",{class:"form-select mb-3","aria-label":"Small select example","onUpdate:modelValue":n[3]||(n[3]=t=>b(p)?p.value=t:p=t)},Ye,512),[[H,i(p)]])]),e("div",Ze,[$e,y(e("input",{type:"text",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[4]||(n[4]=t=>b(_)?_.value=t:_=t)},null,512),[[T,i(_)]])])]),e("label",eo,"Thời gian: "+j(i(f))+"N"+j(i(f)-1)+"Đ",1),e("div",oo,[e("div",to,[y(e("input",{type:"number",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[5]||(n[5]=t=>b(f)?f.value=t:f=t)},null,512),[[T,i(f)]])]),e("div",no,[M(Z,{modelValue:i(r),"onUpdate:modelValue":n[6]||(n[6]=t=>b(r)?r.value=t:r=t),label:"Tour hot",color:"orange-darken-3",style:{"margin-right":"1rem"},"hide-details":""},null,8,["modelValue"]),i(r)?(z(),B("i",lo)):se("",!0)])]),e("div",ao,[e("label",io,[de("Di chuyển: "),(z(!0),B(K,null,ce(i(h),t=>(z(),B("span",{key:t},j(t)+", ",1))),128))]),e("div",ro,[y(e("input",{class:"form-check-input",type:"checkbox",value:"Máy bay",id:"plane-check","onUpdate:modelValue":n[7]||(n[7]=t=>b(h)?h.value=t:h=t)},null,512),[[N,i(h)]]),so]),e("div",co,[y(e("input",{class:"form-check-input",type:"checkbox",value:"Ô tô",id:"car-check","onUpdate:modelValue":n[8]||(n[8]=t=>b(h)?h.value=t:h=t)},null,512),[[N,i(h)]]),uo]),e("div",mo,[y(e("input",{class:"form-check-input",type:"checkbox",value:"Tàu hỏa",id:"train-check","onUpdate:modelValue":n[9]||(n[9]=t=>b(h)?h.value=t:h=t)},null,512),[[N,i(h)]]),po])]),e("div",fo,[vo,e("p",{style:ue([{width:"2rem","margin-right":"1rem",color:"red","font-weight":"bold"},{color:i(C)}])},j(i(s)),5),y(e("input",{type:"range",class:"form-range",min:"0",max:"10",id:"customRange2",step:"0.5","onUpdate:modelValue":n[10]||(n[10]=t=>b(s)?s.value=t:s=t)},null,512),[[T,i(s)]])]),e("div",go,[e("div",ho,[bo,y(e("input",{type:"number",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[11]||(n[11]=t=>b(x)?x.value=t:x=t)},null,512),[[T,i(x)]])]),e("div",_o,[yo,y(e("input",{type:"number",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[12]||(n[12]=t=>b(S)?S.value=t:S=t)},null,512),[[T,i(S)]])]),e("div",Vo,[wo,y(e("input",{type:"number",class:"form-control",id:"",placeholder:"","onUpdate:modelValue":n[13]||(n[13]=t=>b(k)?k.value=t:k=t)},null,512),[[T,i(k)]])])]),e("div",xo,[e("div",So,[ko,e("div",Co,[M(i(P),{modelValue:i(U),"onUpdate:modelValue":n[14]||(n[14]=t=>b(U)?U.value=t:U=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])]),e("div",To,[Uo,e("div",Do,[M(i(P),{modelValue:i(w),"onUpdate:modelValue":n[15]||(n[15]=t=>b(w)?w.value=t:w=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])]),e("div",Lo,[Mo,e("div",Io,[M(i(P),{modelValue:i(D),"onUpdate:modelValue":n[16]||(n[16]=t=>b(D)?D.value=t:D=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])]),e("div",Oo,[Po,e("div",Eo,[M(i(P),{modelValue:i(V),"onUpdate:modelValue":n[17]||(n[17]=t=>b(V)?V.value=t:V=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])]),e("div",zo,[Bo,e("div",jo,[M(i(P),{modelValue:i(L),"onUpdate:modelValue":n[18]||(n[18]=t=>b(L)?L.value=t:L=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])]),e("div",Ao,[No,e("div",Go,[M(i(P),{modelValue:i(v),"onUpdate:modelValue":n[19]||(n[19]=t=>b(v)?v.value=t:v=t),"api-key":"8gzqmdnsiplu2pd33s0doas4xo8735024fznwlgttd4ldri6",init:{plugins:" textcolor lists advlist link image table code help wordcount autosave emoticons",toolbar:" forecolor backcolor | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | emoticons"}},null,8,["modelValue"])])])])]),e("div",{onClick:Y,class:"btn btn-success",style:{"margin-top":"1rem",right:"0",float:"right"}},"Add Tour"),e("div",{innerHTML:i(v)},null,8,Ro)],64)}}},Ko=ae(Fo,[["__scopeId","data-v-871fa20e"]]);export{Ko as default};