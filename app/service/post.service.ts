import { Injectable } from '@angular/core';
import { Http }		  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService{
	constructor(private link:Http){

	}

	PostFunction(){
		return this.link.get("https://jsonplaceholder.typicode.com/posts")
		.map(res=>res.json());
	}
}