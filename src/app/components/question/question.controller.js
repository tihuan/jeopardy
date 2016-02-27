export class QuestionController {
  constructor($mdDialog) {
    'ngInject';

    this.showQuestion = false;
    this.showAlert = this._setShowAlert($mdDialog);
  }

  convertToPrize() {
    return `$${100 * this.question.rank}`;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }

  _setShowAlert($mdDialog) {
    return function showAlert(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('This is an alert title')
          .textContent('Test alert content here')
          .ok('Cool it works!')
          .targetEvent(ev)
      );
    };
  }
}
