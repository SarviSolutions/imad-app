//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function ()
{
  //Create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadtstatechange = function (){
      if (request.readtState === XMLHttpRequest.DONE){
          //Take some action
          if (request.status === 200){
            var counter = request.responseById('count');
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
          }
      }
      //Not done yet
  };
  //Make the request
  request.open('GET', 'http://sarvisolutions41.imad.hasura-app.io/counter', true);
  request.send(null);
};