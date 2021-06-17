document.addEventListener("DOMContentLoaded", function(){
document.querySelector("#theme").addEventListener("click", function(){
    let check = document
    .querySelector("#theme_css")
    .classList[0] === 'light';
  
    let element = document.querySelector("#theme_css");
  
  
    if (check) {
     element.href = 'css/dark.css';
     element.classList.remove('light')
     element.classList.add('dark');
    } else {
     element.href = 'css/light.css';
     element.classList.remove('dark')
     element.classList.add('light');
    }
}); 
});