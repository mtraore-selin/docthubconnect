"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[796],{7796:(e,a,s)=>{s.r(a),s.d(a,{default:()=>u});var r=s(2791),t=s(5294),n=s(3402),o=s(5318),l=s(9434),i=s(3200),m=s(4971),c=s(456),d=s(184);t.Z.defaults.baseURL="https://docthubconnect.onrender.com/api";const u=function(){const{userId:e}=(0,c.Z)(localStorage.getItem("token")),a=(0,l.I0)(),{loading:s}=(0,l.v9)((e=>e.root)),[u,p]=(0,r.useState)(""),[f,h]=(0,r.useState)({firstname:"",lastname:"",email:"",age:"",mobile:"",gender:"neither",address:"",password:"",confpassword:""});(0,r.useEffect)((()=>{(async()=>{try{a((0,o.K4)(!0));const s=await(0,m.Z)("/user/getuser/".concat(e));h({...s,password:"",confpassword:"",mobile:null===s.mobile?"":s.mobile,age:null===s.age?"":s.age}),p(s.pic),a((0,o.K4)(!1))}catch(s){}})()}),[a]);const g=e=>{const{name:a,value:s}=e.target;return h({...f,[a]:s})};return(0,d.jsx)(d.Fragment,{children:s?(0,d.jsx)(i.Z,{}):(0,d.jsx)("section",{className:"register-section flex-center",children:(0,d.jsxs)("div",{className:"profile-container flex-center",children:[(0,d.jsx)("h2",{className:"form-heading",children:"Profile"}),(0,d.jsx)("img",{src:u,alt:"profile",className:"profile-pic"}),(0,d.jsxs)("form",{onSubmit:async e=>{try{e.preventDefault();const{firstname:a,lastname:s,email:r,age:o,mobile:l,address:i,gender:m,password:c,confpassword:d}=f;if(!r)return n.ZP.error("Email should not be empty");if(a.length<3)return n.ZP.error("First name must be at least 3 characters long");if(s.length<3)return n.ZP.error("Last name must be at least 3 characters long");if(c.length<5)return n.ZP.error("Password must be at least 5 characters long");if(c!==d)return n.ZP.error("Passwords do not match");await n.ZP.promise(t.Z.put("/user/updateprofile",{firstname:a,lastname:s,age:o,mobile:l,address:i,gender:m,email:r,password:c},{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{pending:"Updating profile...",success:"Profile updated successfully",error:"Unable to update profile",loading:"Updating profile..."}),h({...f,password:"",confpassword:""})}catch(a){return n.ZP.error("Unable to update profile")}},className:"register-form",children:[(0,d.jsxs)("div",{className:"form-same-row",children:[(0,d.jsx)("input",{type:"text",name:"firstname",className:"form-input",placeholder:"Enter your first name",value:f.firstname,onChange:g}),(0,d.jsx)("input",{type:"text",name:"lastname",className:"form-input",placeholder:"Enter your last name",value:f.lastname,onChange:g})]}),(0,d.jsxs)("div",{className:"form-same-row",children:[(0,d.jsx)("input",{type:"email",name:"email",className:"form-input",placeholder:"Enter your email",value:f.email,onChange:g}),(0,d.jsxs)("select",{name:"gender",value:f.gender,className:"form-input",id:"gender",onChange:g,children:[(0,d.jsx)("option",{value:"neither",children:"Prefer not to say"}),(0,d.jsx)("option",{value:"male",children:"Male"}),(0,d.jsx)("option",{value:"female",children:"Female"})]})]}),(0,d.jsxs)("div",{className:"form-same-row",children:[(0,d.jsx)("input",{type:"text",name:"age",className:"form-input",placeholder:"Enter your age",value:f.age,onChange:g}),(0,d.jsx)("input",{type:"text",name:"mobile",className:"form-input",placeholder:"Enter your mobile number",value:null===f||void 0===f?void 0:f.mobile,onChange:g})]}),(0,d.jsx)("textarea",{type:"text",name:"address",className:"form-input",placeholder:"Enter your address",value:f.address,onChange:g,rows:"2"}),(0,d.jsxs)("div",{className:"form-same-row",children:[(0,d.jsx)("input",{type:"password",name:"password",className:"form-input",placeholder:"Enter your password",value:f.password,onChange:g}),(0,d.jsx)("input",{type:"password",name:"confpassword",className:"form-input",placeholder:"Confirm your password",value:f.confpassword,onChange:g})]}),(0,d.jsx)("button",{type:"submit",className:"btn form-btn",children:"update"})]})]})})})}}}]);
//# sourceMappingURL=796.0f31c873.chunk.js.map