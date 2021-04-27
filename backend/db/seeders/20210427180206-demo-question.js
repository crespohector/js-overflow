'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        title: 'Uncaught TypeError: Cannot read property "value" of undefined',
        comment: `I have some JavaScript code that gives this error
        Uncaught TypeError: Cannot read property 'value' of undefined
        Code
        var i1 = document.getElementById('i1');
        var i2 = document.getElementById('i2');
        var __i = {'user' : document.getElementsByName("username")[0], 'pass' : document.getElementsByName("password")[0] };
        if(  __i.user.value.length >= 1 ) { i1.value = ''; } else { i1.value = 'Acc'; }
        if(  __i.pass.value.length >= 1 ) { i2.value = ''; } else { i2.value = 'Pwd'; }
        What does this error mean?`,
        user_id: 1,
      },
      {
        title: 'Cannot login demo user from a modal.',
        comment: `I'm having a problem with logging the demo user in from a modal
        I did a onClick for demo user button, seperate from the login form submit,
        the code I put for handleDemo was to just set the credential and password to
        a demo user's, but I can only log in on the second click of the demo users button.`,
        user_id: 1,
      },
      {
        title: 'JavaScript - Uncaught RangeError: Maximum call stack size exceeded',
        comment: `I got an error while use this code
        var book = {
                year: 2004,
                edition: 1
            };
            Object.defineProperty(book, "year", {
                get: function(){
                    return this.year;
                },
                set: function(newValue){

                    if (newValue > 2004) {
                        this.year = newValue;
                        this.edition += newValue - 2004;
                    }
                }
            });
            book.year = 2005;
            alert(book.edition);
        The warning told me that the error happened at Object.set [as year]this.year = newValue; I am confused that why setting the year will cause this error?`,
        user_id: 2,
      },
      {
        title: 'Uncaught TypeError: Cannot read property "length" of undefined',
        comment: `How do I avoid the following error when trying to take data from an AJAX call and plug it into another function when I click the submit button?
        The console.log call in the ajax function shows that the data is grabbed and I'd hoped then stored in json_data.
        The aim was then to use this data to alter a string submitted through an HTML form.
        The error is then returned at the line in the 'click' function:
        console.log(json_data.length)`,
        user_id: 3,
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
    return queryInterface.bulkDelete('Questions', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
