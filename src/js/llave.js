var Kinetic = require('./kinetic-v4.3.2.min.js')

var Llave = function (x, y, imagen) {
  Kinetic.Image.call(this)
  this.setWidth(30)
  this.setX(x)
  this.setY(y)
  this.setImage(imagen)
  this.setHeight(40)
}

Llave.prototype = Object.create(Kinetic.Image.prototype)

module.exports = Llave
