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
   
    
  );
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    
    
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      
    },
    
  };
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data1 = {
 
  datasets: [
    {
     
      data: [0,-500,200,400,-800,0,200,100],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};
const ServerOverview = ()=>{
    return(
        <div className="shadow card">
        <div className="card-body">
            <div className="d-flex align-items-center pb-3">  
            <label className="h6 my-2 ms-1 me-auto">Server Overview</label>
            <button className="btn btn-light ms-auto">x</button>
            </div>
            <div className="d-flex align-items-center py-3 px-2">
                <div className='row'>
                <div className="col-6">
                <label style={{fontSize:"12px"}}>60% / 37°С / 3.3 Ghz</label>
                </div>
                <div className="col-6">
                <Line options={options} data={data1} />
                </div>
                <div className="col-6">
                <label style={{fontSize:"12px"}}>54% / 31°С / 3.3 Ghz</label>
                </div>
                <div className="col-6">
                <Line options={options} data={data1} />
                </div>
                <div className="col-6">
                <label style={{fontSize:"12px"}}>54% / 31°С / 3.3 Ghz</label>
                </div>
                <div className="col-6">
                <Line options={options} data={data1} />
                </div>
                </div>
            </div>
            <div className="">
                
            
                
            </div>
           
            
        </div>
                
                
        </div>
        
    
    )
    }
    export default ServerOverview