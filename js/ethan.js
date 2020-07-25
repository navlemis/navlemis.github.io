$(document).ready(function(){
  $("#mySubmit").attr('disabled', 'disabled');
});
function readFormInputs(){
  document.getElementById('formcontent').innerHTML = "Answer recorded!";
  var question1 = $("input[name=ownshoes]:checked").val();
  var question2 = $("input[name=oftenrun]:checked").val();
  var question3 = document.getElementById('rundist').val();
  var question4 = $("input[name=recommend]:checked").val();
  //yet to learn ajax to post and save
}

function feedbackDone(){
  alert("Feedback Submitted! Thank You!");
}

var question1 = false;
var question2 = false;
var question3 = false;
var question4 = false;

$("#question1").click(function(){
  question1 = true;
});
$("#question2").click(function(){
  question2 = true;
});
$("#question3").click(function(){
  question3 = true;
});
$("#question4").click(function(){
  question4 = true;
});

function CheckFormFilled(){
  if(question1 == true && question2 == true && question3 == true && question4 == true){
    $('#exampleModalCenter').modal('hide');
    alert("Submitted");
    return false;
  }
  else{
    alert("Please fill up the form");
    return false;
  }
};
