//this script is built with reference from week 5 tutorial in lecture

"use strict"; //prevent loding error code
console.log("JavaScript for nav-dropdown is running."); 

//build a hamberger button and add it to the page with JS
let menu = document.querySelector('#menu');//let value of a variable called "menu" equals to the item called #menu on the page
console.log("Menu element:", menu);//print a interactable menu element, which is selected 
let myNav = document.getElementById("collapse-links"); 

//https://www.w3schools.com/howto/howto_js_media_queries.asp
function myToggleMenu(x) {
    console.log(x); 
    if (x.matches) { // If screen is larger than x
        let menuToggle= document.createElement('button');//created a new html button element
        menuToggle.classList.add("primary-button");//class="icon-link"
        menuToggle.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>'; //add the icon  <button>icon</button>

        if(menu.classList.contains("collapsed")){
            console.log("Nav menu is folded!"); 
        }
        else{
            menu.classList.add("collapsed");
            // in class hidden, display: none This visually hide things.
            menu.classList.add("hidden");//add a hidden class to the menu, now <#menu class=".. hidden">

            myNav.insertBefore(menuToggle, menu);

            //change CSS grid layout
            //https://www.dummies.com/article/technology/programming-web-design/javascript/changing-css-with-javascript-140946/
            myNav.style.gridTemplateColumns="1fr";
            menu.style.gridTemplateColumns = "1fr";
        
            //for accesibility
            menu.setAttribute("aria-hidden", true);
            menu.setAttribute("aria-labelledby", 'menu-toggle');
            
            menuToggle.setAttribute('id','menu-toggle');
            menuToggle.setAttribute('aria-controls','menu');
            menuToggle.setAttribute('aria-expended', 'false');
        }
        
        menuToggle.addEventListener("click", function(){
            console.log("Button Clicked!");
        
            if (menu.classList.contains("hidden")){
                console.log('Mene is hidden, show the menu');
                menu.classList.remove('hidden');
                menuToggle.setAttribute('aria-expended', 'ture');

                myNav.style.textAlign="center";
                document.querySelector('#main-nav').style.flexFlow="column nowrap";
                menuToggle.style.paddingTop= '1rem';
                // menu_icon.style.rotate(180);
        
            }else{
                console.log('Menu is shown, hide the menu');
                menu.classList.add('hidden');
                menuToggle.setAttribute('aria-expended', 'false');
                document.querySelector('#main-nav').style.flexFlow="row nowrap";
                menuToggle.style.paddingTop= '0';
                // menu_icon.style.rotate(180);
            }
        });
    } else {
        menu.classList.remove('collapsed');
        menu.classList.remove('hidden');

        //for accesibility
        menu.setAttribute("aria-hidden", 'false');

        let menuToggle=document.querySelector('#menu-toggle');
        if(menuToggle !=null){
            menuToggle.remove() //https://catalin.red/removing-an-element-with-plain-javascript-remove-method/
        }

        document.querySelector('#main-nav').style.flexFlow="row nowrap"
        menu.style.gridTemplateColumns = "1fr 1fr";
    }
  }

  var screenWidth=window.matchMedia("(max-width: 25rem");
  myToggleMenu(screenWidth);

  //https://codepen.io/jondlm/pen/AMrVYo
  //respond to resizing
  window.addEventListener('resize', respondResize);

  function respondResize(){
    console.log("Resize is running.");
    var screenWidth=window.matchMedia("(max-width: 25rem");
    myToggleMenu(screenWidth);
  }