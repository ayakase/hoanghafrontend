import{_ as f,r as a,A as S,e as w,f as x,o as y,c as I,a as l,t as o,p as V,d as k}from"./index-187c685b.js";const m=n=>(V("data-v-34e30868"),n=n(),k(),n),B={class:"order-detail-container"},N=m(()=>l("h3",null,"Thong tin khach hang ",-1)),O=m(()=>l("div",null,"So nguoi: ",-1)),A={__name:"OrderView",setup(n){const e=a(),u=a(),s=a(),c=a(),d=a(),v=a(),i=a(),r=a(),_=a(),p=a(),g=a(),h=S();return w(()=>{console.log(h.params.id),x.get("admin/each-order/"+h.params.id).then(t=>{console.log(t.data[0]),e.value=t.data[0],u.value=e.value.adult,s.value=e.value.children,c.value=e.value.teenager,d.value=e.value.infant,v.value=e.value.createdAt,i.value=e.value.name,r.value=e.value.phone,_.value=e.value.email,p.value=e.value.note,g.value=e.value.Tour}).catch(t=>{console.log(t)})}),(t,D)=>(y(),I("div",B,[N,l("div",null,"Ho va ten: "+o(i.value),1),l("div",null,"So dien thoai: "+o(r.value),1),l("div",null," Email: "+o(_.value),1),l("div",null,"Ngay dat: "+o(v.value),1),O,l("div",null,o(u.value),1),l("div",null,o(c.value),1),l("div",null,o(s.value),1),l("div",null,o(d.value),1),l("div",null,"Note: "+o(p.value),1)]))}},T=f(A,[["__scopeId","data-v-34e30868"]]);export{T as default};