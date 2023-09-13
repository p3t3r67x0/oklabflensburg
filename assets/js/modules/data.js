const projectsContainer = document.querySelector('#projects');

async function fetchData() {
    const response = await fetch("/assets/data/projects.json")
    const json = await response.json();

    return json;
};

async function getProjects() {
    if (projectsContainer) {
        fetchData().then(json => {
            if (json?.projects?.length) {
                var projectsHtml = '';
                json.projects.forEach(item => {
                    let image = "";
                    if (checkIfImageExists(item.img.replace('/static', ''))) {
                        image = item.img.replace('/static', '');
                    } else {
                        image = "/assets/images/blog/blog-02.jpg";
                    }
                    console.log(image);
                    projectsHtml = projectsHtml + '<a href="' + item.link + '" target="_blank" class="project block p-4">' +
                        '<div class="group h-0 relative pt-1/1 mb-4">' +
                        '<img src="' + image + '" class="shadow rounded-full absolute inset-0 w-full h-full object-cover mb-4"/>' +
                        '<span class="bottom-[30%] bg-white text-center group-hover:opacity-80 transition-opacity bg-gray-800 p-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">' + item.title + '</span>' +
                        '</div>' +
                        '</a>';

                })
                projectsContainer.innerHTML = projectsHtml;

                var slider = tns({
                    container: '.tns-slider',
                    items: 1,
                    slideBy: 1,
                    autoplay: false,
                    controlsContainer: '#sliderNavigation',
                    nav: false,
                    responsive: {
                        480: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        1024: {
                            items: 4,
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            }
        }).catch(()=>{
            projectsContainer.textContent = "Keine Projekte vorhanden";
        })
    };
}

function checkIfImageExists(url) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        return true;
    } else {
        img.onload = () => {
            return true;
        };

        img.onerror = () => {
            return false;
        };
    }
}

export {
    projectsContainer,
    getProjects
}