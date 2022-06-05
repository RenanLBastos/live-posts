import { Component,Input, OnInit } from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
import {BackEndService} from "../back-end.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;

  constructor(private postService: PostService, private router: Router, private backEndService: BackEndService) { }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index)
  }

  onDelete() {
    console.log("onDelete() called!")
    this.postService.deletePost(this.index);
    this.backEndService.saveData()
  }

  onEdit() {
    console.log("onEdit()")
    this.router.navigate(['/post-edit', this.index])
  }

  likePost() {
    this.postService.likepost(this.index)
  }
}
