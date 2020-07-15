import React,{useEffect, useState} from 'react'
import { getCountDetails } from './helper/apicalls';
import iconTotal from '../images/iconTotal.svg';
import iconRecovered from '../images/iconRecovered.svg';
import iconDeaths from '../images/iconDeaths.svg';
import iconActive from '../images/iconActive.svg';

const CountDetails=()=> { 
    const [values, setValues] = useState({
       ActiveCases : "",
       Recovered : "",
       Deaths : "",
       TotalCases:"" ,
       error : "" 
    });
    const {ActiveCases, Recovered, Deaths,TotalCases} = values;
    


useEffect(() => {
    const preload =()=>{
        getCountDetails().then(data =>{
          
            if (data.error) {
    
                setValues({...values, error:data.error})
            }
            else{
                setValues({...values, 
                    ActiveCases: data.activeCases,
                    Recovered: data.recovered, 
                    Deaths : data.deaths,
                    TotalCases : data.totalCases
                })
               
            }
        })
    };
    preload();
}, []);

//getCountDetails();


return (
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>
                            <img src={iconTotal} alt="Total" className="iconVirus"/>
                            <span>
                                {TotalCases.toLocaleString()} 
                            </span>     
                            <small className="small-caption"> Total Cases</small>                       
                        </h4>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>
                            <img src={iconActive} alt="Total" className="iconVirus"/>
                            {ActiveCases.toLocaleString()}
                            <small className="small-caption"> Active Cases</small>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>
                            <img src={iconRecovered} alt="Total" className="iconVirus"/>
                            {Recovered.toLocaleString()}
                            <small className="small-caption"> Recovered</small>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>
                            <img src={iconDeaths} alt="Total" className="iconVirus"/>
                            {Deaths.toLocaleString()}
                            <small className="small-caption"> Deaths</small>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
);
}

export default CountDetails;

