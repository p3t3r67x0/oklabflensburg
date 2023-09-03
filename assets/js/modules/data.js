 const projectsContainer = document.querySelector('#projects');

 async function getProjects() {

     if (projectsContainer) {
         try {
             const response = await fetch("/assets/data/projects.json")
             const json = await response.json();
             if (json ?.projects?.length) {
                 var projectsHtml = '';
                 json.projects.forEach(item => {
                    console.log(item);
        
                     projectsHtml = projectsHtml + '<a href="'+item.link+'" target="_blank" class="project pr-4 pl-4">' +  
                     '<div class="h-0 relative pt-1/1 mb-4">' +
                    '<img src="' + item.img.replace('/static','') + '" class="shadow rounded-full absolute inset-0 w-full h-full object-cover mb-4"/>' + 
                     '</div>' +
                    '<div class="text-white tracking-wider font-thin font-stretch-110 text-center">' +  item.title + '</div>'+
                    '</a>';
                
                 })
             }
             projectsContainer.innerHTML = projectsHtml;

             var slider = tns({
                container: '.tns-slider',
                items: 1,
                slideBy: 1,
                autoplay: false,
                controlsText: ['<div class="prev" ><span class="bar"></span><span class="bar"></span></div>','<div class="next" ><span class="bar"></span><span class="bar"></span></div>'],
                responsive: {
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1024: {
                        items: 3,
                    },
                    1200: {
                        items: 4
                    }
                }
              });

         } catch {
             projectsContainer.textContent = "Keine Projektze vorhanden";
         }
     };
 }

 export {
     projectsContainer,
     getProjects
 }