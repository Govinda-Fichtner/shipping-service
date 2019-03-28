var axios = require('axios')

let URL = process.env.MICROS_PRODUCTS_URL || 'mycluster.icp:8899/products';

module.exports = {
  getProductWeight: async function (productId) {
    return axios
      .get(`https://${URL}/${productId}`)
      .then(response => {
        if (response.data && !Number.isNaN(parseFloat(response.data.weightLB))) {
          return response.data.weightLB
        } else {
          return Promise.reject('Invalid response object')
        }
      })
      .catch( (err) => {
        throw new Error(err)
      })
  }
}



