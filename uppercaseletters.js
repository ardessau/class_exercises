var a = upperCaseFirstLetters("something to uppercase");  // "Something to Uppercase"
var b = upperCaseFirstLetters("output");                  // "output"
var c = upperCaseFirstLetters("nathan t white");          // "Nathan T White"
var d = upperCaseFirstLetters("       hello there                    ");    // "Hello There"

console.log([a,b,c,d].join("\n"));
// Anonymous function
//var upperCaseFirstletters = function (aStr){
//	var aStr.cleaned = trim();
//	var words = cleaned.split(" ");
//}

function upperCaseFirstLetters (aStr){
	var cleaned = aStr.trim();
	var words = cleaned.split(" ");
  var output = [];
  //return words.map(function(word){
  //    return upperCased = word charAt(0).toUpperCase () + word.substring(1);
  //}).join(" ")
  //var output = [];

  words.forEach(function(word){
    var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
    output.push(upperCased);
  })

   // for(var i=0; i < words.length; i++){
      // var word = words[i];
      // var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
      // output.push(upperCased);
  // }
  console.log(output.join(" "));
  return output.join(" ");
}
