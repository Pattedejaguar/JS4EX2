function findletters()
{

var string = document.getElementById('text').innerText;
  var result1 = string.charAt(4);
  var result2 = string.charAt(10);
  var result3 = string.charAt(35);
  var result4 = string.charAt(59);
alert(`Les 4ème 10ème 35ème et 59ème lettres sont respectivement : ${result1}, ${result2}, ${result3},\n et ${result4}`);
}
