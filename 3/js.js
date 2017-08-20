let obj = {
    str : document.querySelector('input'),
    button : document.querySelector('button'),
    p : document.querySelector('p')
}
obj.button.addEventListener('click', function () {
  
    if (~obj.str.value.indexOf("http://")) {
        obj.p.innerHTML = obj.str.value.substring(7);
    } 
    else if (~obj.str.value.indexOf("https://")) {
        obj.p.innerHTML = obj.str.value.substring(8);
    } 
    else {
        alert ('Введите коректно URL адрес ')
    }
})
