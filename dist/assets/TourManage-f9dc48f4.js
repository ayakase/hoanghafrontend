import{_ as V,u as O,r as h,e as L,g as A,o as u,c as _,a as t,m as d,b as e,x as y,A as K,t as r,F as P,h as Q,i as E,j as R,k as F,f as T,p as G,d as H,s as w}from"./index-baf84528.js";import{T as U}from"./TableLoading-8d9d96d6.js";const s=m=>(G("data-v-6a038cc8"),m=m(),H(),m),j={class:"admin-tour-crud"},z=s(()=>t("i",{class:"fa-solid fa-plus"},null,-1)),X={class:"sorting-container"},J=s(()=>t("div",{style:{"font-size":"larger"}},"Bộ lọc:",-1)),W={class:"sorting-button-container"},Y={class:"d-flex search-container"},Z=s(()=>t("i",{class:"fas fa-search"},null,-1)),tt=[Z],ot={class:"btn-group"},et={type:"button",class:"btn btn-success dropdown-toggle","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{color:"white"}},st=s(()=>t("i",{class:"fa-solid fa-book"}," :",-1)),nt=s(()=>t("i",{class:"fa-regular fa-rectangle-list"},null,-1)),at=s(()=>t("i",{class:"fa-solid fa-vihara"},null,-1)),lt=s(()=>t("i",{class:"fa-solid fa-flag"},null,-1)),ct=s(()=>t("i",{class:"fa-solid fa-globe"},null,-1)),it=s(()=>t("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),dt=s(()=>t("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),rt=s(()=>t("i",{class:"fa-solid fa-rotate-right"},null,-1)),ut=[rt],ht={key:0,class:"table table-success table-striped table-hover",style:{width:"80vw","box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"}},_t=s(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Tên tour"),t("th",{scope:"col"},"Lịch trình"),t("th",{scope:"col"},"Danh mục"),t("th",{scope:"col"},"Khởi hành"),t("th",{scope:"col"},"Số ngày"),t("th",{scope:"col"},"Tour Hot"),t("th",{scope:"col"},"Phương tiện"),t("th",{scope:"col"}," Tạo lúc "),t("th",{scope:"col"}," Chỉnh sửa "),t("th",{scope:"col"}," Xóa")])],-1)),pt=["onClick"],ft=["onClick"],bt=["onClick"],gt=["onClick"],mt=["onClick"],vt=["onClick"],kt=["onClick"],Ct=["onClick"],yt=["onClick"],Tt=["onClick"],wt=["onClick"],xt=s(()=>t("i",{class:"fa-solid fa-pen-to-square"},null,-1)),qt=[xt],$t=["onClick"],St=s(()=>t("i",{class:"fa-solid fa-trash"},null,-1)),Dt=[St],It={__name:"TourManage",setup(m){const n=O();let p=h(1),v=h(),C=h();function i(){v.value=null,T.get("/admin/tour/"+b.value+"/"+k.value+"/"+p.value).then(a=>{console.log(a.data),v.value=a.data.rows,C.value=a.data.count/10+1}).catch(a=>{console.error(a)})}L(()=>{i()});function x(){i()}function q(a){console.log(a);let l="Bạn có chắc chắn muốn xóa Tour "+a;confirm(l)==!0&&T.delete("/admin/tour/"+a).then(g=>{console.log(g),w.info("Đã xóa",{autoClose:2e3,theme:"colored",position:w.POSITION.BOTTOM_RIGHT}),i()}).catch(g=>{console.error(g)})}let f=h("Tất cả"),b=h(0);function $(){f.value="Tất cả",b.value=0,i()}function S(){f.value="Trung Quốc",b.value=1,i()}function D(){f.value="Trong nước",b.value=2,i()}function I(){f.value="Quốc tế",b.value=3,i()}let k=h("DESC");function N(){k.value="DESC",i()}function B(){k.value="ASC",i()}function M(a){const l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return new Date(a).toLocaleString("vi-VN",l).replace(" tháng ","/").replace("lúc","").replace(", ","/")}return(a,l)=>{const g=A("v-pagination");return u(),_("div",j,[t("button",{onClick:l[0]||(l[0]=o=>e(n).push("/admin/quan-li-tour/them-tour")),class:"btn btn-success add-btn",style:{"margin-bottom":"1rem"}},[d(" Thêm tour mới "),z]),t("div",X,[J,t("div",W,[t("form",Y,[t("button",{class:"btn btn-outline-success",onClick:l[1]||(l[1]=y(()=>{},["prevent"]))},tt),t("input",{onKeydown:l[2]||(l[2]=K(y(()=>{},["prevent"]),["enter"])),class:"form-control me-2 search-box",type:"search",placeholder:"Tìm kiếm theo tên","aria-label":"Search"},null,32)]),t("div",ot,[t("button",et,[d(" Danh mục   "),st,d(" "+r(e(f)),1)]),t("div",{class:"dropdown-menu"},[t("button",{class:"dropdown-item",onClick:$},[d("Tất cả  "),nt]),t("button",{class:"dropdown-item",onClick:S},[d("Trung Quốc  "),at]),t("button",{class:"dropdown-item",onClick:D},[d("Trong nước   "),lt]),t("button",{class:"dropdown-item",onClick:I},[d("Quốc tế   "),ct])])]),t("button",{class:"sort-button btn btn-success",onClick:N},[d("Mới nhất   "),it]),t("button",{class:"sort-button btn btn-success",onClick:B},[d("Cũ nhất   "),dt]),t("button",{class:"btn btn-success",onClick:i},ut)])]),e(v)?(u(),_("table",ht,[_t,t("tbody",null,[(u(!0),_(P,null,Q(e(v),o=>(u(),_("tr",{key:o,class:"each-tour-row"},[t("th",{scope:"row",onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.id),9,pt),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.title),9,ft),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.schedule),9,bt),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.Category.name),9,gt),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.departure),9,mt),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.days),9,vt),o.ishottour==1?(u(),_("td",{key:0,onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})}," Có ",8,kt)):(u(),_("td",{key:1,onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})}," Không",8,Ct)),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(o.transportation),9,yt),t("td",{onClick:c=>e(n).push({path:"/tourdetail",query:{id:o.id}})},r(M(o.createdAt)),9,Tt),t("td",null,[t("button",{onClick:c=>e(n).push({path:"/admin/quan-li-tour/chinh-sua-tour",query:{id:o.id}}),class:"edit-button"},qt,8,wt)]),t("td",null,[t("button",{class:"delete-button",onClick:c=>q(o.id)},Dt,8,$t)])]))),128))])])):(u(),E(U,{key:1})),R(g,{onClick:x,modelValue:e(p),"onUpdate:modelValue":l[3]||(l[3]=o=>F(p)?p.value=o:p=o),length:e(C),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"])])}}},Mt=V(It,[["__scopeId","data-v-6a038cc8"]]);export{Mt as default};