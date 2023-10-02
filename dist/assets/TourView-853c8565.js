import{_ as I}from"./img2-7c192fe6.js";import{r,o as $,c as k,a as e,q as b,v as y,b as p,k as f,m as d,s as V,f as x,u as U,x as B,y as F,e as N,g as M,j as a,t as w,w as _,z as P,i as G,F as K,l as S}from"./index-baf84528.js";import{L as D}from"./LoadingComponent-243462fb.js";const R={style:{"z-index":"9999"}},A={style:{"margin-top":"0rem"},class:"modal fade",id:"placeModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},j={class:"modal-dialog",style:{"background-color":"F1FAF4"}},q={class:"modal-content",style:{"background-color":"#F1FAF4"}},z=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Đặt Tour"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},J={class:"place-form-container"},Q={class:"mb-3"},W=e("label",{class:"form-label"},[d("Họ & Tên "),e("span",{style:{color:"red"}},"*")],-1),X={class:"mb-3"},Y=e("label",{class:"form-label"},[d("Điện thoại "),e("span",{style:{color:"red"}},"*")],-1),Z={class:"mb-3"},ee=e("label",{class:"form-label"},[d("Email "),e("span",{style:{color:"red"}},"*")],-1),le={class:"adult",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},te=e("p",{style:{margin:"0",padding:"0"}},"Người lớn (Trên 12 tuổi)",-1),oe={class:"teenager",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},ae=e("p",{style:{margin:"0",padding:"0"}},"Trẻ em (Từ 5 - 11 tuổi)",-1),se={class:"children",style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"1rem"}},ne=e("p",{style:{margin:"0",padding:"0"}},"Trẻ em (Dưới 5 tuổi)",-1),de={class:"mb-3"},ie=e("label",{class:"form-label"},"Ghi chú",-1),re=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),ce={__name:"PlaceModal",props:["tourId"],setup(L){const g=L;console.log(g.tourId);let l=r(""),u=r(""),m=r(""),h=r(1),c=r(),i=r(),t=r("");function n(){if(!l.value||!u.value||!m.value||!h.value||!t.value)V.error("Bạn cần điền đầy đủ thông tin đặt tour",{autoClose:1e3,theme:"dark",position:V.POSITION.BOTTOM_RIGHT});else{const T={tourId:g.tourId,name:l.value,phone:u.value,email:m.value,adult:h.value,teenager:c.value,children:i.value,note:t.value};x.post("/client/order",T).then(s=>{console.log(s.data),V.success("Đặt tour thành công",{autoClose:2e3,theme:"colored",position:V.POSITION.BOTTOM_RIGHT})}).catch(s=>{console.error(s)})}}return(T,s)=>($(),k("div",R,[e("div",A,[e("div",j,[e("div",q,[z,e("div",E,[e("div",J,[e("div",Q,[W,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[0]||(s[0]=o=>f(l)?l.value=o:l=o)},null,512),[[y,p(l)]])]),e("div",X,[Y,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[1]||(s[1]=o=>f(u)?u.value=o:u=o)},null,512),[[y,p(u)]])]),e("div",Z,[ee,b(e("input",{type:"email",style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[2]||(s[2]=o=>f(m)?m.value=o:m=o)},null,512),[[y,p(m)]])]),e("div",le,[te,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[3]||(s[3]=o=>f(h)?h.value=o:h=o)},null,512),[[y,p(h)]])]),e("div",oe,[ae,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[4]||(s[4]=o=>f(c)?c.value=o:c=o)},null,512),[[y,p(c)]])]),e("div",se,[ne,b(e("input",{type:"number",style:{height:"3rem",width:"8rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":s[5]||(s[5]=o=>f(i)?i.value=o:i=o)},null,512),[[y,p(i)]])]),e("div",de,[ie,b(e("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":s[6]||(s[6]=o=>f(t)?t.value=o:t=o)},null,512),[[y,p(t)]])])])]),e("div",{class:"modal-footer"},[re,e("a",{class:"btn",style:{"background-color":"#97CBB4"},target:"_blank",onClick:n},"Đặt Tour")])])])])]))}},ue={style:{"z-index":"9999"}},me={style:{"margin-top":"0rem"},class:"modal fade",id:"advisoryModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},he={class:"modal-dialog",style:{"background-color":"F1FAF4"}},_e={class:"modal-content",style:{"background-color":"#F1FAF4"}},pe=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Để lại thông tin"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ve={class:"modal-body"},be={class:"advisory-form-container"},ye={class:"mb-3"},fe=e("label",{class:"form-label"},[d("Họ & Tên "),e("span",{style:{color:"red"}},"*")],-1),ge={class:"mb-3"},Te=e("label",{class:"form-label"},[d("Điện thoại "),e("span",{style:{color:"red"}},"*")],-1),we={class:"mb-3"},Ve=e("label",{class:"form-label"},[d("Email "),e("span",{style:{color:"red"}},"*")],-1),Me={class:"mb-3"},$e=e("label",{class:"form-label"},"Ghi chú",-1),ke={class:"modal-footer"},Le=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Ie=["onClick"],xe={__name:"AdvisoryModal",props:["tourId"],setup(L){const g=L;console.log(g.tourId),U();const l=r(),u=r(),m=r(),h=r();function c(){if(!l.value||!u.value||!m.value||!h.value)V.error("Bạn cần điền đầy đủ thông tin",{autoClose:1e3,theme:"dark",position:V.POSITION.BOTTOM_RIGHT});else{const i={name:l.value,phone:u.value,email:m.value,note:h.value,tour_id:g.tourId};x.post("/client/advisory",i).then(t=>{console.log(t.data),V.success("Đã nhận thông tin",{autoClose:2e3,theme:"dark",position:V.POSITION.BOTTOM_RIGHT})}).catch(t=>{console.error(t)})}}return(i,t)=>($(),k("div",ue,[e("div",me,[e("div",he,[e("div",_e,[pe,e("div",ve,[e("div",be,[e("div",ye,[fe,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n)},null,512),[[y,l.value]])]),e("div",ge,[Te,b(e("input",{style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[1]||(t[1]=n=>u.value=n)},null,512),[[y,u.value]])]),e("div",we,[Ve,b(e("input",{type:"email",style:{height:"3rem"},class:"form-control",id:"",placeholder:"","onUpdate:modelValue":t[2]||(t[2]=n=>m.value=n)},null,512),[[y,m.value]])]),e("div",Me,[$e,b(e("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":t[3]||(t[3]=n=>h.value=n)},null,512),[[y,h.value]])])])]),e("div",ke,[Le,e("a",{class:"btn",style:{"background-color":"#97CBB4"},target:"_blank",onClick:B(c,["prevent"])},"Đặt Tour",8,Ie)])])])])]))}};const He=e("hr",{class:"hr"},null,-1),Ce={key:0,class:"content-container-outer"},Oe={class:"main-content"},Ue={style:{"margin-bottom":"2rem"}},Be=e("p",{style:{width:"4rem"}},null,-1),Fe=e("p",{style:{width:"4rem"}},null,-1),Ne=e("p",{style:{width:"4rem"}},null,-1),Pe=e("p",{style:{width:"4rem"}},null,-1),Ge={class:"side-bar"},Ke={key:0,class:"place-order"},Se={style:{color:"#ff6b00"}},De={style:{color:"#ff6b00"}},Re={style:{color:"#ff6b00"}},Ae={style:{color:"#ff6b00"}},je={style:{color:"#ff6b00"}},qe=e("div",{style:{height:"5rem"}},null,-1),ze={style:{color:"#ff6b00"}},Ee=e("div",{class:"action-button"},[e("button",{class:"btn place-btn","data-bs-toggle":"modal","data-bs-target":"#placeModal"},"Đặt tour"),e("button",{class:"btn advise-btn","data-bs-toggle":"modal","data-bs-target":"#advisoryModal"},"Tư vấn")],-1),Je=S('<div class="hot-tour"><h2 style="padding-left:1rem;">Tour hot</h2><div class="card" style="background:none;border:none;"><img src="'+I+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p>Giá: <span style="font-weight:bold;color:#ff6b00;">3.600.000</span> VNĐ </p><hr class="hr"></div></div><div class="card" style="background:none;border:none;"><img src="'+I+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p>Giá: <span style="font-weight:bold;color:#ff6b00;">3.600.000</span> VNĐ </p><hr class="hr"></div></div><div class="card" style="background:none;border:none;"><img src="'+I+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p>Giá: <span style="font-weight:bold;color:#ff6b00;">3.600.000</span> VNĐ </p><hr class="hr"></div></div><div class="card" style="background:none;border:none;"><img src="'+I+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p>Giá: <span style="font-weight:bold;color:#ff6b00;">3.600.000</span> VNĐ </p><hr class="hr"></div></div></div>',1),Qe=e("div",null,null,-1),Ze={__name:"TourView",setup(L){const g=F(),l=r(),u=r(),m=r(),h=r();N(()=>{x.get("client/each-tour/"+g.query.id).then(t=>{console.log(t.data[0]),l.value=t.data[0],u.value=t.data[0].adultprice,m.value=t.data[0].youngprice,h.value=t.data[0].childprice}).catch(t=>{console.error(t)})});let c=r(),i=r();return(t,n)=>{const T=M("v-tab"),s=M("v-tabs"),o=M("v-window-item"),H=M("v-window"),C=M("v-card-text"),O=M("v-card");return $(),k(K,null,[a(ce,{tourId:p(g).query.id,childPrice:h.value,adultPrice:u.value,teenagerPrice:m.value},null,8,["tourId","childPrice","adultPrice","teenagerPrice"]),a(xe,{tourId:p(g).query.id},null,8,["tourId"]),He,l.value?($(),k("div",Ce,[e("div",Oe,[e("h2",Ue,w(l.value.title),1),a(O,{class:"first-section",elevation:"0"},{default:_(()=>[a(s,{class:"tab-slider",modelValue:p(c),"onUpdate:modelValue":n[0]||(n[0]=v=>f(c)?c.value=v:c=v),color:"white","align-tabs":"start"},{default:_(()=>[a(T,{class:"each-tab",value:"one"},{default:_(()=>[d("Điểm khác biệt")]),_:1}),Be,a(T,{class:"each-tab",value:"two"},{default:_(()=>[d("Dịch vụ đi kèm")]),_:1}),Fe,a(T,{class:"each-tab",value:"three"},{default:_(()=>[d("Visa")]),_:1})]),_:1},8,["modelValue"]),a(C,null,{default:_(()=>[a(H,{modelValue:p(c),"onUpdate:modelValue":n[1]||(n[1]=v=>f(c)?c.value=v:c=v)},{default:_(()=>[a(o,{value:"one",innerHTML:l.value.special},null,8,["innerHTML"]),a(o,{value:"two",innerHTML:l.value.bonus},null,8,["innerHTML"]),a(o,{value:"three",innerHTML:l.value.visa},null,8,["innerHTML"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(O,{class:"second-section",elevation:"0"},{default:_(()=>[a(s,{class:"tab-slider",modelValue:p(i),"onUpdate:modelValue":n[2]||(n[2]=v=>f(i)?i.value=v:i=v),color:"white","align-tabs":"start"},{default:_(()=>[a(T,{class:"each-tab",value:"one"},{default:_(()=>[d("Lịch trình chi tiết")]),_:1}),Ne,a(T,{class:"each-tab",value:"two"},{default:_(()=>[d("Bảng giá và dịch vụ")]),_:1}),Pe,a(T,{class:"each-tab",value:"three"},{default:_(()=>[d("Lưu ý và hướng dẫn")]),_:1})]),_:1},8,["modelValue"]),a(C,null,{default:_(()=>[a(H,{modelValue:p(i),"onUpdate:modelValue":n[3]||(n[3]=v=>f(i)?i.value=v:i=v)},{default:_(()=>[a(o,{value:"one",innerHTML:l.value.detail},null,8,["innerHTML"]),a(o,{value:"two",innerHTML:l.value.priceservice},null,8,["innerHTML"]),a(o,{value:"three",innerHTML:l.value.guide},null,8,["innerHTML"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),e("div",Ge,[l.value?($(),k("div",Ke,[e("h5",null,w(l.value.title),1),e("p",null,[d("Lịch trình: "),e("span",Se,w(l.value.schedule),1)]),e("p",null,[d("Loại tour: "),e("span",De,w(l.value.tourtype),1)]),e("p",null,[d("Thời gian "),e("span",Re,w(l.value.days)+"N"+w(l.value.days-1)+"Đ",1)]),e("p",null,[d("Khởi hành: "),e("span",Ae,w(l.value.departure),1)]),e("p",null,[d("Vận chuyển: "),e("span",je,w(l.value.transportation),1)]),qe,e("p",null,[d("Giá tour: "),e("span",ze,w(t.numeralFormat(l.value.adultprice)),1)]),Ee])):P("",!0),Je])])):($(),G(D,{key:1})),Qe],64)}}};export{Ze as default};