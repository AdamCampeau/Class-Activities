// TODO: Declare variable 'shout' with the value 'Shout'
var shout='Shout';
// so it's available to `justShout` 
function justShout() {
  console.log(shout + ', ' + shout);
  return;
}
// and `shoutItAllOut` functions
function shoutItAllOut() {
  console.log(shout + ' it all out! ');
  return;
}
// hoisting
justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function

function sayLions() {
  // local variable 'animal' with the value 'Lions'
  var animal = 'Lions';
  console.log(animal);
  return;
}

function sayTigers() {
  // local variable 'animal' with the value 'Tigers'
  var animal = 'Tigers';
  console.log('and ' + animal + ' and ');
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
var bears = 'Bears';

function sayBears() {
  // var bears = 'Pandas';
  //removed above local scope
  console.log(bears + '! OH MY!');
  return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

//var sing = 'Sing';
//moved to local scope below

function singAlong() {
  //local scope
  var sing='Its a long way to the top,';
  //console.log(sing + ',');
  var singASong = function() {
    console.log(sing + ' if you want to rock and roll!');
  };
  singASong();
}

singAlong();
