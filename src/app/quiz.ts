export class Quiz {
    question: string;
    choices: string[];
    answerIndex: string;
  
    constructor(question: string, choices: string[], answerIndex: string) {
      this.question = question;
      this.choices = choices;
      this.answerIndex = answerIndex;
    }
  }
  