/* Text animation on page load */
const text = document.querySelector(".me");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
    if(i == 26){
        text.innerHTML += "<br><br>";
    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

/* End of text animation */

/* Form open */

function formOpen(){
    const form = document.getElementById('form');

    form.style.trasition = 'all 2s ease-in';
    form.style.display = 'block';
    form.style.opacity = 1;
    
    /* Close form panel when clicking anywhere but the formPanel itself */

    document.addEventListener('click', e => {
        const navPanel = e.target.matches('[navPanel]');
        const headerPanel = e.target.matches('[headerPanel]');
        const mainPanel = e.target.matches('[mainPanel]');
        const introPanel = e.target.matches('[intro]');
        const form = document.getElementById('form');
    
    
        if(!navPanel && !headerPanel && !mainPanel && !introPanel){
            form.style.display = 'block';
        }
        
        else {
            form.style.display = 'none';
        }
    })

}
