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
  //console.log(arr)
  if (arr.length === 0){
    console.log(" Empty Value ")   
  }
   for (var i = 0 ; i < arr.length ; i++){
     var person =  {}
        person.firstName = arr[i][0];
        person.lastName = arr[i][1];
        person.gender = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] >= 2019){
            person.age = "Invalid Birth Year";
        }else{
            var ages = 2019 - arr[i][3]
            person.age = ages
        }       
       console.log((i+1) + ". " + person.firstName + " " + person.lastName + " : ")
       //var judulPerson = ((i+1) + ". " + person.firstName + " " + person.lastName + " : ")
       console.log(person)
       //var output = judulPerson , person
    }
//return output
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
//changeMe([['istsds', 'ansds', 'FeMale', 2000], ['orsdst', 'nedsy', 'FeMale' , 2019]]); 

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
changeMe([]); // ""