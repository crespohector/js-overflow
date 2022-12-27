'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Answers';
    return queryInterface.bulkInsert(options, [
      {
        questions_id: 1,
        user_id: 2,
        comment: `Seems like one of your values, with a property key of 'value' is undefined. Test that i1, i2 and __i are defined before executing the if statements:
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
        questions_id: 1,
        user_id: 3,
        comment: `First, you should make sure that document.getElementsByName("username")[0] actually returns an object and not "undefined". You can simply check like
        if (typeof document.getElementsByName("username")[0] != 'undefined')
        Similarly for the other element password.`,
      },
      {
        questions_id: 8,
        user_id: 1,
        comment: `You could just use setInterval() to update the state with fetched data every second or however long is required. Here is an example:
        const [fetchedData, setFetchedData] = useState(/* data type */);
        setInterval(() => setFetchedData(/* call to the method */), 1000);
        This way, the component will fetch data every second and re-render the component.
        Keep in mind though, this should ONLY be used if you know you are going to get an update every so often.
        If you are uselessly re-rendering and re-fetching data, that will be a constant hinderance towards performance.`,
      },
      {
        questions_id: 7,
        user_id: 1,
        comment: `A good trick when missing a brace in eclipse is to go to the final brace in the source module and double-click it.
        That will highlight all the way back to what it THINKS is the matching open brace.
        Where it highlights back to is invariably the START of where the problem is,
        so skip that open brace and go to the next one and start double-clicking open braces and you will usually find where the brace is missing pretty quickly.
        I learned that the hard way with a source code file of 20,000+ lines of code and getting hundreds of errors without the slightest indication as where the real problem was as the errors started appearing thousands of lines earlier in the code.`,
      },
      {
        questions_id: 3,
        user_id: 1,
        comment: `You have to set d[a] to either an associative array, or an object:
        d[a] = [];
        d[a] = {};
        Without setting, this is what's happening:
        d[a] == undefined, so you're doing undefined['greeting']=b; and by definition, undefined has no properties. Thus, the error you received.`,
      },
      {
        questions_id: 6,
        user_id: 2,
        comment: `You have to use == to compare (or even ===, if you want to compare types). A single = is for assignment.
        if (one == 'rock' && two == 'rock') {
            console.log('Tie! Try again!');
        }`,
      },
      {
        questions_id: 6,
        user_id: 3,
        comment: `Common reasons for the error:
        use of assignment (=) instead of equality (==/===)
        assigning to result of function foo() = 42 instead of passing arguments (foo(42))
        simply missing member names (i.e. assuming some default selection) : getFoo() = 42 instead of getFoo().theAnswer = 42 or array indexing getArray() = 42 instead of getArray()[0]= 42
        In this particular case you want to use == (or better === - What exactly is Type Coercion in Javascript?)
        to check for equality (like if(one === "rock" && two === "rock"), but it the actual reason you are getting the error is trickier.`,
      },
      {
        questions_id: 3,
        user_id: 4,
        comment: `you never set d[a] to any value.
        Because of this, d[a] evaluates to undefined, and you can't set properties on undefined.
        If you add d[a] = {} right after d = {} things should work as expected.
        Alternatively, you could use an object initializer:
        d[a] = {
            greetings: b,
            data: c
        };`,
      },
      {
        comment: `Either document.getElementById('i1'), document.getElementById('i2'), or document.getElementsByName("username")[0] is returning no element. Check, that all elements exist.`,
        questions_id: 1,
        user_id: 4,
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
        questions_id: 5,
        user_id: 1,
      },
      {
        questions_id: 4,
        user_id: 3,
        comment: `The problem is you'll has an apostrophe and ends the code block. Make sure to escape it.`,
      },
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
    options.tableName = 'Answers';
    return queryInterface.bulkDelete(options, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
