import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import moment from 'moment';
import { getDailyData } from './helper/apicalls';


const DailyCounts=()=>{ 

    const [values, setValues] = useState({
        totalCases : [],
        lastUpdated:[],
        allData : [],
        newCases : [],
        error : "",
    });

const {totalCases,newCases,lastUpdated,allData,error} = values;


useEffect(() => {
    const preload =()=>{
        getDailyData().then(data =>{
            let topTenData = data.sort(function(a, b) 
                            { return a.lastUpdatedAtApify < b.lastUpdatedAtApify ? 1 : -1; })
                            .slice(0, 30);

           
            for (var i = 0; i < topTenData.length; i++) {
               // console.log(moment(data[i].lastUpdatedAtApify).format('MM/DD/YYYY'))
                totalCases.push(topTenData[i].totalCases);
                lastUpdated.push(moment(topTenData[i].lastUpdatedAtApify).format('DD, MMM YYYY'));               
            }

            let diffs = totalCases.slice(1).map((x,i)=> x-totalCases[i]);

            diffs.forEach((x,i) => {
                newCases.push(Math.abs(x));
               
            });
            console.log(newCases,lastUpdated)
           
            if (data.error) {
    
                setValues({...values, error:data.error})
            }
            else{
                //let totalCases = []
               
                setValues({...values, 
                    totalCases : totalCases.reverse(),
                    lastUpdated : lastUpdated.reverse()
                })
               
            }
        })
    };
    preload();
}, []);




    const options ={
        chart : {
            type: 'area',
            backgroundColor : "rgba(255,255,255,0)"
        },
        title: {
            text: null
        },
    
        subtitle: {
            text: null
        },
    
        yAxis: {
            title: {
                text: 'Counts'
            },
            gridLineColor: 'rgba(255,255,255,0.125)',
            gridLineWidth: 1
        },
    
        xAxis: {
            categories: lastUpdated,
            lineColor: "rgba(255,2550,255,0.125)"
           
        },
    
        legend: false,
    
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, 'rgba(214, 48, 49,0.95)'],
                        [1, 'rgba(255,255,255,0.0)']
                    ]
                },
                lineWidth: 1,
                lineColor: "rgba(192, 57, 43,1.0)"
            },
            series: {
                marker: {
                    fillColor: 'rgba(231, 76, 60,1.0)',
                    lineColor: 'rgba(192, 57, 43,1.0)' 
                },
                label: {
                    connectorAllowed: false
                },
                //pointStart: 2011
            }
        },
    
        series: [{
            name: 'Total Cases',
            data: totalCases
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }
    

    
    return (
        <div className="row my-2">
            <div className="col-md-12">
                <div className="card">
                    <h5 className="card-header font-weight-normal">
                            Daily Status <small className="small-caption">(Last 30 Days)</small>
                    </h5>
                     <div className="card-body">
                         <div className="" id="container">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                />
                         </div>
                     </div>
                </div>
            </div>
        </div>
);
}
export default DailyCounts;