// module.exports = exports = {};

// module.exports.brand = "Ford";
// exports.size = 1000;
// module.exports 裡面有沒有 size?

let brand = "Ford";
let price = 100;
function getBrand() {
  return brand;
}

module.exports = { getBrand, price };
// exports = { getBrand, price };

// return module.exports;
