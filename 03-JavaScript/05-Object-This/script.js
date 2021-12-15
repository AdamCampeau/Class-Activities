// TODO: What is `this` referring to here?
console.log(this);
// 'this' is referring to the window

// TODO: What is `this` referring to here?
function helloThis() {
  //'this' is a window object {}
  console.log('Inside this function, this is ' + this);
}


// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10,
  ageTenYears: function() {
    // 'this' is referring to 'child' object
    //child.age + 10
    // 20 will be logged
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
//investor object
var investor = {
  // name property
  name: 'Cash Saver',
  //investment property
  investment: {
    //initialInvestment property
    initialInvestment: 5000,
    //investmentGrowth function
    investmentGrowth: function() {
      //'this' is referring to the investment object
      // 5000 * 1.15, will log 5750
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console

//helloThis function called 
helloThis();

//ageTenYears function called
child.age.ageTenYears();

//investGrowth function called
investor.investment.investmentGrowth();

