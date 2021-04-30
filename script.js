

function scrollAnimation(){
    
    let text = document.querySelectorAll('.text');
    let screenPosition = window.innerHeight;
    let interval = 300;

    text.forEach((texts, index) => {
        let textPosition = texts.getBoundingClientRect().top;

        //this function will create a delay for every item
        setTimeout(function () {
            if(textPosition < screenPosition){
                texts.classList.add('text-appear');
            }

            //if you want the animation to reset without refreshing the page us this code instead
            // if(textPosition < screenPosition){
            //     texts.classList.add('text-appear');
            // } else {
            //     texts.classList.remove('text-appear');
            // }

        }, index * interval);
    });
}

window.addEventListener('scroll', scrollAnimation);