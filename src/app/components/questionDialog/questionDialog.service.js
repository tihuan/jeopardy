export class QuestionDialogService {
  constructor($mdDialog) {
    'ngInject';

    this.showAlert = this._setShowAlert($mdDialog);
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
