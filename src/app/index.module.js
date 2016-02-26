/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig, RouterController } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { QuestionBoardService } from '../app/components/questionBoard/questionBoard.service';
import { CategoryService } from '../app/components/category/category.service';
import { QuestionService } from '../app/components/question/question.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { QuestionDirective } from '../app/components/question/question.directive';
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
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .service('questionService', QuestionService)
  .directive('spcaQuestion', QuestionDirective)
  .service('questionBoardService', QuestionBoardService)
  .controller('questionBoardController', QuestionBoardController)
  .component('spcaQuestionBoard', QuestionBoardComponent);
