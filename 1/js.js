let obj = {
    text : document.querySelector('input').value,
    button : document.querySelector('button')
}

obj.button.addEventListener('click', function () {
    let len = obj.text.length;
    return alert(len);
    
})