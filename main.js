
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
  for(slide_var=1; slide_var<4; slide_var++){
    document.getElementById("slideshow_box").style.animation = "fade-out 1000ms"
    await sleep(1000);
    document.getElementById("slideshow_box").src = "landing"+slide_var.toString()+".jpg";
    document.getElementById("slideshow_box").style.animation = "fade-in 1000ms"
    await sleep(3000)
  }
  slideshow()
}
