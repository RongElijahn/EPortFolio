function onPreview(){
  window.open('CV.pdf');
}

function submitF(){
  var fName=document.getElementById("fname");
  var lName=document.getElementById("lname");
  var text=document.getElementById("subject");
  var reply= confirm("Hi "+fName.value+" "+lName.value+" , Your Descriotion is '" + text.value +"'. But for now this function is useless!");

}

function submitS(){
   var reply= confirm("Sorry, currently I didn't active any of social media");
}