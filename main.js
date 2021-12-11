const menu = document.querySelector('#hamburger');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('.nav-link');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

/*
const plusBtn = [...document.querySelectorAll('.plus')];
const answers = document.querySelectorAll('.answers')
console.log(answers)

plusBtn.forEach( (btn)=> {
    btn.addEventListener('click', function () {
            //answers.style.display = 'block'
            console.log('red')
            answers.classList.toggle('show-text')


        })
} )*/