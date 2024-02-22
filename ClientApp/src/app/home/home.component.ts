import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage: string = "Hoş Geldiniz!";
  loanAmount: number = 0;
  loanTerm: number = 12;
  monthlyPayment: number = 0;

  calculateMonthlyPayment() {
    const interestRate: number = 0.05; 
    this.monthlyPayment = (this.loanAmount * interestRate + this.loanAmount) / this.loanTerm;
  }

  submitLoanApplication() {
    console.log("Kredi başvurusu gönderildi!");
  }
  constructor(private router: Router) { }

  goToAboutPage() {
    this.router.navigate(['register']); 
  }
  krediBaşvurusu() {
    this.router.navigate(['kredi-basvuru']); 
  }
 
}
