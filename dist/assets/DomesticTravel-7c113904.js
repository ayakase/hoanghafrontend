import{_ as p}from"./img2-7c192fe6.js";import{L as B}from"./LoadingComponent-04ff41d5.js";import{_ as G,u as I,r as h,o as F,b as g,a as m,c as r,d as u,e as a,f as n,l as f,F as M,g as R,h as j,i as y,j as q,t as o,k as w,w as P,p as U,m as z}from"./index-25ca64ce.js";const c=_=>(U("data-v-b711cff4"),_=_(),z(),_),O={class:"domestic-container"},$=w('<nav aria-label="breadcrumb" data-v-b711cff4><ol class="breadcrumb" data-v-b711cff4><li class="breadcrumb-item" data-v-b711cff4><i class="fa-solid fa-house" data-v-b711cff4></i> <a href="/" class="home-breadcrumb" data-v-b711cff4>Trang chủ</a></li><li class="breadcrumb-item" data-v-b711cff4>Du lịch trong nước</li></ol></nav><h2 style="color:#ff6b00;" data-v-b711cff4>Du lịch trong nước</h2>',2),J={class:"section-container"},Q={class:"tour-container"},W={class:"sort-container"},X=c(()=>a("p",null,"Sắp xếp theo: ",-1)),Y={class:"sort-types"},Z=c(()=>a("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),aa=c(()=>a("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),ta=["onClick"],ea={class:"d-flex align-center justify-center fill-height"},sa={class:"tour-detail-container"},oa=["onClick"],ca={class:"below-section",style:{}},la={class:"schedule"},na=c(()=>a("b",null,"Mức độ đề xuất: ",-1)),da={style:{color:"orange"}},ia={class:"schedule"},ra=c(()=>a("b",null,"Lịch trình: ",-1)),fa={style:{color:"orange"}},va={class:"tourtype"},ha=c(()=>a("b",null,"Loại tour: ",-1)),ua={style:{color:"green"}},_a={class:"days"},ba=c(()=>a("b",null,"Thời gian: ",-1)),pa={class:"departure"},ga=c(()=>a("b",null,"Khởi hành: ",-1)),ma={class:"transportation"},ya=c(()=>a("b",null,"Vận chuyển: ",-1)),Ca={class:"price"},ka={style:{"font-size":"x-large",color:"orangered"}},wa=c(()=>a("span",{style:{color:"orangered","font-weight":"100"}}," VNĐ",-1)),Sa=w('<div class="hot-tour" data-v-b711cff4><h2 style="padding-left:1rem;" data-v-b711cff4>Tour hot</h2><div class="card" style="background:none;border:none;" data-v-b711cff4><img src="'+p+'" class="card-img-top" alt="..." data-v-b711cff4><div class="card-body" data-v-b711cff4><h5 class="card-title" data-v-b711cff4>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-b711cff4>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-b711cff4>3.600.000</span> VNĐ </p><hr class="hr" data-v-b711cff4></div></div><div class="card" style="background:none;border:none;" data-v-b711cff4><img src="'+p+'" class="card-img-top" alt="..." data-v-b711cff4><div class="card-body" data-v-b711cff4><h5 class="card-title" data-v-b711cff4>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-b711cff4>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-b711cff4>3.600.000</span> VNĐ </p><hr class="hr" data-v-b711cff4></div></div><div class="card" style="background:none;border:none;" data-v-b711cff4><img src="'+p+'" class="card-img-top" alt="..." data-v-b711cff4><div class="card-body" data-v-b711cff4><h5 class="card-title" data-v-b711cff4>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-b711cff4>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-b711cff4>3.600.000</span> VNĐ </p><hr class="hr" data-v-b711cff4></div></div><div class="card" style="background:none;border:none;" data-v-b711cff4><img src="'+p+'" class="card-img-top" alt="..." data-v-b711cff4><div class="card-body" data-v-b711cff4><h5 class="card-title" data-v-b711cff4>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-b711cff4>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-b711cff4>3.600.000</span> VNĐ </p><hr class="hr" data-v-b711cff4></div></div></div>',1),Ta={__name:"DomesticTravel",setup(_){const C=I();let b=h(),l=h(1),v=h(),d=h("createdAt"),s=h("DESC");function S(){s.value="ASC",i()}function T(){s.value="DESC",i()}function D(){d.value="createdAt",s.value="DESC",i()}function V(){d.value="recommend",s.value="DESC",i()}function x(){d.value="adultprice",s.value="ASC",i()}function N(){d.value="days",s.value="DESC",i()}F(()=>{g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(t=>{v.value=t.data.rows,b.value=t.data.count/10+1})});function L(){g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(t=>{console.log(t.data),v.value=t.data.rows,b.value=t.data.count/10+1}).catch(t=>{console.error(t)})}function i(){g.get("/client/tour/2/"+d.value+"/"+s.value+"/"+l.value).then(t=>{console.log(t.data),v.value=t.data.rows,b.value=t.data.count/10+1}).catch(t=>{console.error(t)})}return(t,k)=>{const K=m("v-progress-circular"),E=m("v-img"),H=m("v-pagination");return r(),u("div",O,[$,a("div",J,[a("div",Q,[a("div",W,[X,a("div",Y,[a("div",{class:"sort-type",onClick:V},"Hoàng Hà đề xuất"),a("div",{class:"sort-type",onClick:D},"Mới nhất"),a("div",{class:"sort-type",onClick:N},"Thời lượng tour"),a("div",{class:"sort-type",onClick:x},"Giá tour"),n(s)=="DESC"?(r(),u("div",{key:0,class:"sort-type",onClick:S},[f("Từ cao đến thấp   "),Z])):(r(),u("div",{key:1,class:"sort-type",onClick:T},[f("Từ thấp lên cao   "),aa]))])]),n(v)?(r(!0),u(M,{key:0},R(n(v),e=>(r(),u("div",{key:e,class:"tour-individual"},[a("div",{class:"image-container",onClick:A=>n(C).push({path:"/tourdetail",query:{id:e.id}})},[y(E,{cover:"",width:50,class:"thumbnail",src:e.thumbnail},{placeholder:P(()=>[a("div",ea,[y(K,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])],8,ta),a("div",sa,[a("div",{class:"title",onClick:A=>n(C).push({path:"/tourdetail",query:{id:e.id}})},o(e.title),9,oa),a("div",ca,[a("div",la,[na,a("span",da,o(e.recommend),1)]),a("div",ia,[ra,a("span",fa,o(e.schedule),1)]),a("div",va,[ha,f(),a("span",ua,o(e.tourtype),1)]),a("div",_a,[ba,f(o(e.days)+"N"+o(e.days-1)+"Đ",1)]),a("div",pa,[ga,f(o(e.departure),1)]),a("div",ma,[ya,f(o(e.transportation),1)])])]),a("div",Ca,[a("span",ka,[a("b",null,o(t.numeralFormat(e.adultprice)),1)]),wa])]))),128)):(r(),j(B,{key:1})),y(H,{onClick:L,modelValue:n(l),"onUpdate:modelValue":k[0]||(k[0]=e=>q(l)?l.value=e:l=e),length:n(b),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),a("div",null,o(n(l)),1)]),Sa])])}}},Na=G(Ta,[["__scopeId","data-v-b711cff4"]]);export{Na as default};
