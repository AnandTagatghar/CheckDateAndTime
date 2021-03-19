var str2 = document.querySelector('#str2');
var buttonSubmit = document.querySelector('#button');


function clickHandler(){
  var two = str2.value;
  var obj = new Date();
  var time = obj.toLocaleString("en-US", {timeZone:two});
  if(two == null){
    document.getElementById('str3') = "give the currrect location.";
  }
  else{
    document.getElementById('str3').innerHTML = time;
    setTimeout(clickHandler,1000);
  }
}

buttonSubmit.addEventListener("click", clickHandler);
