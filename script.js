var auxw = false
var auxc = false

const btnwhats = document.querySelector('button.main-button-whats')
const btnhiddenw1 = document.getElementById("zap-hid1")
const btnhiddenw2 = document.getElementById("zap-hid2")


btnwhats.addEventListener('mouseenter', mousehoverinw)
btnwhats.addEventListener('mouseleave', mousehoveroutw)
btnwhats.addEventListener('click', mouseclickw)

btnhiddenw1.addEventListener('click', clickhidden1)
btnhiddenw2.addEventListener('click', clickhidden2)

function clickhidden1(){
    window.open('https://api.whatsapp.com/send/?phone=5551991694035&text&type=phone_number&app_absent=0', '_blank')
}
function clickhidden2(){
    window.open('https://api.whatsapp.com/send/?phone=5551998668690&text&type=phone_number&app_absent=0', '_blank')
}

function mouseclickw(){
    
    btnhiddenw1.toggleAttribute("disabled")
    btnhiddenw1.classList.toggle("active")
    btnhiddenw2.toggleAttribute("disabled")
    btnhiddenw2.classList.toggle("active")
    if (auxw == true){
        auxw = false
    } else {
        auxw = true
    }
    
    if (auxc == true){
        btnhiddenc1.toggleAttribute("disabled")
        btnhiddenc1.classList.toggle("active")
        btnhiddenc2.toggleAttribute("disabled")
        btnhiddenc2.classList.toggle("active")
        auxc = false
    }
}

function mousehoverinw(){
    btnwhats.style.padding = '12px'
    btnwhats.style.transitionDuration = '600ms'
}
function mousehoveroutw(){
    btnwhats.style.padding = '10px'
    btnwhats.style.transitionDuration = '600ms'
}





const btninsta = document.querySelector('button.main-button-insta')
btninsta.addEventListener('mouseenter', mousehoverini)
btninsta.addEventListener('mouseleave', mousehoverouti)
btninsta.addEventListener('click', mouseclickin)

function mouseclickin(){
    if (auxc == true){
        btnhiddenc1.toggleAttribute("disabled")
        btnhiddenc1.classList.toggle("active")
        btnhiddenc2.toggleAttribute("disabled")
        btnhiddenc2.classList.toggle("active")
        auxc = false
    }
    if (auxw == true){
        btnhiddenw1.toggleAttribute("disabled")
        btnhiddenw1.classList.toggle("active")
        btnhiddenw2.toggleAttribute("disabled")
        btnhiddenw2.classList.toggle("active")
        auxw = false
    }
    window.open('https://www.instagram.com/ferragemlinha2/','_blank')
}
function mousehoverini(){
    btninsta.style.padding = '12px'
    btninsta.style.transitionDuration = '600ms'
}
function mousehoverouti(){
    btninsta.style.padding = '10px'
    btninsta.style.transitionDuration = '600ms'
}



const btncmo = document.querySelector('button.main-button-comochegar')
const btnhiddenc1 = document.getElementById("cmo-hid1")
const btnhiddenc2 = document.getElementById("cmo-hid2") 

btncmo.addEventListener('click', mouseclickc)
btncmo.addEventListener('mouseenter', mousehoverincmo)
btncmo.addEventListener('mouseleave', mousehoveroutcmo)

btnhiddenc1.addEventListener('click', clickhiddenc1)
btnhiddenc2.addEventListener('click', clickhiddenc2)

function clickhiddenc1(){
    window.open('https://www.google.com/maps/dir//Ferragem+Linha+2+-+R.+Alexandre+de+Gusm%C3%A3o,+1571+-+Est%C3%A2ncia+Velha,+Canoas+-+RS,+92030-340/@-29.9214123,-51.157255,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9519703434d0d933:0x4b4b8875cb48519a!2m2!1d-51.1417627!2d-29.9107236', '_blank')
}
function clickhiddenc2(){
    window.open('https://www.google.com/maps/dir//Ferragem+Linha+2,+ao+lado+do+mercado+menegussi+-+R.+Alexandre+de+Gusm%C3%A3o,+737+-+Est%C3%A2ncia+Velha,+Canoas+-+RS,+92030-340/@-29.9252463,-51.1575523,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95197124a61b8c39:0x643aad10387b747f!2m2!1d-51.1423574!2d-29.918395', '_blank')
}

function mouseclickc(){
    
    btnhiddenc1.toggleAttribute("disabled")
    btnhiddenc1.classList.toggle("active")
    btnhiddenc2.toggleAttribute("disabled")
    btnhiddenc2.classList.toggle("active")
    if (auxc == true){
        auxc = false
    } else {
        auxc = true
    }

    if (auxw == true){
        btnhiddenw1.toggleAttribute("disabled")
        btnhiddenw1.classList.toggle("active")
        btnhiddenw2.toggleAttribute("disabled")
        btnhiddenw2.classList.toggle("active")
        auxw = false
    }
}
function mousehoverincmo(){
    btncmo.style.padding = '12px'
    btncmo.style.transitionDuration = '600ms'
}
function mousehoveroutcmo(){
    btncmo.style.padding = '10px'
    btncmo.style.transitionDuration = '600ms'
}

