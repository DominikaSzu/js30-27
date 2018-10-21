const sliderDiv = document.querySelector('.items');
let isDown = false;
let scrollLeft;
let startX;

sliderDiv.addEventListener('mousedown', (e)=> {
    isDown = true;
    sliderDiv.classList.add('active');
    startX = e.pageX - sliderDiv.offsetLeft;
    scrollLeft = sliderDiv.scrollLeft;
});

sliderDiv.addEventListener('mouseleave', ()=> {
    isDown = false;    
    sliderDiv.classList.remove('active');
});

sliderDiv.addEventListener('mouseup', ()=> {
    isDown = false;
    sliderDiv.classList.remove('active');
});

sliderDiv.addEventListener('mousemove', (e)=> {
    if (!isDown) return
    e.preventDefault();
    const x = e.pageX - sliderDiv.offsetLeft;
    const walk = x - startX;
    sliderDiv.scrollLeft = walk;
    sliderDiv.scrollLeft = scrollLeft - walk;
});