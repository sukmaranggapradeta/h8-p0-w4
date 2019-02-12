
function fpb(angka1, angka2) {
  // you can only write your code here!
  var hasil = 0;
  var fpbAngka1 = [];
  var fpbAngka2 = [];
//cari fpb angka1
  for (var i = 0 ; i<= angka1 ; i++){
    if (angka1 % i === 0){
      //fpbAngka1 += i;
      fpbAngka1.push(i)
    }
  }
//cari fbp angka2  
  for (var j = 0 ; j <= angka2 ; j++){
    if(angka2 % j === 0){
      fpbAngka2.push(j)
    }
  }
//show
  //console.log(fpbAngka1)
  //console.log(fpbAngka2)

//cari fpb yang sama
  for (var x = 0 ; x < fpbAngka1.length ; x++){
    for (var y = 0 ; y < fpbAngka2.length ; y++){
      if (fpbAngka1[x] === fpbAngka2[y]){
        //console.log("sama" + fpbAngka2[y])
        hasil = fpbAngka2[y]
      }
    }
  }
  return hasil
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1