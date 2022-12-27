'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Questions';
    return queryInterface.bulkInsert(options, [
      //1
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
      //2
      {
        title: 'Cannot login demo user from a modal',
        comment: `I'm having a problem with logging the demo user in from a modal
        I did a onClick for demo user button, seperate from the login form submit,
        the code I put for handleDemo was to just set the credential and password to
        a demo user's, but I can only log in on the second click of the demo users button.`,
        user_id: 1,
      },
       //3
      {
        title: 'Uncaught TypeError: Cannot set property of undefined',
        comment: `My code:
        var a = "1",
        b = "hello",
        c = { "100" : "some important data" },
        d = {};
        d[a]["greeting"] = b;
        d[a]["data"] = c;
        console.debug (d);
        I get the following error:
        Uncaught TypeError: Cannot set property 'greeting' of undefined.
        I'm trying to do something similar to an associative array. Why isn't this working?`,
        user_id: 1,
      },
       //4
      {
        title: 'Javascript Error “Missing ; before statement”',
        comment: `I am having a very weird error on this block:
        <script type="text/javascript">
          var captions = new Array();
          captions[0] = "";
          captions[1] = '<div class="cap-desc"><h3>No Win - No Fee</h3><span class="captionSubhead">Performance Guarantee</span><br /><span style="color:#636363; font-size:13px;">Ask Today. We are very confident<br />you'll be impressed with our results! </span></div><br /><a href="http://#" class="rmore" target="_blank">read more</a>';
        </script>
        The error tells me that I am missing a ';' before captions[1] but I am pretty sure that captions[0] has a semi-colon!`,
        user_id: 2,
      },
       //5
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
       //6
      {
        title: 'Uncaught ReferenceError: Invalid left-hand side in assignment',
        comment: `my code for a rock paper scissors game (called toss) is as follows:
        var toss = function (one,two) {
            if(one = "rock" && two = "rock") {
                console.log("Tie! Try again!");
            }
            // more similar conditions with 'else if'
        };
        When I enter in the parameters
        toss("rock","rock")
        I get this error code:
        "ReferenceError: Invalid left-hand side in assignment"
        How to fix it? What this error means and what other cases when this error can happen?`,
        user_id: 2,
      },
       //7
      {
        title: 'Mismatched parentheses: a quick way to find them?',
        comment: `I just rearranged a very large JavaScript file. I now get "Unexpected end of input." Somewhere in those hundred of functions, one has lost (or gained) a bracket. What's the quickest way to find it?`,
        user_id: 3,
      },
       //8
      {
        title: 'How do you constantly refresh a react component every certain amount of time?',
        comment: `This question relates a lot with loading and fetching. So I have this react components that loads comments from an API
        function App (){
            const [com, setCom] = useState([])
            const [isLoading, setLoading] = useState(true)
            useEffect(() =>{
                fetch('https://jsonplaceholder.typicode.com/comments?postId=5').then(ddd => ddd.json())
                .then(data => {
                     setCom(data)
                    setLoading(false)
                })
            })
            const coms = com.map(data => <h3>{data.body} <br/></h3>)
            if(isLoading){
                return <h1>Loading</h1>
            }
            else if(isLoading === false){
                return (
                    <div className="con">
                        {coms}
                    </div>
                )
            }
        }
        so in this components I have two states one to store the comments and other to store a loading value that will change after
        it's done fetching the state in the useEffect.
        The problem with this code is that let's say the server went down or my internet went out,
        even if it comes back this component is going to stay in the loading phase forever until the user refreshes the page manually.
        So how do I make the components re-fetch the data or rather just refresh the components ?.`,
        user_id: 3,
      },
       //9
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
    options.tableName = 'Questions';
    return queryInterface.bulkDelete(options, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
