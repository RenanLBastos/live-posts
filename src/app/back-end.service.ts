import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";


/**
 * Data Path
 * https://live-posts-1bebb-default-rtdb.firebaseio.com/
 */

@Injectable({providedIn: 'root'})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) {
  }

  //function 1 - Save
  saveData() {
    // step 1 - get list of post from post.service
    const listOfPosts: Post[] = this.postService.getPosts();
    // step 2 - send list of posts to backend
    this.http.put(
      'https://live-posts-1bebb-default-rtdb.firebaseio.com/posts.json',
      listOfPosts
    ).subscribe((res) => {
      console.log(res)
    });
  }

  //function 2 - Fetch
  fecthData() {

    // Step 1 - get data from database
    this.http
      .get<Post[]>(
        'https://live-posts-1bebb-default-rtdb.firebaseio.com/posts.json'
      ).pipe(
      tap((listOfPosts: Post[]) => {
        console.log(listOfPosts);

        //Step 2 - send to post.service
        this.postService.setPosts(listOfPosts);
      })
    ).subscribe();
  }
}
