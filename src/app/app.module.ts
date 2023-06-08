import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterationFormComponent,
    QuizComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
