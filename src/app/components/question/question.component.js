export let QuestionComponent = {
  controller: 'questionController',
  bindings: {
    question: '<'
  },
  template: `
    <md-card
      class="question-card"
      ng-click="$ctrl.toggleQuestion()"
    >
      <md-card-content>
        <h3
          class="md-title"
          layout="row"
          layout-align="center center"
        >
          <div ng-hide="$ctrl.showQuestion">
            {{ $ctrl.convertToPrize() }}
          </div>

          <div ng-show="$ctrl.showQuestion">
            {{ $ctrl.question.question }}
          </div>
        </h3>
      </md-card-content>
    </md-card>
  `
};
