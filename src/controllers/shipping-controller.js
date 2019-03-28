var productService = require('../services/product-service')

class ShippingController {

  constructor() {
    this.REGULAR_PRICE = 0.1
    this.OVERNIGHT_PRICE = 1
  }

  async getItemShipping(item) {
    var shippingAmount = await productService.getProductWeight(item.id)
    let price = this.REGULAR_PRICE
    if (item.type.toLowerCase() == 'overnight'){
      price = this.OVERNIGHT_PRICE
    }
    return shippingAmount * price
  }

}

module.exports = ShippingController;