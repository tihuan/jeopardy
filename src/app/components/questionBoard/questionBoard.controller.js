export class QuestionBoardController {
  constructor (questionBoardService) {
    'ngInject';

    this.questionBoard = questionBoardService.getQuestionBoard();
  }
}
