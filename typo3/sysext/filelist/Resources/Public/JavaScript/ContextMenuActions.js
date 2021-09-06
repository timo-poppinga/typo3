/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};define(["require","exports","TYPO3/CMS/Core/lit-helper","TYPO3/CMS/Backend/Enum/Severity","jquery","TYPO3/CMS/Core/Ajax/AjaxRequest","TYPO3/CMS/Backend/Notification","TYPO3/CMS/Backend/Modal","TYPO3/CMS/Backend/Hashing/Md5"],(function(t,e,n,a,o,r,i,l,s){"use strict";o=__importDefault(o);class d{static getReturnUrl(){return encodeURIComponent(top.list_frame.document.location.pathname+top.list_frame.document.location.search)}static triggerFileDownload(t,e,n=!1){const a=document.createElement("a");a.href=t,a.download=e,document.body.appendChild(a),a.click(),n&&URL.revokeObjectURL(t),document.body.removeChild(a)}static renameFile(t,e){const n=o.default(this).data("action-url");top.TYPO3.Backend.ContentContainer.setUrl(n+"&target="+encodeURIComponent(e)+"&returnUrl="+d.getReturnUrl())}static editFile(t,e){const n=o.default(this).data("action-url");top.TYPO3.Backend.ContentContainer.setUrl(n+"&target="+encodeURIComponent(e)+"&returnUrl="+d.getReturnUrl())}static editMetadata(){const t=o.default(this).data("metadata-uid");t&&top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit[sys_file_metadata]["+parseInt(t,10)+"]=edit&returnUrl="+d.getReturnUrl())}static openInfoPopUp(t,e){"sys_file_storage"===t?top.TYPO3.InfoWindow.showItem(t,e):top.TYPO3.InfoWindow.showItem("_FILE",e)}static uploadFile(t,e){const n=o.default(this).data("action-url");top.TYPO3.Backend.ContentContainer.setUrl(n+"&target="+encodeURIComponent(e)+"&returnUrl="+d.getReturnUrl())}static createFile(t,e){const n=o.default(this).data("action-url");top.TYPO3.Backend.ContentContainer.setUrl(n+"&target="+encodeURIComponent(e)+"&returnUrl="+d.getReturnUrl())}static downloadFile(){d.triggerFileDownload(o.default(this).data("url"),o.default(this).data("name"))}static downloadFolder(t,e){const a=o.default(this).data("action-url");new r(a).post({items:[e]}).then(async t=>{let e=t.response.headers.get("Content-Disposition");if(!e)return void i.error(n.lll("file_download.error"));e=e.substring(e.indexOf(" filename=")+10);const a=await t.raw().arrayBuffer(),o=new Blob([a],{type:t.raw().headers.get("Content-Type")});d.triggerFileDownload(URL.createObjectURL(o),e,!0)}).catch(()=>{i.error(n.lll("file_download.error"))})}static createFilemount(t,e){const n=e.split(":");2===n.length&&top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit[sys_filemounts][0]=new&defVals[sys_filemounts][base]="+encodeURIComponent(n[0])+"&defVals[sys_filemounts][path]="+encodeURIComponent(n[1])+"&returnUrl="+d.getReturnUrl())}static deleteFile(t,e){const n=o.default(this),r=()=>{top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCommit.moduleUrl+"&data[delete][0][data]="+encodeURIComponent(e)+"&data[delete][0][redirect]="+d.getReturnUrl())};if(!n.data("title"))return void r();l.confirm(n.data("title"),n.data("message"),a.SeverityEnum.warning,[{text:o.default(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:o.default(this).data("button-ok-text")||TYPO3.lang["button.delete"]||"Delete",btnClass:"btn-warning",name:"delete"}]).on("button.clicked",t=>{"delete"===t.target.name&&r(),l.dismiss()})}static copyFile(t,e){const n=s.hash(e).substring(0,10),a=TYPO3.settings.ajaxUrls.contextmenu_clipboard,o={CB:{el:{["_FILE%7C"+n]:e},setCopyMode:"1"}};new r(a).withQueryArguments(o).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static copyReleaseFile(t,e){const n=s.hash(e).substring(0,10),a=TYPO3.settings.ajaxUrls.contextmenu_clipboard,o={CB:{el:{["_FILE%7C"+n]:"0"},setCopyMode:"1"}};new r(a).withQueryArguments(o).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static cutFile(t,e){const n=s.hash(e).substring(0,10),a=TYPO3.settings.ajaxUrls.contextmenu_clipboard,o={CB:{el:{["_FILE%7C"+n]:e}}};new r(a).withQueryArguments(o).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static cutReleaseFile(t,e){const n=s.hash(e).substring(0,10),a=TYPO3.settings.ajaxUrls.contextmenu_clipboard,o={CB:{el:{["_FILE%7C"+n]:"0"}}};new r(a).withQueryArguments(o).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static pasteFileInto(t,e){const n=o.default(this),r=n.data("title"),i=()=>{top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCommit.moduleUrl+"&CB[paste]=FILE|"+encodeURIComponent(e)+"&CB[pad]=normal&redirect="+d.getReturnUrl())};if(!r)return void i();l.confirm(r,n.data("message"),a.SeverityEnum.warning,[{text:o.default(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:o.default(this).data("button-ok-text")||TYPO3.lang["button.ok"]||"OK",btnClass:"btn-warning",name:"ok"}]).on("button.clicked",t=>{"ok"===t.target.name&&i(),l.dismiss()})}}return d}));