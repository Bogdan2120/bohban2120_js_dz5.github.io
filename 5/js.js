const form = document.forms.my;
let obj = {
    formElem : {
        name : form.elements.name.value,
        surname : form.elements.surname.value,
        pass : form.elements.pass.value,
        mail : form.elements.mail.value
    },
    button : document.querySelector('button'),
    p : document.querySelector('p')
}

obj.button.addEventListener('click', function () {
    
    for (let key in obj.formElem) {
        obj.formElem[key].replace(/\s/g, "");
    }
  
    if (obj.formElem.pass.length < 5) {
        alert ('пароль не должен быть меньше 5 символов')
        return
    }



    let str = obj.formElem.mail.search(/@/);
    let str1 = obj.formElem.mail.search(/\s/);
    if (str == -1 || str1 !== -1) {
        alert( 'Введите коректно email' );
        return
    }

    return alert('true');
})
