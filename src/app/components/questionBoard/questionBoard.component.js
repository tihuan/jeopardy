export let QuestionBoardComponent = {
  controller: 'questionBoardController',
  template: `
    <div
      id="popupContainer"
      layout="row"
    >
      <div
        ng-repeat="category in $ctrl.questionBoard"
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
  `
};
