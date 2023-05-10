"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16106],{680900:(e,n,t)=>{t.r(n),t.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-48db69f8","path":"/devices/ZLGP17_ZLGP18.html","title":"Legrand ZLGP17/ZLGP18 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand ZLGP17/ZLGP18 control via MQTT","description":"Integrate your Legrand ZLGP17/ZLGP18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing ZLGP17","slug":"pairing-zlgp17","link":"#pairing-zlgp17","children":[]},{"level":3,"title":"Pairing ZLGP18","slug":"pairing-zlgp18","link":"#pairing-zlgp18","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1683740893000},"filePathRelative":"devices/ZLGP17_ZLGP18.md"}')},585399:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var i=t(166252);const a=(0,i._)("h1",{id:"legrand-zlgp17-zlgp18",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#legrand-zlgp17-zlgp18","aria-hidden":"true"},"#"),(0,i.Uk)(" Legrand ZLGP17/ZLGP18")],-1),r=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),o=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZLGP17/ZLGP18")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wireless and batteryless (double) lighting control")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, linkquality")],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZLGP17-ZLGP18.jpg",alt:"Legrand ZLGP17/ZLGP18"})])],-1),c=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing-zlgp17" tabindex="-1"><a class="header-anchor" href="#pairing-zlgp17" aria-hidden="true">#</a> Pairing ZLGP17</h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the main button (up or down).</p>',6),u={href:"https://www.admin.legrandoc.com/files/documents/S000111963EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},p=(0,i._)("h3",{id:"pairing-zlgp18",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing-zlgp18","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing ZLGP18")],-1),g=(0,i._)("p",null,"To pair this device on channel 11, hold the configuration button (on the back of the device) and press the button (up or down) on the first side, then do the same for the second side.",-1),k=(0,i._)("p",null,"Note: each side of the device is treated as a single ZLGP17.",-1),v={href:"https://www.admin.legrandoc.com/files/documents/S000112516EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},b=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_once</code>, <code>press_twice</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),f={},m=(0,t(983744).Z)(f,[["render",function(e,n){const t=(0,i.up)("RouterLink"),f=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[r,(0,i._)("tbody",null,[o,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,i.w5)((()=>[(0,i.Uk)("Legrand")])),_:1})])]),d,s,h])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,i._)("p",null,[(0,i.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),(0,i._)("a",u,[(0,i.Uk)("Legrand ZLGP17 manual chapter 6.2"),(0,i.Wm)(f)]),(0,i.Uk)(".")]),p,g,k,(0,i._)("p",null,[(0,i.Uk)("This device can work on any channel, not only 11. For this, please refer to the "),(0,i._)("a",v,[(0,i.Uk)("Legrand ZLGP18 manual chapter 6.2"),(0,i.Wm)(f)]),(0,i.Uk)(".")]),(0,i.kq)(" Notes END: Do not edit below this line "),b])}]])}}]);