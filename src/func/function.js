export const sumShopCart = (cart) => {
  const prodIdArray = Array.from(new Set(cart.map(val => val.prod_id)));
  const newListProd = prodIdArray.map((prod) => {
    let prodQuan = 0;
    let prodSum = 0
    let prodArray = [];
    cart.forEach((val) => {
      if(prod === val.prod_id) {
        prodArray = val
        prodQuan += 1
        prodSum += val.price
      }
    })
      return Object.assign({}, prodArray, { prod_quan: prodQuan, prod_sum: prodSum })
  })
  return newListProd
}

export const totalPayCart = (cart) => {
  if(Array.isArray(cart) && cart.length) {
    return cart.map(val => val.prod_sum).reduce((preVal, curVal) => {
      return preVal + curVal
    })
  }
}