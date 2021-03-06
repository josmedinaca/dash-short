export class ProcessesDashServer {
  public static chartData = {
    chart: {
      type: 'line',
      height: 45,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 1.2,
    },
    series: [{
      data: [10, 15, 0, 20, 10, 45, 20, 30, 10, 15, 0, 20, 0, 25]
    }],
    yaxis: {
      min: 0,
      max: 50
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    grid: {
      borderColor: '#eee'
    },
    colors: ['#f95476']
  };
}
