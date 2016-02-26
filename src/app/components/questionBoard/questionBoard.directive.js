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

          <spca-question
            ng-repeat="question in category.questions"
            question="question"
          >
          </spca-question>
        </div>
      </div>
    `,
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el, attr) {
    scope.showQuestion = false
    scope.questionBoard = questionBoardService.getQuestionBoard();
    scope.convertToPrize = convertToPrize;
    scope.toggleQuestion = toggleQuestion
    console.log('SPCA!!');

    function convertToPrize(rank) {
      return `$${100 * rank}`;
    }

    function toggleQuestion(question) {
      scope.showQuestion = !scope.showQuestion;
    }
  }
}
