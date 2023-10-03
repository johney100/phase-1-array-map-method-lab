const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {

  const titleCasedTutorials = [];
    for (const tutorial of tutorials) {
      // Split the tutorial name into words.
      const words = tutorial.split(' ');
  
      // Title case each word.
      const titleCasedWords = [];
      for (const word of words) {
        titleCasedWords.push(word[0].toUpperCase() + word.slice(1));
      }
  
      // Join the title cased words back into a string.
      const titleCasedTutorial = titleCasedWords.join(' ');
  
      // Add the title cased tutorial to the list of title cased tutorials.
      titleCasedTutorials.push(titleCasedTutorial)
    }
  
    // Return the title-cased tutorial names.
    return titleCasedTutorials;
  
  }