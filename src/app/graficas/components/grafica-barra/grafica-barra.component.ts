import { Component, Input, ViewChild } from '@angular/core';
import { ChartData, ChartConfiguration, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'graficas-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: []
})
export class GraficaBarraComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    @Input() horizontal: boolean = false;
    @Input() barChartData!: ChartData<'bar'>;
 
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
   
    
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}
 
    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}
 
    public randomize(): void {
        // Only Change 3 values
        this.barChartData.datasets.forEach( g => {
 
          let data: number[] = []
  
          g.data.forEach( (_) => {
  
           data.push(Math.round(Math.random() * 100))
  
         })
         
         g.data = data
     })
  
       this.chart?.update();
    }
}
