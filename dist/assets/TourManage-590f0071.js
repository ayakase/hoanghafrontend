import{_ as V,u as B,r as p,o as O,b as m,a as Q,c as C,d as k,e as t,l as d,f as s,A as y,B as K,t as l,F as L,g as P,i as R,j as A,p as E,n as F,x as w}from"./index-52ac7a08.js";const a=b=>(E("data-v-8b6b5525"),b=b(),F(),b),G={class:"admin-tour-crud"},H=a(()=>t("i",{class:"fa-solid fa-plus"},null,-1)),U={class:"sorting-container"},j=a(()=>t("div",{style:{"font-size":"larger"}},"Bộ lọc:",-1)),z={class:"sorting-button-container"},X={class:"d-flex search-container"},J=a(()=>t("i",{class:"fas fa-search"},null,-1)),W=[J],Y={class:"btn-group"},Z={type:"button",class:"btn btn-success dropdown-toggle","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{color:"white"}},tt=a(()=>t("i",{class:"fa-solid fa-book"}," :",-1)),ot=a(()=>t("i",{class:"fa-solid fa-vihara"},null,-1)),et=a(()=>t("i",{class:"fa-solid fa-flag"},null,-1)),st=a(()=>t("i",{class:"fa-solid fa-globe"},null,-1)),nt=a(()=>t("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),at=a(()=>t("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),lt=a(()=>t("i",{class:"fa-solid fa-rotate-right"},null,-1)),ct=[lt],it=a(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Tên tour"),t("th",{scope:"col"},"Lịch trình"),t("th",{scope:"col"},"Danh mục"),t("th",{scope:"col"},"Khởi hành"),t("th",{scope:"col"},"Số ngày"),t("th",{scope:"col"},"Tour Hot"),t("th",{scope:"col"},"Phương tiện"),t("th",{scope:"col"}," Tạo lúc "),t("th",{scope:"col"}," Chỉnh sửa "),t("th",{scope:"col"}," Xóa")])],-1)),dt=["onClick"],ut=["onClick"],rt=["onClick"],ht=["onClick"],pt=["onClick"],_t=["onClick"],bt=["onClick"],vt=["onClick"],gt=["onClick"],ft=a(()=>t("td",null,[t("button",{class:"edit-button"},[t("i",{class:"fa-solid fa-pen-to-square"})])],-1)),mt=["onClick"],Ct=a(()=>t("i",{class:"fa-solid fa-trash"},null,-1)),kt=[Ct],yt={__name:"TourManage",setup(b){const c=B();let u=p(1),v=p(),g=p();O(()=>{m.get("/admin/tour/"+h.value+"/"+_.value+"/1").then(o=>{console.log(o.data),v.value=o.data.rows,g.value=o.data.count/10+1}).catch(o=>{console.error(o)})});function T(){m.get("/admin/tour/"+h.value+"/"+_.value+"/"+u.value).then(o=>{console.log(o.data),v.value=o.data.rows,g.value=o.data.count/10+1}).catch(o=>{console.error(o)})}function x(o){console.log(o),m.delete("/admin/tour/"+o).then(n=>{console.log(n),w.success("Đã xóa",{autoClose:2e3,theme:"dark",position:w.POSITION.BOTTOM_RIGHT}),r()}).catch(n=>{console.error(n)})}let f=p("Trung Quốc"),h=p(1);function q(){f.value="Trung Quốc",h.value=1,r()}function S(){f.value="Trong nước",h.value=2,r()}function $(){f.value="Quốc tế",h.value=3,r()}let _=p("DESC");function D(){_.value="DESC",r()}function I(){_.value="ASC",r()}function r(){m.get("/admin/tour/"+h.value+"/"+_.value+"/"+u.value).then(o=>{console.log(o.data),v.value=o.data.rows,g.value=o.data.count/10+1}).catch(o=>{console.error(o)})}function N(o){const n={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return new Date(o).toLocaleString("vi-VN",n).replace(" tháng ","/").replace("lúc","").replace(", ","/")}return(o,n)=>{const M=Q("v-pagination");return C(),k("div",G,[t("button",{onClick:n[0]||(n[0]=e=>s(c).push("/admin/quan-li-tour/them-tour")),class:"btn btn-success add-btn",style:{"margin-bottom":"1rem"}},[d(" Thêm tour mới "),H]),t("div",U,[j,t("div",z,[t("form",X,[t("button",{class:"btn btn-outline-success",onClick:n[1]||(n[1]=y(()=>{},["prevent"]))},W),t("input",{onKeydown:n[2]||(n[2]=K(y(()=>{},["prevent"]),["enter"])),class:"form-control me-2 search-box",type:"search",placeholder:"Tìm kiếm theo tên","aria-label":"Search"},null,32)]),t("div",Y,[t("button",Z,[d(" Danh mục   "),tt,d(" "+l(s(f)),1)]),t("div",{class:"dropdown-menu"},[t("button",{class:"dropdown-item",onClick:q},[d("Trung Quốc  "),ot]),t("button",{class:"dropdown-item",onClick:S},[d("Trong nước   "),et]),t("button",{class:"dropdown-item",onClick:$},[d("Quốc tế   "),st])])]),t("button",{class:"sort-button btn btn-success",onClick:D},[d("Mới nhất   "),nt]),t("button",{class:"sort-button btn btn-success",onClick:I},[d("Cũ nhất   "),at]),t("button",{class:"btn btn-success",onClick:r},ct)])]),(C(),k("table",{key:o.componentKey,class:"table table-success table-striped table-hover",style:{width:"80vw","box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"}},[it,t("tbody",null,[(C(!0),k(L,null,P(s(v),e=>(C(),k("tr",{key:e,class:"each-tour-row"},[t("th",{scope:"row",onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.id),9,dt),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.title),9,ut),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.schedule),9,rt),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.tourcategory),9,ht),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.departure),9,pt),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.days),9,_t),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.ishottour),9,bt),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(e.transportation),9,vt),t("td",{onClick:i=>s(c).push({path:"/tourdetail",query:{id:e.id}})},l(N(e.createdAt)),9,gt),ft,t("td",null,[t("button",{class:"delete-button",onClick:i=>x(e.id)},kt,8,mt)])]))),128))])])),R(M,{onClick:T,modelValue:s(u),"onUpdate:modelValue":n[3]||(n[3]=e=>A(u)?u.value=e:u=e),length:s(g),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"]),t("div",null,l(s(u)),1)])}}},Tt=V(yt,[["__scopeId","data-v-8b6b5525"]]);export{Tt as default};
