(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{426:function(t,e,n){"use strict";n.r(e);var r=n(571),o=r.b.reactiveProp,l={name:"DonutChart",extends:r.a,mixins:[o],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},c=n(63),j={name:"ChartWidget",components:{DonutChart:Object(c.a)(l,void 0,void 0,!1,null,null,null).exports},props:{data:Object,chartType:String,options:Object}},h=n(84),d=n.n(h),f=n(564),m=Object(c.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"text-center pa-3",attrs:{width:"520"}},[e(this.chartType,{tag:"component",attrs:{chartData:this.data,options:this.options}})],1)}),[],!1,null,"f8820b1a",null);e.default=m.exports;d()(m,{VCard:f.a})},427:function(t,e,n){"use strict";n.r(e);n(14);var r={name:"NumberWidget",props:{title:String,value:Number,suffix:String}},o=n(63),l=n(84),c=n.n(l),j=n(564),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"text-center pa-3",attrs:{width:"150"}},[n("div",[n("span",{staticClass:"display-1"},[t._v("\n      "+t._s(t.value)+"\n      "),n("span",{domProps:{innerHTML:t._s(t.suffix||"")}})])]),t._v(" "),n("span",{staticClass:"subtitle-2 secondary--text"},[t._v(t._s(t.title))])])}),[],!1,null,"0a6809dc",null);e.default=component.exports;c()(component,{VCard:j.a})},570:function(t,e,n){var map={"./af":428,"./af.js":428,"./ar":429,"./ar-dz":430,"./ar-dz.js":430,"./ar-kw":431,"./ar-kw.js":431,"./ar-ly":432,"./ar-ly.js":432,"./ar-ma":433,"./ar-ma.js":433,"./ar-sa":434,"./ar-sa.js":434,"./ar-tn":435,"./ar-tn.js":435,"./ar.js":429,"./az":436,"./az.js":436,"./be":437,"./be.js":437,"./bg":438,"./bg.js":438,"./bm":439,"./bm.js":439,"./bn":440,"./bn-bd":441,"./bn-bd.js":441,"./bn.js":440,"./bo":442,"./bo.js":442,"./br":443,"./br.js":443,"./bs":444,"./bs.js":444,"./ca":445,"./ca.js":445,"./cs":446,"./cs.js":446,"./cv":447,"./cv.js":447,"./cy":448,"./cy.js":448,"./da":449,"./da.js":449,"./de":450,"./de-at":451,"./de-at.js":451,"./de-ch":452,"./de-ch.js":452,"./de.js":450,"./dv":453,"./dv.js":453,"./el":454,"./el.js":454,"./en-au":455,"./en-au.js":455,"./en-ca":456,"./en-ca.js":456,"./en-gb":457,"./en-gb.js":457,"./en-ie":458,"./en-ie.js":458,"./en-il":459,"./en-il.js":459,"./en-in":460,"./en-in.js":460,"./en-nz":461,"./en-nz.js":461,"./en-sg":462,"./en-sg.js":462,"./eo":463,"./eo.js":463,"./es":464,"./es-do":465,"./es-do.js":465,"./es-mx":466,"./es-mx.js":466,"./es-us":467,"./es-us.js":467,"./es.js":464,"./et":468,"./et.js":468,"./eu":469,"./eu.js":469,"./fa":470,"./fa.js":470,"./fi":471,"./fi.js":471,"./fil":472,"./fil.js":472,"./fo":473,"./fo.js":473,"./fr":474,"./fr-ca":475,"./fr-ca.js":475,"./fr-ch":476,"./fr-ch.js":476,"./fr.js":474,"./fy":477,"./fy.js":477,"./ga":478,"./ga.js":478,"./gd":479,"./gd.js":479,"./gl":480,"./gl.js":480,"./gom-deva":481,"./gom-deva.js":481,"./gom-latn":482,"./gom-latn.js":482,"./gu":483,"./gu.js":483,"./he":484,"./he.js":484,"./hi":485,"./hi.js":485,"./hr":486,"./hr.js":486,"./hu":487,"./hu.js":487,"./hy-am":488,"./hy-am.js":488,"./id":489,"./id.js":489,"./is":490,"./is.js":490,"./it":491,"./it-ch":492,"./it-ch.js":492,"./it.js":491,"./ja":493,"./ja.js":493,"./jv":494,"./jv.js":494,"./ka":495,"./ka.js":495,"./kk":496,"./kk.js":496,"./km":497,"./km.js":497,"./kn":498,"./kn.js":498,"./ko":499,"./ko.js":499,"./ku":500,"./ku.js":500,"./ky":501,"./ky.js":501,"./lb":502,"./lb.js":502,"./lo":503,"./lo.js":503,"./lt":504,"./lt.js":504,"./lv":505,"./lv.js":505,"./me":506,"./me.js":506,"./mi":507,"./mi.js":507,"./mk":508,"./mk.js":508,"./ml":509,"./ml.js":509,"./mn":510,"./mn.js":510,"./mr":511,"./mr.js":511,"./ms":512,"./ms-my":513,"./ms-my.js":513,"./ms.js":512,"./mt":514,"./mt.js":514,"./my":515,"./my.js":515,"./nb":516,"./nb.js":516,"./ne":517,"./ne.js":517,"./nl":518,"./nl-be":519,"./nl-be.js":519,"./nl.js":518,"./nn":520,"./nn.js":520,"./oc-lnc":521,"./oc-lnc.js":521,"./pa-in":522,"./pa-in.js":522,"./pl":523,"./pl.js":523,"./pt":524,"./pt-br":525,"./pt-br.js":525,"./pt.js":524,"./ro":526,"./ro.js":526,"./ru":527,"./ru.js":527,"./sd":528,"./sd.js":528,"./se":529,"./se.js":529,"./si":530,"./si.js":530,"./sk":531,"./sk.js":531,"./sl":532,"./sl.js":532,"./sq":533,"./sq.js":533,"./sr":534,"./sr-cyrl":535,"./sr-cyrl.js":535,"./sr.js":534,"./ss":536,"./ss.js":536,"./sv":537,"./sv.js":537,"./sw":538,"./sw.js":538,"./ta":539,"./ta.js":539,"./te":540,"./te.js":540,"./tet":541,"./tet.js":541,"./tg":542,"./tg.js":542,"./th":543,"./th.js":543,"./tk":544,"./tk.js":544,"./tl-ph":545,"./tl-ph.js":545,"./tlh":546,"./tlh.js":546,"./tr":547,"./tr.js":547,"./tzl":548,"./tzl.js":548,"./tzm":549,"./tzm-latn":550,"./tzm-latn.js":550,"./tzm.js":549,"./ug-cn":551,"./ug-cn.js":551,"./uk":552,"./uk.js":552,"./ur":553,"./ur.js":553,"./uz":554,"./uz-latn":555,"./uz-latn.js":555,"./uz.js":554,"./vi":556,"./vi.js":556,"./x-pseudo":557,"./x-pseudo.js":557,"./yo":558,"./yo.js":558,"./zh-cn":559,"./zh-cn.js":559,"./zh-hk":560,"./zh-hk.js":560,"./zh-mo":561,"./zh-mo.js":561,"./zh-tw":562,"./zh-tw.js":562};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=570},632:function(t,e,n){"use strict";n.r(e);n(18),n(32),n(57),n(35),n(21),n(12),n(34),n(30);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,j=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){j=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(j)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={name:"jobs",data:function(){return{search:""}},computed:{host:function(){return this.$store.state.hosts.connected},jobs:function(){var t=this;return this.$store.state.jobs.list.filter((function(e){return e.hostUrl===t.host.url}))},projects:function(){var t=this;return this.$store.state.projects.list.filter((function(e){return e.hostUrl===t.host.url}))},headers:function(){return[{text:"ID",value:"id",groupable:!1},{text:"Project",value:"projectName"},{text:"Spider",value:"spider"},{text:"Status",value:"status"}]},stats:function(){return[{key:"Pending",value:this.jobs.filter((function(t){return"pending"===t.status})).length},{key:"Running",value:this.jobs.filter((function(t){return"running"===t.status})).length},{key:"Finished",value:this.jobs.filter((function(t){return"finished"===t.status})).length}]},chartData:function(){var t,e=this,n=[{label:"Jobs",data:[],backgroundColor:[]}],o=[],l=r(this.projects);try{for(l.s();!(t=l.n()).done;){var c,j=t.value,h=r(j.spiders);try{var d=function(){var t=c.value,r="rgb(".concat(255*Math.random(),",").concat(255*Math.random(),",").concat(255*Math.random(),")");o.push("".concat(j.name,"/").concat(t));var l=e.jobs.filter((function(e){return e.spider===t}));n[0].data.push(l.length),n[0].backgroundColor.push(r)};for(h.s();!(c=h.n()).done;)d()}catch(t){h.e(t)}finally{h.f()}}}catch(t){l.e(t)}finally{l.f()}return{datasets:n,labels:o}}},methods:{reload:function(){this.$store.dispatch("jobs/loadJobs",this.$store.state.hosts.connected,{root:!0})}},mounted:function(){this.$store.state.hosts.connected?this.reload():this.$router.push("/")}},c=n(63),j=n(84),h=n.n(j),d=n(183),f=n(403),m=n(624),v=n(629),y=n(175),k=n(628),x=n(625),_=n(420),w=n(619),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",md:"8",sm:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{"show-group-by":"",items:t.jobs,"item-key":"id",headers:t.headers,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-layout",[n("v-text-field",{staticClass:"mx-4",attrs:{label:"Search job(s)"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.reload()}}},[n("v-icon",[t._v("mdi-reload")])],1)],1)]},proxy:!0},{key:"item.status",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:"finished"===r.status?"green":"running"===r.status?"primary":"grey",dark:"",small:""}},[t._v("\n          "+t._s(r.status)+"\n        ")])]}},{key:"item.projectName",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{small:""}},[t._v("\n          "+t._s(r.projectName)+"\n        ")])]}},{key:"item.spider",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{small:""}},[t._v("\n          "+t._s(r.spider)+"\n        ")])]}}])})],1),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"4",md:"4",sm:"4",xs:"12"}},[n("v-row",t._l(t.stats,(function(t,i){return n("v-col",{key:i,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[n("NumberWidget",{staticClass:"mx-auto",attrs:{title:t.key,value:t.value,suffix:t.hasOwnProperty("suffix")?t.suffix:null}})],1)})),1),t._v(" "),n("v-row",[n("v-col",[t.jobs.length?n("ChartWidget",{staticClass:"mx-auto",attrs:{data:t.chartData,options:t.$store.getters["charts/chartOptions"],"chart-type":"DonutChart"}}):t._e()],1)],1)],1)],1)}),[],!1,null,"70005858",null);e.default=component.exports;h()(component,{NumberWidget:n(427).default,ChartWidget:n(426).default}),h()(component,{VBtn:d.a,VChip:f.a,VCol:m.a,VDataTable:v.a,VIcon:y.a,VLayout:k.a,VRow:x.a,VSpacer:_.a,VTextField:w.a})}}]);