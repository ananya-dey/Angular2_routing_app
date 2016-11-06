"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('../service/post.service');
var app_settings_1 = require('../settings/app.settings');
var CommentComponent = (function () {
    function CommentComponent(p_comment) {
        this.p_comment = p_comment;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.getPost_comment();
    };
    CommentComponent.prototype.getPost_comment = function () {
        var _this = this;
        this.p_comment.PostFunction().subscribe(function (res) { _this.post_comment = res; });
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'comment-component',
            templateUrl: app_settings_1.templates_locations + 'post/post.comment.html',
            providers: [
                post_service_1.PostService
            ]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=comment.component.js.map