// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.
 function checkTitle(str){
    return str.split(" ").every(word => word[0] === word[0].toUpperCase());
 }
 console.log(checkTitle("A Mind Boggling Achievement"))
 console.log(checkTitle("Water is transparent"))