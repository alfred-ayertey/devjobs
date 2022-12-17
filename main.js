let darkMode = localStorage.getItem("darkMode");
const check = document.getElementById("checkbox");

const enableDarkMode = () => {
    //add the class dark mode to the body
    document.body.classList.add("darkmode");
    //update darkmode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    //add the class dark mode to the body
    document.body.classList.remove("darkmode");
    //update darkmode in the localStorage
    localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
    check.checked = true;
}

check.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});



const menuIcon = document.querySelector(".menu-fil-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");


menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});






let jobsOffers = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    json.forEach(element => {
    jobsOffers +=  `
            <div class="job-card">
                <div class="job-logo">
                    <img src=" ${element.logo} ">
                </div>
                <div class="job-name" id="job-name">
                    <p>${element.postedAt} . ${element.contract} </p>
                    <h3 id="job-title"><a href=""> ${element.position} </a></h3>
                    <p> ${element.company} </p> 
                </div>
                <div class="job-location" id="job-location">
                    <p> ${element.location} </p>
                </div>
            </div>
            `
    });
    document.querySelector(".jobs").innerHTML = jobsOffers;
    consolevar.log(json);
});


function search() {
   var input = document.getElementById("fil-search");
   var filter = input.value.toUpperCase();
   
   var jobName = document.getElementById("job-name");
   var h3 = document.getElementsByTagName("h3");

   for (var i = 0; i < h3.length; i++) {
    var a = h3[i].getElementsByTagName("a")[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        h3[i].style.display = "";
    } else {
        h3[i].style.display = "none";
    }
}
}



// End of home page script





// Scoot Detail Page Script

let scootNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    scootNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[0].logoBackground}">
                <img src=" ${json[0].icon} " alt="scoot icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[0].company} </h2>
                <p>scoot.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".scoot-bar").innerHTML = scootNav;


    let scootMain = "";
    scootMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[0].postedAt} . ${json[0].contract} </p>
                <h2 id="sct-job-title"> ${json[0].position} </h2>
                <p id="sct-job-location"> ${json[0].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[0].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[0].requirements.content} </p>

                <ul> 
                    <li> ${json[0].requirements.items[0]} </li>
                    <li> ${json[0].requirements.items[1]} </li>
                    <li> ${json[0].requirements.items[2]} </li>
                    <li> ${json[0].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[0].role.content} </p>

                <ol> 
                    <li> ${json[0].role.items[0]} </li>
                    <li> ${json[0].role.items[1]} </li>
                    <li> ${json[0].role.items[2]} </li>
                    <li> ${json[0].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".sct-details").innerHTML = scootMain;


    let scootFoot = json[0].position;
    document.getElementById("footer-sct-h").innerHTML = scootFoot;
});



// Blogr detail Page Script

let blogrNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    blogrNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[1].logoBackground}">
                <img src=" ${json[1].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[1].company} </h2>
                <p>blogr.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".blogr-bar").innerHTML = blogrNav;


    let blogrMain = "";
    blogrMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[1].postedAt} . ${json[1].contract} </p>
                <h2 id="sct-job-title"> ${json[1].position} </h2>
                <p id="sct-job-location"> ${json[1].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[1].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[1].requirements.content} </p>

                <ul> 
                    <li> ${json[1].requirements.items[0]} </li>
                    <li> ${json[1].requirements.items[1]} </li>
                    <li> ${json[1].requirements.items[2]} </li>
                    <li> ${json[1].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[1].role.content} </p>

                <ol> 
                    <li> ${json[1].role.items[0]} </li>
                    <li> ${json[1].role.items[1]} </li>
                    <li> ${json[1].role.items[2]} </li>
                    <li> ${json[1].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".blogr-details").innerHTML = blogrMain;


    let blogrFoot = json[1].position;
    document.getElementById("footer-sct-h").innerHTML = blogrFoot;
});





// Vector detail page script

let vectorNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    vectorNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[2].logoBackground}">
                <img src=" ${json[2].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[2].company} </h2>
                <p>vector.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".vector-bar").innerHTML = vectorNav;


    let vectorMain = "";
    vectorMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[2].postedAt} . ${json[2].contract} </p>
                <h2 id="sct-job-title"> ${json[2].position} </h2>
                <p id="sct-job-location"> ${json[2].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[2].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[2].requirements.content} </p>

                <ul> 
                    <li> ${json[2].requirements.items[0]} </li>
                    <li> ${json[2].requirements.items[1]} </li>
                    <li> ${json[2].requirements.items[2]} </li>
                    <li> ${json[2].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[2].role.content} </p>

                <ol> 
                    <li> ${json[2].role.items[0]} </li>
                    <li> ${json[2].role.items[1]} </li>
                    <li> ${json[2].role.items[2]} </li>
                    <li> ${json[2].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".vector-details").innerHTML = vectorMain;


    let vectorFoot = json[2].position;
    document.getElementById("footer-sct-h").innerHTML = vectorFoot;
});



// Office Lite detail page script

let officeLiteNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    officeLiteNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[3].logoBackground}">
                <img src=" ${json[3].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[3].company} </h2>
                <p>officelite.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".officelite-bar").innerHTML = officeLiteNav;


    let officeLiteMain = "";
    officeLiteMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[3].postedAt} . ${json[3].contract} </p>
                <h2 id="sct-job-title"> ${json[3].position} </h2>
                <p id="sct-job-location"> ${json[3].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[3].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[3].requirements.content} </p>

                <ul> 
                    <li> ${json[3].requirements.items[0]} </li>
                    <li> ${json[3].requirements.items[1]} </li>
                    <li> ${json[3].requirements.items[2]} </li>
                    <li> ${json[3].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[3].role.content} </p>

                <ol> 
                    <li> ${json[3].role.items[0]} </li>
                    <li> ${json[3].role.items[1]} </li>
                    <li> ${json[3].role.items[2]} </li>
                    <li> ${json[3].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".officelite-details").innerHTML = officeLiteMain;


    let officeLiteFoot = json[3].position;
    document.getElementById("footer-sct-h").innerHTML = officeLiteFoot;
});




// Pod detail page script

let podNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    podNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[4].logoBackground}">
                <img src=" ${json[4].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[4].company} </h2>
                <p>pod.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".pod-bar").innerHTML = podNav;


    let podMain = "";
    podMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[4].postedAt} . ${json[4].contract} </p>
                <h2 id="sct-job-title"> ${json[4].position} </h2>
                <p id="sct-job-location"> ${json[4].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[4].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[4].requirements.content} </p>

                <ul> 
                    <li> ${json[4].requirements.items[0]} </li>
                    <li> ${json[4].requirements.items[1]} </li>
                    <li> ${json[4].requirements.items[2]} </li>
                    <li> ${json[4].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[4].role.content} </p>

                <ol> 
                    <li> ${json[4].role.items[0]} </li>
                    <li> ${json[4].role.items[1]} </li>
                    <li> ${json[4].role.items[2]} </li>
                    <li> ${json[4].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".pod-details").innerHTML = podMain;


    let podFoot = json[4].position;
    document.getElementById("footer-sct-h").innerHTML = podFoot;
});



// Creative detail page script

let creativeNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    creativeNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[5].logoBackground}">
                <img src=" ${json[5].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[5].company} </h2>
                <p>creative.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".creative-bar").innerHTML = creativeNav;


    let creativeMain = "";
    creativeMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[5].postedAt} . ${json[5].contract} </p>
                <h2 id="sct-job-title"> ${json[5].position} </h2>
                <p id="sct-job-location"> ${json[5].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[5].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[5].requirements.content} </p>

                <ul> 
                    <li> ${json[5].requirements.items[0]} </li>
                    <li> ${json[5].requirements.items[1]} </li>
                    <li> ${json[5].requirements.items[2]} </li>
                    <li> ${json[5].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[5].role.content} </p>

                <ol> 
                    <li> ${json[5].role.items[0]} </li>
                    <li> ${json[5].role.items[1]} </li>
                    <li> ${json[5].role.items[2]} </li>
                    <li> ${json[5].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".creative-details").innerHTML = creativeMain;


    let creativeFoot = json[5].position;
    document.getElementById("footer-sct-h").innerHTML = creativeFoot;
});





// Pomodoro detail page script

let pomodoroNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    pomodoroNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[5].logoBackground}">
                <img src=" ${json[6].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[6].company} </h2>
                <p>pomodoro.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".pomodoro-bar").innerHTML = pomodoroNav;


    let pomodoroMain = "";
    pomodoroMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[6].postedAt} . ${json[6].contract} </p>
                <h2 id="sct-job-title"> ${json[6].position} </h2>
                <p id="sct-job-location"> ${json[6].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[6].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[6].requirements.content} </p>

                <ul> 
                    <li> ${json[6].requirements.items[0]} </li>
                    <li> ${json[6].requirements.items[1]} </li>
                    <li> ${json[6].requirements.items[2]} </li>
                    <li> ${json[6].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[6].role.content} </p>

                <ol> 
                    <li> ${json[6].role.items[0]} </li>
                    <li> ${json[6].role.items[1]} </li>
                    <li> ${json[6].role.items[2]} </li>
                    <li> ${json[6].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".pomodoro-details").innerHTML = pomodoroMain;


    let pomodoroFoot = json[6].position;
    document.getElementById("footer-sct-h").innerHTML = pomodoroFoot;
});





// Maker detail page script

let makerNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    makerNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[7].logoBackground}">
                <img src=" ${json[7].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[7].company} </h2>
                <p>maker.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".maker-bar").innerHTML = makerNav;


    let makerMain = "";
    makerMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[7].postedAt} . ${json[7].contract} </p>
                <h2 id="sct-job-title"> ${json[7].position} </h2>
                <p id="sct-job-location"> ${json[7].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[7].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[7].requirements.content} </p>

                <ul> 
                    <li> ${json[7].requirements.items[0]} </li>
                    <li> ${json[7].requirements.items[1]} </li>
                    <li> ${json[7].requirements.items[2]} </li>
                    <li> ${json[7].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[7].role.content} </p>

                <ol> 
                    <li> ${json[7].role.items[0]} </li>
                    <li> ${json[7].role.items[1]} </li>
                    <li> ${json[7].role.items[2]} </li>
                    <li> ${json[7].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".maker-details").innerHTML = makerMain;


    let makerFoot = json[7].position;
    document.getElementById("footer-sct-h").innerHTML = makerFoot;
});





// Coffeeroasters detail page script

let coffeeroastersNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    coffeeroastersNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[8].logoBackground}">
                <img src=" ${json[8].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[8].company} </h2>
                <p>coffeeroasters.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".coffeeroasters-bar").innerHTML = coffeeroastersNav;


    let coffeeroastersMain = "";
    coffeeroastersMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[8].postedAt} . ${json[8].contract} </p>
                <h2 id="sct-job-title"> ${json[8].position} </h2>
                <p id="sct-job-location"> ${json[8].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[8].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[8].requirements.content} </p>

                <ul> 
                    <li> ${json[8].requirements.items[0]} </li>
                    <li> ${json[8].requirements.items[1]} </li>
                    <li> ${json[8].requirements.items[2]} </li>
                    <li> ${json[8].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[8].role.content} </p>

                <ol> 
                    <li> ${json[8].role.items[0]} </li>
                    <li> ${json[8].role.items[1]} </li>
                    <li> ${json[8].role.items[2]} </li>
                    <li> ${json[8].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".coffeeroasters-details").innerHTML = coffeeroastersMain;


    let coffeeroastersFoot = json[8].position;
    document.getElementById("footer-sct-h").innerHTML = coffeeroastersFoot;
});




// Mastercraft detail page script

let mastercraftNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    mastercraftNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[9].logoBackground}">
                <img src=" ${json[9].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[9].company} </h2>
                <p>mastercraft.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".mastercraft-bar").innerHTML = mastercraftNav;


    let mastercraftMain = "";
    mastercraftMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[9].postedAt} . ${json[9].contract} </p>
                <h2 id="sct-job-title"> ${json[9].position} </h2>
                <p id="sct-job-location"> ${json[9].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[9].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[9].requirements.content} </p>

                <ul> 
                    <li> ${json[9].requirements.items[0]} </li>
                    <li> ${json[9].requirements.items[1]} </li>
                    <li> ${json[9].requirements.items[2]} </li>
                    <li> ${json[9].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[9].role.content} </p>

                <ol> 
                    <li> ${json[9].role.items[0]} </li>
                    <li> ${json[9].role.items[1]} </li>
                    <li> ${json[9].role.items[2]} </li>
                    <li> ${json[9].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".mastercraft-details").innerHTML = mastercraftMain;


    let mastercraftFoot = json[9].position;
    document.getElementById("footer-sct-h").innerHTML = mastercraftFoot;
});






// Crowdfund detail page script

let crowdfundNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    crowdfundNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[10].logoBackground}">
                <img src=" ${json[10].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[10].company} </h2>
                <p>crowdfund.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".crowdfund-bar").innerHTML = crowdfundNav;


    let crowdfundMain = "";
    crowdfundMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[10].postedAt} . ${json[10].contract} </p>
                <h2 id="sct-job-title"> ${json[10].position} </h2>
                <p id="sct-job-location"> ${json[10].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[10].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[10].requirements.content} </p>

                <ul> 
                    <li> ${json[10].requirements.items[0]} </li>
                    <li> ${json[10].requirements.items[1]} </li>
                    <li> ${json[10].requirements.items[2]} </li>
                    <li> ${json[10].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[10].role.content} </p>

                <ol> 
                    <li> ${json[10].role.items[0]} </li>
                    <li> ${json[10].role.items[1]} </li>
                    <li> ${json[10].role.items[2]} </li>
                    <li> ${json[10].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".crowdfund-details").innerHTML = crowdfundMain;


    let crowdfundFoot = json[10].position;
    document.getElementById("footer-sct-h").innerHTML = crowdfundFoot;
});





// Typemaster detail page script

let typemasterNav = "";

fetch('data.json')
.then(Response => Response.json())
.then(json => {
    typemasterNav += `
    <div class="scoot-navbar">
        <div class="scoot-box">
            <div class="scoot-img" style="background-color: ${json[11].logoBackground}">
                <img src=" ${json[11].icon} " alt="blogr icon" >
            </div>

            <div class="scoot-sub">
                <h2> ${json[11].company} </h2>
                <p>typemaster.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".typemaster-bar").innerHTML = typemasterNav;


    let typemasterMain = "";
    typemasterMain += `
        <div class="sct-article-head">
            <div>
                <p id="sct-post"> ${json[11].postedAt} . ${json[11].contract} </p>
                <h2 id="sct-job-title"> ${json[11].position} </h2>
                <p id="sct-job-location"> ${json[11].location} </p>
            </div>

            <div>
                <button class="button sct-apply"> Apply Now </button>
            </div>
        </div>

        <div>
            <article class="sct-article">
                <p> ${json[11].description} </p>
            </article>

            <article class="sct-article">
                <h3> Requirements </h3>

                <p> ${json[11].requirements.content} </p>

                <ul> 
                    <li> ${json[11].requirements.items[0]} </li>
                    <li> ${json[11].requirements.items[1]} </li>
                    <li> ${json[11].requirements.items[2]} </li>
                    <li> ${json[11].requirements.items[3]} </li>
                </ul>
                
            </article>

            <article class="sct-article">
                <h3> What You Will Do </h3>

                <p> ${json[11].role.content} </p>

                <ol> 
                    <li> ${json[11].role.items[0]} </li>
                    <li> ${json[11].role.items[1]} </li>
                    <li> ${json[11].role.items[2]} </li>
                    <li> ${json[11].role.items[3]} </li>
                </ol>
            </article>
        </div>

    `
    document.querySelector(".typemaster-details").innerHTML = typemasterMain;


    let typemasterFoot = json[11].position;
    document.getElementById("footer-sct-h").innerHTML = typemasterFoot;
});
