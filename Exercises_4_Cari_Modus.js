function cariModus(arr) {
  // you can only write your code here!
  var output = []
  for (var x = 0 ; x < arr.length ; x++){
    var flag = false
    var temp = [] //===>reset temp []
    //
    for (var y = 0 ; y < output.length ; y++){
      if (arr[x] === output[y][0]){
      output[y][1] += 1 //output ===> [4,2] update
      //console.log(arr[x] + " === "+output[y][0] )
      flag = true
      }
    }
    if (flag === false){
      //console.log(arr[x] + " masuk ke temp ")
      temp.push(arr[x],1) //temp ==> [10,1],[4,1],[5,1],[2,1]
      output.push(temp) //output ===>[[10,1],[4,1],[5,1],[2,1]]
      flag = false
    }
  }
  var maks = 0
  var nilaiMaks = 0
  var modus = 0
  //console.log(output)
  //cari nilai yang paling sering keluar
  for (var i = 0 ; i< output.length ; i++){
      //console.log(output [i][0])
      if (output[i][1]> maks){
        maks = output[i][1]
        nilaiMaks = output[i]
      }
    modus += output[i][1]
    //console.log(output[i][1])
  } 
  //console.log(modus)
    if ((modus % output.length) === 0){
      //console.log(modus +" ini modus")
      //console.log(output.length + " ini length")
      return output = -1
    }
    //console.log(nilaiMaks[0])
  return nilaiMaks[0]
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
