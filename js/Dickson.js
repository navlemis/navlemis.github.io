//Var
//Golfer Card var
var abdul = false;
var mardan = false;
var quincy = false;
var displaysec4 = false;

//Quiz var
var QuestionArray = [];

//Function =================================

//Increasing numbers
function IncreasingNumbers(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}

//Function Section 4 golfers
function HideAllGolfers(){
  $("#Abdul").hide();
  $("#Mardan").hide();
  $("#Quincy").hide();
}

function HideSec4(golfer){
  $("#"+golfer).fadeOut(500, function(){
    $("#section4-1").slideUp(500);
  });
}

function DisplaySec4(golfer){
  $("#section4-1").slideDown(500, function(){
    $("#"+golfer).fadeIn(1000);
  });
}

function ShowGolfer(golfer){
  switch (golfer) {
    case "Abdul":
      if(abdul == true){
        HideSec4(golfer);
        abdul = false;
      }
      else{
        HideAllGolfers();
        abdul = false;
        mardan = false;
        quincy = false;
        DisplaySec4(golfer);
        abdul = displaysec4 = true;
      }
      break;
    case "Mardan":
      if(mardan == true){
        HideSec4(golfer);
        mardan = false;
      }
      else{
        HideAllGolfers();
        abdul = false;
        mardan = false;
        quincy = false;
        DisplaySec4(golfer);
        mardan = displaysec4 = true;
      }
      break;
    case "Quincy":
      if(quincy == true){
        HideSec4(golfer);
        quincy = false;
      }
      else{
        HideAllGolfers();
        abdul = false;
        mardan = false;
        quincy = false;
        DisplaySec4(golfer);
        quincy = displaysec4 = true;
      }
      break;

  }
}
//End of Function Section 4 golfers

//Quiz
function quizValidation(){
  var mark = 0;
  var counter = 0;
  var name = document.getElementById("user-name").value;

  //Vaidating Name
  if($.isNumeric(name) == false){
    //Question 1
    var question1 = [];
    $(':checkbox:checked').each(function(i){
      question1[i] = $(this).val();
      if(question1[i]=="clubs" || question1[i]=="iron" || question1[i]=="wedges"){
        mark += 1;
      }
      else if(question1[i]=="driver"){
        mark = 0;
      }
      if(mark == 3){
        QuestionArray.push("q1");
      }
    });//Dickson Kuan

    //Question2
    var radioValue = $("input[name='max-amount-clubs']:checked").val();
    if(radioValue == "14"){
        mark += 1;
        QuestionArray.push("q2");
    }

    //Question3
    var question3 =  $("#expensive-clubs").val();
    if(question3 == "181000"){
      mark += 1;
      QuestionArray.push("q3");
    }

    //Question 4
    var question4 = $("#question4").val()
    if(question4 == "Callaway"){
      mark += 1;
      QuestionArray.push("q4");
    }
    //Indicate if each question is correct or incorrect
    for(i=0;i<QuestionArray.length;i++){
      switch (QuestionArray[i]){
        case "q1":
          document.getElementById('q1-c').innerHTML='Correct';
          $("#q1-c").css('color','green');
          break;
        case "q2":
          document.getElementById('q2-c').innerHTML='Correct';
          $("#q2-c").css('color','green');
          break;
        case "q3":
          document.getElementById('q3-c').innerHTML='Correct';
          $("#q3-c").css('color','green');
          break;
        case "q4":
          document.getElementById('q4-c').innerHTML='Correct';
          $("#q4-c").css('color','green');
          break;
      }
    }

    //Animation
    $("#section5").hide();
    $("#section5-1").fadeIn("slow");
    document.getElementById("name").innerHTML = name;
    document.getElementById("marks").innerHTML = mark;
    window.location.hash = "#section5-1";
  }
  else{
    alert("Please insert a valid name");
    return false;
  }
}
//End of quiz

// End of Function =================================

//Preload function
$("#section4-1").hide();
$("#section5-1").hide();
HideAllGolfers();
IncreasingNumbers();

//Listening Function
$("#Dickson-Quiz").submit(function(){
  return false;
});
$( "#location" ).click(function() {
  window.location.hash = "#section2";
});
$( "#golfers" ).click(function() {
  window.location.hash = "#section4";
});
$( "#clubs" ).click(function() {
  window.location.hash = "#section5";
});
$(".introduction-img").mouseenter(function(){
  $(this).animate({height:"20em",width:"auto"});
});
$(".introduction-img").mouseleave(function(){
  $(this).animate({height:"350px",width:"auto"});
});
$("#map1").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.401157315376!2d103.87021589147011!3d1.293059059852383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18547a193767%3A0xc2448b1f729923e!2sMarina%20Bay%20Golf%20Course!5e0!3m2!1sen!2ssg!4v1580331951662!5m2!1sen!2ssg");
});
$("#map2").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6263277350054!2d103.80675261475406!3d1.400582398978534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3c3b81e04209%3A0x99a688cdca67ea90!2sMandai%20Executive%20Golf%20Course!5e0!3m2!1sen!2ssg!4v1580333326722!5m2!1sen!2ssg");
});
$("#map3").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.640901921308!2d103.98266031525579!3d1.3919933618251106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3c170e12eab7%3A0x8483fdafe307904a!2sChangi%20Golf%20Club!5e0!3m2!1sen!2ssg!4v1580333418230!5m2!1sen!2ssg");
});
$("#map4").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.718159537952!2d103.7935889152559!3d1.3455478119628332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da109539d0a2e1%3A0xe82ee35a5d4d42e!2sChampions%20Public%20Golf%20Course!5e0!3m2!1sen!2ssg!4v1580333459952!5m2!1sen!2ssg");
});
$("#map5").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597864970429!2d103.81336951525566!3d1.417206361748874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da13f412586213%3A0xdf37e5def2503c5a!2sSembawang%20Country%20Club!5e0!3m2!1sen!2ssg!4v1580333502427!5m2!1sen!2ssg");
});
$("#map6").click(function(){
  $("#iframe-map").attr('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.843098849306!2d103.8052567152561!3d1.2668393621881904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1be8414207d9%3A0x3c1468c27bb2eba5!2sKeppel%20Club!5e0!3m2!1sen!2ssg!4v1580333642665!5m2!1sen!2ssg");
});
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
});
