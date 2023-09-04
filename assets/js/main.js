
"use strict";

import {projectsContainer, getProjects} from "./modules/data.js";


  document.addEventListener('DOMContentLoaded',() => {
    getProjects();
   
  })

// ======= Sticky
  window.onscroll = function () {
    const navbar = document.querySelector('#navbarCollapse');
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.scrollY > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // if (window.scrollY > (navbar.offsetTop - 70)) {
    //   navbar.classList.add("sticky");

    // } else {
    //   navbar.classList.remove("sticky");
    // }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  const navbar = document.querySelector('#navbarWrapper');

   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       console.log(entry.isIntersecting);
       entry.target.classList.toggle('static',!entry.isIntersecting && !entry.boundingClientRect.top > 0);
       
     })
   },{
     threshold:1,
     rootMargin: "0px"
   });
  observer.observe(navbar);