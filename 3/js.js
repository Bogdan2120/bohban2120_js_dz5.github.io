let obj = {
    str : document.querySelector('input').value,
    button : document.querySelector('button'),
    p : document.querySelector('p')
}
obj.button.addEventListener('click', function () {
  
    if (~obj.str.indexOf("http://")) {
        obj.p.innerHTML = obj.str.substring(7);
    } 
    else if (~obj.str.indexOf("https://")) {
        obj.p.innerHTML = obj.str.substring(8);
    } 
    else {
        alert ('Введите коректно URL адрес ')
    }
})
