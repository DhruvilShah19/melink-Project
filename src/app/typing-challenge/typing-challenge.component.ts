import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing-challenge',
  templateUrl: './typing-challenge.component.html',
  styleUrls: ['./typing-challenge.component.css']
})
export class TypingChallengeComponent implements OnInit {
  sentence: string;
  userInput: string = '';
  isCorrect: boolean[] = [];
  isComplete: boolean = false;

  constructor() {
    // Generate a random sentence for the typing challenge
    this.sentence = lorem.sentence();
  }

  ngOnInit(): void {
    // Initialize the isCorrect array with null values to track correctness of user input
    this.isCorrect = new Array(this.sentence.length).fill(null);
  }

  checkInput(): void {
    if (this.userInput.length === 0) {
      // Reset correctness status and completion when input is empty
      this.isCorrect = new Array(this.sentence.length).fill(null);
      this.isComplete = false;
    } else {
      this.isComplete = this.userInput === this.sentence; // Check if the challenge is completed

      // Check each character in the user input and mark correctness
      for (let i = 0; i < this.userInput.length; i++) {
        if (this.userInput[i] === this.sentence[i]) {
          this.isCorrect[i] = true;
        } else {
          this.isCorrect[i] = false;
        }
      }
    }
  }

  getSentenceArray(): string[] {
    // Split the sentence into an array of characters
    return this.sentence.split('');
  }
}
