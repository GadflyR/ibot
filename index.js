function showabout(){
  $("#about_container").css("display","inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function(){
    $("#about_container").removeClass("animated slideInLeft");
  },800);
}
function closeabout(){
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function(){
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display","none");
  },800);
}

function showwork(){
  $("#work_container").css("display","inherit");
  $("#work_container").addClass("animated slideInRight");
  setTimeout(function(){
    $("#work_container").removeClass("animated slideInRight");
  },800);
}
function closework(){
  $("#work_container").addClass("animated slideOutRight");
  setTimeout(function(){
    $("#work_container").removeClass("animated slideOutRight");
    $("#work_container").css("display","none");
  },800);
}

/* Loading fade-out */
setTimeout(function(){
  $("#loading").addClass("animated fadeOut");
  setTimeout(function(){
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display","none");
    $("#box").css("display","none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    $("#work").removeClass("animated fadeIn");
    $("#product").removeClass("animated fadeIn");
  },1000);
},1500);

document.addEventListener('DOMContentLoaded', () => {
  const imageGrid = document.querySelector('.image-grid');
  const imageWrappers = document.querySelectorAll('.image-wrapper');

  imageWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      // Add hover effect to the current frame
      wrapper.classList.add('hovered');
      // Shrink other frames
      imageWrappers.forEach(otherWrapper => {
        if (otherWrapper !== wrapper) {
          otherWrapper.classList.add('shrunk');
        }
      });
    });

    wrapper.addEventListener('mouseleave', () => {
      // Remove hover effect from all frames
      wrapper.classList.remove('hovered');
      imageWrappers.forEach(otherWrapper => {
        otherWrapper.classList.remove('shrunk');
      });
    });
  });
});
