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
import { QuestionBoardDirective } from '../app/components/questionBoard/questionBoard.directive';

angular.module('jeopardy', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngNewRouter', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('questionBoardService', QuestionBoardService)
  .service('categoryService', CategoryService)
  .service('questionService', QuestionService)
  .controller('RouterController', RouterController)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('spcaQuestionBoard', QuestionBoardDirective);
