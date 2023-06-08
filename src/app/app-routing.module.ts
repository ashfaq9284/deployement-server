import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';




import { LoginFormComponent } from './login-form/login-form.component';


import { QuizComponent } from './quiz/quiz.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component'

const routes: Routes = [
 
{path:'login-form',component: LoginFormComponent},
{path:'registeration-form', component: RegisterationFormComponent},
{path:'quiz',component:QuizComponent},
{path:'add-question', component:AddQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
