let obj = {
    inp : document.querySelector('input').value,
    button : document.querySelector('button'),
    p : document.querySelector('p')
}

obj.button.addEventListener('click', function () {
    let res = obj.inp.charCodeAt();
    obj.p.innerHTML = res;
})