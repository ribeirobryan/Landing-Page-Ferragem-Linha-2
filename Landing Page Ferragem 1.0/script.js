var btnwhats = document.querySelector('button.main-button-whats')
btnwhats.addEventListener('mouseenter', mousehoverinw)
btnwhats.addEventListener('mouseleave', mousehoveroutw)
function mousehoverinw(){
    btnwhats.style.padding = '12px'
    btnwhats.style.transitionDuration = '600ms'
}
function mousehoveroutw(){
    btnwhats.style.padding = '10px'
    btnwhats.style.transitionDuration = '600ms'
}

var btninsta = document.querySelector('button.main-button-insta')
btninsta.addEventListener('mouseenter', mousehoverini)
btninsta.addEventListener('mouseleave', mousehoverouti)
function mousehoverini(){
    btninsta.style.padding = '12px'
    btninsta.style.transitionDuration = '600ms'
}
function mousehoverouti(){
    btninsta.style.padding = '10px'
    btninsta.style.transitionDuration = '600ms'
}

var btncmo = document.querySelector('button.main-button-comochegar')
btncmo.addEventListener('mouseenter', mousehoverincmo)
btncmo.addEventListener('mouseleave', mousehoveroutcmo)
function mousehoverincmo(){
    btncmo.style.padding = '12px'
    btncmo.style.transitionDuration = '600ms'
}
function mousehoveroutcmo(){
    btncmo.style.padding = '10px'
    btncmo.style.transitionDuration = '600ms'
}