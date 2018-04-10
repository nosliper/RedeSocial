import { PostInputComponent } from './post-input/post-input.component';
import { PostService } from './services/post.service';
import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private service: PostService){}

    onDeactivate(component) {
        // if (component instanceof PostInputComponent) {
        //     if (component.post) {
        //         this.service.add(component.post)
        //             .subscribe(
        //                 (data) => console.log("created: " + data),
        //                 (error) => (console.log(error))
        //             );
        //     }
        // }
    }
}
