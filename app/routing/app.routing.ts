import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { HomeComponent }        from '../component/home.component';
import { PostComponent }        from '../component/post.component';
import { CommentComponent }     from '../component/comment.component';

const RoutingElements: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'posts',
        component: PostComponent,
    },
    {
        path: 'comments',
        component: CommentComponent,
    }
]

export const AppRouting:ModuleWithProviders = RouterModule.forRoot(RoutingElements);