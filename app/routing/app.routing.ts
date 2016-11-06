
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { HomeComponent }        from '../component/home.component';
import { PostComponent }        from '../component/post.component';

const RoutingElements: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'posts',
        component: PostComponent,
    }
]

export const AppRouting:ModuleWithProviders = RouterModule.forRoot(RoutingElements);