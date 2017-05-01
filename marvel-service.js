function MarvelService(){
  var key = '?apikey=19d061ac2b7d2fa320fe8c8ec5107b92';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var marvelCharacters = [];
  var myCharacters = [];
  
  
  this.getMarvelCharacters = function(){
    //what should this function return
    return marvelCharacters;
  }
  
  this.getMyCharacters = function(){
    //what should this function return
    return myCharacters;
  }
  
  this.addToMyCharacters = function(id){
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    for(var i = 0; i < marvelCharacters.length; i++){
      var character = marvelCharacters[i];
      if(character.id == id){
        myCharacters.push(character);
        marvelCharacters.splice(character, 1);
      }
    }    
  }
  
  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
    for(var i = 0; i < myCharacters.length; i++){
      var character = myCharacters[i];
      if(character.id == id){
        myCharacters.splice(character, 1);
      }
    }
  }
  
  
  this.getCharacters = function(callWhenDone){
    var data = localStorage.getItem('MarvelData')
    if(data){
      marvelCharacters = JSON.parse(data);
      return callWhenDone(marvelCharacters)
    }
    $.get(baseUrl + 'characters'+key, function(response){
      localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
      marvelCharacters = response.data.results;
      callWhenDone(marvelCharacters)
    })
  }
  
  
}