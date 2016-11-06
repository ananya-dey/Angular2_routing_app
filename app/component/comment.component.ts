import { Component } 		   from '@angular/core';
import { PostService } 		   from '../service/post.service';
import { templates_locations } from '../settings/app.settings';

@Component({
	selector: 'comment-component',
	templateUrl: templates_locations+'post/post.comment.html',
	providers: [
    	PostService
    ]
})

export class CommentComponent{
    private post_comment;

    constructor(private p_comment:PostService){

    }

    ngOnInit(){
    	this.getPost_comment();
    }

    getPost_comment(){
    	this.p_comment.PostFunction().subscribe(res=>{this.post_comment=res});
    }
}