// var myMustafa=document.querySelectorAll('h4.test') // الاتش فور الي واخده كلاس اسمه تيست

// console.log(myMustafa);    // Output: NodeList [h4.test]

// var x = document.getElementsByTagName('input'); for (var i = 0; i < x.length; i++) {
//     console.log(x[i]);
// }           
// Output: HTMLCollection [input, (2)] itrateble foorloop

// var x = document.getElementsByClassName('form-control');
// console.log(x[1].id);
// Output: HTMLCollection [input, (2)] itrateble foorloop



// var x = document.getElementsByName('gender');
// console.log(x); 
// Output: NodeList [input, input, input] itrateble foor loop

// html collection     index    + length           + foorloop + x[index]      x[id|name]                                        
//  NodeList           index    + length           + foorloop + x[index] 


// document.querySelector nested selector
// document.querySelectorAll
// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.getElementsByName


//  var x = document.querySelectorAll('input');
//  console.log(x[3].id);

// var x= document.body    + links    +form+images
// console.log(x) // Output: <body>...</body>


// function sayHi(name) {
//     console.log('hi' + name);
// }

// var myBtn = document.querySelector('button')
// // myBtn.addEventListener('click' , sayHi)

// myBtn.addEventListener('click', function () {
//     sayHi('deshaaaa')
// })


// var myBtnn = document.querySelectorAll("button")
// // console.log(myBtnn);
// for (var i = 0; i < myBtnn.length; i++) {
//     myBtnn[i].addEventListener('click', function () {
//         console.log('hi deshaaaa');
//     })
// }
// var myBtnn = document.querySelector("button#demo")
// console.log(myBtnn); // Output: NodeList []
// myBtnn.addEventListener("click", function(){
//     console.log("hi deshaaaa");
// })


// var change = document.querySelector('#change')
// // y.style.color='#09c'

// change.addEventListener("click", function () {
// var y = document.querySelector('h4')


//     y.style.cssText='color:#09c;margin:50px'
//     y.style.color = 'red'
//     y.style.margin= "20px"
// })

// var x= document.querySelector('h2')
// x.addEventListener('click', function(){
//     x.style.color='blue'
// })

// var div = document.querySelector('div')
// div.addEventListener("click", function (event) {
//     event.target.style.display = "none"
//     console.log(event.target);
// })


// var div = document.querySelector('div')
// div.addEventListener("mousemove", function () {
//     console.log("hi");
// })


// event type
/*
mouse event
1- click 
2- dblclick
3- mouseenter    لما الماوس يدخل جوه  --نص الهافر 
4- mouseleave    لما الماوس يخرج من  --نص الهافر الاتنين مع بعض بيكونو هافر
5- mousemove    لما الماوس يتحرك جوه



keybords
1- keyup طول م انت ضاغط علي الزرار مش بيضيف لما اشيل ايدي من ع الزرار بيضيف
2- keydown لما انت ضاغط علي الزرار بيعد في اللوج لما بشيل مش بيشتغل



input event
1- focus لما بضغط علي الانبوت 
2- blur  لما بخرج و اضغط ع مكان تاني من الانبوت
3- change  دي مهمه جدا لان لما بيتعل تغير في الانبوت وتخرج بتشتغل


*/


// var input= document.querySelector('input')
// input.addEventListener("keydown", function(){
//     console.log("hi");
// })
// var input= document.querySelector('input')
// input.addEventListener("input", function(e){
//     console.log(e);
// })

// var div = document.querySelector('div')
// div.addEventListener("click", function () {
//     // div.classList.remove('bg-warning')
//     // div.classList.add('text-center', 'bg-info')
//     // div.classList.replace('bg-warning', 'bg-info')
//     // console.log(div.classList.contains('bg-info'));
//     div.classList.toggle('text-center')
//     console.log("بتعمل الحاج وعكسها ل موجود بتشيله لو مش موجود بتضيفه");


// })


// get بتجيب الاتربيوت 
// set بتضيف الاتربيوت
// var img = document.querySelector('img')     
// // console.log(img); // بيجيب السورس من اول اين بدأ الخلق زي ما قالت البشمهندسة. لو جبنا الجيت اتربيوت . السورس كدا فل
// img.addEventListener('click', function(){

//     img.setAttribute('src', './imgs/2.jpg')
// })


// عايز اغير الباكجراوند اغير سورس الصوره


var allImages = Array.from(document.querySelectorAll('img'))
var layer = document.querySelector('.layer')
var inner = document.querySelector('.inner')
var closeBtn = document.querySelector('.fa-xmark')
var rightBtn = document.querySelector('.fa-right-long')
var leftBtn = document.querySelector('.fa-left-long')


var index;
// console.log(allImages);
for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function (e) {
        // console.log(e.target);
        var srcImg = e.target.getAttribute('src')
        // console.log(srcImg);
        layer.classList.remove('d-none')
        inner.style.backgroundImage = `url(${srcImg})`  // دي علشان نغير الصوره حسب السورس

        index = allImages.indexOf(e.target)

    }
    )
}

function hideLayer() {
    // console.log('hide');
    layer.classList.add('d-none')   //مش حاططها جوه انينموس فانكشن عشان هستعملها تاني

}
// closeBtn.addEventListener('click',function(){
// } )


function nextImg() {
    index++
    if (index == allImages.length) {
        index = 0
    }

    var srcImg = allImages[index].getAttribute('src')
    inner.style.backgroundImage = `url(${srcImg})`

}

function backImg() {
    index--
    if (index == -1) {                            // بنتشيك عشان ميضربش ايرور
        index = allImages.length - 1
    }
    var srcImg = allImages[index].getAttribute('src')
    inner.style.backgroundImage = `url(${srcImg})`

}

document.addEventListener('keyup', function (e) {
    if (e.code == "ArrowRight") {
        nextImg()
    } else if (e.code == "ArrowLeft") {
        backImg()
    }
    else if (e.code == "Space") {
        hideLayer()
    }
})
// Space
// ArrowRight
// ArrowLeft

layer.addEventListener('click', function (e) {
    if (e.target !== inner) {
        hideLayer()
    }
})

closeBtn.addEventListener('click', hideLayer)
rightBtn.addEventListener('click', nextImg)
leftBtn.addEventListener("click", backImg)