/* Problem
Diberikan sebuah function changeMe(arr) 
yang menerima satu parameter berupa array multidimensi 
dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) 
First Name, Last Name, Gender dan Birth Year . 
Fungsi ini akan menampilkan object literal yang memiliki 
property firstName, lastName, gender dan age. 
Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
Jika tahun lahir tidak diisi atau 
tahun lahir lebih besar dibandingkan tahun sekarang 
maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah 
[['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] 
maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
Code */
function changeMe(arr) {
  // you can only write your code here!
  //console.log(arr[1][0])
    var result = []
    //for (var h = 0 ; h < arr.length ; h++){
        //for (var i = 0 ; i < arr[0].length ; i++){
    
            var object = {
                fisrtName : arr[0][0],
                lastName : arr[0][1],
                gender : arr[0][2],
                age : arr[0][3]
    
          //  }
    
        }
    //}
    console.log(object)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""