import './App.css';
import {useEffect, useState} from 'react'
import { orderList } from './data';
import { salesList } from './data';
import { restockList } from './data';
import BarChart from './component/BarChart';
import LineChart from './component/LineChart';
import PieChart from './component/PieChart';



function App() {
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: []
    }]
  })

  const [dataLineChart, setDataLineChart] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: []
    }]
  })

  const [dataPieChart, setDataPieChart] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: []
    }]
  })

  useEffect(() => {
    
    setDataChart({
      labels: (orderList.map(item => item.date)),
      datasets: [{
        label: 'Data Penjualan',
        data: (orderList.map(item => item.totalOrder)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }],
    })

    setDataLineChart({
      labels: (salesList.map(item => item.date)),
      datasets: [{
        label: 'Data Sales',
        data: (salesList.map(item => item.totalSales)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }]
    })

    setDataPieChart({
      labels: (restockList.map(item => item.date)),
      datasets: [{
        label: 'Data Restock',
        data: (restockList.map(item => item.totalRestock)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      }]
    })
    
  }, [])


  console.log(dataChart)
  console.log('LINECHART', dataLineChart)
  console.log('RESTOCK', dataPieChart)

  return (
    <div className="App">
      {!!dataChart.labels.length && <BarChart dataChart={dataChart} />}
      {!!dataLineChart.labels.length && <LineChart dataLineChart={dataLineChart} />}
      {!!dataPieChart.labels.length && <PieChart dataPieChart={dataPieChart} />}
    </div>
  );
}

export default App;
