
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
    
}

function toggleActive(e) {
console.log(e.propertyName);
if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    
}

}

panels.forEach(panal => panal.addEventListener('click', toggleOpen));
panels.forEach(panal => panal.addEventListener('transitionend', toggleActive));
