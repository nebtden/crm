(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f85f","chunk-6f85","chunk-6f85f1","chunk-bf92","chunk-6f85f1f"],{"69K9":function(e,t,a){"use strict";var i=a("XJ3U");a.n(i).a},"7z+D":function(e,t,a){"use strict";var i=a("ExMk"),l=a("KTTK"),s=a("Ew9n"),n=a("EP+0"),r=a("3biH"),c=a("Er7M"),o=a("O1Uw"),d=a("7Qib"),u={name:"ExamineDetail",components:{SlideView:s.a,CreateSections:n.a,ExamineInfo:r.a,RelatedBusinessCell:c.a,CRMFullScreenDetail:function(){return a.e("chunk-bf92").then(a.bind(null,"uMjE"))},FileCell:o.a},props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,category_id:"",detail:{},list:[],category_name:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"start_address",label:"出发城市"},{prop:"end_address",label:"目的城市"},{prop:"start_time",label:"开始时间"},{prop:"end_time",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"start_address",label:"出发城市"},{prop:"end_address",label:"目的城市"},{prop:"start_time",label:"开始时间"},{prop:"end_time",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){return{contacts:this.detail.contactsList||[],customer:this.detail.customerList||[],business:this.detail.businessList||[],contract:this.detail.contractList||[]}}},watch:{id:function(e){this.getDetial()}},mounted:function(){this.getDetial()},methods:{getBaseInfo:function(){var e=this;this.loading=!0,Object(l.j)({types:"oa_examine",module:"oa",controller:"examine",action:"read",action_id:this.id,types_id:this.category_id}).then(function(t){var a=e;e.list=t.data.map(function(e,t){return a.handleShowInfo(e)}),e.loading=!1}).catch(function(){e.loading=!1})},handleShowInfo:function(e){return"date"===e.form_type&&"0000-00-00"==e.value?e.value="":"datetime"===e.form_type&&(0==e.value?e.value="":e.value=e.value?Object(d.n)(e.value,"YYYY-MM-DD HH:mm:ss"):""),e},getDetial:function(){var e=this;this.loading=!0,Object(i.e)({id:this.id}).then(function(t){e.loading=!1,e.category_id=t.data.category_id,e.getBaseInfo(),e.detail=t.data,e.category_name=e.detail.category_name,e.fileList=e.detail.fileList,e.imgList=e.detail.imgList,e.travelList=e.detail.travelList}).catch(function(){e.loading=!1})},fieldFormatter:function(e,t){return 3!=this.category_id||"start_time"!=t.property&&"end_time"!=t.property?5!=this.category_id||"start_time"!=t.property&&"end_time"!=t.property?e[t.property]:e[t.property]?Object(d.n)(e[t.property],"YYYY-MM-DD"):"":e[t.property]?Object(d.n)(e[t.property],"YYYY-MM-DD HH:mm:ss"):""},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(e,t){this.relatedID=t[e+"_id"],this.relatedCRMType=e,this.showRelatedDetail=!0},handleFile:function(e,t,a){if("preview"===e){if(t&&t.length>0){var i=t.map(function(e){return e.url=e.file_path,e});this.$bus.emit("preview-image-bus",{index:a,data:i})}}else"download"===e&&Object(d.a)({path:t.file_path,name:t.name})},imgZoom:function(e,t){this.$bus.emit("preview-image-bus",{index:t,data:e.map(function(e,t,a){return{url:e.file_path,name:e.name}})})},downloadFile:function(e){Object(d.a)({path:e.file_path,name:e.name})},examineHandle:function(e){this.$store.dispatch("GetOAMessageNum","examine"),this.$emit("on-examine-handle",e)}}},p=(a("q0U1"),a("ZrdR")),m=Object(p.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":e.noListenerClass,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[i("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-name"},[e._v(e._s(e.category_name))]),e._v(" "),i("img",{staticClass:"header-close",attrs:{src:a("cjwK")},on:{click:e.hideView}})]),e._v(" "),i("div",{staticClass:"detail-body"},[i("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},e._l(e.list,function(t,l){return"examine_cause"!==t.form_type&&"business_cause"!==t.form_type?i("flexbox-item",{key:l,staticClass:"b-cell",attrs:{span:.5}},["user"===t.form_type?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t.realname)+"  \n                ")])}))],1)]):"structure"===t.form_type?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t.name)+"  \n                ")])}))],1)]):"checkbox"===t.form_type?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t)+"  \n                ")])}))],1)]):"file"===t.form_type?i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},e._l(t.value,function(l,s){return i("flexbox",{key:s,staticClass:"f-item"},[i("img",{staticClass:"f-img",attrs:{src:a("6KEE")}}),e._v(" "),i("div",{staticClass:"f-name"},[e._v(e._s(l.name.length>15?l.name.substring(0,15)+"...":l.name+"("+l.size+")"))]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.handleFile("preview",t.value,s)}}},[e._v("预览")]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.handleFile("download",l,s)}}},[e._v("下载")])],1)}))]):i("flexbox",{staticClass:"b-cell-b",attrs:{align:"stretch"}},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[e._v(e._s(t.value))])])],1):e._e()})),e._v(" "),e.fileList.length>0||e.imgList.length>0?i("div",{staticClass:"accessory"},[i("div",{staticClass:"upload-img-box"},e._l(e.imgList,function(t,a){return i("div",{key:a,staticClass:"img-list",on:{click:function(t){e.imgZoom(e.imgList,a)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.file_path_thumb,expression:"imgItem.file_path_thumb"}],key:t.file_path_thumb})])})),e._v(" "),i("div",{staticClass:"accessory-box"},e._l(e.fileList,function(e,t){return i("file-cell",{key:t,attrs:{data:e,"cell-index":t}})}))]):e._e(),e._v(" "),e.category_id&&3==e.category_id&&e.travelList&&e.travelList.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"行程"}},[i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},e._l(e.travelField,function(t,a){return i("el-table-column",{key:a,attrs:{prop:t.prop,formatter:e.fieldFormatter,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}))],1):e._e(),e._v(" "),e.category_id&&5==e.category_id&&e.travelList&&e.travelList.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"报销"}},[i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},[e._l(e.expensesField,function(t,a){return i("el-table-column",{key:a,attrs:{prop:t.prop,formatter:e.fieldFormatter,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"header",fn:function(t){return[i("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),i("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("flexbox",{attrs:{justify:"center"}},[i("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.handleFile("preview",t.row.imgList,0)}}},[e._v(e._s(t.row.imgList.length)+"张")])],1)]}}])})],2)],1):e._e(),e._v(" "),e.relatedListData.contacts.length>0||e.relatedListData.customer.length>0||e.relatedListData.business.length>0||e.relatedListData.contract.length>0?i("create-sections",{staticClass:"create-sections",attrs:{title:"关联业务"}},[i("div",{staticClass:"related-business create-sections-content"},e._l(e.relatedListData,function(t,a){return i("div",{key:a},e._l(t,function(t,l){return i("related-business-cell",{key:l,attrs:{data:t,"cell-index":l,type:a,"show-foot":!1},nativeOn:{click:function(i){e.checkRelatedDetail(a,t)}}})}))}))]):e._e(),e._v(" "),i("create-sections",{staticClass:"create-sections",attrs:{title:"审核信息"}},[i("examine-info",{staticClass:"create-sections-content",attrs:{id:e.id,flow_id:e.detail.flow_id,"examine-type":"oa_examine"},on:{"on-handle":e.examineHandle}})],1)],1)],1),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"92dafb7a",null);m.options.__file="examineDetail.vue";t.a=m.exports},XJ3U:function(e,t,a){},omvR:function(e,t,a){},q0U1:function(e,t,a){"use strict";var i=a("omvR");a.n(i).a},uMjE:function(e,t,a){"use strict";a.r(t);var i=a("7Qib"),l=a("mqlf"),s=a("ppJE"),n=a("PS1M"),r=a("n1dw"),c=a("xfX+"),o=a("8gwX"),d=a("K6D0"),u=a("7z+D"),p={name:"CRMFullScreenDetail",components:{ClueDetail:l.a,CustomerDetail:s.a,ContactsDetail:n.a,BusinessDetail:r.a,ContractDetail:c.a,ProductDetail:o.a,MoneyDetail:d.a,ExamineDetail:u.a},props:{id:[String,Number],crmType:{type:String,default:""},visible:{type:Boolean,default:!1}},data:function(){return{showDetail:!1}},computed:{tabName:function(){return"leads"==this.crmType?"clue-detail":"customer"==this.crmType?"customer-detail":"contacts"==this.crmType?"contacts-detail":"business"==this.crmType?"business-detail":"contract"==this.crmType?"contract-detail":"product"==this.crmType?"product-detail":"receivables"==this.crmType?"money-detail":"examine"==this.crmType?"examine-detail":""}},watch:{visible:function(e){this.showDetail=e,e&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(i.g)())},showDetail:function(e){var t=this;e||setTimeout(function(){t.$emit("update:visible",!1)},350)}},mounted:function(){this.visible&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(i.g)())},beforeDestroy:function(){this.$el&&this.$el.parentNode&&(this.$el.parentNode.removeChild(this.$el),this.$el.removeEventListener("click",this.handleDocumentClick,!1))},methods:{hiddenView:function(){this.showDetail=!1},handleDocumentClick:function(e){e.stopPropagation(),this.$el==e.target&&(this.showDetail=!1)}}},m=(a("69K9"),a("ZrdR")),h=Object(m.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"full-container"},[e.id&&e.showDetail?a(e.tabName,{tag:"component",staticClass:"d-view",attrs:{"crm-type":e.crmType,id:e.id},on:{"hide-view":e.hiddenView}}):e._e()],1)},[],!1,null,"666bd4d2",null);h.options.__file="CRMFullScreenDetail.vue";t.default=h.exports}}]);