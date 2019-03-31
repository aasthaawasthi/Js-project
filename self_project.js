var picture = document.getElementById("p1");
var pic1 = document.getElementById("center");
var pic2 = document.getElementById("p2");
var vdo = document.getElementById("vid");
pic2.style.bottom = 0;
picture.style.top = 0;
pic2.style.position = "absolute"; 
picture.style.position = "absolute"; 
var sum = 0;
var count = 0;
var op = 1;

//bring T image down when down key is pressed
document.addEventListener('keydown', function(event){
//stop T at center
if(event.code === 'ArrowUp' && picture.style.top !== "320px"){
   count++;
   document.getElementById("p1").style.top = count + "px";
  }
});


//fadeout the center image
document.addEventListener('keydown', function(event){
  if(event.code === 'ArrowUp' || event.code === 'ArrowDown'){
    if( op > 0){
      op.toString()
      pic1.style.opacity = op;
      op-=0.01;
    }
  }
  //collide the image and play the v
  
  if(picture.style.top === "320px"  && pic2.style.bottom ==="330px"){
    vdo.style.display ="block"

    console.log(vdo.style.display)
    console.log("hi chhoti");
  }
});

//bring W image up when the up key is pressed
document.addEventListener('keydown', function(event){
          //stop W at center
          if(event.code === 'ArrowDown' && pic2.style.bottom !== "330px"){
  
            sum++;
            document.getElementById("p2").style.bottom = sum + "px";
         }     
});