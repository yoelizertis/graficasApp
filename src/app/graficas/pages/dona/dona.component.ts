import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'graficas-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutCharLabels: string[] = ['Download Sales', 'In-Store Sles', 'Mail-Order Sales', 'Other'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutCharLabels,
    datasets:[
      {
        data:[350, 450, 100, 150],
        backgroundColor: [ '#0075ed' , '#00baf7', '#00e0db' , '#00f7ad' , '#00ed63']
      },
    ]
  };
  public doughnutChartType: ChartType ='doughnut';
}
