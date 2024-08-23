document.addEventListener("DOMContentLoaded",function() {
    window.addEventListener("load",function(){
        const loader=document.querySelector("#loader")
        const wholepage= document.querySelector(".content")

        if(loader){
            loader.style.display="none";

        }
        if(wholepage){
            wholepage.style.display="block";
        }
    })

    const menu= document.querySelector(".menu");
    const nav= document.querySelector(".covercontainer");
    const cancel = document.querySelector(".cancel");

    if (menu){
        menu.addEventListener("click", ()=>{
            if (window.innerWidth < 993) {
                menu.style.display="none"
                // nav.style.transform = "translateX(0)"; 
                nav.style.display="block"
                // nav.style.transform = "translateX(0)";
            }
            

    })
    }
    
    if (cancel){
        const mark = document.querySelector(".cancel-mark")
        if (mark){
            mark.addEventListener("click",()=>{
                if (window.innerWidth < 993) {
                    nav.style.display= "none";
                    menu.style.display = "block";
                }
            })
        }
    }

    const navigation_links = Array.from(document.getElementsByClassName("navigation-list"));
    navigation_links.forEach(element => {
        element.addEventListener("click", () => {
                if (window.innerWidth < 993) {
                    nav.style.display = "none";
                    menu.style.display = "block";
                }
                            // menu.style.display="block";
            });

    });

    const sr= ScrollReveal({
        origin:'top',
        distance: '60px',
        duration : 2500,
        delay: 300,
        // reset: true,
        
    })

    if (window.innerWidth>= 1200){

    sr.reveal(`.nameintro`)
    sr.reveal(`.picture`,{delay:300, distance:"100px", origin:"bottom"})
    sr.reveal(`.drill-pic`,{delay:300, distance:"300px", origin:"left", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.about-me-gangan`,{delay:400, distance:"300px", origin:"right", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.box-one`,{delay:300, distance:"500px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.box-two`,{delay:300, distance:"600px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.box-three`,{delay:300, distance:"700px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.getintouch`,{delay:300, distance:"100px", origin:"left", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.form-collect`,{delay:300, distance:"300px", origin:"right", easing:"cubic-bezier(.05,.01,.02,.98)"})

    



    sr.reveal(`.copyright-writeup`,{delay:200, distance:"500px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.footer-links`,{delay:300, distance:"600px", origin:"right", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.cpn-image`,{delay:300, distance:"400px", origin:"left", easing:"cubic-bezier(.05,.01,.02,.98)"})


    sr.reveal(`.about`,{delay:300, distance:"100px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.projects`,{delay:300, distance:"200px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.contact-me`,{delay:300, distance:"300px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
    sr.reveal(`.resume`,{delay:300, distance:"400px", origin:"bottom", easing:"cubic-bezier(.05,.01,.02,.98)"})
  

   }
    
})

