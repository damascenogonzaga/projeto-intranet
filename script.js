var btn = document.querySelector('#btn');
var p = document.querySelector('#p')
var container = document.querySelector('.container');

btn.addEventListener('click', function() { 
    if(container.style.display === 'block') {
        container.style.display = 'none'; } 
        
     else{container.style.display = 'block';} } );

p.addEventListener('click', function() { 
    if(container.style.display === 'block') {
    container.style.display = 'none'; } 

    else { container.style.display = 'block'; } });