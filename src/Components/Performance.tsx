const Performance = ()=>{
return(
    <div className="shadow card">
        <div className="card-body">

        <div className="d-flex align-items-center pb-3">  
        <label className="h6 my-2 ms-1 me-auto">App Perfomance</label>
        <button className="btn ms-auto">x</button>
        </div>
        <div className="d-flex align-items-center py-3 px-2">
        <p className="text-muted d-flex flex-wrap">
            <small className="me-3 d-flex align-items-center">
                <span className="bg-danger circle me-2">{""}</span>
                This Period
            </small>
                <small className="me-3 d-flex align-items-center">
                    <span className="circle bg-primary me-2" style={{fontSize:"4px"}}>
                        
                    </span>
                    Last Period
                    </small>
                    </p>
            
        </div>
        <div className="">
            <div>
        <label>SDK</label></div>
        <div className="my-2 progress progress-hs">
  <div className="progress-bar w-25" role="progressbar"></div>
</div>
<div className="progress mb-2 progress-hs">
  <div className="progress-bar w-50 bg-danger" role="progressbar"></div>
</div>

        <div>
        <label>Integration</label></div>
        <div className="my-2 progress progress-hs">
  <div className="progress-bar w-25" role="progressbar"></div>
</div>
<div className="progress mb-2 progress-hs">
  <div className="progress-bar w-50 bg-danger" role="progressbar"></div>
</div>


            
        </div>
       
        
        </div>
            
            
    </div>
    

)
}
export default Performance