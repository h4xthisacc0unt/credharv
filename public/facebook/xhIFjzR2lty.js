if (self.CavalryLogger) { CavalryLogger.start_js(["2y8ewE3"]); }

__d("NullBusinessID",[],(function(a,b,c,d,e,f){a="personal-business";e.exports=a}),null);
__d("AdsPerfTiming",["performance"],(function(a,b,c,d,e,f){"use strict";var g;c=(g||(g=b("performance"))).timing&&(g||b("performance")).timing.fetchStart||a._cstart;f.start=c}),null);
__d("BizSiteIdentifier.brands",["NullBusinessID","URI","isEmpty","nullthrows"],(function(a,b,c,d,e,f){f.isBizSite=j;f.getBusinessID=k;f.getGlobalScopeID=a;f.createBusinessURL=c;var g,h,i=b("NullBusinessID");function j(){return(g||(g=b("URI"))).getRequestURI(!1).getSubdomain()==="business"}function k(){return(g||(g=b("URI"))).getRequestURI(!1).getQueryData().business_id}function a(){return(g||(g=b("URI"))).getRequestURI(!1).getQueryData().global_scope_id}function c(a,c){if((h||(h=b("isEmpty")))(c)||c===i)return new(g||(g=b("URI")))(a).setSubdomain("www");c=b("nullthrows")(c);a=new(g||(g=b("URI")))(a).setSubdomain("business");j()&&a.setDomain((g||(g=b("URI"))).getRequestURI(!1).getDomain());c=c||k();a.addQueryData("business_id",c);return a}}),null);
__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){var g,h=function(c){babelHelpers.inheritsLoose(a,c);function a(a,d,e){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d!==null&&d!==void 0&&d!==""?d:b("BizSiteIdentifier.brands").getBusinessID();e=e!==null&&e!==void 0&&e!==""?e:b("BizSiteIdentifier.brands").getGlobalScopeID();d!==null&&d!==void 0&&d!==""&&a.addQueryData("business_id",d);e!=null&&e!==""&&a.addQueryData("global_scope_id",e);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b,c){return new h(a,b,c)};a.BusinessURI=h;c=a;e.exports=c}),null);
__d("UFICommentLink.react",["cx","fbt","TrackingNodes","emptyFunction","prop-types","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||b("react");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("Leave a comment"),c='{ "tn": "'+b("TrackingNodes").encodeTN(b("TrackingNodes").types.COMMENT_LINK)+'", "type": 24 }';return j.jsx("a",{className:"comment_link _5yxe","data-testid":void 0,role:"button",href:this.props.href?this.props.href:"#",title:a,ajaxify:this.props.ajaxify,rel:this.props.rel,onClick:this.props.onClick,"data-ft":c,ref:"root",children:this.props.children})};return c}(j.Component);e.exports=a;a.propTypes={onClick:b("prop-types").func,href:b("prop-types").string,ajaxify:b("prop-types").string,rel:b("prop-types").string};a.defaultProps={onClick:b("emptyFunction")}}),null);
__d("AbstractActionList.react",["ReactFragment","react"],(function(a,b,c,d,e,f){var g,h=g||b("react"),i=h.jsx("span",{"aria-hidden":"true",children:" \xb7 "});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=!0,c=h.Children.map(this.props.children,function(c){if(!c)return c;if(a){a=!1;return c}return b("ReactFragment").create({BULLET:i,child:c})});return h.jsx("div",babelHelpers["extends"]({},this.props,{children:c}))};return c}(h.Component);e.exports=a}),null);
__d("ActionList.react",["AbstractActionList.react","joinClasses","react"],(function(a,b,c,d,e,f){var g,h=g||b("react");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("AbstractActionList.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"fsm fwn fcg"),children:this.props.children}))};return c}(h.Component);e.exports=a}),null);
__d("isNumberLike",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return!isNaN(parseFloat(a))&&isFinite(a)}}),null);
__d("hashString",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var b=0;for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);b=(b<<5)-b+d;b|=0}return b}}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="apps"}}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}}),null);
__d("flatMapArray",[],(function(a,b,c,d,e,f){e.exports=a;var g=Array.prototype.push;function a(a,b){var c=[];for(var d=0;d<a.length;d++){var e=b.call(a,a[d],d);if(Array.isArray(e))g.apply(c,e);else if(e!=null)throw new TypeError('flatMapArray: Callback must return an array or null, received "'+e.toString()+'" instead')}return c}}),null);
__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;e.exports=c}),null);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}var c=a.prototype;c.logPoint=function(a,c,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:b("QuickPerformanceLogger").currentTimestamp();var h=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(h.string||(h.string={}),h.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var i;h.bool||(h.bool={});h.bool=babelHelpers["extends"]({},h.bool,(i={},i.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",i.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",i))}b("QuickPerformanceLogger").markerStart(a,void 0,f,{samplingBasis:d});b("QuickPerformanceLogger").markerPoint(a,c,{data:h,timestamp:f*2});e.annotations&&b("QuickPerformanceLogger").markerAnnotate(a,e.annotations);b("QuickPerformanceLogger").markerAnnotate(a,{string:(i={},i.join_id=d,i.source="client",i),bool:(c={},c.qpl_e2e__align_points=!0,c)});b("QuickPerformanceLogger").markerEnd(a,g,void 0,f)};return a}();c=new a();e.exports=c}),null);
__d("WebFunnelLogger",["invariant","Banzai","FBLogger","QPLE2E","gkx","isStringNullOrEmpty"],(function(a,b,c,d,e,f,g){"use strict";var h={ROOMS_JOIN_E2E_WITH_INTERFACES_FUNNEL:141502565,ROOMS_PSTN_MENU_FUNNEL:667166687,TEST_IG_ANDROID_VIDEO_UPLOAD_2_FUNNEL:688924705,FOS_MON_PURCHASE_FLOW_FUNNEL:725614593,COPLAY_FUNNEL:640496395,ADS_EXPERIMENTS_WEB_FUNNEL:183762945,GROUPS_APP_FUNNEL:1010107390,AR_HUB_INSIGHTS_FUNNEL:445977908,AR_HUB_SETTINGS_NOTIFICATIONS_FUNNEL:445976360,AR_HUB_SETTINGS_PERMISSIONS_FUNNEL:445987822,AR_HUB_3_FUNNEL:445975837,WAYFINDER_USER_INTERACTION_FUNNEL:668283633,WORK_FILES_SEARCH_FUNNEL:12457892,WORK_FILES_APP_FUNNEL:12458187,VCPANEL_ONGOING_MEETING_FUNNEL:668272330,GIZMO_VCPANEL_CALL_START_FUNNEL:668282222,WORK_GROUP_FILES_TAB_FUNNEL:12462244,WORK_FILE_PDF_VIEWER_FUNNEL:12454789,FBLITE_ADS_END_OF_VIDEO_CTA_FUNNEL:144452084,FBLITE_ADS_LEAD_ADS_FUNNEL:144452614,FBLITE_ADS_WATCH_AND_BROWSE_FUNNEL:144456097,NT_FBLITE_IX_ADS_FUNNEL:144456247,FBLITE_ADS_WATCH_AND_INSTALL_FUNNEL:144445421,FBLITE_ADS_SPONSORED_VIDEOS_V2_FUNNEL:144444239,FBLITE_ADS_INLINE_EOV_CTA_FUNNEL:144450614,IG_BC_CREATION_FUNNEL:183834837,RIDE_ON_DEMAND_FEEDBACK_INTERACTION_FUNNEL:731650369,FACE_CRUNCH_PLACE_ORDER_PAGE_FUNNEL:725158695,EVENT_CREATE_WEB_FUNNEL:396252,EVENT_CREATE_DIALOG_FUNNEL:397979,FBLITE_NT_EVENT_CREATE_FUNNEL:396152,INTERN_EVENT_TIME_CREATE_FLOW_FUNNEL:81735603,INTERN_EVENT_UI_STEPPER_FLOW_FUNNEL:81725894,INTERN_EVENT_TIME_EDIT_FLOW_WEB_FUNNEL:81739010,PLATFORM_SHARE_DIALOG_FUNNEL:51452317,PLATFORM_LOGIN_WHATSAPP_ONBOARDING_FUNNEL:777338387,WHATSAPP_BIZ_API_HSM_CREATION_FUNNEL:141363848,WHATSAPP_BIZ_API_GENERAL_FUNNEL:141372740,CULINARY_FOODCARD_FUNNEL:725159829,FACE_CRUNCH_PLACE_ORDER_FUNNEL:725170528,FACE_CRUNCH_RECEIVING_FUNNEL:725166821,FACE_CRUNCH_INVOICE_SUBMISSION_FUNNEL:725157683,FACE_CRUNCH_CREATE_NEW_RECIPE_FUNNEL:725158389,FACE_CRUNCH_CREATE_TEMPLATE_ADHOC_ORDER_FUNNEL:725157923,FACE_CRUNCH_CREATE_ADHOC_ORDER_FUNNEL:725156869,FACE_CRUNCH_CREATE_RECIPE_FROM_EXISTING_FUNNEL:725163651,FACECRUNCH_RECONCILIATION_FUNNEL:725157581,FACE_CRUNCH_SAVE_ORDER_GUIDE_FUNNEL:725165351,CLEAR_HISTORY_WEB_FUNNEL:42411149,PLACE_PICKER_WEB_FUNNEL:841627612};a=function(){function a(a){this.$2={},this.$3={},this.$4="web_funnel_logging",this.$5(),this.$1.funnel_definition=a}var c=a.prototype;c.log=function(){if(this.$6()){this.$5();return}this.$1.funnel_payload=JSON.stringify(this.$2);this.$1.action_payload=JSON.stringify(this.$3);b("Banzai").post(this.$4,this.$1,b("Banzai").BASIC);this.$5()};c.logWithEventTime=function(a){this.$1.event_time=a/1e3;if(this.$6()){this.$5();return}this.$7();b("Banzai").post(this.$4,this.$1,b("Banzai").BASIC);this.$5()};c.logVital=function(){if(this.$6()){this.$5();return}this.$7();b("Banzai").post(this.$4,this.$1,b("Banzai").VITAL);this.$5()};c.logVitalWithEventTime=function(a){this.$1.event_time=a/1e3;if(this.$6()){this.$5();return}this.$7();b("Banzai").post(this.$4,this.$1,b("Banzai").VITAL);this.$5()};c.$6=function(){if(!b("gkx")("1923684"))return!1;var a=this.$1.funnel_definition;if(b("isStringNullOrEmpty")(a))return!1;a=h[a];if(a==null)return!1;if(!b("isStringNullOrEmpty")(this.$1.action)&&!b("isStringNullOrEmpty")(this.$1.session_key)){var c;b("QPLE2E").logPoint(a,this.$1.action,this.$1.session_key,{timestamp:this.$1.event_time,annotations:this.$8(this.$2),pointData:this.$8(this.$3),secondaryOrder:(c=this.$1.secondary_order_value)!=null?c:void 0,sessionMarker:this.$1.session_marker==="end"?"end":this.$1.session_marker==="start"?"start":void 0});return!0}else b("FBLogger")("qpl").event("web_funnel_to_e2e").mustfix("WebFunnelLogger: action and session key must not be null, undefined or empty, in marker id %d",a);return!1};c.$7=function(){this.$1.funnel_payload=JSON.stringify(this.$2),this.$1.action_payload=JSON.stringify(this.$3),this.$1.action!==null||g(0,5829),this.$1.session_key!==null||g(0,5830)};c.$5=function(){this.$1={};this.$2={};this.$3={};return this};c.setAction=function(a){this.$1.action=a;return this};c.addActionPayload=function(a,b){this.$3[a]=b;return this};c.setActionTag=function(a){this.$1.action_tag=a;return this};c.addFunnelPayload=function(a,b){this.$2[a]=b;return this};c.setFunnelTags=function(a){this.$1.funnel_tags=a;return this};c.setSecondaryOrder=function(a){this.$1.secondary_order_value=a;return this};c.setSessionKey=function(a){this.$1.session_key=a;return this};c.markStart=function(){this.$1.session_marker="start";return this};c.markEnd=function(){this.$1.session_marker="end";return this};c.setUserId=function(a){this.$1.user_id=a;return this};c.setIsEmployee=function(a){this.$1.is_employee=a;return this};c.$8=function(a){var b=this,c={string:{},"int":{},"double":{},bool:{},string_array:{},int_array:{},double_array:{},bool_array:{}};Object.entries(a).forEach(function(a){var d=a[0];a=a[1];if(!Array.isArray(a)){var e=typeof a;switch(e){case"number":Number.isInteger(a)?c["int"][d]=a:c["double"][d]=a;break;case"boolean":c.bool[d]=a;break;case"string":c.string[d]=a;break;default:c.string[d]=JSON.stringify(a)}}else{e=[];if(b.$9(e,function(a){return typeof a==="number"&&Number.isInteger(a)?a:null},a)){c.int_array[d]=e;return}e=[];if(b.$9(e,function(a){return typeof a==="number"?a:null},a)){c.double_array[d]=e;return}e=[];if(b.$9(e,function(a){return typeof a==="boolean"?a:null},a)){c.bool_array[d]=e;return}e=[];if(b.$9(e,function(a){return typeof a==="string"?a:JSON.stringify(a)},a)){c.string_array[d]=e;return}}});return c};c.$9=function(a,b,c){for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;f=b(f);if(f!=null)a.push(f);else return!1}return!0};return a}();e.exports=a}),null);
__d("PlatformOAuthDialogLoginFunnelLogger",["FBLogger","URI","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";var g,h=1;f.CLIENT_FUNNEL_VERSION=h;a=function(a,c,d,e,f,g){e===void 0&&(e=!0);if(null==d||""===d||e&&(null==c||""===c||0===c)){b("FBLogger")("platform_login_web_funnel_client_js").mustfix("\nerror: null_required_field\naction: "+a+"\nloggerId: "+String(d)+"\ncbt: "+String(c)+"\n        ");return}e="number"!==typeof c?parseInt(c,10):c;c=Date.now()-e;var l=i(),m=j();d=new(b("WebFunnelLogger"))("PlatformLoginWebFunnelDefinition").setAction(a).setSessionKey(d).addActionPayload("logger_id",d).addActionPayload("first_paint_time",l).addActionPayload("response_start_time",m).addActionPayload("cbt_delta",c).addFunnelPayload("client_funnel_version",h).addFunnelPayload("cbt",e).addFunnelPayload("gdp_type",f).addFunnelPayload("duo_like_passwordless_user",g);if(a==="client_logged_out_init_impression"){l=k();d.addFunnelPayload("login_uri",l)}d.logVital()};f.log=a;var i=function(){if(l()){var a=window.performance.getEntriesByType("paint").filter(function(a){return"first-paint"===a.name});if(null==a||0<!a.length)return null;a=a[0].startTime+a[0].duration;return a}return null},j=function(){if(l()){var a=window.performance.getEntriesByType("navigation");return null==a||0<!a.length?null:a[0].responseStart}return null},k=function(){return(g||(g=b("URI"))).getRequestURI().setQueryString("").toString()},l=function(){return window.performance&&typeof window.performance.getEntriesByType==="function"}}),null);
__d("XOauthDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dialog/oauth/",{app_id:{type:"Int"},auth_method:{type:"Enum",enumType:1},facebook_sdk_version:{type:"String"},calling_package_key:{type:"String"},context_uri:{type:"String"},default_audience:{type:"Enum",enumType:1},display:{type:"Enum",enumType:1},domain:{type:"String"},encoded_state:{type:"String"},fallback_redirect_uri:{type:"String"},force_confirmation:{type:"Bool",defaultValue:!1},kid_directed_site:{type:"Bool",defaultValue:!1},install_nonce:{type:"String"},legacy_override:{type:"String"},logged_out_behavior:{type:"Enum",enumType:0},logger_id:{type:"String"},loyalty_program_id:{type:"Int"},loyalty_ad_id:{type:"String"},loyalty_referrer:{type:"Enum",enumType:1},native_login_button:{type:"Bool",defaultValue:!1},original_redirect_uri:{type:"String"},privacyx:{type:"String"},redirect_uri:{type:"String"},ref:{type:"String"},return_format:{type:"EnumVector",enumType:{member:1}},return_scopes:{type:"Bool",defaultValue:!1},scope:{type:"StringVector"},scope_objects:{type:"String"},scope_objects_count:{type:"String"},sdk:{type:"String"},sdk_version:{type:"String"},seen_scopes:{type:"String"},sheet_name:{type:"String"},state:{type:"String"},user_mobile_phone:{type:"String"},android_key:{type:"String"},sso:{type:"String"},sso_device:{type:"Enum",enumType:1},sso_key:{type:"String"},nonce:{type:"String"},user_code:{type:"String"},auth_type:{type:"String"},auth_nonce:{type:"String"},ret:{type:"String"},fbs:{type:"Int"},fbapp_pres:{type:"Bool",defaultValue:!1},response_type:{type:"String"},ignore_reentry:{type:"Bool",defaultValue:!1},type:{type:"Enum",enumType:1},l_nonce:{type:"String"},cbt:{type:"Int"},ies:{type:"Bool",defaultValue:!1},cct_over_app_switch:{type:"Bool",defaultValue:!1},cct_prefetching:{type:"Bool",defaultValue:!1},page_id_account_linking:{type:"Int"},messenger_page_id:{type:"Int"},reset_messenger_state:{type:"Bool",defaultValue:!1},is_first_party_account_linking:{type:"Bool",defaultValue:!1},aid:{type:"Int"},referral_code:{type:"String"},deferred_redirect_uri:{type:"String"},code_redirect_uri:{type:"String"},shared_id:{type:"String"},extras:{type:"String"},add_email_reauth_nonce:{type:"String"},tp:{type:"Enum",enumType:1},encrypted_query_string:{type:"String"},account_type:{type:"Enum",enumType:0},fx_app:{type:"Enum",enumType:1},account_deduplication_user_cipher:{type:"String"},skip_dedupe:{type:"Bool",defaultValue:!1},privacy_mutation_token:{type:"String"}})}),null);
__d("PlatformDialogCBTSetter",["PlatformOAuthDialogLoginFunnelLogger","URI","XOauthDialogController","uuid"],(function(a,b,c,d,e,f){"use strict";f.setCBTInFieldAndLog=a;f.setCBTInFormAndLog=c;var g;function a(a,c,d,e){if(a.value===""){var f=Date.now();a.value=f.toString()}b("PlatformOAuthDialogLoginFunnelLogger").log(c,a.value,d,!0,e)}function c(a,c,d){var e=new(g||(g=b("URI")))(a.action),f=e.getQueryData().next;if(!f)return;f=new g(f);var h=b("XOauthDialogController").getURIBuilder().getURI().getPath().toString();h.endsWith("/")&&(h=h.substr(0,h.length-1));if(!f.getPath().includes(h))return;h=f.getQueryData().cbt;var i=f.getQueryData().logger_id;h||(h=Date.now(),f.addQueryData("cbt",h),e.addQueryData("next",f.toString()),a.action=e.toString());i||(i=b("uuid")(),f.addQueryData("logger_id",i),e.addQueryData("next",f.toString()),a.action=e.toString());b("PlatformOAuthDialogLoginFunnelLogger").log(c,h,i,!0,null,d)}}),null);