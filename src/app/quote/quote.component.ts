import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1,'The secret of getting ahead is getting started.','To move forward in anything you do is by starting','Ronoh Wycliffe', new Date(2019,9,14)),
    new Quote(2,'Only the paranoid survive.','Those who can withstand harsh environments will only make','Brian Muchera', new Date(2019,9,14)),
    new Quote(3,'Everything you can imagine is real.','Real in the sense that it can be achieved', 'Rose Kimodo',new Date(2019,9,14)),
  ]; 

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
