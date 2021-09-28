var MakeBouncyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.prototype.step;
  this.$node.addClass('bouncyDancer');
  this.$node.append('<img id="bouncyDancer" src="/src/images/highFive.png" height="110px" width="120px"/>');
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBouncyDancer.prototype.step = function () {
  this.oldStep();

  var bounce = function (dancer, times, dist, speed) {
    for (var i = 0; i < times; i++) {
      dancer.animate({ marginTop: '-=' + dist }, speed)
        .animate({ marginTop: '+=' + dist }, speed);
    }
  };
  bounce($(this.$node), 10, '30px', 300);
};



