import{_ as V,u as D,r as i,e as E,g as L,o as c,c as r,a as t,A as C,D as P,j as d,t as n,b as u,F as R,h as A,k as G,n as H,l as K,f as w,p as z,d as F,z as v}from"./index-4d4eda78.js";import{T as U}from"./TableLoading-0b72f2d0.js";/* empty css                                                                     */const l=_=>(z("data-v-79b7292a"),_=_(),F(),_),$={class:"order-manage-container"},j={class:"sorting-container"},q=l(()=>t("div",{style:{"font-size":"larger"}},"Bộ lọc:",-1)),J={class:"sorting-button-container"},Q={class:"d-flex search-container"},W=l(()=>t("i",{class:"fas fa-search"},null,-1)),X=[W],Y={class:"btn-group"},Z={type:"button",class:"btn btn-success dropdown-toggle","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{color:"white"}},tt=l(()=>t("i",{class:"fa-solid fa-check-to-slot"},": ",-1)),et=l(()=>t("i",{class:"fa-solid fa-xmark"},null,-1)),ot=l(()=>t("i",{class:"fa-solid fa-check"},null,-1)),lt=l(()=>t("i",{class:"fa-solid fa-arrow-up-wide-short"},null,-1)),st=l(()=>t("i",{class:"fa-solid fa-arrow-down-wide-short"},null,-1)),nt=l(()=>t("i",{class:"fa-solid fa-rotate-right"},null,-1)),at=[nt],ct={key:0,class:"table table-success table-striped",style:{width:"80vw","box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"}},it=l(()=>t("thead",null,[t("tr",null,[t("th",{style:{"vertical-align":"top"},scope:"col"},"Tên tour"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Khách hàng"),t("th",{style:{"vertical-align":"top"},scope:"col"},"SĐT"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Ngày đặt"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Email"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Trẻ em (dưới 5)"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Trẻ em (5-11) tuổi"),t("th",{style:{"vertical-align":"top"},scope:"col"}," Người lớn (trên 12 tuổi) "),t("th",{style:{"vertical-align":"top"},scope:"col"}," Ghi chú"),t("th",{style:{"vertical-align":"top"},scope:"col"},"Hành động")])],-1)),rt=["onClick"],dt={key:0,style:{"vertical-align":"middle"}},ut=["onClick"],ht=l(()=>t("i",{class:"fa-regular fa-circle-check fa-lg"},null,-1)),pt=[ht],_t={key:1,style:{"vertical-align":"middle"}},gt=["onClick"],vt=l(()=>t("i",{class:"fa-regular fa-circle-xmark fa-lg"},null,-1)),ft=[vt],bt={__name:"OrderManage",setup(_){const x=D();let h=i(1),m=i(),f=i("DESC"),p=i(),b=i("Chưa xử lý"),g=i(0);function a(){p.value=null,w.get("/admin/order/"+f.value+"/"+g.value+"/"+h.value).then(s=>{console.log(s.data),p.value=s.data.rows,console.log(p.value),m.value=s.data.count/10+1}).catch(s=>{console.error(s)})}E(()=>{a()});function T(){f.value="DESC",a()}function O(){f.value="ASC",a()}function S(){b.value="Đã xử lý",g.value=1,a()}function I(){b.value="Chưa xử lý",g.value=0,a()}function N(s){const o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return new Date(s).toLocaleString("vi-VN",o).replace(" tháng ","/").replace("lúc","").replace(", ","/")}function M(){a()}function y(s){w.put("/admin/order/"+s).then(o=>{console.log(o),a(),g.value==0?v.success("Đã chuyển sang mục đã xử lý",{autoClose:2e3,theme:"colored",position:v.POSITION.BOTTOM_RIGHT}):v.info("Đã chuyển sang mục chưa xử lý",{autoClose:2e3,theme:"colored",position:v.POSITION.BOTTOM_RIGHT})}).catch(o=>{console.log(o)})}return(s,o)=>{const B=L("v-pagination");return c(),r("div",$,[t("div",j,[q,t("div",J,[t("form",Q,[t("button",{class:"btn btn-outline-success",onClick:o[0]||(o[0]=C(()=>{},["prevent"]))},X),t("input",{onKeydown:o[1]||(o[1]=P(C(()=>{},["prevent"]),["enter"])),class:"form-control me-2 search-box",type:"search",placeholder:"Tìm kiếm theo tên","aria-label":"Search"},null,32)]),t("div",Y,[t("button",Z,[d(" Trạng thái   "),tt,d(" "+n(u(b)),1)]),t("div",{class:"dropdown-menu"},[t("button",{class:"dropdown-item",onClick:I},[d("Chưa xử lí   "),et]),t("button",{class:"dropdown-item",onClick:S},[d("Đã xử lí  "),ot])])]),t("button",{class:"sort-button btn btn-success",onClick:T},[d("Mới nhất   "),lt]),t("button",{class:"sort-button btn btn-success",onClick:O},[d("Cũ nhất   "),st]),t("button",{class:"btn btn-success",onClick:a},at)])]),u(p)?(c(),r("table",ct,[it,t("tbody",null,[(c(!0),r(R,null,A(u(p),e=>(c(),r("tr",{key:e,class:"each-tour-row"},[t("td",{onClick:k=>u(x).push({path:"/order/"+e.id})},n(e.Tour.title),9,rt),t("td",null,n(e.name),1),t("td",null,n(e.phone),1),t("td",null,n(N(e.createdAt)),1),t("td",null,n(e.email),1),t("td",null,n(e.children),1),t("td",null,n(e.teenager),1),t("td",null,n(e.adult),1),t("td",null,n(e.note),1),e.solved==0?(c(),r("td",dt,[t("button",{class:"solve-btn",onClick:k=>y(e.id)},pt,8,ut)])):(c(),r("td",_t,[t("button",{class:"solve-btn",onClick:k=>y(e.id)},ft,8,gt)]))]))),128))])])):(c(),G(U,{key:1})),H(B,{onClick:M,modelValue:u(h),"onUpdate:modelValue":o[2]||(o[2]=e=>K(h)?h.value=e:h=e),length:u(m),"total-visible":5,"prev-icon":"fa-solid fa-chevron-left","next-icon":"fa-solid fa-chevron-right"},null,8,["modelValue","length"])])}}},Ct=V(bt,[["__scopeId","data-v-79b7292a"]]);export{Ct as default};
