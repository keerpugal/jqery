
$(document).ready(function(){
   $("#demo").click(function(){
    $("ul li:first-child").hide();
    });
  $("#demo").click(function(){
    $('tr:even').css("background-color","blue");
   });
   
    $("input").focus(function(){
      $(this).css("background-color","green");
    });
    $("input").blur(function(){
      $(this).css("background-color","pink");
    });
    $("input").mouseenter(function(){
      $(this).css("background-color","red");

    });
  
});
$(document).ready(function(){
  $("#hide").click(function(){
  $("p").hide(500);
 
  });
  $("#show").click(function(){
    $("p").show(300);
  });
  $("#toggle").click(function(){
    $("h2").toggle();
  })
  $("p").on({
    mouseenter: function(){
        $(this).css("background-color","yellow");
    },
    click: function(){
        $(this).css("background-color", "lightblue");
      }
}); 
});

$(document).ready(function(){
  $(".boxes").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeOut("slow");
    $("#div3").fadeToggle(1000);
  });
});

// slide
$(document).ready(function(){
 $("#clip").click(function(){
  $("#flip").slideUp("slow");
 });

});
// ANIMATE
$(document).ready(function(){
  $("#blink").click(function(){
    $("#divider").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px',
      
      
    });
  });
});
// stop
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
// get
$(document).ready(function(){
  $("#demoos").click(function(){
    alert("values:"+$("#gett").val());
  })
})