var MakeMovingDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = MakeDancer.prototype.step;
  this.$node.append('<img id="movingDancer" src="/src/images/crazyeyes.png" height="100px" width="110px"/>');

};

MakeMovingDancer.prototype = Object.create(MakeDancer.prototype);
MakeMovingDancer.prototype.constructor = MakeBlinkyDancer;

MakeMovingDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.on('mouseenter', function () {
    bounce($(this), 500, '30px', 100);
  });
  var bounce = function (dancer, times, dist, speed) {
    for (var i = 0; i < times; i++) {
      dancer.animate({ marginLeft: '-=' + dist }, speed)
        .animate({ marginTop: '+=' + dist }, speed);
    }
  };


};
