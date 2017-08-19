let obj = {
    text : document.querySelector('input'),
    button : document.querySelector('button')
}

obj.button.addEventListener('click', function () {
    let len = obj.text.value.length;
    return alert(len);
    
})