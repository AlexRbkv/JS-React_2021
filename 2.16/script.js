let btns = document.getElementsByTagName('button'),
    divs = document.getElementsByTagName('div'),
    div1 = document.getElementsByClassName('div1'),
    divId = document.getElementById('divId'),
    child = document.querySelectorAll('.div1 div');

    console.log(btns);
    console.log(divs);
    console.log(div1);
    console.log(divId);
    console.log(btns[2]);
    console.log(child);

let div = document.createElement('div'),
    text = document.createTextNode('text');

 div.classList.add('black');

 let wrapper = document.getElementById('divId');

 //document.body.appendChild(div);
 //wrapper.appendChild(div);
 document.body.insertBefore(div, divId);

