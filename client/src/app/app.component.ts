import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Email, RemoteService } from './remote.service';
import { HttpErrorResponse } from '@angular/common/http';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  remote:RemoteService;
  email:string;
  subject:string;
  message: string;

  constructor(remote:RemoteService) {
    this.remote = remote;
    this.email = "";
    this.subject = "";
    this.message = "";
  }

  sendMessage() {
    console.log(this.email);
    console.log(this.subject);
    console.log(this.message);

    let newEmail:Email = {
      recipient: this.email,
      subject: this.subject,
      message: this.message
    }

    this.remote.retrieveMessage(newEmail)
    .subscribe({
      next: (data) => {
        //alert("Email sent successfully!")
        this.celebrate();
      },
      error: (error:HttpErrorResponse) => {
        alert("Email was not sent...")
        console.log(error);
      }
    })
  }

  celebrate() {

    const duration = 3000; // in milliseconds
  
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  
    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }
}
