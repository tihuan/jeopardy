export class QuestionController {
  constructor(questionDialogService) {
    'ngInject';

    this.showQuestion = false;
    this.showAlert = questionDialogService.showAlert;
  }

  convertToPrize() {
    return `$${100 * this.question.rank}`;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }
}
