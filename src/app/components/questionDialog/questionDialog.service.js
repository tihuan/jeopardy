export class QuestionDialogService {
  constructor($mdDialog) {
    'ngInject';

    this.result = '';
    this.showDialog = this._setShowDialog($mdDialog, this.result);
  }

  _setShowDialog($mdDialog, result) {
    let service = this;
    return function showDialog(ev, question) {
      console.log('ev', ev);
      console.log('question', question);
      console.log('service._DialogController', service._DialogController);
      $mdDialog.show({
        controller: service._DialogController,
        template:`
          <div>${question}</div>
          <div ng-click="cancel()">cancel</div>
          <div ng-click="answer('not useful')">Not Useful</div>
          <div ng-click="answer('useful')">Useful</div>
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

  _DialogController($scope, $mdDialog) {
    'ngInject';

    console.log('_DialogController!!');
    console.log('$scope', $scope);

    $scope.hide = hide;
    $scope.cancel = cancel;
    $scope.answer = answer;

    function hide() {
      console.log('hide');
      $mdDialog.hide();
    }

    function cancel() {
      console.log('cancel');
      $mdDialog.cancel();
    }

    function answer(answer) {
      console.log('ANSWER:', answer);
      $mdDialog.hide(answer);
    }
  }
}
