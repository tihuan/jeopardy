export function QuestionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      question: '='
    },
    template: `
      <md-card
        class="question-card"
        ng-click="toggleQuestion()"
      >
        <md-card-content>
          <h3
            class="md-title"
            layout="row"
            layout-align="center center"
          >
            <div ng-show="showQuestion">
              {{ question.question }}
            </div>

            <div ng-hide="showQuestion">
              {{ convertToPrize(question.rank) }}
            </div>
          </h3>
        </md-card-content>
      </md-card>
    `,
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el, attr) {
    scope.showQuestion = false
    scope.convertToPrize = convertToPrize;
    scope.toggleQuestion = toggleQuestion
    console.log('question!!');

    function convertToPrize(rank) {
      return `$${100 * rank}`;
    }

    function toggleQuestion(question) {
      scope.showQuestion = !scope.showQuestion;
    }
  }
}
