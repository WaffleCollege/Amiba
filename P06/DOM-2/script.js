'use strict'
// Please don't delete the 'use strict' line above

//問題2
//1
console.log("問題2-1の解答");
const p = document.querySelectorAll("p");
console.log(p);

//2
console.log("問題2-2の解答");
const header = document.getElementById("main-header");
console.log(header);

//3
console.log("問題2-3の解答");
let className = document.getElementsByClassName("inner-paragraph");
for(let i = 0; i < className.length; i++) {
    console.log(className[i]);
}


//問題3
//1
console.log("問題3-1の解答");
function big(str) {
    str = str.toUpperCase();
    console.log(str);
}

big("hello123")

//2
console.log("問題3-2");
function big2(ele) {
    const para = document.querySelectorAll(ele);
    const para2 = [];
    for(let i = 0; i < para.length; i++) {
        //para2.push(para[i].innerHTML.toUpperCase());
        para[i].textContent = para[i].textContent.toUpperCase();

    }
    //return para2;
}


//3
console.log("問題3-3の解答");
console.log(big2("p")); //タグ
console.log(big2('.inner-paragraph')); //class
console.log(big2("#main-header")); //ID
console.log(big2("*"));

//4 
console.log("問題4の解答");
function big3() {
    var para = document.querySelectorAll("*");
    const setText = [];
    //console.log(para[0].textContent);
    para[0].innerHTML = para[0].innerHTML.toUpperCase();
    console.log(para[0].textContent);
    //para.textContent =para.textContent.toUpperCase();
    /*for(let i = 0; i < para.length; i++) {
        console.log(i);
        console.log(para[i].textContent);
        let text = para[i].textContent.toUpperCase();
        para[i].textContent = text;
        //console.log(para[i]);
    }*/
}

//console.log(big3("*")); 

function Omoji(){//タグ、id、クラス名で検索
	const id = document.querySelectorAll("body")
	console.log(id);
	for(let i of id){
		i.innerHTML = i.innerHTML.toUpperCase();
	}
}
Omoji();