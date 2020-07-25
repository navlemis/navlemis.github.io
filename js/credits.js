//Var
var loaded = false;

//Preload function
$("#section1").hide();
$(".info").hide();

//Listening Fucntion
$("#azzi").click(function(){
  LoadSector();
  $("#name").html('Azzi');
  $("#elvan-accordion, #dickson-accordion,#ethan-accordion,#jc-accordion").hide(function(){
    $("#azzi-accordion").fadeIn(1000);
  });
});
$("#elvan").click(function(){
  LoadSector();
  $("#name").html('Elvan');
  $("#azzi-accordion, #dickson-accordion,#ethan-accordion,#jc-accordion").hide(function(){
    $("#elvan-accordion").fadeIn(1000);
  });
});
$("#dickson").click(function(){
  LoadSector();
  $("#name").html('Dickson');
  $("#elvan-accordion, #azzi-accordion,#ethan-accordion,#jc-accordion").hide(function(){
    $("#dickson-accordion").fadeIn(1000);
  });
});
$("#ethan").click(function(){
  LoadSector();
  $("#name").html('Ethan');
  $("#elvan-accordion, #azzi-accordion,#dickson-accordion,#jc-accordion").hide(function(){
    $("#ethan-accordion").fadeIn(1000);
  });
});
$("#jc").click(function(){
  LoadSector();
  $("#name").html('JiaCheng');
  $("#elvan-accordion, #azzi-accordion,#dickson-accordion,#ethan-accordion").hide(function(){
    $("#jc-accordion").fadeIn(1000);
  });
});
$("#close").click(function(){
  CloseSector();
});
//Function
function LoadSector(){
  if(loaded == false){
    $("#section1").slideToggle(500);
    window.location.hash = "#section1";
    loaded = true;
  }
}
function CloseSector(){
  $("#section1").slideToggle(500);
  loaded = false;
}
