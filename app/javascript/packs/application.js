import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '../js/bootstrap_js_files.js'
import '../packs/application.scss'
import "@fortawesome/fontawesome-free/css/all.css"
import "trix"
import "@rails/actiontext"
import "moment"
import "daterangepicker"
import "@hotwired/turbo-rails"
import "controllers";

window.jQuery = $;
window.$ = $;
global.toastr = require("toastr")

Rails.start()
ActiveStorage.start()


// document.addEventListener('turbo:load', () => {
//   const sections = document.querySelectorAll('.category-heading');
//   const navLinks = document.querySelectorAll('.store-nav-link');
//   const stickyHeaderText = document.getElementById('sticky-header-text');
//
//   if (sections.length === 0 || navLinks.length === 0 || !stickyHeaderText) return;
//
//   const originalHeaderText = stickyHeaderText.innerHTML;
//
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       const link = document.querySelector(`.store-nav-link[href="#${id}"]`);
//
//       if (entry.isIntersecting) {
//         navLinks.forEach(l => l.classList.remove('active'));
//         if (link) link.classList.add('active');
//         stickyHeaderText.innerHTML = entry.target.textContent;
//       }
//     });
//
//     const anyVisible = entries.some(entry => entry.isIntersecting);
//     if (!anyVisible && window.scrollY < 200) {
//       stickyHeaderText.innerHTML = originalHeaderText;
//     }
//   }, {
//     rootMargin: "-56px 0px 0px 0px",
//     threshold: [0.5, 1]
//   });
//
//   sections.forEach(section => observer.observe(section));
// });
