import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-circular',
  templateUrl: './grafico-circular.component.html',
  styles: [
  ]
})
export class GraficoCircularComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line: no-input-rename
  @Input('data') doughnutChartData: MultiDataSet = [
    [50, 150, 120]
  ];
  // tslint:disable-next-line: no-input-rename
  @Input('type') doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }
}
