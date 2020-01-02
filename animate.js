window.onload = function(){

//const text = document.querySelector('.textanimate').textContent ;
//const target = document.querySelector('.textanimate') ;

var target = document.querySelector('.cuttext') ;
var text = target.lastElementChild.textContent ;
//target.lastElementChild.style.transitionProperty = "all" ;
//target.lastElementChild.style.transitionDuration = "1s" ;
target.style["height"] = "120px" ;
target.style["transform"] = "translate(0,50vh)" ;
target.style["font-size"] = "100px" ;
target.style.overflow = "hidden" ;
//target.style["text-shadow"] = "1px 1px white, 1px 1px blue, 5px 5px 5px pink" ;

console.log("target offset = " + target.getBoundingClientRect().top ) ;
//target.style["background-color"] = "pink" ;

//________________split animation ......____________________
/*var newtext = text.split("") ;
console.log(text + "length = " + text.length) ;
console.log("new text is " + newtext + "and length = " + newtext.length) ;
target.textContent = "" ;
for(var i=0;i<text.length;i++)
{
  if(newtext[i] == " ")
  {
    target.innerHTML += "<span>" + "&nbsp" + "</span>" ;
    continue ;
  }  
  target.innerHTML += "<span>" + newtext[i] + "</span>" ;
}

var animate_1 = setInterval(animate1,50) ;

var char = 0 ;
var allspan = document.querySelectorAll('span') ;
function animate1(){
   allspan[char].setAttribute('class','anim3') ;
   char++ ;
   if(char == text.length )
     {
         clearInterval(animate_1) ;
     }  
}*/

//_____________cut animation .......____________________
var check = 0 ;
var linelength = 0 ;
//var ontick = setInterval(width,50) ;
var ontick ;
target.onmouseover = function(e){

  if(check==0)
  {
    
    console.log("mouse on body with x and y  ",e.clientX," ", e.clientY) ; 
    var x = e.clientX ;
    var y = e.clientY ;
    var random = Math.random()*50 ;
    var movey = 450 - y ;
    movey = random ;
    if(movey<10)
    {
      movey = 20 ;
    }
    if(movey<450-y)
    {
      movey = movey - (450-y)/20 ;
    }
    if(movey<0)
    {
      movey = 30 ;
    }
    if(450-y < 50)
    {
      movey = 50 ;
    }
    target.lastElementChild.id = "heyyou" ;
    
    target.lastElementChild.animate(
      [
        {
          "transform" : "translate(0,0)"
        },
        {
          "transform" : "translate(-20px,0)"
        }
      ],
      {
        duration : 200,
        easing : 'ease-in-out'
      }
    ) ;
    target.lastElementChild.style["transform"] = "translate(-20px,0)" ;
    target.lastElementChild.style["font"]
    target.lastElementChild.style["max-height"] = (movey+20) + "px" ;
    target.lastElementChild.style.overflow = "hidden" ;  
    var line = document.createElement("div") ;
    line.id = "line" ;
    line.style.backgroundColor = "blue" ;
    line.style.width = 0 ;
    line.style.height = "1px" ;
    target.appendChild(line) ;
    function stop(){
      clearInterval(ontick) ;
    }
    var i = 0 ;
    
    ontick = setInterval(function(){
      i++ ;
      linelength = i ;
      console.log("hello") ;
      line.style.width = i + "vmax" ;
      line.style.transform = "translate(" + (50-i/2)  + "vmax,0)" ; 
      if(i==100)
       stop() ;   
    },2) ;
    var newdiv = document.createElement("div") ;
    var newdivtext = document.createElement("div") ;
    newdivtext.textContent = text ;
    //newdivtext.style.textShadow = "5px 5px 5px pink"
    newdiv.appendChild(newdivtext) ;
    target.appendChild(newdiv) ;
    newdiv.animate(
      [
        {
          "transform" : "translate(0,0)"
        },
        {
          "transform" : "translate(10px,0)"
        }
      ],
      {
        duration : 200,
        easing : "ease-in-out"
      }
    );
    newdiv.style["transform"] = "translate(10px,0px)" ;
    newdiv.style.overflow = "hidden" ;
    //newdiv.style.backgroundColor = "grey" ;
    newdiv.style["max-height"] = (430 - movey) + "px" ;
    newdivtext.style.marginTop = "-" + (movey+20) + "px" ;
    check = 1 ;
  }

}
target.onmouseleave = function(){
  clearInterval(ontick) ;
  console.log(target.children[1]) ;
  //target.removeChild(target.children[1]);
  target.firstElementChild.animate(
    [
      {
        "transform" : "translate(-20px,0)"
      },
      {
        "transform" : "translate(0px,0)"
      }
    ],
    {
      duration : 200,
      easing : "ease-in-out"
    }
  );
  target.firstElementChild.style["transform"] = "translate(0px,0)" ;
  target.lastElementChild.animate(
    [
      {
        "transform" : "translate(10px,0)"
      },
      {
        "transform" : "translate(0px,0)"
      }
    ],
    {
      duration : 200,
      easing : 'ease-in-out'
    }
  ) ;
  target.lastElementChild.style["transform"] = "translate(0,0)" ;
  var line = document.getElementById('line') ;
   
  line.animate(
    [
      {
        "width" : "" + linelength + "vmax",
        "transform" : "translate(" + (50-(linelength/2)) + "vmax,0)"

      },
      {
        "width" : 0,
        "transform" : "translate(50vmax,0)"
      }
    ],
    {
      duration : 200,
      easing : 'ease-in-out'
    }
  ); 
  line.style.width = 0 ;
  line.style.transform = "translate(50vmax,0)";
  console.log("linelength = " + linelength) ;
  
  setTimeout(function(){
    target.removeChild(target.lastElementChild) ;
    target.removeChild(target.lastElementChild) ;
    target.lastElementChild.style["max-height"] = "120px" ;  
  },200) ;
    check = 0 ;
}

}