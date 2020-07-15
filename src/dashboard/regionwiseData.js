import React, {useState,useEffect} from 'react'
import { DataGrid, GridColumn } from 'rc-easyui';

import { getRegionwiseData } from './helper/apicalls';



const RegionwiseData =()=> {
    const [values, setValues] = useState({
        regionData : [],
        lastupdated : "",
        error : ""
    });

    const {regionData, lastupdated, error}= values;

  
    useEffect(() => {
        const preload =()=>{
            getRegionwiseData().then(data =>{
                
                if (data.error) {
        
                    setValues({...values, error:data.error})
                }
                else{
                    setValues({...values, 
                        regionData : data.regionData,
                        lastupdated : data.lastUpdatedAtApify
                    })
                   
                }
            })
        };
        preload();
    }, []);

    return (
         <div className="row mb-2">
            <div className="col-md-12">
                <div className="card">
                    <h5 className="card-header font-weight-normal">
                            Regionwise Status
                    </h5>
                    <div className="card-body">
                        <div className="table-responsive">
                            {/* <table className="table table-hover table-dark text-light table-striped">
                                
                                <thead>
                                    <tr>
                                       <th>Region</th>
                                       <th>Total</th>
                                       <th>Active</th>
                                       <th>Recovered</th>
                                       <th>Deaths</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {regionData && regionData.map((items, index)=>(
                                            <tr key={index} data-id={index}>
                                                <td>{items.region}</td>
                                                <td>{items.totalCases}</td>
                                                <td>{items.totalInfected}</td>
                                                <td>{items.recovered}</td>
                                                <td>{items.deceased}</td>
                                            </tr>
                                    ))}
                                   
                                   
                                </tbody>
                            </table> */}
                       
                       
                        <DataGrid data={regionData} style={{height:250}} className="">
                            <GridColumn field="region" title="Region"></GridColumn>
                            <GridColumn field="totalCases" title="Total"></GridColumn>
                            <GridColumn field="totalInfected" title="Active"></GridColumn>
                            <GridColumn field="recovered" title="Recovered" ></GridColumn>
                            <GridColumn field="deceased" title="Deaths"></GridColumn>                        
                        </DataGrid>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegionwiseData; 