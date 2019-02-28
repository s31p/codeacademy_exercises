window.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }