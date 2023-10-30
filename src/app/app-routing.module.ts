import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIInterfaceComponent } from './api-interface/api-interface.component';
import { HomeComponent } from './home/home.component';
import { TypingChallengeComponent } from './typing-challenge/typing-challenge.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'api-interface', component: APIInterfaceComponent }, // API Interface route
  { path: 'typing-challenge', component: TypingChallengeComponent } // Typing Challenge route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
