import{_ as p}from"./img2-7c192fe6.js";import{L as B}from"./LoadingComponent-243462fb.js";import{_ as G,u as I,r as u,e as F,f as g,g as m,o as r,c as _,a,b as n,m as v,F as M,h as R,i as j,j as y,k as q,t as o,l as w,w as P,p as U,d as z}from"./index-baf84528.js";const c=f=>(U("data-v-7b5c9fe0"),f=f(),z(),f),O={class:"domestic-container"},$=w('<nav aria-label="breadcrumb" data-v-7b5c9fe0><ol class="breadcrumb" data-v-7b5c9fe0><li class="breadcrumb-item" data-v-7b5c9fe0><i class="fa-solid fa-house" data-v-7b5c9fe0></i> <a href="/" class="home-breadcrumb" data-v-7b5c9fe0>Trang chủ</a></li><li class="breadcrumb-item" data-v-7b5c9fe0>Du lịch trong nước</li></ol></nav><h2 style="color:#ff6b00;" data-v-7b5c9fe0>Du lịch trong nước</h2>',2),J={class:"section-container"},Q={class:"tour-container"},W={class:"sort-container"},X=c(()=>a("p",null,"Sắp xếp theo: ",-1)),Y={class:"sort-types"},Z=c(()=>a("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),aa=c(()=>a("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),ea=["onClick"],ta={class:"d-flex align-center justify-center fill-height"},sa={class:"tour-detail-container"},oa=["onClick"],ca={class:"below-section",style:{}},la={class:"schedule"},na=c(()=>a("b",null,"Mức độ đề xuất: ",-1)),da={style:{color:"orange"}},ia={class:"schedule"},ra=c(()=>a("b",null,"Lịch trình: ",-1)),va={style:{color:"orange"}},ha={class:"tourtype"},ua=c(()=>a("b",null,"Loại tour: ",-1)),_a={style:{color:"green"}},fa={class:"days"},ba=c(()=>a("b",null,"Thời gian: ",-1)),pa={class:"departure"},ga=c(()=>a("b",null,"Khởi hành: ",-1)),ma={class:"transportation"},ya=c(()=>a("b",null,"Vận chuyển: ",-1)),Ca={class:"price"},ka={style:{"font-size":"x-large",color:"orangered"}},wa=c(()=>a("span",{style:{color:"orangered","font-weight":"100"}}," VNĐ",-1)),Sa=w('<div class="hot-tour" data-v-7b5c9fe0><h2 style="padding-left:1rem;" data-v-7b5c9fe0>Tour hot</h2><div class="card" style="background:none;border:none;" data-v-7b5c9fe0><img src="'+p+'" class="card-img-top" alt="..." data-v-7b5c9fe0><div class="card-body" data-v-7b5c9fe0><h5 class="card-title" data-v-7b5c9fe0>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-7b5c9fe0>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-7b5c9fe0>3.600.000</span> VNĐ </p><hr class="hr" data-v-7b5c9fe0></div></div><div class="card" style="background:none;border:none;" data-v-7b5c9fe0><img src="'+p+'" class="card-img-top" alt="..." data-v-7b5c9fe0><div class="card-body" data-v-7b5c9fe0><h5 class="card-title" data-v-7b5c9fe0>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-7b5c9fe0>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-7b5c9fe0>3.600.000</span> VNĐ </p><hr class="hr" data-v-7b5c9fe0></div></div><div class="card" style="background:none;border:none;" data-v-7b5c9fe0><img src="'+p+'" class="card-img-top" alt="..." data-v-7b5c9fe0><div class="card-body" data-v-7b5c9fe0><h5 class="card-title" data-v-7b5c9fe0>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-7b5c9fe0>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-7b5c9fe0>3.600.000</span> VNĐ </p><hr class="hr" data-v-7b5c9fe0></div></div><div class="card" style="background:none;border:none;" data-v-7b5c9fe0><img src="'+p+'" class="card-img-top" alt="..." data-v-7b5c9fe0><div class="card-body" data-v-7b5c9fe0><h5 class="card-title" data-v-7b5c9fe0>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-7b5c9fe0>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-7b5c9fe0>3.600.000</span> VNĐ </p><hr class="hr" data-v-7b5c9fe0></div></div></div>',1),Ta={__name:"DomesticTravel",setup(f){const C=I();let b=u(),l=u(1),h=u(),d=u("createdAt"),s=u("DESC");function S(){s.value="ASC",i()}function T(){s.value="DESC",i()}function D(){d.value="createdAt",s.value="DESC",i()}function V(){d.value="recommend",s.value="DESC",i()}function x(){d.value="adultprice",s.value="ASC",i()}function N(){d.value="days",s.value="DESC",i()}F(()=>{g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(e=>{h.value=e.data.rows,b.value=e.data.count/10+1})});function L(){g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(e=>{console.log(e.data),h.value=e.data.rows,b.value=e.data.count/10+1}).catch(e=>{console.error(e)})}function i(){g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(e=>{console.log(e.data),h.value=e.data.rows,b.value=e.data.count/10+1}).catch(e=>{console.error(e)})}return(e,k)=>{const K=m("v-progress-circular"),E=m("v-img"),H=m("v-pagination");return r(),_("div",O,[$,a("div",J,[a("div",Q,[a("div",W,[X,a("div",Y,[a("div",{class:"sort-type",onClick:V},"Hoàng Hà đề xuất"),a("div",{class:"sort-type",onClick:D},"Mới nhất"),a("div",{class:"sort-type",onClick:N},"Thời lượng tour"),a("div",{class:"sort-type",onClick:x},"Giá tour"),n(s)=="DESC"?(r(),_("div",{key:0,class:"sort-type",onClick:S},[v("Từ cao đến thấp   "),Z])):(r(),_("div",{key:1,class:"sort-type",onClick:T},[v("Từ thấp lên cao   "),aa]))])]),n(h)?(r(!0),_(M,{key:0},R(n(h),t=>(r(),_("div",{key:t,class:"tour-individual"},[a("div",{class:"image-container",onClick:A=>n(C).push({path:"/tourdetail",query:{id:t.id}})},[y(E,{cover:"",width:50,class:"thumbnail",src:t.thumbnail},{placeholder:P(()=>[a("div",ta,[y(K,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])],8,ea),a("div",sa,[a("div",{class:"title",onClick:A=>n(C).push({path:"/tourdetail",query:{id:t.id}})},o(t.title),9,oa),a("div",ca,[a("div",la,[na,a("span",da,o(t.recommend),1)]),a("div",ia,[ra,a("span",va,o(t.schedule),1)]),a("div",ha,[ua,v(),a("span",_a,o(t.tourtype),1)]),a("div",fa,[ba,v(o(t.days)+"N"+o(t.days-1)+"Đ",1)]),a("div",pa,[ga,v(o(t.departure),1)]),a("div",ma,[ya,v(o(t.transportation),1)])])]),a("div",Ca,[a("span",ka,[a("b",null,o(e.numeralFormat(t.adultprice)),1)]),wa])]))),128)):(r(),j(B,{key:1})),y(H,{onClick:L,modelValue:n(l),"onUpdate:modelValue":k[0]||(k[0]=t=>q(l)?l.value=t:l=t),length:n(b),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),a("div",null,o(n(l)),1)]),Sa])])}}},Na=G(Ta,[["__scopeId","data-v-7b5c9fe0"]]);export{Na as default};
