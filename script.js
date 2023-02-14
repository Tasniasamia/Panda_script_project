//ex-1
const arr=document.getElementsByTagName('h2');
for(let x of arr){
    x.style.color="gray";
}
//ex-2
document.getElementById('backpack').style.backgroundColor="tomato";
document.getElementById('backpack').style.padding="20px";
//ex-3
document.getElementById('shoes').style.borderRadius="30px";
document.getElementById('backpack').style.borderRadius="30px";
//ex-4
const arr1=document.getElementsByClassName('text-white');
for(let x of arr1){
x.addEventListener('click',function(event){
    console.log(event.target.innerText);
})
}
//ex-5 //bubble
const arr4=document.getElementsByClassName('btn');
for(let i of arr4){
    i.addEventListener('click',function(event){
        event.target.parentNode.parentNode.parentNode.remove();
    })
}
//ex-6
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
if(event.target.value.endsWith("@gmail.com")){
    document.getElementById('baton').removeAttribute('disabled');
}
else{
    document.getElementById('baton').setAttribute('disabled',true);
}
})
//ex-7
// document.getElementById('backpack').addEventListener('click',function(event){

//  if(event.target.src.match("images/bags/bag-1.png")){
//     event.target.src="images/bags/bag-2.png"
//  }
//  else if(event.target.src.match("images/bags/bag-2.png")){
//     event.target.src="images/bags/bag-3.png"
//  }else{
//     event.target.src="images/bags/bag-1.png" 
//  }
// })
//ex-7.1
// function myfunction1(){
//   const bag1= document.getElementById('bag1');
// bag1.src="images/bags/bag-3.png"

//  }
//  function myfunction11(){
//     const bag1= document.getElementById('bag1');
//   bag1.src="images/bags/bag-1.png"
  
//    }
  
//    function myfunction2(){
//     const bag1= document.getElementById('bag2');
//   bag1.src="images/bags/bag-3.png"
  
//    }
//    function myfunction22(){
//       const bag1= document.getElementById('bag2');
//     bag1.src="images/bags/bag-2.png"
    
//      }

//      function myfunction3(){
//         const bag1= document.getElementById('bag3');
//       bag1.src="images/bags/bag-1.png"
      
//        }
//        function myfunction33(){
//           const bag1= document.getElementById('bag3');
//         bag1.src="images/bags/bag-3.png"
        
//          }


//ex-7.2
// document.getElementById('bag1').addEventListener('mousenter',function(event){
//     event.target.src="images/bags/bag-3.png";
// });
// document.getElementById('bag1').addEventListener('mou',function(event){
//     event.target.src="images/bags/bag-3.png";
// })

//          //dbclick
//          document.getElementById('subscribe').ondblclick=function(){
//             document.getElementById('subscribe').style.backgroundColor='yellow';
//          }


//ex-7 final
function myfunction1(event,num){
    event.src=`images/bags/bag-${num}.png`;

}
function myfunction2(shoe,num1){
    shoe.src=`images/shoes/shoe-${num1}.png`;

}

//ex-8
function fon(size,num3){
    size.style.borderRadius =`${num3}px`;
}

//Most Important code of JS

        //  function newImg(event, val) {
        //     event.src = `images/shoes/shoe-${val}.png`;
        //   }
        //   function oldImg(event, val) {
        //     event.src = `images/shoes/shoe-${val}.png`;
        //   }
        //   <img id="img1" src="images/shoes/shoe-1.png" onmouseenter="newImg(this, 3)" onmouseout="oldImg(this, 1)" class="card-img-top" alt="...">