import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

import { Chart } from 'node_modules/chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css'],
})
export class TrialComponent implements OnInit {
  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // // public barChartLabels: L = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartLabels: any;
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins: any = [];

  // public barChartData: ChartDataset[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  constructor() {}

  ngOnInit(): void {
    Chart.register(ChartDataLabels);

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Band Score',
            data: [1,2,4,2,5,3],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1.5,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            color: '#36A2EB',
            anchor: 'end',
            align: 'left'
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },

      },
    });


  }
}
