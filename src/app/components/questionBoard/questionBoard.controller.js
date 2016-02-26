export class QuestionBoardController {
  constructor (questionBoardService) {
    'ngInject';

    let ctrl = this;

    ctrl.showQuestion = false;
    ctrl.questionBoard = questionBoardService.getQuestionBoard();
  }

  convertToPrize(rank) {
    return `$${100 * rank}`;
  }

  toggleQuestion(question) {
    scope.showQuestion = !scope.showQuestion;
  }
}
