export class QuestionController {
  constructor() {
    'ngInject';

    this.showQuestion = false;
  }

  convertToPrize() {
    return `$${100 * this.question.rank}`;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }
}
