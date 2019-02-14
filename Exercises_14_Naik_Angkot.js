/* 
Diberikan function naikAngkot(listPenumpang) 
yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. 
Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] 
output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
 */
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var newArray = []
    var naikDari = 0
    var tujuan = 0
    if (arrPenumpang.length === 0  || arrPenumpang.length === undefined){
        return newArray
    }
    for (var j = 0 ; j < arrPenumpang.length ; j++){
        var bayar = 0
        for (var i = 0 ; i < rute.length ; i++){
            if (rute[i].toUpperCase() === arrPenumpang[j][1].toUpperCase()){
                //console.log("posisi 1 di " + i)
                naikDari = i
            }else if (rute[i].toUpperCase() === arrPenumpang[j][2].toUpperCase()) {
                //console.log("posisi 2 di " + i)
                tujuan = i
            }
        }
        if (tujuan > naikDari){
            bayar = (tujuan - naikDari) * 2000
        }else{
            bayar = (naikDari - tujuan) * 2000
        }

        var object = {}
        object.penumpang = arrPenumpang[j][0];
        object.naikDari = arrPenumpang[j][1];
        object.tujuan = arrPenumpang[j][2];
        object.bayar = bayar  
        newArray.push(object)   
    }
    return newArray
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'a', 'b'], ['Icha', 'c', 'a']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
