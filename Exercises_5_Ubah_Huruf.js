/* Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Functiona akan me-return sebuah kata baru dimana setiap huruf akan 
digantikan dengan huruf alfabet setelahnya. 
Contoh, huruf a akan menjadi b, c akan menjadi d, 
k menjadi l, dan z menjadi a. */

function ubahHuruf(kata) {
  // you can only write your code here!
  var alfabet = "abcdefghijklmnopqrstuvwxyz"
  kataBaru = ""
  //console.log(alfabet[alfabet.length-1])
  for (var i = 0 ; i < kata.length ; i++){
    for (var j = 0 ; j < alfabet.length ; j++){
      if (alfabet[j] === kata[i]){
        if(kata[i] === alfabet[alfabet.length-1]){
          //console.log(kataBaru)
          kataBaru += alfabet[j-(alfabet.length-1)]
        }else{
        kataBaru += alfabet[j+1]
        }//console.log(alfabet[j+1] + " " + alfabet[j])
      }
    }
  }
  return kataBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu