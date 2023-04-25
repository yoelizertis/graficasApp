import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'graficas-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  contructor(){}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;

  constructor(){}

  ngOnInit(): void {
      if (this.horizontal){
          //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
          this.barChartOptions!.indexAxis = 'y';
          this.barChartOptions!.scales!["y"]!.min = 0;
      }
  }

  public barChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      scales: {
          x: {},
          y: {
              min: 10
          }
      },
      plugins: {
          legend: {
              display: true,
          },
      }
  }

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 38, 28, 10, 49, 76, 97, 30 ], label: 'Series B' }
    ]
  };
 
  
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public randomize(): void {
      // Only Change 3 values
      this.barChartData.datasets[0].data = [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100)];
      this.barChartData.datasets[1].data = [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100)
      ];
      this.barChartData.datasets[2].data = [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100)
      ];

      this.chart?.update();
  }
}
