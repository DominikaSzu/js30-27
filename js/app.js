const sliderDiv = document.querySelector('.items');
let isDown = false;
let scrollLeft;
let startX;

sliderDiv.addEventListener('mousedown', ()=> {
    isDown = true;
    sliderDiv.classList.add('active');
});

sliderDiv.addEventListener('mouseleave', ()=> {
    isDown = false;    
    sliderDiv.classList.remove('active');
});

sliderDiv.addEventListener('mouseup', ()=> {
    isDown = false;
    sliderDiv.classList.remove('active');
});

sliderDiv.addEventListener('mousemove', ()=> {
    if (!isDown) return
});