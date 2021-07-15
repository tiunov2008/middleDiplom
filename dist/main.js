(()=>{"use strict";let e=!1;class t{constructor({selector:e,pattern:t,method:n}){this.form=document.querySelector(e),this.pattern=t,this.method=n,this.elementsForm=[...this.form.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type&&"hidden"!==e.type)),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach((e=>e.addEventListener("change",this.checkIt.bind(this)))),this.form.addEventListener("submit",(t=>{if(this.elementsForm.forEach((e=>this.checkIt({target:e}))),this.error.size)return t.preventDefault(),void(e=!0);e=!1,this.elementsForm.forEach((e=>e.classList.remove("success")))}))}isValid(e){const t={notEmpty:e=>""!==e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(!this.method)return!0;{const n=this.method[e.id];if(n)return n.every((n=>t[n[0]](e,this.pattern[n[1]])))}}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}showError(e){if(e.classList.remove("success"),e.classList.add("error"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error"))return;const t=document.createElement("div");t.textContent="Ошибка в этом поле",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}showSuccess(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}applyStyle(){const e=document.createElement("style");e.textContent="\n        input.success {\n            border: 2px solid green !important;\n        }\n        input.error {\n            border: 2px solid red !important;\n        }\n        .validator-error {\n            font-size: 14px !important;\n            color: red !important;\n            font-family: sans-serif !important;\n        }\n        ",document.head.appendChild(e)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w+@+\w+\.\w{2,}$/)}}const n=new t({selector:"#form1",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,phone:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,16}$/},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form1-phone":[["notEmpty"],["pattern","phone"]]}}),o=new t({selector:"#form2",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,phone:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,16}$/},method:{"form2-name":[["notEmpty"],["pattern","name"]],"form2-phone":[["notEmpty"],["pattern","phone"]]}}),s=new t({selector:"#form3",pattern:{name:/[A-Za-zА-Яа-яЁё]{2,}/,phone:/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,16}$/},method:{"form3-name":[["notEmpty"],["pattern","name"]],"form3-phone":[["notEmpty"],["pattern","phone"]]}});n.init(),o.init(),s.init();const i=t=>{const n=[...t.elements].filter((e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type));n.forEach((e=>{e.addEventListener("input",(()=>{"fio"===e.name?e.value=e.value.replace(/[^а-яё a-z]/gi,""):"phone"===e.name&&(e.value=e.value.replace(/[^0-9()+-]/,""))}))})),t.addEventListener("submit",(o=>{if(o.preventDefault(),!e){t.querySelector("button").disabled="true",document.querySelector("#responseMessage").style.display="block",document.querySelector(".overlay").style.display="block",document.querySelector(".overlay").style.zIndex="1",document.querySelector(".modal-content").textContent="Загрузка...";const e=new FormData(t),o={};for(const t of e.entries())o[t[0]]=t[1];n.filter((e=>"Балконы"===e.value))&&document.getElementById("calc-total")&&(o.total=document.getElementById("calc-total").value),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(o).then((e=>{if(200!==e.status)throw new Error("Status network not 200");document.querySelector(".modal-content").textContent="Спасибо! Мы скоро с вами свяжимся!",setTimeout((()=>{document.querySelector("#responseMessage").style.display="none",document.querySelector(".overlay").style.display="none",t.querySelector("button").removeAttribute("disabled"),document.querySelector(".header-modal").style.display="none"}),3e3),t.reset()})).catch((()=>{document.querySelector(".modal-content").textContent="Что то пошло не так...",setTimeout((()=>{document.querySelector("#responseMessage").style.display="none",document.querySelector(".overlay").style.display="none",t.querySelector("button").removeAttribute("disabled")}),3e3),t.reset()}))}}))},r=function(e,t){let n,o,s,i;function r(e){return void 0===e.toString()[1]?"0"+e:e}function l(){const t=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),s=Math.floor(t/60/60)%24;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:s,minutes:o,seconds:n}}();t.timeRemaining<0?(n.textContent="00",o.textContent="00",s.textContent="00",i.textContent="00"):(n.textContent=r(t.days),o.textContent=r(t.hours),s.textContent=r(t.minutes),i.textContent=r(t.seconds))}t?(n=document.querySelector(".count_1>span"),o=document.querySelector(".count_2>span"),s=document.querySelector(".count_3>span"),i=document.querySelector(".count_4>span")):(n=document.querySelectorAll(".count_1>span")[1],o=document.querySelectorAll(".count_2>span")[1],s=document.querySelectorAll(".count_3>span")[1],i=document.querySelectorAll(".count_4>span")[1]),l(),setInterval(l,1e3)},l=(e,t)=>{const n=document.querySelector(".overlay"),o=document.querySelector("."+e);document.body.addEventListener("click",(s=>{const i=s.target;i.classList.contains(e+"__close")?(s.preventDefault(),o.style.display="none",n.style.display="none"):null!==i.closest("."+t)&&i.closest("."+t).classList.contains(t)&&(o.style.display="block",n.style.display="block")}))};document.addEventListener("DOMContentLoaded",(()=>{l("services-modal","service-button"),document.addEventListener("scroll",(()=>{const e=document.getElementById("offer").getBoundingClientRect().bottom;document.querySelector(".smooth-scroll").style.display=e<0?"block":"none"})),document.body.addEventListener("click",(e=>{const t=e.target,n=document.getElementById("header").getBoundingClientRect().top;t.closest(".smooth-scroll")===document.querySelector(".smooth-scroll")&&window.scrollBy({top:n,behavior:"smooth"})})),l("header-modal","button"),(()=>{const e=document.querySelectorAll(".services-item"),t=document.querySelector("#services");let n=0,o=1;const s=(e,t,n)=>{e[t].classList.remove(n)},i=(e,t,n)=>{e[t].classList.add(n)};t.addEventListener("click",(t=>{t.preventDefault();const r=t.target;null!==r.closest(".services__arrow")&&(s(e,n,"services-item-active-1"),s(e,o,"services-item-active-2"),r.closest(".services__arrow")===document.querySelector(".services__arrow--right")?(n++,o++):r.closest(".services__arrow")===document.querySelector(".services__arrow--left")&&(n--,o--),n>=e.length&&(n=0),o>=e.length&&(o=0),n<0&&(n=e.length-1),o<0&&(o=e.length-1),i(e,n,"services-item-active-1"),i(e,o,"services-item-active-2"))}))})(),(()=>{const e=document.querySelector("#calc-type"),t=document.querySelector("#calc"),n=document.querySelector("#calc-input"),o=document.querySelector("#calc-type-material"),s=document.getElementById("calc-total");if(t){n.addEventListener("input",(()=>{n.value=n.value.replace(/[^0-9]/,"")}));const i=()=>{let t=0;o.value&&e.value&&(t=Math.ceil(o.value*e.value*n.value)),s.value=t};t.addEventListener("change",(e=>{const t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}})(),document.querySelector(".fancyClose").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#responseMessage").style.display="none",document.querySelector(".overlay").style.display="none"})),document.body.addEventListener("mouseover",(e=>{const t=e.target;null!==t.closest(".document")&&t.closest(".document").classList.contains("document")&&(t.style.opacity="1")})),document.body.addEventListener("mouseout",(e=>{const t=e.target;null!==t.closest(".document")&&t.closest(".document").classList.contains("document")&&(t.style.opacity="0")})),document.body.addEventListener("click",(e=>{const t=e.target;null!==t.closest(".document")&&t.closest(".document").classList.contains("document")&&(e=>{const t=document.createElement("div");t.className="modal_documents",t.innerHTML=`\n    <div style=" height: 90%;\n    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) !important;">\n        <img src="${e}" style=" height: 90%;">\n        <span style=" width: 20px; height: 20px; font-size: 30px; color: #fff; cursor: pointer;\n        position: fixed; top: 0; right: 0;" title="Close" class="documents-modal__close">x</span>\n    </div>`,document.body.append(t),document.querySelector(".overlay").style.display="block"})(t.previousElementSibling.src),t!==document.querySelector(".overlay")&&t!==document.querySelector(".documents-modal__close")||(document.querySelector(".modal_documents").remove(),document.querySelector(".overlay").style.display="none")})),i(document.querySelector("#form1")),i(document.querySelector("#form2")),i(document.querySelector("#form3"));const e=new Date;r(`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()+2}`,!0),r(`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()+2}`,!1),new class{constructor({main:e,wrap:t,next:n,prev:o,infinity:s=!1,position:i=0,slidesToShow:r=3,responsive:l=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),o&&n&&(this.next=document.querySelector(n),this.prev=document.querySelector(o)),this.slidesToShow=r,this.slides=document.querySelector(t).children,this.options={position:i,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addClass(),this.addStyles(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responseInit()}addClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const e=document.createElement("style");e.textContent="\n        .glo-slider__next{\n            margin: 0 10px;\n            border:20px solid transparent;\n            background: transparent;\n            border-left-color: #19bbff\n        }        \n        .glo-slider__prev{\n            margin: 0 10px;\n            border:20px solid transparent;\n            background: transparent;\n            border-right-color: #19b5fe;\n        }\n        .glo-slider__prev:hover,\n        .glo-slider__next:hover,\n        .glo-slider__prev:focus,\n        .glo-slider__next:focus{\n            background: transparent;\n            outline: transparent;\n        }\n        ",document.head.appendChild(e)}addStyles(){let e=document.createElement("style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n        .glo-slider{\n            overflow: hidden !important;\n            max-width: 576px;\n            margin: 0 auto;\n        }\n        .glo-slider__wrap{\n            display: flex !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n        }\n        .glo-slider__item{\n            display: flex !important;\n            flex: 0 0 ${this.options.widthSlide}% !important;\n            width: ${this.options.widthSlide}% !important;\n            flex-direction: column;\n        }`,document.head.appendChild(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map((e=>e.breakpoint)),n=Math.max(...t);window.addEventListener("resize",(()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyles()}))}}({main:".benefits-inner",wrap:".benefits-wrap",infinity:!0,slidesToShow:3,next:".benefits__arrow--right",prev:".benefits__arrow--left",responsive:[{breakpoint:576,slideToShow:1}]}).init()}))})();