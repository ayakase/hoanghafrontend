import{_ as x,u as L,r as l,o as K,b as k,a as _,c as n,d as u,e as a,f as o,F as S,g as H,h as G,i as p,j as B,t as e,k as g,w as D,l as r,m as v,p as I,n as F}from"./index-bd731e56.js";import{L as j}from"./LoadingComponent-66db792d.js";const d=i=>(I("data-v-06a166c1"),i=i(),F(),i),q={class:"china-container"},E=g('<nav aria-label="breadcrumb" data-v-06a166c1><ol class="breadcrumb" data-v-06a166c1><li class="breadcrumb-item" data-v-06a166c1><i class="fa-solid fa-house" data-v-06a166c1></i> <a href="/" class="home-breadcrumb" data-v-06a166c1>Trang chủ</a></li><li class="breadcrumb-item" data-v-06a166c1>Du lịch Trung Quốc</li></ol></nav><h2 style="color:#ff6b00;" data-v-06a166c1>Du lịch Trung Quốc</h2>',2),M={class:"section-container"},P={class:"tour-container"},Q=g('<div class="sort-container" data-v-06a166c1><p data-v-06a166c1>Sắp xếp theo: </p><div class="sort-types" data-v-06a166c1><div class="sort-type" data-v-06a166c1>Hoàng Hà đề xuất</div><div class="sort-type" data-v-06a166c1>Mới nhất</div><div class="sort-type" data-v-06a166c1>Thời lượng tour</div><div class="sort-type" data-v-06a166c1>Giá tour</div></div></div>',1),R=["onClick"],U={class:"d-flex align-center justify-center fill-height"},z={class:"tour-detail-container"},O=["onClick"],$={class:"below-section",style:{}},A={class:"schedule"},J=d(()=>a("b",null,"Lịch trình: ",-1)),W={style:{color:"orange"}},X={class:"tourtype"},Y=d(()=>a("b",null,"Loại tour: ",-1)),Z={style:{color:"green"}},aa={class:"days"},ta=d(()=>a("b",null,"Thời gian: ",-1)),sa={class:"departure"},ea=d(()=>a("b",null,"Khởi hành: ",-1)),ca={class:"transportation"},oa=d(()=>a("b",null,"Vận chuyển: ",-1)),da={class:"price"},ia={style:{"font-size":"x-large",color:"orangered"}},la=d(()=>a("span",{style:{color:"orangered","font-weight":"100"}}," VNĐ",-1)),na=g('<div class="hot-tour" data-v-06a166c1><h2 style="padding-left:1rem;" data-v-06a166c1>Tour hot</h2><div class="card" style="background:none;border:none;" data-v-06a166c1><img src="'+v+'" class="card-img-top" alt="..." data-v-06a166c1><div class="card-body" data-v-06a166c1><h5 class="card-title" data-v-06a166c1>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-06a166c1>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-06a166c1>3.600.000</span> VNĐ </p><hr class="hr" data-v-06a166c1></div></div><div class="card" style="background:none;border:none;" data-v-06a166c1><img src="'+v+'" class="card-img-top" alt="..." data-v-06a166c1><div class="card-body" data-v-06a166c1><h5 class="card-title" data-v-06a166c1>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-06a166c1>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-06a166c1>3.600.000</span> VNĐ </p><hr class="hr" data-v-06a166c1></div></div><div class="card" style="background:none;border:none;" data-v-06a166c1><img src="'+v+'" class="card-img-top" alt="..." data-v-06a166c1><div class="card-body" data-v-06a166c1><h5 class="card-title" data-v-06a166c1>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-06a166c1>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-06a166c1>3.600.000</span> VNĐ </p><hr class="hr" data-v-06a166c1></div></div><div class="card" style="background:none;border:none;" data-v-06a166c1><img src="'+v+'" class="card-img-top" alt="..." data-v-06a166c1><div class="card-body" data-v-06a166c1><h5 class="card-title" data-v-06a166c1>Lào Cai - Hà Khẩu - Kiến Thủy 2n1Đ</h5><p data-v-06a166c1>Giá: <span style="font-weight:bold;color:#ff6b00;" data-v-06a166c1>3.600.000</span> VNĐ </p><hr class="hr" data-v-06a166c1></div></div></div>',1),ra={__name:"ChinaTravel",setup(i){const b=L();let y=l(),c=l(1),h=l(),m=l("DESC");K(()=>{k.get("/client/tour/1/"+m.value+"/"+c.value).then(s=>{h.value=s.data.rows})});function C(){k.get("/client/tour/1/"+m.value+"/"+c.value).then(s=>{console.log(s.data),tourTable.value=s.data.rows,y.value=s.data.count/10+1}).catch(s=>{console.error(s)})}return(s,f)=>{const T=_("v-progress-circular"),V=_("v-img"),w=_("v-pagination");return n(),u("div",q,[E,a("div",M,[a("div",P,[Q,o(h)?(n(!0),u(S,{key:0},H(o(h),t=>(n(),u("div",{key:t,class:"tour-individual"},[a("div",{class:"image-container",onClick:N=>o(b).push({path:"/tourdetail",query:{id:t.id}})},[p(V,{cover:"",width:50,class:"thumbnail",src:t.thumbnail},{placeholder:D(()=>[a("div",U,[p(T,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])],8,R),a("div",z,[a("div",{class:"title",onClick:N=>o(b).push({path:"/tourdetail",query:{id:t.id}})},e(t.title),9,O),a("div",$,[a("div",A,[J,a("span",W,e(t.schedule),1)]),a("div",X,[Y,r(),a("span",Z,e(t.tourtype),1)]),a("div",aa,[ta,r(e(t.days)+"N"+e(t.days-1)+"Đ",1)]),a("div",sa,[ea,r(e(t.departure),1)]),a("div",ca,[oa,r(e(t.transportation),1)])])]),a("div",da,[a("span",ia,[a("b",null,e(s.numeralFormat(t.adultprice)),1)]),la])]))),128)):(n(),G(j,{key:1})),p(w,{onClick:C,modelValue:o(c),"onUpdate:modelValue":f[0]||(f[0]=t=>B(c)?c.value=t:c=t),length:o(y),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),a("div",null,e(o(c)),1)]),na])])}}},_a=x(ra,[["__scopeId","data-v-06a166c1"]]);export{_a as default};