
var eat = document.querySelector('#eat')
var bake = document.querySelector('#bake')
var count = document.querySelector('span')
var key = 'key'

eat.addEventListener('click',function(event){
    if(count.innerText > 0){
    count.innerText = (Number(count.innerText) -1).toString()
    window.localStorage.setItem(key, count.innerText)
    }
    
})


bake.addEventListener('click',function(event){
    if (count.innerText > 0){
    count.innerText = (Number(count.innerText) +5).toString()
    window.localStorage.setItem(key, count.innerText)
    }
    
})


count.innerText= window.localStorage.getItem(key)

 
// document
//     .querySelector('#eatone')
//     .addEventListener('click',
//         function(event){
//             muffinChange(5)
//         }
//     )    
// if(isNaN(Number(window.localStorage.getItem(muffinKey))))



