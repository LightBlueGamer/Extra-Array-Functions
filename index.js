module.exports = 'arrayutilities'

function tc(item) {
  if(!Array.isArray(item)) throw Error(`${item} is not of type "Array"`);
  if(this.length < 1) throw Error(`Arrays length should be atleast 1`)
};

Array.prototype.random = function() {
  tc(this);
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.middle = function() {
  tc(this);
  if(this.length <= 1) throw Error(`Array must be of a length more than 1`);
  else return this[Math.ceil(this.length / 2)];
};

Array.prototype.toObject = function() {
  tc(this);
  const obj = {};
  for(let i = 0; i<this.length; i++) {
    obj[i] = this[i];
  };
  return obj;
};

Array.prototype.toMap = function() {
  tc(this);
  return new Map(this.map((v, i) => [i, v]));
};