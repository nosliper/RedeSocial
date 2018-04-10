import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.component.html',
    styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit {
    post: Post;
    nomePessoa: string;
    texto: string;

    constructor() { }

    onNewPost(event): void {
        this.post = new Post(undefined, this.nomePessoa, this.texto, 0);
        event.preventDefault();
    }
    ngOnInit() {
    }

}
