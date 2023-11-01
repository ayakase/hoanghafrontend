import{_ as O}from"./img2-7c192fe6.js";import{v as j,r as o,o as P,c as L,a as e,x as b,y as g,b as p,l as y,t as r,j as d,z as x,f as N,u as z,A as E,_ as q,B as J,e as Q,g as F,i as B,k as R,n,w as v,F as W,m as A,p as X,d as Y}from"./index-4d4eda78.js";import"./vue-countup-v3.es-aabe88dd.js";import{L as Z}from"./LoadingComponent-204e7275.js";const ee={style:{"z-index":"9999"}},ae={style:{"margin-top":"0rem"},class:"modal fade",id:"placeModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},te={class:"modal-dialog",style:{"background-color":"F1FAF4"}},le={class:"modal-content",style:{"background-color":"#F1FAF4"}},oe=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Đặt Tour"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),se={class:"modal-body"},ne={class:"place-form-container"},ie={class:"mb-3"},de=e("label",{class:"form-label"},[d("Họ & Tên "),e("span",{style:{color:"red"}},"*")],-1),ce={class:"mb-3"},re=e("label",{class:"form-label"},[d("Điện thoại "),e("span",{style:{color:"red"}},"*")],-1),ue={class:"mb-3"},me=e("label",{class:"form-label"},[d("Email "),e("span",{style:{color:"red"}},"*")],-1),he={class:"adult",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},ve=e("p",{style:{margin:"0",padding:"0"}},"Người lớn (Trên 12 tuổi)",-1),pe={style:{margin:"0",padding:"0",color:"orangered"}},fe={class:"teenager",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},_e=e("p",{style:{margin:"0",padding:"0"}},"Trẻ em(Từ 6 - 10 tuổi)",-1),be={style:{margin:"0",padding:"0",color:"orangered"}},ge={class:"children",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},ye=e("p",{style:{margin:"0",padding:"0"}},"Trẻ em (Từ 2 - 5 tuổi) ",-1),we={style:{margin:"0",padding:"0",color:"orangered"}},Te={class:"infant",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},ke=e("p",{style:{margin:"0",padding:"0"}},"Trẻ em (Dưới 2 tuổi) ",-1),Ve={style:{margin:"0",padding:"0",color:"orangered"}},$e={class:"mb-4"},Pe={style:{color:"chocolate"}},Ie=e("div",{style:{display:"flex","flex-direction":"row",gap:"1rem","font-size":"1.5rem"}},null,-1),Me={class:"mb-3"},xe=e("label",{class:"form-label"},"Ghi chú",-1),Le=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Ce={__name:"PlaceModal",props:["tourId","childPrice","adultPrice","teenagerPrice","infantPrice"],setup(I){const i=I;console.log(i.tourId),console.log(i.adultPrice),console.log(i.teenagerPrice),console.log(i.childPrice),console.log(i.infantPrice);let l=j(()=>i.adultPrice*f.value+i.teenagerPrice*w.value+i.childPrice*s.value+i.infantPrice*c.value),u=o(""),m=o(""),h=o(""),f=o(1),w=o(0),s=o(0),c=o(0),k=o("");function U(){if(!u.value||!m.value||!h.value||!f.value||!k.value)x.error("Bạn cần điền đầy đủ thông tin đặt tour",{autoClose:1e3,theme:"dark",position:x.POSITION.BOTTOM_RIGHT});else{const $={tourId:i.tourId,name:u.value,phone:m.value,email:h.value,adult:f.value,teenager:w.value,children:s.value,infant:c.value,note:k.value};N.post("/client/order",$).then(t=>{console.log(t.data),x.success("Đặt tour thành công",{autoClose:2e3,theme:"colored",position:x.POSITION.BOTTOM_RIGHT})}).catch(t=>{console.error(t)})}}return($,t)=>(P(),L("div",ee,[e("div",ae,[e("div",te,[e("div",le,[oe,e("div",se,[e("div",ne,[e("div",ie,[de,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[0]||(t[0]=a=>y(u)?u.value=a:u=a)},null,512),[[g,p(u)]])]),e("div",ce,[re,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[1]||(t[1]=a=>y(m)?m.value=a:m=a)},null,512),[[g,p(m)]])]),e("div",ue,[me,b(e("input",{type:"email",style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[2]||(t[2]=a=>y(h)?h.value=a:h=a)},null,512),[[g,p(h)]])]),e("div",he,[ve,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[3]||(t[3]=a=>y(f)?f.value=a:f=a)},null,512),[[g,p(f)]]),e("p",pe," x "+r($.numeralFormat(i.adultPrice)),1)]),e("div",fe,[_e,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[4]||(t[4]=a=>y(w)?w.value=a:w=a)},null,512),[[g,p(w)]]),e("p",be," x "+r($.numeralFormat(i.teenagerPrice)),1)]),e("div",ge,[ye,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[5]||(t[5]=a=>y(s)?s.value=a:s=a)},null,512),[[g,p(s)]]),e("p",we," x "+r($.numeralFormat(i.childPrice)),1)]),e("div",Te,[ke,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[6]||(t[6]=a=>y(c)?c.value=a:c=a)},null,512),[[g,p(c)]]),e("p",Ve," x "+r($.numeralFormat(i.infantPrice)),1)]),e("h4",$e,[d("Tổng số tiền: "),e("span",Pe,r($.numeralFormat(p(l))),1)]),Ie,e("div",Me,[xe,b(e("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":t[7]||(t[7]=a=>y(k)?k.value=a:k=a)},null,512),[[g,p(k)]])])])]),e("div",{class:"modal-footer"},[Le,e("a",{class:"btn",style:{"background-color":"#97CBB4"},target:"_blank",onClick:U},"Đặt Tour")])])])])]))}},He={style:{"z-index":"9999"}},Fe={style:{"margin-top":"0rem"},class:"modal fade",id:"advisoryModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ue={class:"modal-dialog",style:{"background-color":"F1FAF4"}},Oe={class:"modal-content",style:{"background-color":"#F1FAF4"}},Be=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Để lại thông tin"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ne={class:"modal-body"},Ge={class:"advisory-form-container"},Se={class:"mb-3"},Ke=e("label",{class:"form-label"},[d("Họ & Tên "),e("span",{style:{color:"red"}},"*")],-1),De={class:"mb-3"},Re=e("label",{class:"form-label"},[d("Điện thoại "),e("span",{style:{color:"red"}},"*")],-1),Ae={class:"mb-3"},je=e("label",{class:"form-label"},[d("Email "),e("span",{style:{color:"red"}},"*")],-1),ze={class:"mb-3"},Ee=e("label",{class:"form-label"},"Ghi chú",-1),qe={class:"modal-footer"},Je=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Qe=["onClick"],We={__name:"AdvisoryModal",props:["tourId"],setup(I){const i=I;console.log(i.tourId),z();const l=o(),u=o(),m=o(),h=o();function f(){if(!l.value||!u.value||!m.value||!h.value)x.error("Bạn cần điền đầy đủ thông tin",{autoClose:1e3,theme:"dark",position:x.POSITION.BOTTOM_RIGHT});else{const w={name:l.value,phone:u.value,email:m.value,note:h.value,tour_id:i.tourId};N.post("/client/advisory",w).then(s=>{console.log(s.data),x.success("Đã nhận thông tin",{autoClose:2e3,theme:"dark",position:x.POSITION.BOTTOM_RIGHT})}).catch(s=>{console.error(s)})}}return(w,s)=>(P(),L("div",He,[e("div",Fe,[e("div",Ue,[e("div",Oe,[Be,e("div",Ne,[e("div",Ge,[e("div",Se,[Ke,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[0]||(s[0]=c=>l.value=c)},null,512),[[g,l.value]])]),e("div",De,[Re,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[1]||(s[1]=c=>u.value=c)},null,512),[[g,u.value]])]),e("div",Ae,[je,b(e("input",{type:"email",style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[2]||(s[2]=c=>m.value=c)},null,512),[[g,m.value]])]),e("div",ze,[Ee,b(e("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":s[3]||(s[3]=c=>h.value=c)},null,512),[[g,h.value]])])])]),e("div",qe,[Je,e("a",{class:"btn",style:{"background-color":"#97CBB4"},target:"_blank",onClick:E(f,["prevent"])},"Đặt Tour",8,Qe)])])])])]))}};const V=I=>(X("data-v-ae4ff36c"),I=I(),Y(),I),Xe={"aria-label":"breadcrumb"},Ye={class:"breadcrumb"},Ze=V(()=>e("li",{class:"breadcrumb-item"},[e("i",{class:"fa-solid fa-house"}),d(),e("a",{href:"/",class:"home-breadcrumb"},"Trang chủ")],-1)),ea={key:0,class:"breadcrumb-item"},aa=V(()=>e("hr",{class:"hr"},null,-1)),ta={key:1,class:"content-container-outer"},la={class:"main-content"},oa={key:0,class:"iframe_container"},sa=["src"],na=A('<div class="gallery" data-v-ae4ff36c><img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse" data-v-ae4ff36c><img src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks" data-v-ae4ff36c><img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain" data-v-ae4ff36c><img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" data-v-ae4ff36c><img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees" data-v-ae4ff36c><img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky" data-v-ae4ff36c><img src="https://picsum.photos/id/110/300/300" alt="a cool landscape" data-v-ae4ff36c><img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings" data-v-ae4ff36c><img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain" data-v-ae4ff36c></div>',1),ia={style:{"margin-bottom":"2rem"}},da=V(()=>e("p",{style:{width:"4rem"}},null,-1)),ca=V(()=>e("p",{style:{width:"4rem"}},null,-1)),ra=V(()=>e("p",{style:{width:"4rem"}},null,-1)),ua=V(()=>e("p",{style:{width:"4rem"}},null,-1)),ma=V(()=>e("i",{class:"fa-solid fa-link"},null,-1)),ha=[ma],va={class:"side-bar"},pa={key:0,class:"place-order"},fa={style:{color:"#ff6b00"}},_a={style:{color:"#ff6b00"}},ba={style:{color:"#ff6b00"}},ga={style:{color:"#ff6b00"}},ya={style:{color:"#ff6b00"}},wa=V(()=>e("div",{style:{height:"5rem"}},null,-1)),Ta={style:{color:"#ff6b00"}},ka=V(()=>e("div",{class:"action-button"},[e("button",{class:"btn place-btn","data-bs-toggle":"modal","data-bs-target":"#placeModal"},"Đặt tour"),e("button",{class:"btn advise-btn","data-bs-toggle":"modal","data-bs-target":"#advisoryModal"},"Tư vấn")],-1)),Va=A('<div class="hot-tour" data-v-ae4ff36c><h2 style="padding-left:1rem;" data-v-ae4ff36c>Tour hot</h2><div class="card" style="background:none;border:none;" data-v-ae4ff36c><img src="'+O+'" class="card-img-top" alt="..." data-v-ae4ff36c><div class="card-body" data-v-ae4ff36c><h5 class="card-title" data-v-ae4ff36c>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-ae4ff36c>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-ae4ff36c>3.600.000</span> VNĐ </p><hr class="hr" data-v-ae4ff36c></div></div><div class="card" style="background:none;border:none;" data-v-ae4ff36c><img src="'+O+'" class="card-img-top" alt="..." data-v-ae4ff36c><div class="card-body" data-v-ae4ff36c><h5 class="card-title" data-v-ae4ff36c>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-ae4ff36c>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-ae4ff36c>3.600.000</span> VNĐ </p><hr class="hr" data-v-ae4ff36c></div></div><div class="card" style="background:none;border:none;" data-v-ae4ff36c><img src="'+O+'" class="card-img-top" alt="..." data-v-ae4ff36c><div class="card-body" data-v-ae4ff36c><h5 class="card-title" data-v-ae4ff36c>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-ae4ff36c>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-ae4ff36c>3.600.000</span> VNĐ </p><hr class="hr" data-v-ae4ff36c></div></div><div class="card" style="background:none;border:none;" data-v-ae4ff36c><img src="'+O+'" class="card-img-top" alt="..." data-v-ae4ff36c><div class="card-body" data-v-ae4ff36c><h5 class="card-title" data-v-ae4ff36c>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-ae4ff36c>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-ae4ff36c>3.600.000</span> VNĐ </p><hr class="hr" data-v-ae4ff36c></div></div></div>',1),$a=V(()=>e("div",null,null,-1)),Pa={__name:"TourView",setup(I){const i=J(),l=o(),u=o(),m=o(),h=o(),f=o(),w=o(!1),s=o(),c=o(),k=o(),U=o();function $(){U.value=window.location.href}Q(()=>{console.log(i.params.slug),N.get("client/each-tour/"+i.params.slug).then(_=>{console.log(_.data[0]),l.value=_.data[0],u.value=_.data[0].adult_price,m.value=_.data[0].teenager_price,h.value=_.data[0].child_price,f.value=_.data[0].infant_price,s.value=_.data[0].id,k.value=_.data[0].tik_tok_id,c.value="https://www.tiktok.com/embed/"+k.value}).catch(_=>{console.error(_)}),setTimeout(()=>{w.value=!0},1e3)});let t=o(),a=o();return(_,M)=>{const C=F("v-tab"),G=F("v-tabs"),H=F("v-window-item"),S=F("v-window"),K=F("v-card-text"),D=F("v-card");return P(),L(W,null,[e("nav",Xe,[e("ol",Ye,[Ze,l.value?(P(),L("li",ea,r(l.value.title),1)):B("",!0)])]),l.value?(P(),R(Ce,{key:0,tourId:s.value,childPrice:h.value,adultPrice:u.value,teenagerPrice:m.value,infantPrice:f.value},null,8,["tourId","childPrice","adultPrice","teenagerPrice","infantPrice"])):B("",!0),n(We,{tourId:s.value},null,8,["tourId"]),aa,l.value?(P(),L("div",ta,[e("div",la,[e("div",null,[k.value?(P(),L("div",oa,[e("iframe",{src:c.value,class:"iframe",allowfullscreen:"",scrolling:"no",allow:"encrypted-media;"},null,8,sa)])):B("",!0),na]),e("h2",ia,r(l.value.title),1),n(D,{class:"first-section",elevation:"0"},{default:v(()=>[n(G,{class:"tab-slider",modelValue:p(t),"onUpdate:modelValue":M[0]||(M[0]=T=>y(t)?t.value=T:t=T),color:"white","align-tabs":"start"},{default:v(()=>[n(C,{class:"each-tab",value:"one"},{default:v(()=>[d("Điểm khác biệt")]),_:1}),da,n(C,{class:"each-tab",value:"two"},{default:v(()=>[d("Dịch vụ đi kèm")]),_:1}),ca,n(C,{class:"each-tab",value:"three"},{default:v(()=>[d("Visa")]),_:1})]),_:1},8,["modelValue"]),n(K,null,{default:v(()=>[n(S,{modelValue:p(t),"onUpdate:modelValue":M[1]||(M[1]=T=>y(t)?t.value=T:t=T)},{default:v(()=>[n(H,{value:"one",innerHTML:l.value.special},null,8,["innerHTML"]),n(H,{value:"two",innerHTML:l.value.bonus},null,8,["innerHTML"]),n(H,{value:"three",innerHTML:l.value.visa},null,8,["innerHTML"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(D,{class:"second-section",elevation:"0"},{default:v(()=>[n(G,{class:"tab-slider",modelValue:p(a),"onUpdate:modelValue":M[2]||(M[2]=T=>y(a)?a.value=T:a=T),color:"white","align-tabs":"start"},{default:v(()=>[n(C,{class:"each-tab",value:"one"},{default:v(()=>[d("Lịch trình chi tiết")]),_:1}),ra,n(C,{class:"each-tab",value:"two"},{default:v(()=>[d("Bảng giá và dịch vụ")]),_:1}),ua,n(C,{class:"each-tab",value:"three"},{default:v(()=>[d("Lưu ý và hướng dẫn")]),_:1})]),_:1},8,["modelValue"]),n(K,null,{default:v(()=>[n(S,{modelValue:p(a),"onUpdate:modelValue":M[3]||(M[3]=T=>y(a)?a.value=T:a=T)},{default:v(()=>[n(H,{value:"one",innerHTML:l.value.detail},null,8,["innerHTML"]),n(H,{value:"two",innerHTML:l.value.priceservice},null,8,["innerHTML"]),n(H,{value:"three",innerHTML:l.value.guide},null,8,["innerHTML"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),e("div",null,[e("button",{class:"btn",onClick:$,style:{height:"3rem",width:"3rem","background-color":"#86c5a9","font-size":"large",color:"white"}},ha),e("p",null,r(U.value),1)])]),e("div",va,[l.value?(P(),L("div",pa,[e("h5",null,r(l.value.title),1),e("p",null,[d("Lịch trình: "),e("span",fa,r(l.value.schedule),1)]),e("p",null,[d("Loại tour: "),e("span",_a,r(l.value.tourtype),1)]),e("p",null,[d("Thời gian "),e("span",ba,r(l.value.days)+"N"+r(l.value.days-1)+"Đ",1)]),e("p",null,[d("Khởi hành: "),e("span",ga,r(l.value.departure),1)]),e("p",null,[d("Vận chuyển: "),e("span",ya,r(l.value.transportation),1)]),wa,e("p",null,[d("Giá tour: "),e("span",Ta,r(_.numeralFormat(l.value.adult_price)),1)]),ka])):B("",!0),Va])])):(P(),R(Z,{key:2})),$a],64)}}},Ca=q(Pa,[["__scopeId","data-v-ae4ff36c"]]);export{Ca as default};