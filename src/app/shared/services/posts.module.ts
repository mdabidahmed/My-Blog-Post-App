import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PostCreateComponent } from "src/app/posts/post-create/post-create.component";
import { PostListComponent } from "src/app/posts/post-list/post-list.component";
import { AngularMaterialModule } from "src/app/angular-material.module";
@NgModule({
  declarations: [PostCreateComponent, PostListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ],
})
export class PostModule {}
