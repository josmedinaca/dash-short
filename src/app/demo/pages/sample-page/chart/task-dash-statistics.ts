export class TaskDashStatistics {
  public static chartData = {
    chart: {
      height: 455,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    legend: {
      fontSize: '14px',
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        width: 14,
        height: 14,
        radius: 2
      },
      itemMargin: {
        horizontal: 0,
        vertical: 8
      }
    },
    markers: {
      size: 1.5,
      strokeColors: ['#7ad835', '#4886ff'],
      hover: {
        size: 3
      }
    },
    colors: ['#7ad835', '#4886ff'],
    series: [
      {
        name: 'Traslado por valor de',
        data: [171705740, 261099550, 225744941, 768115]
      }
    ],
    grid: {
      borderColor: '#eee'
    },
    tooltip: {
      y: {
        formatter: (val) => '$'+ val.toLocaleString('en') + ' COP'
      }
    },
    xaxis: {
      categories: ['07 Feb 2020', '10 Feb 2020', '03 Jul 2020','25 Jun 2020'],
    }
  };
}
