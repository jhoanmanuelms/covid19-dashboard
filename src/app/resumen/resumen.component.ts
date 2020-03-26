import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  @Input() deaths: number;
  @Input() confirmed: number;
  @Input() recoveries: number;

  constructor() { }

  ngOnInit() {
  }

}
