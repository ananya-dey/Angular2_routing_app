"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../component/home.component');
var post_component_1 = require('../component/post.component');
var comment_component_1 = require('../component/comment.component');
var RoutingElements = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'posts',
        component: post_component_1.PostComponent,
    },
    {
        path: 'comments',
        component: comment_component_1.CommentComponent,
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(RoutingElements);
//# sourceMappingURL=app.routing.js.map