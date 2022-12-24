// DarkMode Script

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





let jobsOffers = "";
let num = 0;
fetch('data.json')
.then(Response => Response.json())
.then(json => {
    json.forEach(element => {
    jobsOffers +=  `
            <div class="job-card-${num+=1}" onclick="location.href='${element.link}';" style="cursor:pointer">
                <div class="job-logo">
                    <img src=" ${element.logo} ">
                </div>
                <div class="job-name" id="job-name">
                    <p>${element.postedAt} . ${element.contract} </p>
                    <h3 id="job-title"><a href="${element.link}"> ${element.position} </a></h3>
                    <p> ${element.company} </p> 
                </div>
                <div class="job-location" id="job-location">
                    <p> ${element.location} </p>
                </div>
            </div>
            `
    });
    document.querySelector(".jobs").innerHTML = jobsOffers;

});

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
                <img src=" ${json[0].icon} " alt="scoot icon">
            </div>

            <div class="scoot-sub">
                <h2> ${json[0].company} </h2>
                <p>scoot.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[0].website}';"> Company Site </button>
        </div>
    </div>
    `    
    document.querySelector(".scoot-bar").innerHTML = scootNav;


    let scootMain = "";
    scootMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[0].postedAt} . ${json[0].contract} </p>
                <h3 id="sct-job-title"> ${json[0].position} </h3>
                <p id="sct-job-location"> ${json[0].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[0].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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
            <button class="button-wht" onclick="location.href='${json[1].website}';"> Company Site </button>
        </div>
    </div>
    `    
    document.querySelector(".blogr-bar").innerHTML = blogrNav;


    let blogrMain = "";
    blogrMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[1].postedAt} . ${json[1].contract} </p>
                <h3 id="sct-job-title"> ${json[1].position} </h3>
                <p id="sct-job-location"> ${json[1].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[1].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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
            <button class="button-wht" onclick="location.href='${json[2].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".vector-bar").innerHTML = vectorNav;


    let vectorMain = "";
    vectorMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[2].postedAt} . ${json[2].contract} </p>
                <h3 id="sct-job-title"> ${json[2].position} </h3>
                <p id="sct-job-location"> ${json[2].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[2].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="officelite-sub">
                <h2> ${json[3].company} </h2>
                <p>officelite.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[3].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".officelite-bar").innerHTML = officeLiteNav;


    let officeLiteMain = "";
    officeLiteMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[3].postedAt} . ${json[3].contract} </p>
                <h3 id="sct-job-title"> ${json[3].position} </h3>
                <p id="sct-job-location"> ${json[3].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[3].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="pod-sub">
                <h2> ${json[4].company} </h2>
                <p>pod.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[4].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".pod-bar").innerHTML = podNav;


    let podMain = "";
    podMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[4].postedAt} . ${json[4].contract} </p>
                <h3 id="sct-job-title"> ${json[4].position} </h3>
                <p id="sct-job-location"> ${json[4].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[4].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="creative-sub">
                <h2> ${json[5].company} </h2>
                <p>creative.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[5].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".creative-bar").innerHTML = creativeNav;


    let creativeMain = "";
    creativeMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[5].postedAt} . ${json[5].contract} </p>
                <h3 id="sct-job-title"> ${json[5].position} </h3>
                <p id="sct-job-location"> ${json[5].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[5].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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
            <div class="scoot-img" style="background-color: ${json[6].logoBackground}">
                <img src=" ${json[6].icon} " alt="blogr icon" >
            </div>

            <div class="pomodoro-sub">
                <h2> ${json[6].company} </h2>
                <p>pomodoro.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[6].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".pomodoro-bar").innerHTML = pomodoroNav;


    let pomodoroMain = "";
    pomodoroMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-pomo">
                <p id="sct-post"> ${json[6].postedAt} . ${json[6].contract} </p>
                <h3 id="sct-job-title"> ${json[6].position} </h3>
                <p id="sct-job-location"> ${json[6].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[6].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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
            <button class="button-wht" onclick="location.href='${json[7].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".maker-bar").innerHTML = makerNav;


    let makerMain = "";
    makerMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-maker">
                <p id="sct-post"> ${json[7].postedAt} . ${json[7].contract} </p>
                <h3 id="sct-job-title"> ${json[7].position} </h3>
                <p id="sct-job-location"> ${json[7].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[7].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="coffeeroasters-sub">
                <h2> ${json[8].company} </h2>
                <p>coffeeroasters.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[8].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".coffeeroasters-bar").innerHTML = coffeeroastersNav;


    let coffeeroastersMain = "";
    coffeeroastersMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[8].postedAt} . ${json[8].contract} </p>
                <h3 id="sct-job-title"> ${json[8].position} </h3>
                <p id="sct-job-location"> ${json[8].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[8].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="mastercraft-sub">
                <h2> ${json[9].company} </h2>
                <p>mastercraft.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[9].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".mastercraft-bar").innerHTML = mastercraftNav;


    let mastercraftMain = "";
    mastercraftMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[9].postedAt} . ${json[9].contract} </p>
                <h3 id="sct-job-title"> ${json[9].position} </h3>
                <p id="sct-job-location"> ${json[9].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[9].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="mastercraft-sub">
                <h2> ${json[10].company} </h2>
                <p>crowdfund.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[10].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".crowdfund-bar").innerHTML = crowdfundNav;


    let crowdfundMain = "";
    crowdfundMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-fund">
                <p id="sct-post"> ${json[10].postedAt} . ${json[10].contract} </p>
                <h3 id="sct-job-title"> ${json[10].position} </h3>
                <p id="sct-job-location"> ${json[10].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[10].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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

            <div class="mastercraft-sub">
                <h2> ${json[11].company} </h2>
                <p>typemaster.com</p>
            </div>
        </div>

        <div>
            <button class="button-wht" onclick="location.href='${json[11].website}';">Company Site</button>
        </div>
    </div>
    `    
    document.querySelector(".typemaster-bar").innerHTML = typemasterNav;


    let typemasterMain = "";
    typemasterMain += `
        <div class="sct-article-head">
            <div id="sct-article-head-sub">
                <p id="sct-post"> ${json[11].postedAt} . ${json[11].contract} </p>
                <h3 id="sct-job-title"> ${json[11].position} </h3>
                <p id="sct-job-location"> ${json[11].location} </p>
            </div>

            <div>
                <button class="button sct-apply" onclick="location.href='${json[11].apply}';"> Apply Now </button>
            </div>
        </div>

        <div class="docu-body">
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









// Mobile windom prompt menu

let menuIcon = document.querySelector(".menu-fil-icon");
let mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    if (mobileMenuContainer.classList.contains('active')) {
        mobileMenuContainer.classList.remove('active');
    }
    else {
        mobileMenuContainer.classList.add("active");
    }
    
});



// Desktop Filter Search

const deskSearchBar = document.querySelector('.btn-1');

deskSearchBar.addEventListener("click", deskFilter);


function deskFilter () {
    let inputS = document.getElementById("fil-search");
    let valueSearch = inputS.value.toUpperCase();


    if ('SENIOR SOFTWARE ENGINEER'.includes(valueSearch)) {
        window.open('/scoot.html')
    }

    else if ('SENIOR APPLICATION ENGINEER'.includes(valueSearch)) {
        window.open("/officelite.html");
    }

    else if ('MIDLEVEL BACK END ENGINEER'.includes(valueSearch)) {
        window.open("/vector.html");
    }

    else if ('REMOTE DEVOPS ENGINEER'.includes(valueSearch)) {
        window.open("/pod.html");
    }

    else if ('DESKTOP SUPPORT MANAGER'.includes(valueSearch)) {
        window.open("/creative.html");
    }

    else if ('SENIOR FRONTEND DEVELOPER'.includes(valueSearch)) {
        window.open("/coffeeroasters.html");
    }

    else if ('FULLSTACK DEVELOPER'.includes(valueSearch)) {
        window.open("/crowdfund.html");
    }

    else if ('SENIOR EJB DEVELOPER'.includes(valueSearch)) {
        window.open("/maker.html");
    }

    else if ('TECHNICAL LEAD ENGINEER'.includes(valueSearch)) {
        window.open("/typemaster.html");
    }

    else if ('HASKELL AND PURESCRIPT DEV'.includes(valueSearch)) {
        window.open("/blogr.html");
    }

    else if ('IOS ENGINEER'.includes(valueSearch)) {
        window.open("/pomodoro.html");
    }

    else if ('APP & WEBSITE DESIGNER'.includes(valueSearch)) {
        window.open("/mastercraft.html");
    }
    
}



// Mobile Filter Search

const mobileSearchBar = document.querySelector('#mobile-btn');
mobileSearchBar.addEventListener("click", mobileFilter);

const locaSearchBar = document.querySelector('.mb-btn');
locaSearchBar.addEventListener('click', mobileFilter);


function mobileFilter () {
    let inputS = document.getElementById("fil-mobile");
    let valueSearch = inputS.value.toUpperCase();


    if ('SENIOR SOFTWARE ENGINEER'.includes(valueSearch)) {
        window.open('/scoot.html')
    }

    else if ('SENIOR APPLICATION ENGINEER'.includes(valueSearch)) {
        window.open("/officelite.html");
    }

    else if ('MIDLEVEL BACK END ENGINEER'.includes(valueSearch)) {
        window.open("/vector.html");
    }

    else if ('REMOTE DEVOPS ENGINEER'.includes(valueSearch)) {
        window.open("/pod.html");
    }

    else if ('DESKTOP SUPPORT MANAGER'.includes(valueSearch)) {
        window.open("/creative.html");
    }

    else if ('SENIOR FRONTEND DEVELOPER'.includes(valueSearch)) {
        window.open("/coffeeroasters.html");
    }

    else if ('FULLSTACK DEVELOPER'.includes(valueSearch)) {
        window.open("/crowdfund.html");
    }

    else if ('SENIOR EJB DEVELOPER'.includes(valueSearch)) {
        window.open("/maker.html");
    }

    else if ('TECHNICAL LEAD ENGINEER'.includes(valueSearch)) {
        window.open("/typemaster.html");
    }

    else if ('HASKELL AND PURESCRIPT DEV'.includes(valueSearch)) {
        window.open("/blogr.html");
    }

    else if ('IOS ENGINEER'.includes(valueSearch)) {
        window.open("/pomodoro.html");
    }

    else if ('APP & WEBSITE DESIGNER'.includes(valueSearch)) {
        window.open("/mastercraft.html");
    }
    
}

// Load More Button 


const loadMore = document.querySelector('.btn-2');

const showNum1 = document.getElementsByClassName('job-card-13');
const showNum2 = document.getElementsByClassName('job-card-14');
const showNum3 = document.getElementsByClassName('job-card-15');


loadMore.addEventListener('click', mk);

function mk () {
        showNum1[0].classList.add('show');
        showNum2[0].classList.add('show');
        showNum3[0].classList.add('show');
}












