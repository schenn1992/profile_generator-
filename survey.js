const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    console.log(`My name is: ${answer}`);
    
    rl.question("What's an activity you like doing?", (answer) => {
      console.log(`My favourite activity is: ${answer}`);
    
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`My favourite meal is: ${answer}`);
      
        rl.question("Which sport is your absolute favourite??", (answer) => {
          console.log(`My favourite sport is: ${answer}`);
          
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
            console.log(`My superpower is: ${answer}`);
        
            rl.close();
        
          });
        });
      });
    });
  });
});

  


  

  
  
