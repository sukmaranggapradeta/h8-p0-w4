function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var arrayPembeli = []
    if (shoppers.length === 0 || shoppers === undefined){
        return arrayPembeli
    }
    for (var h = 0 ; h < listBarang.length ; h++){
        var namaPembeli = []
        var count = 0
        var sisaStok = listBarang[h][2]
        for (var i = 0 ; i < shoppers.length ; i++){
            //console.log((listBarang[h][0] + " === "+ shoppers[i].product + " && " + shoppers[i].amount +  " < " +listBarang[h][2]))
            if ( listBarang[h][0] !== shoppers[i].product){
             //kalo nama product tidak ada di listBarang do nothing   
            }else
            //jika nama product === shopper.product dan jumlah amount < stok barang maka namapembeli.push shopper nama   
            if ((listBarang[h][0] === shoppers[i].product) && (shoppers[i].amount <= sisaStok)){
                namaPembeli.push(shoppers[i].name)
                count += shoppers[i].amount
            }
                sisaStok = listBarang[h][2]-count
                totalPendapatan = count*listBarang[h][1]
        }
  
        var pembeli = {}
        pembeli.product = listBarang[h][0];
        pembeli.shoppers = namaPembeli;
        pembeli.leftOver = sisaStok;
        pembeli.totalProfit = totalPendapatan;
        arrayPembeli.push(pembeli)
    }
    return arrayPembeli
}

  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
   console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[] */