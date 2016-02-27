export class QuestionController {
  constructor(questionDialogService) {
    'ngInject';

    this.showQuestion = false;
    this.result = questionDialogService.result;
    this.showDialog = questionDialogService.showDialog;
  }

  convertToPrize() {
    return `$${100 * this.question.rank}`;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }
}
