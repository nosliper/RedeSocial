import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
    styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
    
    @Input() post: Post;

    constructor() {
        this.post = new Post(undefined, undefined, undefined, 0);
    }

    onNewPost(event): void {
        event.preventDefault();
    }
    ngOnInit() {
    }

}
