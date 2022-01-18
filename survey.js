  const { stdout } = require('process');
const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const profile = {};

  rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
    profile.name = answer;
    rl.question('What is an activity you like doing? ', (answer) => {
      profile.activity = answer;
      rl.question('What do you listen to while doing that? ', (answer) => {
        profile.listenTo = answer;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          profile.meal = answer;
          rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
            profile.food = answer;
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              profile.sport = answer;
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                profile.power = answer;
                rl.close();
                stdout.write(`${profile.name} likes to listen to ${profile.listenTo} while doing ${profile.activity}. He love eating ${profile.food} at ${profile.meal}. His favorite sport is ${profile.sport} and he's amazing at ${profile.power}\n`);
              });
            });
          });
        });
      });
    });
  });


