
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
  };

  const navbar = document.querySelector('#navbarWrapper');

   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
      if(!entry.isIntersecting && entry.boundingClientRect.top === -1){
        entry.target.classList.add('static');
      } else {
        entry.target.classList.remove('static');
      }
     })
   },{
     threshold:1,
     rootMargin: "0px"
   });
  observer.observe(navbar);

  const menuButton = document.querySelector('#menuToggle');
  const mainNav = document.querySelector('#navMobile');
  if(menuButton){
    menuButton.addEventListener('click',(e)=> {
      e.preventDefault();
      menuButton.classList.toggle('active');
      mainNav.classList.toggle('open');
    })
  }
