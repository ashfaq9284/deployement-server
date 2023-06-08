import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  questions:Quiz[];
  isSubmitted:boolean=false;
  selectedOption:string;
  numberOfCorrectAnswers:number = 0;
  resultText:string;
 isCorrect:boolean[] = [false];
  selectedQuestion: Quiz;
  answered:boolean[] = [false];
  answerResult:string[] = [''];
  viewResult:boolean = false;
  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.getQuiz().subscribe({
      next: data=>this.questions = data
    })
   
  }

  getSelectedOptionIndex(questionIndex:number,question: Quiz){   
    this.isSubmitted = true;
    this.selectedQuestion = question;   
    let result = this.isCorrectAnswer(questionIndex);
    this.answered[questionIndex] = true;
    if(result){      
      this.resultText = "Answer is correct";     
      this.answerResult[questionIndex]  = this.resultText;
      this.isCorrect[questionIndex] = true;

    }
    else{
      this.resultText = "Answer is wrong";            
      this.answerResult[questionIndex]  = this.resultText;
      this.isCorrect[questionIndex]=false;
    }    
   
  }

  isCorrectAnswer(questionIndex:number) {  
    const isCorrect = this.questions[questionIndex].answerIndex === this.selectedOption;
  
    if (isCorrect) {
      this.numberOfCorrectAnswers++;
    }
    return isCorrect;
  }

  isAnswered(i:number){
    return this.answered[i];
  }

  isCorrect1(i:number){
    return this.isCorrect[i];
  }

  getResult(){
    this.viewResult = true;
  }

  isAllQuestionAnswered(){
    if(this.questions.length == this.answered.length){
      return true;
    }
    else{
      return false;
    }
  }

}
