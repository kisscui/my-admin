(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116ad4c1"],{e9c4:function(e,l,n){var t=n("23e7"),o=n("da84"),a=n("d066"),i=n("2ba4"),d=n("e330"),r=n("d039"),u=o.Array,s=a("JSON","stringify"),c=d(/./.exec),b=d("".charAt),p=d("".charCodeAt),m=d("".replace),h=d(1..toString),f=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,x=function(e,l,n){var t=b(n,l-1),o=b(n,l+1);return c(g,e)&&!c(C,o)||c(C,e)&&!c(g,t)?"\\u"+h(p(e,0),16):e},I=r((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&t({target:"JSON",stat:!0,forced:I},{stringify:function(e,l,n){for(var t=0,o=arguments.length,a=u(o);t<o;t++)a[t]=arguments[t];var d=i(s,null,a);return"string"==typeof d?m(d,f,x):d}})},fe53:function(e,l,n){"use strict";n.r(l);n("e9c4");var t=n("7a23"),o=n("3ef4"),a=Object(t["createTextVNode"])("Submit"),i={setup:function(e){var l=Object(t["reactive"])({widgetList:[{type:"static-text",icon:"static-text",formItemFlag:!1,options:{name:"statictext111193",columnWidth:"200px",hidden:!1,textContent:"单列表单",customClass:[],onCreated:"",onMounted:"",label:"static-text"},id:"statictext111193"},{type:"divider",icon:"divider",formItemFlag:!1,options:{name:"divider102346",label:"",columnWidth:"200px",direction:"horizontal",contentPosition:"center",hidden:!1,customClass:[],onCreated:"",onMounted:""},id:"divider102346"},{type:"input",icon:"text-field",formItemFlag:!0,options:{name:"input12931",label:"发件人姓名",labelAlign:"",type:"text",defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,showPassword:!1,required:!0,validation:"",validationHint:"",customClass:[],labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,prefixIcon:"",suffixIcon:"",appendButton:!1,appendButtonDisabled:!1,buttonIcon:"el-icon-search",onCreated:"",onMounted:"",onInput:"",onChange:"function onChange(value) {\n  console.log(value)\n}",onFocus:"",onBlur:"",onValidate:""},id:"input12931"},{type:"switch",icon:"switch-field",formItemFlag:!0,options:{name:"switch96070",label:"是否保密",labelAlign:"",defaultValue:!0,columnWidth:"200px",labelWidth:null,labelHidden:!1,disabled:!1,hidden:!1,customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,switchWidth:40,activeText:"",inactiveText:"",activeColor:null,inactiveColor:null,onCreated:"",onMounted:"",onChange:"",onValidate:""},id:"switch96070"},{type:"input",icon:"text-field",formItemFlag:!0,options:{name:"input23031",label:"发件人号码",labelAlign:"",type:"text",defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,showPassword:!1,required:!0,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,prefixIcon:"",suffixIcon:"",appendButton:!1,appendButtonDisabled:!1,buttonIcon:"el-icon-search",onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"input23031"},{type:"textarea",icon:"textarea-field",formItemFlag:!0,options:{name:"textarea21654",label:"发件人地址",labelAlign:"",rows:3,defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,required:!0,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"textarea21654"},{type:"divider",icon:"divider",formItemFlag:!1,options:{name:"divider69240",label:"",columnWidth:"200px",direction:"horizontal",contentPosition:"center",hidden:!1,customClass:"",onCreated:"",onMounted:""},id:"divider69240"},{type:"input",icon:"text-field",formItemFlag:!0,options:{name:"input113152",label:"收件人姓名",labelAlign:"",type:"text",defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,showPassword:!1,required:!0,validation:"",validationHint:"",customClass:[],labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,prefixIcon:"",suffixIcon:"",appendButton:!1,appendButtonDisabled:!1,buttonIcon:"el-icon-search",onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"input113152"},{type:"checkbox",icon:"checkbox-field",formItemFlag:!0,options:{name:"checkbox63174",label:"接收时间段",labelAlign:"",defaultValue:[],columnWidth:"200px",size:"",displayStyle:"inline",buttonStyle:!1,border:!1,labelWidth:null,labelHidden:!1,disabled:!1,hidden:!1,optionItems:[{label:"上午9:00 - 11:30",value:1},{label:"下午12:30 - 18:00",value:2},{label:"晚上18:00 - 21:00",value:3}],required:!0,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,onCreated:"",onMounted:"",onChange:"",onValidate:""},id:"checkbox63174"},{type:"input",icon:"text-field",formItemFlag:!0,options:{name:"input40240",label:"收件人号码",labelAlign:"",type:"text",defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,showPassword:!1,required:!0,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,prefixIcon:"",suffixIcon:"",appendButton:!1,appendButtonDisabled:!1,buttonIcon:"el-icon-search",onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"input40240"},{type:"input",icon:"text-field",formItemFlag:!0,options:{name:"input78584",label:"收件人地址",labelAlign:"",type:"text",defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,showPassword:!1,required:!0,validation:"mobilePhone",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,prefixIcon:"",suffixIcon:"",appendButton:!1,appendButtonDisabled:!1,buttonIcon:"el-icon-search",onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"input78584"},{type:"divider",icon:"divider",formItemFlag:!1,options:{name:"divider75887",label:"",columnWidth:"200px",direction:"horizontal",contentPosition:"center",hidden:!1,customClass:[],onCreated:"",onMounted:""},id:"divider75887"},{type:"time-range",icon:"time-range-field",formItemFlag:!0,options:{name:"timerange47503",label:"送货时间",labelAlign:"",defaultValue:null,startPlaceholder:"",endPlaceholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,clearable:!0,editable:!1,format:"HH:mm:ss",required:!0,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,onCreated:"",onMounted:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"timerange47503"},{type:"slider",icon:"slider-field",formItemFlag:!0,options:{name:"slider54714",label:"价格保护",labelAlign:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,disabled:!1,hidden:!1,required:!1,validation:"",validationHint:"",customClass:[],labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,min:0,max:100,step:20,range:!1,height:null,onCreated:"",onMounted:"",onChange:"",onValidate:"",showStops:!0},id:"slider54714"},{type:"textarea",icon:"textarea-field",formItemFlag:!0,options:{name:"textarea64794",label:"其他信息",labelAlign:"",rows:3,defaultValue:"",placeholder:"",columnWidth:"200px",size:"",labelWidth:null,labelHidden:!1,readonly:!1,disabled:!1,hidden:!1,required:!1,validation:"",validationHint:"",customClass:"",labelIconClass:null,labelIconPosition:"rear",labelTooltip:null,minLength:null,maxLength:null,showWordLimit:!1,onCreated:"",onMounted:"",onInput:"",onChange:"",onFocus:"",onBlur:"",onValidate:""},id:"textarea64794"}],formConfig:{modelName:"formData",refName:"vForm",rulesName:"rules",labelWidth:150,labelPosition:"left",size:"",labelAlign:"label-right-align",cssCode:"",customClass:[],functions:"",layoutType:"H5",jsonVersion:3,onFormCreated:"",onFormMounted:"",onFormDataChange:""}}),n=Object(t["reactive"])({}),i=Object(t["reactive"])({}),d=Object(t["ref"])(null),r=function(){d.value.getFormData().then((function(e){alert(JSON.stringify(e))})).catch((function(e){o["a"].error(e)}))};return function(e,o){var u=Object(t["resolveComponent"])("v-form-render",!0),s=Object(t["resolveComponent"])("el-button");return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",null,[Object(t["createVNode"])(u,{"form-json":Object(t["unref"])(l),"form-data":Object(t["unref"])(n),"option-data":Object(t["unref"])(i),ref_key:"vFormRef",ref:d},null,8,["form-json","form-data","option-data"]),Object(t["createVNode"])(s,{type:"primary",onClick:r},{default:Object(t["withCtx"])((function(){return[a]})),_:1})])}}};const d=i;l["default"]=d}}]);