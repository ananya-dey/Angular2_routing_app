import { Component }   		   from '@angular/core';
import { PostService } 		   from '../service/post.service';
import { templates_locations } from '../settings/app.settings';

@Component({
    selector: 'post-component',
    templateUrl: templates_locations+'post/post.list.html',
    providers: [
    	PostService
    ]
})

export class PostComponent{
    private post_list;

    constructor(private p_list:PostService){

    }

    ngOnInit(){
    	this.getPost_list();
    }

    getPost_list(){
    	this.p_list.PostFunction().subscribe(res=>{this.post_list=res});
    }
}