$(document).ready(function () {
  window.dancers = [];
  var $dancerOne;
  var $dancerTwo;

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });


});


var $lineupButton = $('.lineUp');
$lineupButton.on('click', function () {
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].setPosition(i * 200 + 100, 200);
  }
});

var $findNeighbor = $('.findNeighbor');
$findNeighbor.on('click', function () {
  for (var i = 0; i < window.dancers.length - 1; i += 2) {
    var dancerHeight = $('body').height() * Math.random();
    var dancerWidth = $('body').width() * Math.random();
    $dancerOne = window.dancers[i];
    $dancerTwo = window.dancers[i + 1];
    $dancerOne.setPosition(dancerHeight, dancerWidth);
    $dancerTwo.setPosition(dancerHeight, dancerWidth + 150);
    //console.log('this is dancer one:', $dancerOne.$node);
    $dancerOne.$node[0].animate({ transform: 'scale(2)' }, { duration: 2000, easing: 'linear' });
    $dancerTwo.$node[0].animate({ transform: 'scale(2)' }, { duration: 2000 });
    $dancerOne.$node[0].animate({ transform: 'scale(1)' }, { duration: 2000, easing: 'linear' });
    $dancerTwo.$node[0].animate({ transform: 'scale(1)' }, { duration: 2000 });
  }
});
