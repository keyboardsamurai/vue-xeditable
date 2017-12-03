import vue from"vue";import axios from"axios";var XCustomSelect={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("select",{ref:"$_VueXeditable_Select",domProps:{value:e.value},on:{change:function(t){e.onChange(t.target.value)}}},e._l(e.options,function(t){return i("option",{key:t,ref:"options",refInFor:!0,domProps:{value:t,selected:e.isSelected(t)}},[e._v(" "+e._s(t)+" ")])}))},staticRenderFns:[],template:"#custom-select",props:["value","options"],mounted:function(){this.$refs.$_VueXeditable_Select.addEventListener("keydown",this.onKeyDown,!1)},beforeDestroy:function(){this.$refs.$_VueXeditable_Select.removeEventListener("keydown",this.onKeyDown,!1)},methods:{onChange:function(e){this.$emit("input",e)},isSelected:function(e){return e===this.value},onKeyDown:function(e){this.$emit("keydown",e)}}},XEditable={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-xeditable"},[e._t("before"),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing&&!e.isRemoteUpdating,expression:"!isEditing && !isRemoteUpdating"}],staticClass:"vue-xeditable-value",class:{"vue-xeditable-empty":e.$_VueXeditable_isValueEmpty},domProps:{innerHTML:e._s(e.$_VueXeditable_getHTMLValue())},on:{click:e.$_VueXeditable_startEditing}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isEditing&&!e.isRemoteUpdating,expression:"isEditing && !isRemoteUpdating"}],staticClass:"vue-xeditable-control"},["text"===e.type?i("input",{ref:"$_VueXeditable_text",staticClass:"vue-form-control",attrs:{type:"text",autofocus:""},domProps:{value:e.rawValue},on:{keydown:e.$_VueXeditable_onKeydown}}):"textarea"===e.type?i("textarea",{ref:"$_VueXeditable_textarea",staticClass:"vue-form-control",on:{keydown:e.$_VueXeditable_onKeydown}},[e._v("      "+e._s(e.rawValue)+"\n    ")]):"number"===e.type?i("input",{ref:"$_VueXeditable_number",staticClass:"vue-form-control",attrs:{type:"number"},domProps:{value:e.rawValue},on:{keydown:e.$_VueXeditable_onKeydown}}):"select"===e.type?i("x-custom-select",{ref:"$_VueXeditable_select",staticClass:"vue-form-control",attrs:{options:e.options},on:{input:e.$_VueXeditable_valueDidChange,keydown:e.$_VueXeditable_onKeydown},model:{value:e.rawValue,callback:function(t){e.rawValue=t},expression:"rawValue"}}):e._e()],1),e._v(" "),e._t("after")],2)},staticRenderFns:[],_scopeId:"data-v-cd131608",name:"vue-xeditable",components:{XCustomSelect:XCustomSelect},props:{value:{type:[String,Number,Array]},type:{type:String,required:!1,default:"text"},name:{type:String,required:!1,default:"VueXeditable"},empty:{type:String,required:!1,default:"Empty"},placeholder:{type:String,required:!1,default:""},options:{type:Array,default:function(){return[]}},remote:{type:Object,required:!1,default:function(){return{url:null,method:"PUT",key:null,resource:null,headers:null}}}},data:function(){return{isEditing:!1,isRemoteUpdating:!1,rawValue:this.value,initialSelectValue:this.value}},watch:{value:function(e){this.rawValue=e}},computed:{$_VueXeditable_isValueEmpty:function(){return null===this.rawValue||void 0===this.rawValue||""===this.rawValue},$_VueXeditable_hasRemoteUpdate:function(){return this.remote&&this.remote.url&&this.remote.url.length&&this.remote.key&&this.remote.key.length},$_VueXeditable_hasValidRemote:function(){return this.$_VueXeditable_hasRemoteUpdate&&["PUT","POST"].includes(this.remote.method.toUpperCase())}},methods:{$_VueXeditable_getHTMLValue:function(){return this.$_VueXeditable_isValueEmpty?this.empty:this.rawValue||"?"},$_VueXeditable_onKeydown:function(e){this.isEditing&&(13===e.keyCode?(this.$_VueXeditable_stopEditing(e),this.$_VueXeditable_valueDidChange(e.target.value)):27===e.keyCode&&this.$_VueXeditable_stopEditing(e))},$_VueXeditable_startEditing:function(e){this.isEditing=!0,this.$emit("start-editing",this.rawValue,this.name),setTimeout(function(){Array.from(e.target.nextElementSibling.children).forEach(function(e){e.focus()})},100)},$_VueXeditable_stopEditing:function(e){this.isEditing=!1,this.$emit("stop-editing",this.rawValue,this.name)},$_VueXeditable_valueDidChange:function(e){var t=this;"select"===this.type&&this.$_VueXeditable_stopEditing(),(this.$_VueXeditable_hasValueChanged(e)||"select"===this.type)&&(this.$emit("value-will-change",this.rawValue,this.name),this.$_VueXeditable_hasRemoteUpdate?this.$_VueXeditable_hasValidRemote?this.$_VueXeditable_sendRemoteUpdate(e).then(function(){t.$emit("value-did-change",e,t.name)}).catch(function(i){t.$emit("value-remote-update-error",e,i,t.name)}):console.error("VueXeditable Error: Invalid Remote Update configuration."):(this.$_VueXeditable_makeLocalUpdate(e),this.$emit("value-did-change",e,this.name)))},$_VueXeditable_hasValueChanged:function(e){return e!==this.rawValue},$_VueXeditable_makeLocalUpdate:function(e){"select"===this.type?this.initialSelectValue=this.rawValue:this.rawValue=e},$_VueXeditable_sendRemoteUpdate:function(e){var t=this,i=e,a={};if(this.remote.resource&&this.remote.resource.length){var n={};n[this.remote.key]=i,a[this.remote.resource]=n}else a[this.remote.key]=i;return new Promise(function(i,n){t.isRemoteUpdating=!0,axios({method:t.remote.method,url:t.remote.url,headers:t.remote.headers||{},data:a}).then(function(a){t.isRemoteUpdating=!1,t.$_VueXeditable_makeLocalUpdate(e),i(e)}).catch(function(e){t.isRemoteUpdating=!1,n(e)})})}}},VueXeditable={};VueXeditable.install=function(e,t){e.component("VueXeditable",XEditable)};export default VueXeditable;
//# sourceMappingURL=vue-xeditable.esm.js.map
