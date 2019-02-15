/*
===========
MineSweeper
===========

[INSTRUCTIONS]
Seorang tentara sedang berada di ladang ranjau kita harus membantu tentara untuk menemukan jumlah ranjau yang ada disekeliling dekat tentara.
terdapat posisi tentara didalam map adalah huruf O dan posisi bom adalah X
tugas kita harus mencari tahu bom yang ada di delapan penjuru mata angin dari posisi tentara. ingat yang dihitung hanya bom yang ada di delapan penjuru mata angin dekat tentara


[EXAMPLE]
INPUT: [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 4
INPUT: [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 2
*/

  /*
  

    2,4   3,4   4,4
    2,5   3,5   4,5
    2,6   3,6   4,6
          x
    2     3      4


          y
    4     5      6
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'X'],
  [' ', ' ', ' ', 'X', ' ', 'O'],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']

  looping
  
  
    */

function MineSweeper(array) {
  // your code here
  var coorO = 0
  var countX = 0 
  //cari coordinat titik O
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(array[i][j] === "O") {
        coorO = [i,j]
      }
    }
  }

  var x = coorO[0]-1
  var y = coorO[1]-1
  //console.log(coorO + " ini coordinat O")

    var newArray = []
    for (var i = 0 ; i < 3 ; i++){
        for (var j = 0 ; j < 3 ; j++){
        //console.log(x+i + " + " + (y+j))
        newArray.push([(x+i),(y+j)])  
        }
    }
    var posisiX = 0
    var posisiY = 0
    var counterX = 0
    //console.log(array.length)
    //console.log(array[0].length)
        for (var x = 0 ; x < newArray.length ; x++){
        posisiX = newArray[x][0]
        posisiY = newArray[x][1]
    //console.log(newArray[x][0] + " X ==== Y " + newArray[x][1])
        
    //console.log(newArray[x][0] + " X , Y " + newArray[x][1])
        if (posisiX >= 0 && posisiY <= (array[0].length-1) && (posisiX <= (array.length-1)) && (posisiY >= 0)){
            if (array[posisiX][posisiY] === "X"){
                //console.log(newArray[x][0] + " X ==== Y " + newArray[x][1])
                counterX++
            }
        }
    }
    return counterX
}

var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4 
 var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2
var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  ['X', 'X', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board3)) // 3  