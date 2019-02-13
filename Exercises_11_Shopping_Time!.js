function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barangSale = [["Sepatu Stacattu",1500000],["Baju Zoro",500000],["Baju H&N",250000],
["Sweater Uniklooh",175000],["Casing Handphone", 50000]]

    //console.log(barangSale.length + " sale" + barangSale[0])  
    var sisaUang = money
    var troli = []
    for (var x = 0 ; x < barangSale.length ; x++){
        if (sisaUang >= barangSale[x][1]){
            //console.log(typeof(money));
            //console.log(typeof(barangSale[0][1]))
            sisaUang = sisaUang - barangSale[x][1]
            troli.push(barangSale[x][0])
            //console.log(sisaUang );
        }
    }
    //console.log(troli)
    
    var struk = {};
        if (memberId === "" || memberId === undefined){
            return ("Mohon maaf, toko X hanya berlaku untuk member saja")
        }else{
            struk.memberId = memberId;
        }
        if (money < 50000){
            return ("Mohon maaf, uang tidak cukup")
        }else{
            struk.money = money;
        }
        struk.listPurchased = troli
        struk.changeMoney = sisaUang

    return struk
  }


  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja