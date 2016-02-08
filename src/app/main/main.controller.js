export class MainController {
  constructor ($timeout, questionService, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1454817259386;
    this.toastr = toastr;

    this.activate($timeout, questionService);
  }

  activate($timeout, questionService) {
    this.getWebDevTec(questionService);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(questionService) {
    this.awesomeThings = webDevTec.getQuestions();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  convertToPrize(rank) {
    return `$${100 * rank}`;
  }
}
