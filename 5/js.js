const form = document.forms.my;
let obj = {
    formElem : {
        name : form.elements.name,
        surname : form.elements.surname,
        pass : form.elements.pass,
        mail : form.elements.mail
    },
    button : document.querySelector('button'),
    p : document.querySelector('p')
}

obj.button.addEventListener('click', function () {
    
    for (let key in obj.formElem) {
        obj.formElem[key].value.replace(/\s/g, "");
    }
  
    if (obj.formElem.pass.value.length < 5) {
        alert ('пароль не должен быть меньше 5 символов')
        return
    }



    let str = obj.formElem.mail.value.search(/@/);
    let str1 = obj.formElem.mail.value.search(/\s/);
    if (str == -1 || str1 !== -1) {
        alert( 'Введите коректно email' );
        return
    }

    return alert('true');
})
