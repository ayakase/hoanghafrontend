import{r as a,o as d,b as i,c as l,d as n,e as t,F as h,g as _,f as p,t as s}from"./index-6bd40210.js";const u={class:"advisory-manage"},b=t("div",{class:"solve-btn-container",style:{display:"flex","flex-direction":"row",width:"15%","justify-content":"space-between"}},[t("button",{class:"btn btn-success"}," Chưa xử lí "),t("button",{class:"btn btn-success"}," Đã xử lí ")],-1),w={class:"table table-success table-striped",style:{width:"80vw","box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"}},m=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Họ và Tên"),t("th",{scope:"col"},"Số điện thoại"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"Ghi chú"),t("th",{scope:"col"}," Chi tiết")])],-1),v={scope:"row"},x={scope:"row"},y={scope:"row"},g={scope:"row"},f={scope:"row"},k={scope:"row"},E={__name:"AdvisoryManage",setup(B){let r=a("DESC");a(1);let c=a();return d(()=>{i.get("/admin/advisory/"+r.value+"/1").then(o=>{console.log(o.data),c.value=o.data.rows,console.log(c.value)}).catch(o=>{console.error(o)})}),(o,C)=>(l(),n("div",u,[b,t("table",w,[m,t("tbody",null,[(l(!0),n(h,null,_(p(c),e=>(l(),n("tr",{key:e,class:"each-tour-row"},[t("td",v,s(e.id),1),t("td",x,s(e.name),1),t("td",y,s(e.phone),1),t("td",g,s(e.email),1),t("td",f,s(e.note),1),t("td",k,s(e.id),1)]))),128))])])]))}};export{E as default};
