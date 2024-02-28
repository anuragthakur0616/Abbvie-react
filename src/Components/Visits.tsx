import { FiArrowUpRight } from "react-icons/fi";
const Visits =()=>{
return(
    <div className="shadow card">
        <div className="card-body">
        <div className="d-flex align-items-center pb-3">  
        <label className="h6 my-2 ms-1 me-auto">Visits Today</label>
        <button className="btn ms-auto">x</button>
        </div>
        <div className="d-flex align-items-center py-3 px-2">
            <h2 className="me-auto">4.332</h2>
            <FiArrowUpRight className="mb-2" color="green" size={24} />
        </div>
        <div className="row">
            <div className="col-4">
            <p className="mb-1"> +830</p>
            <label>Logins</label>   

            </div>
            <div className="col-4">
            <p className="mb-1"> 0.5%</p>
            <label>Sign Out</label>   

            </div>
            <div className="col-4">
            <p className="mb-1"> 4.5%</p>
            <label>Rate</label>   

            </div>
        </div>
       
        
        </div>
            
            
    </div>
)
}
export default Visits