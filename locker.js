var text = document.querySelector('#text')


var input = document.querySelector('#text')
input.innerText += ' ' + input.value
window.localStorage.setItem('input', input.innerHTML)
input.value = ''
    // var allTheBlurb = document.querySelector('#text')


    var blurbKey = 'allTheBlurb'
    
    
    var appendblurb = document.querySelector('#appendblurb')
    blurb.addEventListener('input',function(event){
        window.localStorage.setItem(textKey,textarea)
        allTheBlurb.innerText += ' ' + input.value
        window.localStorage.setItem('allTheBlurb', allTheBlurb.innerText)
        input.value =''
    })