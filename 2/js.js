let obj = {
    img1 : {
        name : 'img1.jpg'
    },
    img2 : {
        name : 'img2.jpg'
    },
    img3 : {
        name : 'img3.jpg'
    }
}

let out = '';
for (var key in obj) {
	out +='<img src="img/' + obj[key].name +'">';
}
document.getElementById('out').innerHTML = out;