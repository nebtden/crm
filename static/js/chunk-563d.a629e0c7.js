(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-563d","chunk-3f47"],{BiQi:function(t,e,a){},KCLr:function(t,e,a){"use strict";var i=a("BiQi");a.n(i).a},NoVw:function(t,e,a){"use strict";a.r(e);var i=a("ViDN"),n=a("utuE"),o=a("d8QR"),s=a("7Qib"),l={components:{CreateView:i.a,membersDep:n.a},data:function(){var t=this,e=function(e,a,i){"start_time"==e.field&&!t.formData.start_time&&t.formData.end_time||"end_time"==e.field&&!t.formData.end_time&&t.formData.start_time?i(new Error("请完善时间")):t.formData.start_time&&t.formData.end_time&&Object(s.d)(t.formData.start_time)>=Object(s.d)(t.formData.end_time)&&i(new Error("开始时间必须小于结束时间")),i()};return{formList:[{label:"公告标题",field:"title"},{label:"通知部门",field:"dep",type:"plus"},{label:"开始时间",field:"start_time",type:"date"},{label:"结束时间",field:"end_time",type:"date"},{label:"公告正文",field:"content",type:"textarea"}],formData:{dep:{staff:[],dep:[]}},rules:{title:[{required:!0,message:"公告标题不能为空",trigger:"blur"},{max:50,message:"公告标题长度最多为50个字符",trigger:"blur"}],content:[{required:!0,message:"公告正文不能为空",trigger:"blur"}],start_time:[{validator:e,trigger:"blur"}],end_time:[{validator:e,trigger:"blur"}]},loading:!1}},methods:{onSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,Object(o.a)({title:t.formData.title,content:t.formData.content,start_time:t.formData.start_time?new Date(t.formData.start_time).getTime()/1e3:"",end_time:t.formData.end_time?new Date(t.formData.end_time).getTime()/1e3:"",owner_structure_ids:t.formData.dep.dep.map(function(t){return t.id}),owner_user_ids:t.formData.dep.staff.map(function(t){return t.id})}).then(function(e){t.$message.success("新建公告成功"),1==t.$route.query.routerKey?t.$router.push("notice"):(e.data.create_time=(new Date).getTime(),t.$emit("onSubmit",e.data)),t.loading=!1}).catch(function(){t.$message.error("新建公告失败"),t.loading=!1})})},close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("close")},popoverSubmit:function(t,e){this.$set(this.formData,"dep",{staff:t,dep:e})},deleteuser:function(t){this.formData.dep.staff.splice(t,1)},deleteDepuser:function(t){this.formData.dep.dep.splice(t,1)}}},r=(a("pvDT"),a("ZrdR")),c=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("create-view",{attrs:{"body-style":{height:"100%"}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"details-box"},[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"text"},[t._v("新建公告")]),t._v(" "),i("img",{staticClass:"el-icon-close rt",attrs:{src:a("cjwK"),alt:""},on:{click:t.close}})]),t._v(" "),i("div",{staticClass:"content"},[i("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules}},t._l(t.formList,function(e,a){return i("el-form-item",{key:a,class:"el-form-item"+e.field,attrs:{label:e.label,prop:e.field}},["date"==e.type?[i("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"textarea"==e.type?[i("el-input",{attrs:{autosize:{minRows:6},type:"textarea",placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"plus"==e.type?[i("members-dep",{attrs:{"popover-display":"block",title:"通知部门","user-checked-data":t.formData[e.field].staff,"dep-checked-data":t.formData[e.field].dep},on:{popoverSubmit:t.popoverSubmit}},[i("flexbox",{staticClass:"user-container",attrs:{slot:"membersDep",wrap:"wrap"},slot:"membersDep"},[t._l(t.formData[e.field].staff,function(e,a){return i("div",{key:"user"+a,staticClass:"user-item",on:{click:function(e){e.stopPropagation(),t.deleteuser(a)}}},[t._v(t._s(e.realname)+"\n                  "),i("i",{staticClass:"delete-icon el-icon-close"})])}),t._v(" "),t._l(t.formData[e.field].dep,function(e,a){return i("div",{key:"dep"+a,staticClass:"user-item",on:{click:function(e){e.stopPropagation(),t.deleteDepuser(a)}}},[t._v(t._s(e.name)+"\n                  "),i("i",{staticClass:"delete-icon el-icon-close"})])}),t._v(" "),i("div",{staticClass:"add-item"},[t._v("+添加")])],2)],1)]:i("el-input",{model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})],2)}))],1),t._v(" "),i("div",{staticClass:"btn-box"},[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),i("el-button",{on:{click:t.close}},[t._v("取消")])],1)])])},[],!1,null,"b4bb1a42",null);c.options.__file="newDialog.vue";e.default=c.exports},SSgM:function(t,e,a){},Sh30:function(t,e,a){"use strict";var i=a("iZtl");a.n(i).a},UkHZ:function(t,e,a){},bW7A:function(t,e,a){"use strict";a.r(e);var i=a("rerW"),n=a.n(i),o=a("bS4n"),s=a.n(o),l=a("iz3W"),r=a("NoVw"),c=a("8t5x"),d=a("d8QR"),u={components:{VDetails:l.a,newDialog:r.default},data:function(){return{activeName:"first",options:[{value:"1",label:"公示中"},{value:"2",label:"已结束"}],optionsValue:"1",listData:[],dialog:!1,titleList:{},showNewDialog:!1,loading:!0,pageNum:1,loadText:"加载更多",loadMoreLoading:!0,isPost:!0}},computed:s()({},Object(c.b)(["oa"]),{permissionSave:function(){return this.oa&&this.oa.announcement&&this.oa.announcement.save}}),watch:{$route:function(t,e){this.$router.go(0)}},mounted:function(){var t=this;this.noticeDataFun(1,this.pageNum),document.getElementsByClassName("content")[0].onscroll=function(){var e=document.getElementsByClassName("content")[0],a=e.scrollTop+e.clientHeight-e.scrollHeight;Math.abs(a)<10&&1==t.loadMoreLoading&&(t.isPost?t.loadMoreLoading=!1:(t.isPost=!0,t.pageNum++,t.noticeDataFun(t.optionsValue,t.pageNum)))}},methods:{noticeDataFun:function(t,e){var a=this;Object(d.d)({type:t,page:e,limit:15}).then(function(t){var e=!0,i=!1,o=void 0;try{for(var s,l=n()(t.data.list);!(e=(s=l.next()).done);e=!0){var r=s.value;r.contentSub=r.content.substring(0,150)}}catch(t){i=!0,o=t}finally{try{!e&&l.return&&l.return()}finally{if(i)throw o}}a.listData=a.listData.concat(t.data.list),0==t.data.list.length||15!=t.data.list.length?(a.loadText="没有更多了",a.loadMoreLoading=!1):(a.loadText="加载更多",a.loadMoreLoading=!0),a.loading=!1,a.isPost=!1}).catch(function(){a.loadText="",a.loading=!1,a.isPost=!1})},rowFun:function(t){this.titleList=t,this.dialog=!0},close:function(){this.dialog=!1},deleteFun:function(){for(var t in this.listData)this.listData[t].announcement_id==this.titleList.announcement_id&&this.listData.splice(t,1);this.close()},newBtn:function(){this.showNewDialog=!0},newClose:function(){this.showNewDialog=!1},onSubmit:function(t){this.selectChange(this.optionsValue),this.newClose()},editSubmit:function(t){this.selectChange(this.optionsValue),this.close()},selectChange:function(t){this.loading=!0,this.listData=[],this.pageNum=1,this.noticeDataFun(t,this.pageNum)},loadMoreBtn:function(t){this.$set(t,"preShow",!0),this.$set(t,"loadMore",!0)}}},m=(a("Sh30"),a("ZrdR")),f=Object(m.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"notice oa-bgcolor"},[t.permissionSave?a("el-button",{staticClass:"new-btn",attrs:{type:"primary"},on:{click:t.newBtn}},[t._v("新建公告")]):t._e(),t._v(" "),a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"公告",name:"first"}},[a("div",{staticClass:"text-top"},[a("label",{staticClass:"text"},[t._v("公告状态")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择",size:"small"},on:{change:t.selectChange},model:{value:t.optionsValue,callback:function(e){t.optionsValue=e},expression:"optionsValue"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"list-box"},[t._l(t.listData,function(e,i){return a("div",{key:i,staticClass:"list"},[a("div",{staticClass:"header"},[a("div",{directives:[{name:"photo",rawName:"v-photo",value:e,expression:"item"},{name:"lazy",rawName:"v-lazy:background-image",value:t.$options.filters.filterUserLazyImg(e.thumb_img),expression:"$options.filters.filterUserLazyImg(item.thumb_img)",arg:"background-image"}],key:e.thumb_img,staticClass:"div-photo"}),t._v(" "),a("div",{staticClass:"name-time"},[a("p",{staticClass:"name"},[t._v(t._s(e.realname))]),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(t._f("moment")(e.create_time,"YYYY-MM-DD HH:mm")))])])]),t._v(" "),a("div",{staticClass:"title",on:{click:function(a){t.rowFun(e)}}},[t._v(t._s(e.title))]),t._v(" "),e.preShow?a("div",{staticClass:"item-content"},[t._v(t._s(e.content))]):a("div",{staticClass:"item-content"},[t._v(t._s(e.contentSub))]),t._v(" "),e.contentSub.length<e.content.length?a("div",{staticClass:"load-more"},[e.loadMore?a("span",{on:{click:function(t){e.loadMore=!1,e.preShow=!1}}},[t._v("收起全文")]):a("span",{on:{click:function(a){t.loadMoreBtn(e)}}},[t._v("展开全文")])]):t._e()])}),t._v(" "),a("p",{staticClass:"load"},[a("el-button",{attrs:{loading:t.loadMoreLoading,type:"text"}},[t._v(t._s(t.loadText))])],1)],2)])])],1),t._v(" "),t.dialog?a("v-details",{attrs:{"title-list":t.titleList},on:{editSubmit:t.editSubmit,deleteFun:t.deleteFun,close:t.close}}):t._e(),t._v(" "),t.showNewDialog?a("new-dialog",{on:{onSubmit:t.onSubmit,close:t.newClose}}):t._e()],1)},[],!1,null,"466c2412",null);f.options.__file="index.vue";e.default=f.exports},d8QR:function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"a",function(){return o}),a.d(e,"c",function(){return s}),a.d(e,"b",function(){return l}),a.d(e,"e",function(){return r});var i=a("t3Un");function n(t){return Object(i.a)({url:"oa/announcement/index",method:"post",data:t})}function o(t){return Object(i.a)({url:"oa/announcement/save",method:"post",data:t})}function s(t){return Object(i.a)({url:"oa/announcement/update",method:"post",data:t})}function l(t){return Object(i.a)({url:"oa/announcement/delete",method:"post",data:t})}function r(t){return Object(i.a)({url:"oa/announcement/read",method:"post",data:t})}},iZtl:function(t,e,a){},iz3W:function(t,e,a){"use strict";var i=a("6ZY3"),n=a.n(i),o=a("bS4n"),s=a.n(o),l=a("ViDN"),r={components:{CreateView:l.a},props:{formData:Object,loading:Boolean},data:function(){return{formList:[{label:"公告标题",field:"title"},{label:"开始时间",field:"start_time",type:"date"},{label:"结束时间",field:"end_time",type:"date"},{label:"公告正文",field:"content",type:"textarea"}],rules:{title:[{required:!0,message:"公告标题不能为空",trigger:"blur"},{max:50,message:"公告标题长度最多为50个字符",trigger:"blur"}],content:[{required:!0,message:"公告正文不能为空",trigger:"blur"}]}}},methods:{onSubmit:function(){this.$emit("editSubmit")},close:function(){this.$emit("editClose")},inputChange:function(){this.popoverVisible=!0}}},c=(a("KCLr"),a("ZrdR")),d=Object(c.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("create-view",{attrs:{"body-style":{height:"100%"}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"details-box"},[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"text"},[t._v("编辑公告")]),t._v(" "),i("img",{staticClass:"el-icon-close rt",attrs:{src:a("cjwK"),alt:""},on:{click:t.close}})]),t._v(" "),i("div",{staticClass:"content"},[i("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules}},t._l(t.formList,function(e,a){return i("el-form-item",{key:a,class:"el-form-item"+e.field,attrs:{label:e.label,prop:e.field}},["date"==e.type?[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"textarea"==e.type?[i("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:i("el-input",{model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})],2)}))],1),t._v(" "),i("div",{staticClass:"btn-box"},[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),i("el-button",{on:{click:t.close}},[t._v("取消")])],1)])])},[],!1,null,"9cb914e4",null);d.options.__file="edit.vue";var u=d.exports,m=a("d8QR"),f=a("8t5x"),p={components:{CreateView:l.a,VEdit:u},props:{titleList:Object,btnShow:{type:Boolean,default:!0}},data:function(){return{showEdit:!1,formData:{},loading:!1}},computed:s()({},Object(f.b)(["oa"]),{permissionUpdate:function(){return this.oa&&this.oa.announcement&&this.oa.announcement.update},permissionDelete:function(){return this.oa&&this.oa.announcement&&this.oa.announcement.delete}}),created:function(){this.getDetail()},methods:{getDetail:function(){var t=this;Object(m.e)({announcement_id:this.titleList.announcement_id}).then(function(e){t.$store.dispatch("GetOAMessageNum","announcement")}).catch(function(){})},onEdit:function(){this.showEdit=!0,this.formData=n()({},this.titleList),this.formData.start_time=1e3*this.titleList.start_time,this.formData.end_time=1e3*this.titleList.end_time},close:function(){this.$emit("close")},deleteFun:function(){var t=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(m.b)({announcement_id:t.titleList.announcement_id}).then(function(e){t.$emit("deleteFun"),t.$message({type:"success",message:"删除成功!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},editClose:function(){this.showEdit=!1},editSubmit:function(){var t=this;this.loading=!0,Object(m.c)({announcement_id:this.formData.announcement_id,title:this.formData.title,content:this.formData.content,start_time:new Date(this.formData.start_time).getTime()/1e3,end_time:new Date(this.formData.end_time).getTime()/1e3}).then(function(e){t.$emit("editSubmit",t.formData),t.editClose(),t.$message.success("公告编辑成功"),t.loading=!1}).catch(function(){t.loading=!1,t.$message.error("公告编辑失败")})}}},v=(a("pZMI"),Object(c.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("create-view",{attrs:{"body-style":{height:"100%"}}},[a("div",{staticClass:"details-box"},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"text"},[t._v("公告详情")]),t._v(" "),a("span",{staticClass:"el-icon-close rt",on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(t._s(t.titleList.title))]),t._v(" "),a("div",{staticClass:"time"},[t._v(t._s(t._f("moment")(t.titleList.create_time,"YYYY-MM-DD HH:mm")))]),t._v(" "),a("div",{staticClass:"text"},[t._v(t._s(t.titleList.content))])]),t._v(" "),t.btnShow?a("div",{staticClass:"btn-box"},[t.permissionUpdate?a("el-button",{attrs:{type:"primary"},on:{click:t.onEdit}},[t._v("编辑")]):t._e(),t._v(" "),t.permissionDelete?a("el-button",{attrs:{type:"danger"},on:{click:t.deleteFun}},[t._v("删除")]):t._e()],1):t._e()]),t._v(" "),t.showEdit?a("v-edit",{attrs:{"form-data":t.formData,loading:t.loading},on:{editSubmit:t.editSubmit,editClose:t.editClose}}):t._e()],1)},[],!1,null,"8d865684",null));v.options.__file="details.vue";e.a=v.exports},pZMI:function(t,e,a){"use strict";var i=a("UkHZ");a.n(i).a},pvDT:function(t,e,a){"use strict";var i=a("SSgM");a.n(i).a}}]);