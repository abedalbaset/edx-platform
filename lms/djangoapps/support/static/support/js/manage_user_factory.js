(function(define) {
    'use strict';

    define('support/js/manage_user_factory',[
        'underscore',
        'support/js/views/manage_user'
    ], function(_, ManageUserView) {
        return function(options) {
            options = _.extend({el: '.manage-user-content'}, options);
            return new ManageUserView(options).render();
        };
    });
}).call(this, define || RequireJS.define);
