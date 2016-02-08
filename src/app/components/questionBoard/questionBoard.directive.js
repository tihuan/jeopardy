export function QuestionBoardDirective(questionBoardService) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
    },
    template: `
      <div
        layout="row"
      >
        <div
          ng-repeat="category in questionBoard"
          layout="column"
          flex="20"
        >
          <md-card
            class="question-header"
          >
            <md-card-content>
              <h3
                class="md-title"
                layout="column"
                layout-align="center center"
              >
                {{category.name}}
              </h3>
            </md-card-content>
          </md-card>

          <md-card
            class="question-card"
            ng-repeat="question in category.questions"
          >
            <md-card-content>
              <h3
                class="md-title"
                layout="row"
                layout-align="center center"
              >
                {{ main.convertToPrize(question.rank) }}
              </h3>
            </md-card-content>
          </md-card>
        </div>
      </div>
    `,
    link: linkFunc,
  };

  return directive;

  function linkFunc(scope, el, attr) {
    scope.questionBoard = questionBoardService.getQuestionBoard();
    console.log('SPCA!!');
  }
}
