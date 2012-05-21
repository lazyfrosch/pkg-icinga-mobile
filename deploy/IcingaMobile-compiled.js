Ext.ns("Icinga.Mobile.Model");
Icinga.Mobile.Model.da={hostStateName:function(a){a||(a="0");if(isNaN(a))return a;stateTypes={"0":"UP","1":"DOWN","2":"UNREACHABLE","99":"PENDING"};return stateTypes[a]},serviceStateName:function(a){a||(a="0");if(isNaN(a))return a;stateTypes={"0":"OK","1":"WARNING","2":"CRITICAL","3":"UNKNOWN","99":"PENDING"};return stateTypes[a]},booleanString:function(a){return a?"True":"No"},booleanIcon:function(a){return a?'<div class="icinga-icon enabled"></div>':'<div class="icinga-icon disabled"></div>'},detailEllipsis:function(a){if(a.substr(0,
4)!="<div")a='<div class="icinga-detailField">'+a+"</div>";return a},flagsToIcons:function(){}};Ext.ns("Icinga.Mobile.View.Templates");
Icinga.Mobile.View.Templates.xb={target:"host",title:"Hosts",fields:["HOST_ID","HOST_NAME","HOST_CURRENT_STATE","INSTANCE_NAME",{name:"HOST_CURRENT_STATE_NAME",convert:Icinga.Mobile.Model.da.Db,mapping:"HOST_CURRENT_STATE"}],ea:{STATEFIELD:'<tpl if="!HOST_CURRENT_STATE">0</tpl>{HOST_CURRENT_STATE}',ID:"{HOST_ID}",CONTENT:"Host: {HOST_NAME}",TARGET:"host"},filters:[{label:"<div class='icinga-btn-ok'> </div>",filter:[{field:"HOST_CURRENT_STATE",C:"0",B:"!="}]},{label:"<div class='icinga-btn-critical'> </div>",
filter:[{field:"HOST_CURRENT_STATE",C:"1",B:"!="}],p:true},{label:"<div class='icinga-btn-unknown'> </div>",filter:[{field:"HOST_CURRENT_STATE",C:"2",B:"!="}],p:true}],sort:[{label:"host name",field:"HOST_NAME"},{label:"host status",field:"HOST_CURRENT_STATE",isDefault:true}],ba:["HOST_NAME"],detail:{title:"{HOST_NAME}",fields:[{label:"Host id",field:"HOST_ID"},{label:"Host name",field:"HOST_NAME"},{label:"Adress",field:"HOST_ADDRESS"},{label:"State",field:"HOST_CURRENT_STATE",valueTpl:'<div class="status_host_{HOST_CURRENT_STATE}">{HOST_STATE_NAME}</div>'},
{field:"HOST_STATE_NAME",mapping:"HOST_CURRENT_STATE",convert:"hostStateName",hidden:true},{label:"Last check",field:"HOST_LAST_CHECK"},{label:"Next Check",field:"HOST_NEXT_CHECK"},{label:"Check attempt/max",field:["HOST_CURRENT_CHECK_ATTEMPT","HOST_MAX_CHECK_ATTEMPTS"],valueTpl:"{HOST_CURRENT_CHECK_ATTEMPT}/{HOST_MAX_CHECK_ATTEMPTS}"},{label:"Output",field:"HOST_OUTPUT",convert:"detailEllipsis"},{label:"Perfdata",field:"HOST_PERFDATA",convert:"detailEllipsis"},{label:"Acknowledged?",field:"HOST_PROBLEM_HAS_BEEN_ACKNOWLEDGED",
convert:"booleanIcon"},{label:"Flags",field:["HOST_ACTIVE_CHECKS_ENABLED","HOST_PASSIVE_CHECKS_ENABLED","HOST_NOTIFICATIONS_ENABLED"],valueTpl:'<div class="icinga-iconField-wrap"><div class="icinga-iconField activeChecks"> <tpl if="HOST_ACTIVE_CHECKS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="HOST_ACTIVE_CHECKS_ENABLED == 0"><div class="icinga-icon disabled">:</div></tpl></div><div class="icinga-iconField passiveChecks"> <tpl if="HOST_PASSIVE_CHECKS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="HOST_PASSIVE_CHECKS_ENABLED == 0"><div class="icinga-icon disabled"></div></tpl></div><div class="icinga-iconField notifications"> <tpl if="HOST_NOTIFICATIONS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="HOST_NOTIFICATIONS_ENABLED == 0"><div class="icinga-icon disabled">:</div></tpl></div></div>'}]},
idProperty:"HOST_ID"};Ext.ns("Icinga.Mobile.View.Templates");
Icinga.Mobile.View.Templates.zb={target:"service",title:"Services",fields:["SERVICE_ID","SERVICE_NAME","HOST_NAME","INSTANCE_NAME","SERVICE_CURRENT_STATE",{name:"SERVICE_CURRENT_STATE_NAME",convert:Icinga.Mobile.Model.da.Gb,mapping:"SERVICE_CURRENT_STATE"}],ea:{STATEFIELD:'<tpl if="!SERVICE_CURRENT_STATE">0</tpl>{SERVICE_CURRENT_STATE}',ID:"{SERVICE_OBJECT_ID}",CONTENT:"Service: {SERVICE_NAME}<br/>Host: {HOST_NAME}",TARGET:"service"},filters:[{label:"<div class='icinga-btn-ok'> </div>",filter:[{field:"SERVICE_CURRENT_STATE",
C:"0",B:"!="}]},{label:"<div class='icinga-btn-warning'> </div>",filter:[{field:"SERVICE_CURRENT_STATE",C:"1",B:"!="}],p:true},{label:"<div class='icinga-btn-critical'> </div>",filter:[{field:"SERVICE_CURRENT_STATE",C:"2",B:"!="}],p:true},{label:"<div class='icinga-btn-unknown'> </div>",filter:[{field:"SERVICE_CURRENT_STATE",C:"3",B:"!="}],p:true}],sort:[{label:"service name",field:"SERVICE_NAME"},{label:"service status",field:"SERVICE_CURRENT_STATE",isDefault:true},{label:"host name",field:"HOST_NAME"}],
ba:["HOST_NAME","SERVICE_NAME"],detail:{title:"{SERVICE_NAME}",fields:[{label:"Service id",field:"SERVICE_ID"},{label:"Service name",field:"SERVICE_NAME"},{label:"Host",field:"HOST_NAME"},{label:"Service status",field:"SERVICE_CURRENT_STATE",valueTpl:'<div class="status_service_{SERVICE_CURRENT_STATE}">{SERVICE_STATE_NAME}</div>'},{label:"Host status",field:"HOST_CURRENT_STATE",valueTpl:'<div class="status_host_{HOST_CURRENT_STATE}">{HOST_STATE_NAME}</div>'},{field:"HOST_STATE_NAME",mapping:"HOST_CURRENT_STATE",
convert:"hostStateName",hidden:true},{field:"SERVICE_STATE_NAME",mapping:"SERVICE_CURRENT_STATE",convert:"serviceStateName",hidden:true},{label:"Last check",field:"SERVICE_LAST_CHECK"},{label:"Next Check",field:"SERVICE_NEXT_CHECK"},{label:"Check attempt/max",field:["SERVICE_CURRENT_CHECK_ATTEMPT","SERVICE_MAX_CHECK_ATTEMPTS"],valueTpl:"{SERVICE_CURRENT_CHECK_ATTEMPT}/{SERVICE_MAX_CHECK_ATTEMPTS}"},{label:"Output",field:"SERVICE_OUTPUT",convert:"detailEllipsis"},{label:"Perfdata",field:"SERVICE_PERFDATA",
convert:"detailEllipsis"},{label:"Acknowledged?",field:"SERVICE_PROBLEM_HAS_BEEN_ACKNOWLEDGED",convert:"booleanIcon"},{label:"Flags",field:["SERVICE_ACTIVE_CHECKS_ENABLED","SERVICE_PASSIVE_CHECKS_ENABLED","SERVICE_NOTIFICATIONS_ENABLED"],valueTpl:'<div class="icinga-iconField-wrap"><div class="icinga-iconField activeChecks"> <tpl if="SERVICE_ACTIVE_CHECKS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="SERVICE_ACTIVE_CHECKS_ENABLED == 0"><div class="icinga-icon disabled">:</div></tpl></div><div class="icinga-iconField passiveChecks"> <tpl if="SERVICE_PASSIVE_CHECKS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="SERVICE_PASSIVE_CHECKS_ENABLED == 0"><div class="icinga-icon disabled"></div></tpl></div><div class="icinga-iconField notifications"> <tpl if="SERVICE_NOTIFICATIONS_ENABLED == 1"><div class="icinga-icon enabled">:</div></tpl><tpl if="SERVICE_NOTIFICATIONS_ENABLED == 0"><div class="icinga-icon disabled">:</div></tpl></div><div>'}]},
idProperty:"SERVICE_ID"};Ext.onReady(function(){Ext.ns("Icinga.Mobile.Model");Icinga.Mobile.Model.Na=Ext.extend(Ext.data.JsonStore,{constructor:function(a){Ext.data.JsonStore.prototype.constructor.call(this,a);this.getProxy().on("filterchanged",function(){this.load()},this,{buffer:true})},Q:function(a){this.getProxy().Q(a)},ha:function(a){this.getProxy().ha(a)},nextPage:function(){this.pa(this.V()+1)},previousPage:function(){this.V()>0&&this.pa(this.V()-1)},getTotal:function(){return this.getProxy().totalCount},gb:function(){return this.getProxy().currentCount},
ja:function(){return Math.ceil(this.getTotal()/this.hb())},V:function(){return this.getProxy().currentPage},pa:function(a){a=a>=0?a:0;if(a<this.ja()){this.getProxy().currentPage=a;this.load()}},hb:function(){return this.getProxy().pageSize},Hb:function(a){this.getProxy().pageSize=a},Ca:function(a){this.getProxy().Ea=a},ca:function(a){this.getProxy().sortDir=a},Ba:function(a){this.getProxy().na=a},ib:function(){return this.getProxy().na},load:function(a){if(!this.p)return false;Ext.data.JsonStore.prototype.load.call(this,
a)}});Icinga.Mobile.Model.va=Ext.extend(Ext.data.AjaxProxy,{noCache:false,currentPage:0,pageSize:25,currentCount:0,totalCount:0,sortField:null,sortDir:"DESC",searchText:"",constructor:function(a){this.Ib=Ext.id();this.filters={};Ext.apply(this.events,{Cb:true});Ext.data.AjaxProxy.prototype.constructor.call(this,a)},Q:function(a){this.filters[a.label]||(this.filters[a.label]=a.filter[0]);this.fireEvent("filterchanged")},ha:function(a){this.filters[a.label]&&delete this.filters[a.label];this.fireEvent("filterchanged")},
doRequest:function(a,b,c){var d=this.getWriter(),e=this.buildRequest(a,b,c);if(a.allowWrite())e=d.write(e);Ext.apply(e,{headers:this.headers,timeout:this.timeout,scope:this,success:function(f){f=Ext.decode(f.responseText);if(f.error){alert(f.error["0"].message);return false}this.totalCount=f.total;this.currentCount=f.result.length;IBus.R("paginatorvalueschanged",this);IBus.R("loaded",this,{single:true})},failure:function(){alert("Request failed")},callback:this.createRequestCallback(e,a,b,c),method:this.getMethod(e)});
a="/limit["+(this.currentPage*this.pageSize||0)+";"+this.pageSize+"]";if(b=this.Xa())b="/filter[AND("+b+")]";c="";if(this.Ea)c="/order["+this.Ea+";"+this.sortDir+"]";e.url+=b+a+c+"/json";Ext.Ajax.request(e);return e},Xa:function(){var a="";if(this.na){a="OR(";Ext.each(this.ba,function(d){a+=d+"|like|"+this.na+"*;"},this);a+=");"}var b=true;for(var c in this.filters){b||(a+=";");a+=this.filters[c].field+"|"+this.filters[c].B+"|"+this.filters[c].C;b=false}return a}})});Ext.onReady(function(){Ext.ns("Icinga.Mobile.Model");Icinga.Mobile.Model.Ma=Ext.extend(Ext.DataView,{Aa:Icinga.Mobile.View.Templates,Fb:[],constructor:function(a){a||(a={});Ext.apply(this,a,{mb:"item-selected",itemSelector:"div.infoField"});if(this.qb(a)&&this.qa(a)){Ext.apply(this,a);Ext.DataView.prototype.constructor.call(this,a);this.on("show",function(){this.getStore().p=true;this.getStore().load()},this);this.on("hide",function(){Ext.each(Ext.DomQuery.select(".selectedIcingaItem"),function(b){Ext.get(b).removeClass("selectedIcingaItem");
b.data=null})},this);this.on("itemtap",function(b,c,d){if(this.xa){if(d.data){Ext.get(d).removeClass("selectedIcingaItem");d.data=null}else{Ext.get(d).addClass("selectedIcingaItem");d.data=b.getRecord(d)}return true}if(!this.za)this.za=new Icinga.Mobile.Model.Template.Ja(this.v);b=b.getRecord(d);Icinga.Mobile.View.Sheets.ua.la(this.za,b);Icinga.Mobile.View.Sheets.ua.show()},this);this.on("hide",function(){this.getStore().p=false},this)}else IBus.R("displayConfigDialog")},qa:function(a){if(!this.v)return false;
var b=this.v,c=IConf.k("icinga_url"),d=IConf.k("icinga_apikey");if(!c||!d){Ext.Msg.alert("Missing config parameters","Can't access icinga without url and credentials!");return false}var e={storeId:b.target,fields:b.fields,proxy:new Icinga.Mobile.Model.va({reader:{type:"json",root:"result",idProperty:b.idProperty,successProperty:"success",totalProperty:"total"}})};e.proxy.ba=b.ba;c=c+"/web/api/"+b.target+"/";c+=this.ia();c+="/authkey="+d;c+="/countColumn="+b.idProperty;c+="/withMeta=1";e.proxy.url=
c;a.store=new Icinga.Mobile.Model.Na(e);return true},ia:function(){var a="columns[",b=true;Ext.each(this.v.fields,function(c){if(c.mapping)return true;b||(a+="|");a+=c.name||c;b=false});return a+"]"},pb:function(){this.getStore().load()},qb:function(a){if(this.ma&&this.Aa[this.ma])this.v=this.Aa[this.ma];var b=IConf.k("defaultViewTpl");if(!this.Ha[b]){alert("Invalid template "+b+" specified!");IConf.clear();return false}this.fb=this.v.filters;this.Da=this.v.sort;b=this.Ha[b];Ext.apply(this.v.ea,{TPL:'<tpl for=".">',
TPL_END:"</tpl>"});a.tpl=new Ext.XTemplate(b.apply(this.v.ea));a.title=this.v.title;return true},Ha:{pregnancyTest:new Ext.XTemplate('<div class="listing">',"{TPL}",'<div class="listingThumb">','<div class="infoField state_{TARGET}_{STATEFIELD}" id="{ID}">',"{CONTENT}","</div>","</div>","{TPL_END}","</div>")}})});Ext.onReady(function(){Ext.ns("Icinga.Mobile.Model");Icinga.Mobile.Model.Oa=function(){var a={hasSetup:"true",defaultViewTpl:"pregnancyTest",icinga_apikey:"noKey",icinga_url:"http://localhost/icinga-web",noStartup:"false"},b={oa:function(e,f){var g=Ext.decode(localStorage.icingaMobile);g[e]=f;localStorage.icingaMobile=Ext.encode(g)},k:function(e){return Ext.decode(localStorage.icingaMobile)[e]},clear:function(){localStorage.icingaMobile=""}};function c(){localStorage.icingaMobile=Ext.encode(a);console.log();
IBus.R("displayConfigDialog")}try{Ext.decode(localStorage.icingaMobile)||c()}catch(d){c()}return b}();IConf=Icinga.Mobile.Model.Oa});Ext.onReady(function(){Ext.ns("Icinga.Mobile.Model");Icinga.Mobile.Model.wa=new (function(){return{Fa:function(a,b,c,d){alert("Sending command");b=Ext.encode(b);c=Ext.encode(c);var e=IConf.k("icinga_url"),f=IConf.k("icinga_apikey");Ext.Ajax.request({url:e+"/web/api/cmd/cmd="+a+"/authkey="+f+"/target="+b+"/data="+c,success:function(){console.log("resp");alert("Command send!");d&&d()},failure:function(){console.log("resp");alert("Could not send command");d&&d()}})}}})});Ext.ns("Icinga.Mobile.Model");Icinga.Mobile.Model.Pa=new (Ext.extend(Ext.util.Observable,{ya:{},constructor:function(a){this.listeners=a;this.superclass.constructor.call(this,a)},Ta:function(a,b,c,d){this.addEvents(a);this.ya[a]=true;this.addListener(a,b,c,d)},R:function(){if(!this.ya[Ext.toArray(arguments)[0]])return false;this.fireEvent.apply(this,arguments)}}));Ext.ns("IBus");IBus=Icinga.Mobile.Model.Pa;Ext.ns("Icinga.Mobile.Model.Template");
Icinga.Mobile.Model.Template.Ja=Ext.extend(Ext.util.Observable,{ra:[],$:[],tpl:[],jb:(new Ext.XTemplate("<table class='x-icinga-table'>","<tbody>","<tr>","<td colspan='2' class='x-icinga-grid-cell-head'>{TITLE}</td>","</tr>",'<tpl for="rows">',"<tr>","<td class='x-icinga-grid-cell'>","<div class='x-icinga-grid-cell-inner'>","{LABEL}","</div>","</td>","<td class='x-icinga-grid-cell'>","<div class='x-icinga-grid-cell-inner'>","{VALUE}","</div>","</td>","<tr>","</tpl>","</tbody>","</table>")).compile(),
events:{load:true},constructor:function(a){this.config=a;if(Ext.isDefined(a.detail)){this.ra=[];this.$=[];this.tpl=[];this.la(a)}},la:function(a){this.nb(a.detail);this.qa(a)},nb:function(a){this.db(a);this.ab(a)},db:function(a){Ext.each(a.fields,this.eb,this);Ext.each(a.fields,this.Ua,this)},eb:function(a){if(a.mapping)return true;if(!Ext.isArray(a.field))a.field=[a.field];Ext.each(a.field,function(b){this.$.indexOf(b)<0&&this.$.push(b)},this);return true},Ua:function(a){if(!Ext.isArray(a.field))a.field=
[a.field];Ext.each(a.field,function(b){this.ra.push({name:b,mapping:a.mapping||null,convert:a.convert?Icinga.Mobile.Model.da[a.convert]:null})},this);return true},ab:function(a){var b=[];Ext.each(a.fields,function(c){if(c.hidden)return true;b.push({LABEL:c.labelTpl||c.label,VALUE:c.valueTpl||"{"+c.field+"}"})},this);this.tpl.push(this.jb.apply({TITLE:a.title,rows:b}))},qa:function(a){var b=IConf.k("icinga_url"),c=IConf.k("icinga_apikey");if(!b||!c)Ext.Msg.alert("Missing config parameters","Can't access icinga without url and credentials!");
else{var d={fields:this.ra,proxy:new Icinga.Mobile.Model.va({reader:{type:"json",root:"result",idProperty:a.idProperty,successProperty:"success",totalProperty:"total"}})};b=b+"/web/api/"+a.target+"/";b+=this.ia();b+="/authkey="+c;b+="/countColumn="+a.idProperty;b+="/withMeta=1";d.proxy.url=b;this.store=new Ext.data.JsonStore(d);this.store.on("read",this.ub,this)}},lb:function(a){var b=this.config.idProperty;a=a.get(b);this.store.proxy.filters={yb:{field:b,C:a,B:"="}};this.store.load()},ub:function(a){var b=
[];a.each(function(c){b.push(c.data)},this);this.fireEvent("load",b[0])},ia:function(){var a="columns[";a+=this.$.join("|");return a+"]"}});Ext.ns("Icinga.Mobile.View.Commands");
Icinga.Mobile.View.Commands.ta={Service:[{command:"SCHEDULE_SVC_CHECK",title:"Schedule service check",icon:"icon-reschedule",fields:{Ab:{text:"Checktime",type:"date"}}},{command:"ACKNOWLEDGE_SVC_PROBLEM",title:"Acknowledge service problem",icon:"icon-acknowledged",fields:{sticky:{type:"toggle",text:"Sticky"},notify:{type:"toggle",text:"Notify"},persistent:{type:"toggle",text:"Persistent"},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"SCHEDULE_SVC_DOWNTIME",
title:"Schedule a downtime on this service",icon:"icon-downtime",fields:{starttime:{type:"date",text:"Start"},endtime:{type:"date",text:"End"},fixed:{type:"toggle",text:"fixed"},duration:{type:"textfield",text:"Duration"},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"PROCESS_SERVICE_CHECK_RESULT",title:"Process service check result",icon:"icon-checkresult",fields:{status:{type:"select",options:[{text:"OK",value:0},{text:"WARNING",value:1},{text:"CRITICAL",
value:2},{text:"UNKNOWN",value:3}],text:"Status"},output:{type:"textfield",text:"Output"},author:{type:"textfield",text:"Perfdata"}}},{command:"ADD_SVC_COMMENT",title:"Add service comment",icon:"icon-comment",fields:{data:{type:"hidden",value:" "},author:{type:"textfield",text:"Author"},comment:{type:"textfield",text:"Comment"}}},{command:"DISABLE_PASSIVE_SVC_CHECKS",title:"Disable passive checks for these services",icon:"icon-disable-generic",fields:{}},{command:"ENABLE_PASSIVE_SVC_CHECKS",title:"Enable passive checks for these services",
icon:"icon-passive",fields:{}},{command:"DISABLE_SVC_CHECK",title:"Disable checks for these services",icon:"icon-disable-generic",fields:{}},{command:"ENABLE_SVC_CHECK",title:"Enable checks for these services",icon:"icon-active-checks",fields:{}},{command:"STOP_OBSESSING_OVER_SVC",title:"Stop obsessing over these services",icon:"icon-stop",fields:{}},{command:"DISABLE_SVC_NOTIFICATIONS",title:"Disable service notifications",icon:"icon-notify-disable",fields:{}},{command:"ENABLE_SVC_NOTIFICATIONS",
title:"Enable service notifications",icon:"icon-notify-enable",fields:{}},{command:"SEND_CUSTOM_SVC_NOTIFICATION",title:"Send service notifications",icon:"icon-notify",fields:{options:{type:"select",options:[{text:"no option (default)",value:"0"},{text:"Broadcast",value:"1"},{text:"Forced",value:"2"},{text:"Increment current notification",value:"3"}]},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"ENABLE_SVC_EVENT_HANDLER",title:"Enable service event handler",
icon:"icon-generic",fields:{}},{command:"DISABLE_SVC_EVENT_HANDLER",title:"Disable service event handler",icon:"icon-disable-generic",fields:{}},{command:"ENABLE_SVC_FLAP_DETECTION",title:"Enable service flap detection",icon:"icon-flap",fields:{}},{command:"DISABLE_SVC_FLAP_DETECTION",title:"Disable service flap detection",icon:"icon-disable-generic",fields:{}}],Host:[{command:"SCHEDULE_HOST_CHECK",title:"Schedule check for this host",icon:"icon-reschedule",fields:{checktime:{type:"date",text:"Check time"}}},
{command:"SCHEDULE_HOST_DOWNTIME",title:"Schedule a downtime on this host",icon:"icon-downtime",fields:{starttime:{type:"date",text:"Start"},endtime:{type:"date",text:"End"},fixed:{type:"toggle",text:"fixed"},duration:{type:"textfield",text:"Duration"},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"SCHEDULE_HOST_SVC_DOWNTIME",title:"Schedule a downtime on all services of this host",icon:"icon-downtime",fields:{starttime:{type:"date",text:"Start"},endtime:{type:"date",
text:"End"},fixed:{type:"toggle",text:"fixed"},duration:{type:"textfield",text:"Duration"},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"PROCESS_HOST_CHECK_RESULT",title:"Process host check result",icon:"icon-checkresult",fields:{status:{type:"select",options:[{text:"OK",value:0},{text:"WARNING",value:1},{text:"CRITICAL",value:2},{text:"UNKNOWN",value:3}],text:"Status"},output:{type:"textfield",text:"Output"},author:{type:"textfield",text:"Perfdata"}}},
{command:"ACKNOWLEDGE_HOST_PROBLEM",title:"Acknowledge host problem",icon:"icon-acknowledged",fields:{sticky:{type:"toggle",text:"Sticky"},notify:{type:"toggle",text:"Notify"},persistent:{type:"toggle",text:"Persistent"},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"ADD_HOST_COMMENT",title:"Add host comment",icon:"icon-comment",fields:{data:{type:"hidden",value:" "},author:{type:"textfield",text:"Author"},comment:{type:"textfield",text:"Comment"}}},{command:"DISABLE_HOST_CHECK",
title:"Disable checks for these hosts",icon:"icon-disable-generic",fields:{}},{command:"ENABLE_HOST_CHECK",title:"Enable checks for these hosts",icon:"icon-active-checks",fields:{}},{command:"STOP_OBSESSING_OVER_HOST",title:"Stop obsessing over these hosts",icon:"icon-stop",fields:{}},{command:"DISABLE_HOST_NOTIFICATIONS",title:"Disable host notifications",icon:"icon-notify-disable",fields:{}},{command:"ENABLE_HOST_NOTIFICATIONS",title:"Enable host notifications",icon:"icon-notify-enable",fields:{}},
{command:"SEND_CUSTOM_HOST_NOTIFICATION",title:"Send host notifications",icon:"icon-notify",fields:{options:{type:"select",options:[{text:"no option (default)",value:"0"},{text:"Broadcast",value:"1"},{text:"Forced",value:"2"},{text:"Increment current notification",value:"3"}]},author:{type:"textfield",text:"Author"},comment:{type:"textarea",text:"Comment"}}},{command:"ENABLE_HOST_EVENT_HANDLER",title:"Enable host event handler",icon:"icon-generic",fields:{}},{command:"DISABLE_HOST_EVENT_HANDLER",
title:"Disable host event handler",icon:"icon-disable-generic",fields:{}},{command:"ENABLE_HOST_FLAP_DETECTION",title:"Enable host flap detection",icon:"icon-flap",fields:{}},{command:"DISABLE_HOST_FLAP_DETECTION",title:"Disable host flap detection",icon:"icon-disable-generic",fields:{}}]};Ext.ns("Icinga.Mobile.View");
Icinga.Mobile.View.La=function(a,b){var c=new Icinga.Mobile.Model.Ma({ma:a,autoHeight:true});if(b&&c.getStore())c.getStore().p=true;var d=new Icinga.Mobile.View.Dock.Ka({e:c});if(c.Da){var e=new Icinga.Mobile.View.Sheets.Sa({e:c});d.add(e.Va)}d.add({xtype:"button",ui:"mask",iconCls:"refresh",dock:"right",stretch:false,align:"center",handler:function(){c.pb()}});var f=Ext.id("cmdBtn");d.add({xtype:"button",ui:"round",text:"<div id='"+f+"' class='icinga-btn-command'> </div>",dock:"right",stretch:false,
align:"center",handler:function(){var g=Ext.get(f);if(g.X){g.replaceClass("icinga-btn-excl","icinga-btn-command");var h=Ext.DomQuery.select(".selectedIcingaItem");if(h.length){var l=[];Ext.each(h,function(j){var k={instance:j.data.get("INSTANCE_NAME")};if(j.data.get("SERVICE_NAME"))k.service=j.data.get("SERVICE_NAME");k.host=j.data.get("HOST_NAME");l.push(k);Icinga.Mobile.q.fireEvent("sendCommand",l)})}else alert("Nothing selected!")}else g.replaceClass("icinga-btn-command","icinga-btn-excl");g.X=
!g.X;c.xa=g.X}});c.on("render",function(){Ext.EventManager.addListener(c.getEl(),"pinch",function(){Icinga.Mobile.View.Sheets.Ra.sb(c.getStore())})});c.on("hide",function(){var g=Ext.get(f);g.replaceClass("icinga-btn-excl","icinga-btn-command");c.xa=false;g.X=false},this);e=new Icinga.Mobile.View.Dock.Qa({e:c});c.addDocked(d);c.addDocked(e);return c};Ext.ns("Icinga.Mobile.View");
Icinga.Mobile.View.Ia=function(){var a=new Ext.form.FormPanel({title:"Config",fullscreen:true,items:[{xtype:"component",cls:"funkyIcingaBox"},{xtype:"textfield",name:"url",label:"Icinga Web URL",value:IConf.k("icinga_url")},new Ext.form.PasswordField({xtype:"passwordField",name:"authkey",label:"Auth key",value:IConf.k("icinga_apikey")}),new Ext.form.Checkbox({name:"noStartup",label:"Hide startup",value:IConf.k("noStartup")})],cls:"icinga-panel-config"});a.addDocked(new Ext.Toolbar({dock:"top",items:[{text:"Clear configuration",
handler:function(){if(confirm("Really clear the config?")){IConf.clear();a.setValues({url:null,authkey:null})}}},{text:"Save",ui:"action",handler:function(){if(confirm("Do you want to save these changes?")){var b=a.getValues();IConf.oa("icinga_url",b.url);IConf.oa("icinga_apikey",b.authkey);IConf.oa("noStartup",b.noStartup);window.location.reload()}}},{text:"Reset",ui:"action",handler:function(){var b={url:IConf.k("icinga_url"),authkey:IConf.k("icinga_apikey")};a.setValues(b)}}]}));return a};Ext.ns("Icinga.Mobile.View");
(function(){var a=new Ext.DataView({layout:"fit",fullscreen:true,store:new Ext.data.JsonStore({proxy:{type:"memory",reader:{type:"json"}},fields:["title","icon"]}),mb:"x-view-over",itemSelector:"div.selCommand",emptyText:"No images to display",tpl:new Ext.XTemplate('<tpl for=".">',"<div class='selCommand'>","<div class='label  {icon}'>{title}</div>","</div>","</tpl>"),listeners:{itemtap:function(b,c,d){Icinga.Mobile.View.J.vb(b.getRecord(d),b.bb);Icinga.Mobile.q.setCard(2,"slide")}}});Icinga.Mobile.View.sa=
new (Ext.extend(Ext.Panel,{fullscreen:true,layout:"fit",items:[a],rb:function(b){a.bb=b;b=b[0].service?Icinga.Mobile.View.Commands.ta.Service:Icinga.Mobile.View.Commands.ta.Host;a.getStore().loadData(b)},constructor:function(b){Ext.Container.prototype.constructor.call(this,b);a.addDocked(new Ext.Toolbar({dock:"top",items:[{xtype:"component",html:"Select a command",cls:"icinga-cmd-header"}]}));a.addDocked(new Ext.Toolbar({dock:"bottom",items:[{text:"Cancel",handler:function(){Icinga.Mobile.q.setCard(0,
"slide")}}]}))}}))})();Ext.ns("Icinga.Mobile.View");
Icinga.Mobile.View.J=new (Ext.extend(Ext.Panel,{fullscreen:true,layout:"fit",items:[],vb:function(a,b){this.doLayout();var c=a.get("fields"),d={autoDestroy:true,cls:"commandField",scroll:"vertical",items:[]};for(var e in c)this.ob(e,c[e],d);if(this.f){this.f.removeAll(true);this.f.fa=a.get("command");this.f.target=b;Ext.each(d.items,function(f){this.f.add(f)},this);this.f.doLayout()}else{this.f=this.add(new Ext.form.FormPanel(d));this.f.fa=a.get("command");this.f.target=b;this.f.isValid=function(){var f=
true;Ext.each(this.items.items,function(g){if(g.required&&(g.getValue()===false||g.getValue()==="")){alert(g.label+" is required!");f=false;return true}if(g.isDate)if(!g.getValue().match(/\d{4}-[01]\d-[0-3]\d [0-2]\d:[0-6]\d:[0-6]\d/)){alert("Dates must be in the format YYYY-MM-DD hh:mm:ss");f=false;return true}return true},this);return f}}d.items.length||Icinga.Mobile.Model.wa.Fa(this.f.fa,this.f.target,{},function(){Icinga.Mobile.q.setCard(0,"slide")});this.doLayout()},ob:function(a,b,c){switch(b.type){case "toggle":c.items.push(new (Ext.extend(Ext.form.Checkbox,
{name:a,label:b.text,getValue:function(){if(this.rendered)return this.fieldEl.dom.checked?"1":"2";return this.fieldEl.checked?"1":"2"}})));break;case "textfield":c.items.push(new Ext.form.TextField({label:b.text,name:a,labelAlign:"top",required:true}));break;case "textarea":c.items.push(new Ext.form.TextField({label:b.text,name:a,labelAlign:"top",required:true}));break;case "select":c.items.push(new Ext.form.Select({label:b.text,name:a,labelAlign:"top",options:b.options,required:true}));break;case "hidden":c.items.push(new Ext.form.HiddenField({label:b.text,
name:a,labelAlign:"top",value:b.value,required:true}));break;case "date":c.items.push(new Ext.form.TextField({label:b.text,isDate:true,name:a,labelAlign:"top",value:"YYYY-MM-DD hh:mm:ss",required:true}));break}}}));Icinga.Mobile.View.J.addDocked(new Ext.Toolbar({dock:"top",items:[{text:"Send",ui:"action",handler:function(){if(!this.f.isValid())return false;Icinga.Mobile.Model.wa.Fa(this.f.fa,this.f.target,this.f.getValues(),function(){Icinga.Mobile.q.setCard(0,"slide")})},scope:Icinga.Mobile.View.J}]}));
Icinga.Mobile.View.J.addDocked(new Ext.Toolbar({dock:"bottom",items:[{text:"Cancel",handler:function(){Icinga.Mobile.q.setCard(0,"slide")}}]}));Ext.onReady(function(){Ext.ns("Icinga.Mobile.View.Sheets");Icinga.Mobile.View.Sheets.Ra=new (Ext.extend(Ext.Sheet,{modal:true,centered:true,sb:function(a){this.K=a;this.aa.setValue(a.ib());this.show()},constructor:function(a){a=a||{};a.aa=new Ext.form.TextField({name:"search"});Ext.apply(this,a);a.style="text-align:center;";a.items=[this.aa,new Ext.Spacer({height:25}),{xtype:"button",text:"Search",toggle:false,handler:function(){this.K.Ba(this.aa.getValue());this.K.load();this.hide()},scope:this},
{xtype:"button",text:"Show all",toggle:false,handler:function(){this.aa.setValue("");this.K.Ba("");this.K.load();this.hide()},scope:this}];Ext.Sheet.prototype.constructor.call(this,a)}}))});Ext.onReady(function(){Ext.ns("Icinga.Mobile.View.Sheets");Icinga.Mobile.View.Sheets.ua=new (Ext.extend(Ext.Sheet,{arrive:"left",depart:"left",animation:"slide",modal:true,baseCls:"icinga-sheet",fullscreen:true,stretchY:true,centered:true,scroll:"vertical",ga:new Ext.Container({autoDestroy:true,height:Ext.getBody().getHeight(),width:Ext.getBody().getWidth()*0.98}),constructor:function(a){a=a||{};a.items=[this.ga];Ext.Sheet.prototype.constructor.call(this,a);this.on("show",function(){Ext.EventManager.on(document.body,
"swipe",this.Ga,this)},this)},tb:function(a){this.ga.update(a,true);this.Wa.defer(100,this)},Ga:function(a){if(this.isVisible())if(a.direction=="left"){this.hide();Ext.EventManager.removeListener(document.body,"swipe",this.Ga)}},la:function(a,b){this.Za(a);a.lb(b);this.doLayout()},Za:function(a){Ext.each(a.tpl,function(){if(!Ext.isObject(a.tpl))a.tpl=(new Ext.XTemplate(a.tpl)).compile();this.ga.tpl=a.tpl;a.on("load",this.tb,this,{single:true})},this);this.add([])},Wa:function(){var a=Ext.DomQuery.select("div.icinga-detailField");
Ext.each(a,function(b){if(b.Eb)return true;Ext.EventManager.on(b,"click",function(c){c=Ext.get(c.target).getHTML();alert(c)},this);return true},this)}}))});Ext.onReady(function(){Ext.ns("Icinga.Mobile.View.Sheets");Icinga.Mobile.View.Sheets.Sa=Ext.extend(Ext.ActionSheet,{arrive:"left",depart:"left",centered:true,constructor:function(a){Ext.apply(this,a);this.$a(a);Ext.ActionSheet.prototype.constructor.call(this,a);this.Va=new Ext.Button({text:"Sort",ui:"action",handler:function(){this.show()},scope:this})},$a:function(a){this.e=a.e;a.items=[];var b=[],c=null;Ext.each(this.e.Da,function(e){b.push({text:"Sort by "+e.label,value:e.label,xtype:"button",
handler:function(){this.e.getStore().Ca(e.field)},active:e.isDefault,scope:this});if(e.isDefault)c=e},this);c&&this.e.getStore().Ca(c.field);var d=Ext.id();a.items.push(new Ext.ButtonContainer({items:b,style:"width:200px",maxWidth:200,componentLayout:"vbox",cls:"x-button-label"}));a.items.push([{xtype:"spacer",height:25},{xtype:"slider",values:["ASC","DESC"],centered:true,value:1,minValue:0,maxValue:1,label:'<div class="th_label_'+d+'"style="text-align:center;width:100%;color:#9aa7b2">DESC</div>',
listeners:{change:function(e,f,g,h){if(!this.I)this.I=Ext.Element.get(Ext.DomQuery.selectNode(".th_label_"+d));e=this.e.getStore();if(h){this.I.setHTML("DESC");e.ca("DESC")}else{this.I.setHTML("ASC");e.ca("ASC")}},drag:function(e,f,g){if(!this.I)this.I=Ext.Element.get(Ext.DomQuery.selectNode(".th_label_"+d));e=this.e.getStore();if(g){this.I.setHTML("DESC");e.ca("DESC")}else{this.I.setHTML("ASC");e.ca("ASC")}},scope:this}},{xtype:"button",ui:"action",text:"Close",handler:function(){this.hide();this.e.getStore().load()},
scope:this}])}})});Ext.onReady(function(){Ext.ns("Icinga.Mobile.View.Dock");Icinga.Mobile.View.Dock.Ka=Ext.extend(Ext.Toolbar,{dock:"top",constructor:function(a){a||(a={});Ext.apply(this,a);this.Ya(a);Ext.Toolbar.prototype.constructor.call(this,a)},Ya:function(a){var b={allowMultiple:true,items:[]};Ext.each(this.e.fb,function(c){b.items.push({text:c.label||" ",cls:c.cls,value:c.label+"_"+Ext.id("btn"),xtype:"button",active:c.p,handler:function(d){d.active?this.e.getStore().Q(c):this.e.getStore().ha(c)},scope:this});
c.p||this.e.getStore().Q(c)},this);Ext.apply(a,{items:[new Ext.ButtonContainer(b)]})}})});Ext.onReady(function(){Ext.ns("Icinga.Mobile.View.Dock");Icinga.Mobile.View.Dock.Qa=Ext.extend(Ext.Toolbar,{dock:"bottom",currentPage:1,Kb:1,Bb:0,Jb:0,constructor:function(a){this.ka=new Ext.Button({text:"Page 1 / 1",ui:"normal",tpl:'<span class="x-button-label">Page {current_page} / {total_pages} ({displayed_items} of {total_items} items)</span>',width:175});a||(a={});Ext.apply(this,a,{items:[{text:"Back",ui:"back",handler:function(){this.e.getStore().previousPage()},scope:this},this.ka,{text:"Next",
ui:"forward",handler:function(){this.e.getStore().nextPage()},scope:this}]});this.ka.setHandler(this.cb.createDelegate(this));Ext.Toolbar.prototype.constructor.call(this,a);IBus.Ta("paginatorvalueschanged",this.wb,this)},wb:function(){var a=this.e.getStore();this.ka.update({current_page:a.V()+1,total_pages:a.ja(),displayed_items:a.gb(),total_items:a.getTotal()})},cb:function(){for(var a=[],b=this.e.getStore(),c=1;c<=b.ja();c++)a.push(new Ext.Button({text:c.toString(),ui:"rounded",kb:c-1,handler:function(e){b.pa(e.kb);
d.hide()},scope:this}));var d=new Ext.ActionSheet({arrive:"left",depart:"left",maxWidth:300,centered:true,items:[{xtype:"component",html:"Jump to page",style:"font-weight: bold;text-rendering: optimizeLegibility;-webkit-font-smoothing: antialiased;color: #9aa7b2;padding-bottom:1em"},{layout:"hbox",xtype:"container",items:a,width:300,scroll:"horizontal"},{xtype:"container",layout:"vbox",items:[{xtype:"spacer",height:25},{xtype:"button",ui:"action",text:"Close",handler:function(){d.hide()}}]}]});d.show()}})});Ext.setup({tabletStartupScreen:"icons/icinga-throbber.gif",phoneStartupScreen:"icons/startup_iphone.png",icon:"icons/idot-icon_big.png",glossOnIcon:true,onReady:function(){var a=[];if(!IConf.k("noStartup")){var b=new Ext.ActionSheet({modal:true,hideOnMaskTap:true,fullscreen:true,centered:true,layout:"fit",html:'<div id="startup" class="startup-wrap"><div class="startup-logo"> <img src="icons/idot-icon_big.png" /></div><div class="startup-cr"> Icinga-mobile v0.1.1 <br/> \u00a9 2010 - The icinga team<p><a href="http://www.icinga.org">www.icinga.org</a></p></div><div class="disclaimer">Icinga-mobile is licensed under the GNU General Public License and is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE WARRANTY OF DESIGN, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.<p>All other trademarks are the property of their respective owners.</p></div></div>'});
Ext.EventManager.addListener(Ext.getBody(),"tap",function(){b.hide()},{single:true});b.show()}for(var c in Icinga.Mobile.View.Templates)a.push(Icinga.Mobile.View.La(c,a.length==0));a.push(Icinga.Mobile.View.Ia());Ext.ns("Icinga.Mobile");Icinga.Mobile.q=new Ext.Panel({fullscreen:true,events:["sendCommand"],layout:"card",items:[new Ext.TabPanel({fullscreen:true,animation:"slide",items:a}),Icinga.Mobile.View.sa,Icinga.Mobile.View.J]});Icinga.Mobile.q.on("sendCommand",function(d){Icinga.Mobile.View.sa.rb(d);
this.setCard(1,"slide")},Icinga.Mobile.q);Icinga.Mobile.q.doLayout()}});