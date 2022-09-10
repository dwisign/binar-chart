import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);

const BarChart = ({dataChart}) => {
    console.log('TESTTTT', dataChart)
    return ( 
        <div>
            <h4>Bar Chart</h4>
            <Bar data={dataChart} />
        </div>
    );
}
 
export default BarChart;