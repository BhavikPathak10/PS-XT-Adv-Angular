import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {
  
  arr = Array.from({length:10},(v, i) => i);
  constructor() { }

  ngOnInit(): void { }

  onScroll(e:any){
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight -10) {
      this.arr.push(this.arr.length+1);
    }
  }

  showAlert(i:any){
    alert(`Button in div ${i+1} clicked.`);
  }

}
