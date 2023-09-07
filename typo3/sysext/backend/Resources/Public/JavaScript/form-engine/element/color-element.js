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
import RegularEvent from"@typo3/core/event/regular-event.js";import FormEngineValidation from"@typo3/backend/form-engine-validation.js";class ColorElement extends HTMLElement{constructor(){super(...arguments),this.element=null}connectedCallback(){if(this.element=document.getElementById(this.getAttribute("recordFieldId")||""),!this.element)return;this.registerEventHandler();const e=this.hasAttribute("colorPalette")?this.getAttribute("colorPalette").split(";"):[];import("@typo3/backend/color-picker.js").then((({default:t})=>{t.initialize(this.element,{swatches:e})}))}registerEventHandler(){const e=document.querySelector('input[name="'+this.element.dataset.formengineInputName+'"]');new RegularEvent("blur",(t=>{e.value=t.target.value})).bindTo(this.element),new RegularEvent("formengine.cp.change",(e=>{FormEngineValidation.validateField(e.target),FormEngineValidation.markFieldAsChanged(e.target),document.querySelectorAll(".module-docheader-bar .btn").forEach((e=>{e.classList.remove("disabled"),e.disabled=!1}))})).bindTo(this.element)}}window.customElements.define("typo3-formengine-element-color",ColorElement);