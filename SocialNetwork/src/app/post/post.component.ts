import { Post } from './../models/post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    @Input("post") post: Post;
    @Output("clickedlike") clickedLikeButton: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }
    onClickLike(event):void {
        this.post.qtdLikes += 1;
        this.clickedLikeButton.emit("like button clicked on post " + this.post.id);
    }

}
