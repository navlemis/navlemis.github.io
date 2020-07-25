function CheckQuiz(){
  var name = document.getElementById("inputname").value;
  var qns1 = $("input[name='athlete']:checked").val();
  var qns2 = $("input[name='athletes']:checked").val();
  var qns3 = $("#qns3").val();
  var qns4 = $("#qns4").val();
  var marks = 0;
  if(qns1 == "joseph"){
    marks += 1;
  }
  if(qns2 == "fandi"){
    marks += 1;
  }
  if(qns3 == "Nurul Suhaila"){
    marks += 1;
  }
  if(qns4 == "Safuwan Baharudin"){
    marks += 1;
  }
  alert("Hey " + name + " you have scored " +marks+ "/4");
  return True;
}
