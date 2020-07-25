//Preload function
$(".event-info").hide();

//Listening function

//Upcoming Events
$("#suhaila-btn").click(function(){
  $("#suhaila-pic").slideToggle();
  $("#suhaila-info").fadeToggle();
});

$("#irfan-btn").click(function(){
  $("#irfan-pic").slideToggle();
  $("#irfan-info").fadeToggle();
});

$("#joseph-btn").click(function(){
  $("#joseph-pic").slideToggle();
  $("#joseph-info").fadeToggle();
});

//iframe
$("running-web").click(function(){
  $("#info-footer").attr('scrolling', 'yes');
});
$("#running-web").click(function(){
  $("#min-web").attr('src', 'ethan.html');
  $("#info-footer").attr('href', 'ethan.html');
});
$("#golf-web").click(function(){
  $("#min-web").attr('src', 'Dickson.html');
  $("#info-footer").attr('href', 'Dickson.html');
});
$("#swimming-web").click(function(){
  $("#min-web").attr('src', 'jiacheng.html');
  $("#info-footer").attr('href', 'jiacheng.html');
});
$("#basketball-web").click(function(){
  $("#min-web").attr('src', 'elvanindex.html');
  $("#info-footer").attr('href', 'elvanindex.html');
});
