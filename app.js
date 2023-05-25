const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive= document.getElementById('cloud-five')

const javaScript= document.getElementById('javascript')
const react= document.getElementById('react')
const graphql= document.getElementById('graphql')

function move(){
    const Incremeter = window.scrollY;
    //grab the ballon
    //10 refers to the height of balloon from the bottom form stle.css
    balloon.style.bottom = 10 + Incremeter * 0.1 + "%"

    //Cloud 1
    cloudOne.style.bottom = 40 + Incremeter * 0.1 + "%"
    cloudOne.style.left = 75 + Incremeter * 0.1 + "%"

    //Cloud2 
    cloudTwo.style.bottom = 80 + Incremeter * 0.14 + "%"
    cloudTwo.style.left = 70 + Incremeter * 0.15 + "%"

     //Cloud3 
     cloudThree.style.bottom = 60 + Incremeter * 0.1 + "%"
     cloudThree.style.left = 0 + Incremeter * -0.12 + "%"

      //Cloud4 
    cloudFour.style.bottom = 70 + Incremeter * 0.16 + "%"
    cloudFour.style.left = 20 + Incremeter * -0.15 + "%"

     //Cloud5 
     cloudFive.style.bottom = 60 + Incremeter * 0.2 + "%"
     cloudFive.style.left = 60 + Incremeter * 0.16 + "%"



     //javascript  react and graphql
     javaScript.style.left = 20 + Incremeter * -2.2 +"%";
     react.style.left = 26 + Incremeter * -1.5 +"%";
     graphql.style.left = 32 + Incremeter * -1 +"%";

}


//listen to anythime I scroold

window.addEventListener('scroll', move)