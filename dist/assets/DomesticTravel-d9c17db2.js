import{L as q}from"./LoadingComponent-6edb4568.js";import{_ as M,u as j,r as u,e as G,f as w,g as m,o as i,c as r,a as e,b as c,h as d,F as S,i as D,j as H,k as g,l as P,t as o,m as R,w as U,p as $,d as z}from"./index-65a4f342.js";const a=v=>($("data-v-5c3efdce"),v=v(),z(),v),K={class:"china-container"},O=R('<nav aria-label="breadcrumb" data-v-5c3efdce><ol class="breadcrumb" data-v-5c3efdce><li class="breadcrumb-item" data-v-5c3efdce><i class="fa-solid fa-house" data-v-5c3efdce></i> <a href="/" class="home-breadcrumb" data-v-5c3efdce>Trang chủ</a></li><li class="breadcrumb-item" data-v-5c3efdce>Du lịch trong nước</li></ol></nav><h2 style="color:#ff6b00;" data-v-5c3efdce>Du lịch trong nước</h2>',2),J={class:"section-container"},Q={class:"tour-container"},W={class:"sort-container"},X=a(()=>e("p",null,"Sắp xếp theo: ",-1)),Y={class:"sort-types"},Z=a(()=>e("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),ee=a(()=>e("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),te=["onClick"],se={class:"d-flex align-center justify-center fill-height"},oe={class:"tour-detail-container"},ae=["onClick"],ce={class:"below-section",style:{}},ne={class:"schedule"},le=a(()=>e("b",null,"Mức độ đề xuất: ",-1)),ie={style:{color:"orange"}},de={class:"schedule"},re=a(()=>e("b",null,"Lịch trình: ",-1)),_e={style:{color:"orange"}},ue={class:"tourtype"},he=a(()=>e("b",null,"Loại tour: ",-1)),ve={style:{color:"green"}},pe={class:"days"},fe=a(()=>e("b",null,"Thời gian: ",-1)),me={class:"departure"},ge=a(()=>e("b",null,"Khởi hành: ",-1)),ye={class:"transportation"},be=a(()=>e("b",null,"Vận chuyển: ",-1)),Ce={class:"price"},ke={style:{"font-size":"x-large",color:"orangered"}},we=a(()=>e("span",{style:{color:"orangered","font-weight":"100"}}," VNĐ",-1)),Se={class:"hot-tour"},De=a(()=>e("h2",{style:{"padding-left":"1rem"}},"Tour hot",-1)),Te=["onClick"],xe=["src"],Ve={class:"card-body"},Ee={class:"card-title"},Ne={style:{"font-weight":"bold",color:"#ff6b00"}},Le=a(()=>e("hr",{class:"hr"},null,-1)),Ae={__name:"DomesticTravel",setup(v){const f=j();let y=u(),_=u(1),p=u(),h=u("createdAt"),n=u("DESC");function T(){n.value="ASC",l()}function x(){n.value="DESC",l()}function V(){h.value="createdAt",n.value="DESC",l()}function E(){h.value="recommend",n.value="DESC",l()}function N(){h.value="adultprice",n.value="ASC",l()}function L(){h.value="days",n.value="DESC",l()}let b=u();G(()=>{l(),w.get("/client/tour/hot-sidebar/2").then(s=>{console.log(s.data.rows),b.value=s.data.rows}).catch(s=>{console.error(s)})});function A(){l()}function l(){p.value=null,w.get("/client/tour/2/"+h.value+"/"+n.value+"/"+_.value).then(s=>{p.value=s.data.rows,y.value=s.data.count/10+1}).catch(s=>{console.error(s)})}return(s,C)=>{const B=m("v-progress-circular"),F=m("v-img"),I=m("v-pagination");return i(),r("div",K,[O,e("div",J,[e("div",Q,[e("div",W,[X,e("div",Y,[e("div",{class:"sort-type",onClick:E},"Hoàng Hà đề xuất"),e("div",{class:"sort-type",onClick:V},"Mới nhất"),e("div",{class:"sort-type",onClick:L},"Thời lượng tour"),e("div",{class:"sort-type",onClick:N},"Giá tour"),c(n)=="DESC"?(i(),r("div",{key:0,class:"sort-type",onClick:T},[d("Từ cao đến thấp   "),Z])):(i(),r("div",{key:1,class:"sort-type",onClick:x},[d("Từ thấp lên cao   "),ee]))])]),c(p)?(i(!0),r(S,{key:0},D(c(p),t=>(i(),r("div",{key:t,class:"tour-individual"},[e("div",{class:"image-container",onClick:k=>c(f).push({path:"/tourdetail",query:{id:t.id}})},[g(F,{style:{height:"100%"},cover:"",width:50,class:"thumbnail",src:t.thumbnail},{placeholder:U(()=>[e("div",se,[g(B,{color:"grey-lighten-4",indeterminate:""})])]),_:2},1032,["src"])],8,te),e("div",oe,[e("div",{class:"title",onClick:k=>c(f).push({path:"/tourdetail",query:{id:t.id}})},o(t.title),9,ae),e("div",ce,[e("div",ne,[le,e("span",ie,o(t.recommend),1)]),e("div",de,[re,e("span",_e,o(t.schedule),1)]),e("div",ue,[he,d(),e("span",ve,o(t.tourtype),1)]),e("div",pe,[fe,d(o(t.days)+"N"+o(t.days-1)+"Đ",1)]),e("div",me,[ge,d(o(t.departure),1)]),e("div",ye,[be,d(o(t.transportation),1)])])]),e("div",Ce,[e("span",ke,[e("b",null,o(s.numeralFormat(t.adultprice)),1)]),we])]))),128)):(i(),H(q,{key:1})),g(I,{onClick:A,modelValue:c(_),"onUpdate:modelValue":C[0]||(C[0]=t=>P(_)?_.value=t:_=t),length:c(y),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),e("div",null,o(c(_)),1)]),e("div",Se,[De,(i(!0),r(S,null,D(c(b),t=>(i(),r("div",{onClick:k=>c(f).push({path:"/tourdetail",query:{id:t.id}}),class:"card",style:{background:"none",border:"none"}},[e("img",{src:t.thumbnail,class:"card-img-top",alt:"..."},null,8,xe),e("div",Ve,[e("h5",Ee,o(t.title),1),e("p",null,[d("Giá: "),e("span",Ne,o(s.numeralFormat(t.adultprice)),1),d(" VNĐ ")]),Le])],8,Te))),256))])])])}}},Ie=M(Ae,[["__scopeId","data-v-5c3efdce"]]);export{Ie as default};
