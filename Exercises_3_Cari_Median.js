
//STORE nilaiTengah with zero
//CALCULATE nilaiTengah = panjang arr dibagi 2 yang sudah dibulatkan 
//  IF panjang arr mod 2 bernilai genap, maka nilaiMedia = posisi nilaiTengah ditambah dengan posisi nilaiTengah selanjutnya, lalu di bagi 2
//  IF panjang arr mod 2 bernilai ganjil, maka nilaiMedian = posisi nilaiTengah
//SHOW nilaiMedian

function cariMedian(arr) {
    // you can only write your code here!
    var hasil = 0;
    var nilaiMedian;
    var panjangArray = arr.length;
    var nilaitengah = Math.round(panjangArray/2)-1
    //console.log(panjangArray%2)
    //console.log(panjangArray + " panjangArray")
    //console.log(nilaitengah + " nilaitengah")
    if (panjangArray % 2 === 0){
      nilaiMedian = ((arr[nilaitengah]) + (arr[nilaitengah+1]))/2;
      //console.log((arr[nilaitengah]) + " + " + (arr[nilaitengah+1]) + " / 2 " )
      //console.log(arr[panjangArray/2] +" didalam if "+ arr[panjangArray/2-1])
    }
    if (panjangArray % 2 === 1){ 
      //console.log (panjangArray + " % 2")
      nilaiMedian = arr[nilaitengah];
    }
   return nilaiMedian
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
