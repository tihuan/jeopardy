export class QuestionBoardController {
  constructor (questionBoardService) {
    'ngInject';

    this.showQuestion = false;
    this.questionBoard = questionBoardService.getQuestionBoard();
  }

  convertToPrize(rank) {
    return `$${100 * rank}`;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }
}
