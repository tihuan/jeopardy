/* global malarkey:false, moment:false */

import { config } from './index.config';
// import { RouterController } from './index.route';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { CategoryService } from '../app/components/category/category.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { QuestionService } from '../app/components/question/question.service';
import { QuestionDirective } from '../app/components/question/question.directive';
import { QuestionBoardService } from '../app/components/questionBoard/questionBoard.service';
import { QuestionBoardController } from '../app/components/questionBoard/questionBoard.controller';
import { QuestionBoardComponent } from '../app/components/questionBoard/questionBoard.component';

angular.module('jeopardy', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngNewRouter', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('categoryService', CategoryService)
  .controller('RouterController', RouterController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .service('questionService', QuestionService)
  .directive('spcaQuestion', QuestionDirective)
  .service('questionBoardService', QuestionBoardService)
  .controller('questionBoardController', QuestionBoardController)
  .component('spcaQuestionBoard', QuestionBoardComponent);
