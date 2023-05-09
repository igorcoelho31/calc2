var btn = document.querySelector('#show');
var btn2 = document.querySelector('#show2');
var container2 = document.querySelector('.container2')
var container3 = document.querySelector('.container3')


btn.addEventListener('click' , function() {

if(container2.style.display === 'block') {
    container2.style.display = 'none';
}else {
    container2.style.display = 'block';
}

});

btn2.addEventListener('click' , function() {

    if(container3.style.display === 'block') {
        container3.style.display = 'none';
    }else {
        container3.style.display = 'block';
    }
    
    });