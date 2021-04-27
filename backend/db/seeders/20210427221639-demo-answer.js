'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        questions_id: 1,
        user_id: 2,
        comment: `Seems like one of your values, with a property key of 'value' is undefined. Test that i1, i2and __i are defined before executing the if statements:
        var i1 = document.getElementById('i1');
        var i2 = document.getElementById('i2');
        var __i = {'user' : document.getElementsByName("username")[0], 'pass' : document.getElementsByName("password")[0] };
        if(i1 && i2 && __i.user && __i.pass)
        {
            if(  __i.user.value.length >= 1 ) { i1.value = ''; } else { i1.value = 'Acc'; }
            if(  __i.pass.value.length >= 1 ) { i2.value = ''; } else { i2.value = 'Pwd'; }
        }`,
      },
      {
        comment: `Either document.getElementById('i1'), document.getElementById('i2'), or document.getElementsByName("username")[0] is returning no element. Check, that all elements exist.`,
        questions_id: 1,
        user_id: 3,
      },
      {
        comment: `You won't be able to set state and use the new values in the same render, so you should probably just send the demo user credential and password straight into the login function on the onClick`,
        questions_id: 2,
        user_id: 1,
      },
      {
        comment: `You're defining a getter and a setter for year. The setter, when assigning to this.year = newValue; invokes the setter again, which leads to an infinite loop. You would need to define a custom property _year for example, and keep your year state there:
        var book = {
            edition: 1
        };
        Object.defineProperty(book, "_year", {
            value: 2004,
            enumerable: false, // Hide it when looping the object
            writeable: true,
            configurable: true
        });
        Object.defineProperty(book, "year", {
            get: function(){
                return this.year;
            },
            set: function(newValue){

                if (newValue > 2004) {
                    this._year = newValue;
                    this.edition += newValue - 2004;
                }
            },
            enumerable: true, // Show this when looping
            configurable: true
        });
        book.year = 2005;
        alert(book.edition);
        console.log(Object.keys(book)); // ['edition', 'year']`,
        questions_id: 3,
        user_id: 1,
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers',null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
