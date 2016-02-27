export class QuestionDialogService {
  constructor($mdDialog) {
    'ngInject';

    this.result = '';
    this.showDialog = this._setShowDialog($mdDialog, this.result);
  }

  _setShowDialog($mdDialog, question, result) {
    return function showDialog(ev) {
      $mdDialog.show({
        controller: this._DialogController,
        template:`
          <div>{{ $ctrl.question }}</div>
          <div ng-click="$ctrl.cancel()">cancel</div>
          <div ng-click="$ctrl.answer('not useful')">Not Useful</div>
          <div ng-click="$ctrl.answer('useful')">Useful</div>
        `,
        fullScreen: true,
        clickOutsideToClose: true,
        targetEvent: ev,
      })
      .then(
        function(answer) {
          result = answer;
        },
        function() {
          result = 'Cancelled the dialog!';
        }
      );
    };
  };

  _DialogController($mdDialog) {
    'ngInject';

    this.hide = hide;
    this.cancel = cancel;
    this.answer = answer;

    function hide() {
      $mdDialog.hide();
    }

    function cancel() {
      $mdDialog.cancel();
    }

    function answer(answer) {
      console.log('ANSWER:', answer);
      $mdDialog.hide(answer);
    }
  }
}
