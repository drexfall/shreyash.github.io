$(window).scroll(function(){
  if ($(window).scrollTop()>20){
    document.getElementsByClassName("scrolltop")[0].style.display = "block";
    $(".scrolltop").css("opacity", $(window).scrollTop()/1500);
  }else{
    document.getElementsByClassName("scrolltop")[0].style.display = "none"; 
  }
    
    $(".landing").css("opacity", 1-$(window).scrollTop()/500);
    document.getElementsByClassName("landing")[0].style.filter = "blur("+($(window).scrollTop()/50).toString()+"px)";
    }
  );
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function slideshow(){
  for(i=1; i<4; i++){

    document.getElementsByClassName("landing")[0].style.animation = "1 2s fade-out";
    await sleep(2000);
    for(j=1; j<4; j++){
      if(i==j){
      document.getElementById("slideshow_box"+j.toString()).style.display = "block";
    }else{
      document.getElementById("slideshow_box"+j.toString()).style.display = "none";
    };
  }
  document.getElementsByClassName("landing")[0].style.animation = "1 2s fade-in";
  await sleep(7000);
  }
  slideshow()
}