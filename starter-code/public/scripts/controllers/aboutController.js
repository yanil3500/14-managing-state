'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  //Module currently has aboutController as one of its value. Module exposes aboutController to the rest of the application. 
  module.aboutController = aboutController;

})(window);
