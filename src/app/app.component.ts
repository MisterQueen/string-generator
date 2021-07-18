import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text = this.generateString();

  ngOnInit() {
    timer(3000, 3000).subscribe(() => {
      this.text = this.generateString();
    });
  }

  generateString(): string[] {
    let words = [];

    for (let i = 0; i < 1000; i++) {
      words.push(
        Math.random()
          .toString(36)
          .replace(/[^\w]/, '')
          .substring(1, 6)
      );
    }

    return words;
  }

  checkPalindrome(s: string): boolean {
    return (
      s ===
      s
        .split('')
        .reverse()
        .join('')
    );
  }

  isNaN(s: string): boolean {
    return !!s.match(/[a-zA-Z]/);
  }
}