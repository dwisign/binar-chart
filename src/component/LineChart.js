import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({dataLineChart}) => {
    return (
        <div>  
            <h4>Line Chart</h4>
            <Line data={dataLineChart} />
        </div>
    );
}
 
export default LineChart;