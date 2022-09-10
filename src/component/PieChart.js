import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({dataPieChart}) => {
    return (
        <div>  
            <h4>Pie Chart</h4>
            <Pie data={dataPieChart} />
        </div>
    );
}
 
export default PieChart;