
// Versión 0.0.1 ----------------------------------------

window.addEventListener('load', function () {
  var insertTweets= document.getElementById('insert-tweets');
  var btnSave = document.getElementById('save');
  var containerTweets = document.getElementById('container-tweets');
  var showSize = document.getElementById('string-size');

  btnSave.setAttribute('disabled',true);
  
  // agregar tweets
  function addTweets(text) {
    var newTweet = document.createElement('p');
    newTweet.setAttribute('class','tweet')
    newTweet.textContent = text;
    containerTweets.insertBefore(newTweet, containerTweets.childNodes[0]);
    insertTweets.value='';   
    
    var insertTime = document.createElement('p');
    insertTime.setAttribute('class','time');
    insertTime.textContent = horactual;
    containerTweets.insertBefore(insertTime,containerTweets.childNodes[1]);


  }

  btnSave.addEventListener('click', function() {
    addTweets(insertTweets.value);
    addTime();
  }); 

  // Versión 0.0.2 y 0.0.3 ----------------------------------------

  insertTweets.addEventListener('keyup', function (event){
    var maxSize = 140;
    var countSize = insertTweets.value;
    var count = (maxSize-(countSize.length));
    showSize.textContent = count;
    btnSave.removeAttribute('disabled');

    switch (true) {
      case ( count >= 20) && ( count < 141):
      showSize.style.color='black';
      break;
      case ( count >= 10) && ( count < 21):
      showSize.style.color='green';
      break;
      case ( count > 0) && ( count < 11):
      showSize.style.color='red';
      break;
      case ( count < 0):
      btnSave.setAttribute('disabled',true);
      break;
    } 

  });

  // Versión 0.0.5 (Extra)----------------------------------------

  insertTweets.addEventListener('keydown', newTextSize);
  function newTextSize (){
    setTimeout (function(){
      insertTweets.style.cssText = 'height:auto; padding:0';
      insertTweets.style.cssText = 'height:' + insertTweets.scrollHeight + 'px';
      },0);   
  }
  
  // Versión 0.0.6 (Extra)----------------------------------------

  
  var time = new Date();
  var horactual;
  if ((time.getHours() >= 0)&&(time.getHours() <= 12)){
    horactual = time.getHours()+" : "+time.getMinutes()+" AM";

  } else {
    tiempohora= time.getHours() -12;
    horactual = tiempohora+" : "+time.getMinutes()+" PM";
  }
//alert(horactual);
  
});




 



// btnSave.removeAttribute('disabled');
// btnSave.setAttribute('disabled',true);

// var deshabilitado = document.getElementById('save')
// var text = document.getElementById('insert-tweets')

// var stringSize = document.getElementsByClassName('insert-tweets').value.
// console.log(stringSize)

// deshabilitado.setAttribute('disabled',true)
// // deshabilitado.removeAttribute('disabled')

// insertTweets.addEventListener('keyup', function () {
//   stringSiz
//   console.log(text.value.length)
  
// }); 

   
