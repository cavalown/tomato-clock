import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './home/todos/todos.component';
import { StaticsComponent } from './home/statics/statics.component';
import { TomatoClockComponent } from './home/tomato-clock/tomato-clock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tomato-clock' },
      {
        path: 'tomato-clock', pathMatch: 'full', component:TomatoClockComponent
      },
      {
        path: 'todos', pathMatch: 'full', component: TodosComponent
      },
      {
        path: 'statics', pathMatch: 'full', component: StaticsComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
