function cariModus(arr) {
  // you can only write your code here!
  var output = []
  var counter = 1
  for (var x = 0 ; x < arr.length ; x++){
    var flag = false
    var temp = []
    for (var y = 0 ; y < output.length ; y++){
      if (arr[x] === output[y][0]){
      output[y][1] += 1
      //output[y].push(arr[x])
      flag = true
      }
    }
    if (flag === false){
      temp.push(arr[x],counter)
      output.push(temp)
      flag = false
    }
  }
var maks = 0
var nilaiMaks = 0
var modus = 0
for (var i = 0 ; i< output.length ; i++){
    //console.log(output [i][0])
    if (output[i][1]> maks){
      maks = output[i][1]
      nilaiMaks = output[i]
    }
  modus += output[i][1]
} 
  if ((modus % output.length) === 0){
    //console.log(modus +" ini modus")
    //console.log(output.length + " ini length")
    return output = -1
  }
 // console.log(nilaiMaks[0])
  return nilaiMaks[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1