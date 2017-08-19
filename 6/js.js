let obj = {
    inp : document.querySelector('input'),
    button : document.querySelector('button'),
    p : document.querySelector('p')
}

obj.button.addEventListener('click', function () {
    let res = obj.inp.value.charCodeAt();
    obj.p.innerHTML = res;
})