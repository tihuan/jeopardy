export function QuestionBoardDirective() {
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
          ng-repeat="awesomeThing in main.awesomeThings"
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
                {{awesomeThing.category}}
              </h3>
            </md-card-content>
          </md-card>

          <md-card
            class="question-card"
            ng-repeat="question in awesomeThing.questions"
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
    console.log('SPCA!!');
  }
}
