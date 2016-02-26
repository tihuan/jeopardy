export class QuestionBoardService {
  constructor () {
    'ngInject';

    this.data = [
      {
        name: 'Animal',
        questions: [
          {
            rank: 1,
            question: 'An animal starts with C and rhymes with "ow"',
            answer: 'Cow'
          },
          {
            rank: 2,
            question: 'An animal starts with C and rhymes with "at"',
            answer: 'Cat'
          },
          {
            rank: 3,
            question: 'An animal starts with D and rhymes with "og"',
            answer: 'Dog'
          },
          {
            rank: 4,
            question: 'An animal starts with E and ends with "agle"',
            answer: 'Eagle!!'
          },
          {
            rank: 5,
            question: 'An animal starts with F and ends with "ly"',
            answer: 'Fly'
          }
        ]
      },
      {
        name: 'SPCA',
        questions: [
          {
            rank: 1,
            question: 'Most beautiful employee? Hint: she loves Timmy',
            answer: 'Kat!!! OF COURSE'
          },
          {
            rank: 2,
            question: 'Most brilliant employee? Hint: she likes purple',
            answer: 'Kat!!! OF COURSE'
          },
          {
            rank: 3,
            question: 'Sweetest employee? Hint: she has beautiful eyes',
            answer: 'Kat!!! OF COURSE'
          },
          {
            rank: 4,
            question: 'Most adorable employee? Hint: she loves Chinese food',
            answer: 'Kat!!! OF COURSE'
          },
          {
            rank: 5,
            question: 'Best of the best employees? Hint: DAMN GURL',
            answer: 'Kat!!! OF COURSE'
          }
        ]
      },
      {
        name: 'More Animals',
        questions: [
          {
            rank: 1,
            question: 'What food makes up nearly all (around 99%) of a Giant Panda’s diet?',
            answer: 'Bamboo'
          },
          {
            rank: 2,
            question: 'True or false? Mice live for up to 10 years.',
            answer: 'False - Captive mice live for up to 2 and a half years while wild mice only live for an average of around 4 months.'
          },
          {
            rank: 3,
            question: 'What is the largest type of ‘big cat’ in the world?',
            answer: 'The tiger, weighing up to 300 kilograms (660 pounds).'
          },
          {
            rank: 4,
            question: 'What are female elephants called? ',
            answer: 'Cows'
          },
          {
            rank: 5,
            question: 'True or false? Bats are mammals.',
            answer: 'True'
          }
        ]
      },
      {
        name: 'Lots of animals',
        questions: [
          {
            rank: 1,
            question: 'Bees are found on every continent of earth except for one, which is it?',
            answer: 'Antarctica'
          },
          {
            rank: 2,
            question: 'True or false? Cats spend an average of 13 to 14 hours a day sleeping.',
            answer: 'true'
          },
          {
            rank: 3,
            question: 'What is the fastest land animal in the world?',
            answer: 'The cheetah (it can reach speeds of up to 120kph – 75mph)'
          },
          {
            rank: 4,
            question: 'A ‘doe’ is what kind of animal?',
            answer: 'A female deer.'
          },
          {
            rank: 5,
            question: 'Groups of lions are known as what?',
            answer: 'Prides'
          }
        ]
      },
      {
        name: 'ALLL the animals',
        questions: [
          {
            rank: 1,
            question: 'Is a shark a fish or a mammal?',
            answer: 'A fish'
          },
          {
            rank: 2,
            question: 'What is the name of an adult female horse?',
            answer: 'A mare '
          },
          {
            rank: 3,
            question: 'True or false? Rabbits are born blind.',
            answer: 'True'
          },
          {
            rank: 4,
            question: 'How many legs does a spider have?',
            answer: '8'
          },
          {
            rank: 5,
            question: 'The crocodile species is believed to have been around for how long? 2 million years or 200 million years?',
            answer: '200 million years'
          }
        ]
      }
    ];
  }

  getQuestionBoard() {
    return this.data;
  }
}
