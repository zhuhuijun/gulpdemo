(function() {
  'use strict';

  angular
    .module('angulardemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
