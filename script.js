const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')

btn1.addEventListener('click', () => {
    progress.setAttribute('value', 50 );
    stepButtons[0].classList.add('done')
})
btn2.addEventListener('click', () => {
    progress.setAttribute('value', 100 );
    stepButtons[1].classList.add('done')
})

Array.from(stepButtons).forEach((button,index) => {
    button.addEventListener('click', () => {
        progress.setAttribute('value', index * 100 /(stepButtons.length - 1) );//aqui tem 3 botões. 2 espaços.

        stepButtons.forEach((item, secindex)=>{
            if(index > secindex){
                item.classList.add('done');
                
            }
            if(index < secindex){
                item.classList.remove('done');
            }
        })
    })
})



