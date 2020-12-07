// Import data (string[])
const passwords = require('./data');

let correctPasswords = 0;

// Loop through the passwords (part 1)
// passwords.forEach(password => {
//   // Extract data from string (example: '8-9 x: xxxxxxxrk')
//   const [criteria, text] = password.split(':'); // ['8-9 x', ' xxxxxxxrk']
//   const [range, charToEvaluate] = criteria.split(' '); // ['8-9', 'x']
//   const [min, max] = range.split('-'); // ['8', '9']

//   // Evaluate if the character to evaluate meets the range of min and max
//   const regex = new RegExp(`[^${charToEvaluate}]`, 'g');
//   const charValue = text.trim().replace(regex, '').length;

//   if (charValue >= +min && charValue <= +max) correctPasswords++;
// });

// Loop through the passwords (part 2)
passwords.forEach(password => {
  // Extract data from string (example: '8-9 x: xxxxxxxrk')
  const [criteria, text] = password.split(':'); // ['8-9 x', ' xxxxxxxrk']
  const [positions, charToEvaluate] = criteria.split(' '); // ['8-9', 'x']
  const [pos1, pos2] = positions.split('-'); // ['8', '9']

  // Evaluate if the character is ONLY on one of the positions given
  // ! NOTE: DON'T COUNT THE STRING AT INDEX 0
  const firstPositionMatches = text.trim()[pos1 - 1] === charToEvaluate;
  const secondPositionMatches = text.trim()[pos2 - 1] === charToEvaluate;

  if (firstPositionMatches && secondPositionMatches) return;

  if (firstPositionMatches || secondPositionMatches) correctPasswords++;
});

// Print result
console.log(correctPasswords);
