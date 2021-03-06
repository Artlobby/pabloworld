var Kinetic = require('./kinetic-v4.3.2.min.js')

var Moneda = function (x, y, imagen) {
  Kinetic.Image.call(this)
  this.setWidth(30)
  this.setHeight(30)
  this.setX(x)
  this.setY(y)
  this.setImage(imagen)
}

Moneda.prototype = Object.create(Kinetic.Image.prototype)

module.exports = Moneda
