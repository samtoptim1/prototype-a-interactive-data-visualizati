interface DataColumn {
  name: string;
  type: 'number' | 'string' | 'date';
  values: (number | string | Date)[];
}

interface DataVisualization {
  type: 'line' | 'bar' | 'scatter';
  data: DataColumn[];
  options?: {
    title: string;
    xAxisLabel: string;
    yAxisLabel: string;
  };
}

class DataParser {
  private data: DataColumn[];

  constructor(data: DataColumn[]) {
    this.data = data;
  }

  public visualize(type: DataVisualization['type'], options?: DataVisualization['options']) {
    const visualization: DataVisualization = {
      type,
      data: this.data,
      options,
    };

    switch (type) {
      case 'line':
        console.log('Visualizing line chart...');
        console.log(visualization);
        break;
      case 'bar':
        console.log('Visualizing bar chart...');
        console.log(visualization);
        break;
      case 'scatter':
        console.log('Visualizing scatter plot...');
        console.log(visualization);
        break;
      default:
        console.error('Invalid visualization type');
    }
  }
}

// Test case
const testData: DataColumn[] = [
  {
    name: 'Date',
    type: 'date',
    values: [
      new Date('2022-01-01'),
      new Date('2022-01-02'),
      new Date('2022-01-03'),
    ],
  },
  {
    name: 'Value',
    type: 'number',
    values: [10, 20, 30],
  },
];

const parser = new DataParser(testData);
parser.visualize('line', {
  title: 'Line Chart Example',
  xAxisLabel: 'Date',
  yAxisLabel: 'Value',
});