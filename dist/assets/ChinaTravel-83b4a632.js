import{L as A}from"./LoadingComponent-04ff41d5.js";import{_ as B,u as I,r as _,o as F,b as M,a as m,c as r,d as h,e,f as c,l as d,F as j,g as q,h as H,i as f,j as P,t as s,k as Q,w as R,p as U,m as z}from"./index-25ca64ce.js";const a=v=>(U("data-v-8a4ca365"),v=v(),z(),v),G={class:"china-container"},K=Q('<nav aria-label="breadcrumb" data-v-8a4ca365><ol class="breadcrumb" data-v-8a4ca365><li class="breadcrumb-item" data-v-8a4ca365><i class="fa-solid fa-house" data-v-8a4ca365></i> <a href="/" class="home-breadcrumb" data-v-8a4ca365>Trang chủ</a></li><li class="breadcrumb-item" data-v-8a4ca365>Du lịch Trung Quốc</li></ol></nav><h2 style="color:#ff6b00;" data-v-8a4ca365>Du lịch Trung Quốc</h2>',2),O={class:"section-container"},$={class:"tour-container"},J={class:"sort-container"},W=a(()=>e("p",null,"Sắp xếp theo: ",-1)),X={class:"sort-types"},Y=a(()=>e("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),Z=a(()=>e("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),ee=["onClick"],te={class:"d-flex align-center justify-center fill-height"},se={class:"tour-detail-container"},ae=["onClick"],oe={class:"below-section",style:{}},ne={class:"schedule"},ce=a(()=>e("b",null,"Mức độ đề xuất: ",-1)),le={style:{color:"orange"}},ie={class:"schedule"},re=a(()=>e("b",null,"Lịch trình: ",-1)),de={style:{color:"orange"}},ue={class:"tourtype"},_e=a(()=>e("b",null,"Loại tour: ",-1)),he={style:{color:"green"}},ve={class:"days"},pe=a(()=>e("b",null,"Thời gian: ",-1)),me={class:"departure"},fe=a(()=>e("b",null,"Khởi hành: ",-1)),ge={class:"transportation"},ye=a(()=>e("b",null,"Vận chuyển: ",-1)),be={class:"price"},Ce={style:{"font-size":"x-large",color:"orangered"}},ke=a(()=>e("span",{style:{color:"orangered","font-weight":"100"}}," VNĐ",-1)),Se={__name:"ChinaTravel",setup(v){const g=I();let y=_(),l=_(1),p=_(),u=_("createdAt"),o=_("DESC");function C(){o.value="ASC",n()}function k(){o.value="DESC",n()}function S(){u.value="createdAt",o.value="DESC",n()}function w(){u.value="recommend",o.value="DESC",n()}function T(){u.value="adultprice",o.value="ASC",n()}function x(){u.value="days",o.value="DESC",n()}F(()=>{n()});function D(){n()}function n(){p.value=null,M.get("/client/tour/1/"+u.value+"/"+o.value+"/"+l.value).then(i=>{p.value=i.data.rows,y.value=i.data.count/10+1}).catch(i=>{console.error(i)})}return(i,b)=>{const V=m("v-progress-circular"),E=m("v-img"),N=m("v-pagination");return r(),h("div",G,[K,e("div",O,[e("div",$,[e("div",J,[W,e("div",X,[e("div",{class:"sort-type",onClick:w},"Hoàng Hà đề xuất"),e("div",{class:"sort-type",onClick:S},"Mới nhất"),e("div",{class:"sort-type",onClick:x},"Thời lượng tour"),e("div",{class:"sort-type",onClick:T},"Giá tour"),c(o)=="DESC"?(r(),h("div",{key:0,class:"sort-type",onClick:C},[d("Từ cao đến thấp   "),Y])):(r(),h("div",{key:1,class:"sort-type",onClick:k},[d("Từ thấp lên cao   "),Z]))])]),c(p)?(r(!0),h(j,{key:0},q(c(p),t=>(r(),h("div",{key:t,class:"tour-individual"},[e("div",{class:"image-container",onClick:L=>c(g).push({path:"/tourdetail",query:{id:t.id}})},[f(E,{cover:"",width:50,class:"thumbnail",src:t.thumbnail},{placeholder:R(()=>[e("div",te,[f(V,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])],8,ee),e("div",se,[e("div",{class:"title",onClick:L=>c(g).push({path:"/tourdetail",query:{id:t.id}})},s(t.title),9,ae),e("div",oe,[e("div",ne,[ce,e("span",le,s(t.recommend),1)]),e("div",ie,[re,e("span",de,s(t.schedule),1)]),e("div",ue,[_e,d(),e("span",he,s(t.tourtype),1)]),e("div",ve,[pe,d(s(t.days)+"N"+s(t.days-1)+"Đ",1)]),e("div",me,[fe,d(s(t.departure),1)]),e("div",ge,[ye,d(s(t.transportation),1)])])]),e("div",be,[e("span",Ce,[e("b",null,s(i.numeralFormat(t.adultprice)),1)]),ke])]))),128)):(r(),H(A,{key:1})),f(N,{onClick:D,modelValue:c(l),"onUpdate:modelValue":b[0]||(b[0]=t=>P(l)?l.value=t:l=t),length:c(y),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),e("div",null,s(c(l)),1)])])])}}},xe=B(Se,[["__scopeId","data-v-8a4ca365"]]);export{xe as default};
