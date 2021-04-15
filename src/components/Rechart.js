import React, { useEffect, useState } from 'react'
import { AreaChart, ResponsiveContainer,Area,Tooltip ,CartesianGrid, XAxis, YAxis } from 'recharts';
import {format ,parseISO,subDays} from "date-fns";

const data = [];
for(let num = 365; num>= 0 ; num --){
    data.push({
        date : subDays(new Date(),num).toISOString().substr(0,10),
        value : 1+ Math.random()
    })
}
const datalength = data.length -1 ;

const dataMonth = [];
for(let num = 30; num>= 0; num--){
    dataMonth.push(data[datalength-num]);
}
const dataWeek = [];
            //console.log(datalength)
for(let num = 7; num>= 0; num--){
     dataWeek.push(data[datalength-num]);
 }
         

function Rechart({vieWOption}) {
   const [viewState, setviewState] = useState(dataMonth)
    useEffect(() => {
        
        
        if(vieWOption === 7 ){//한들
            setviewState ( dataMonth);
        }
        else if(vieWOption === 30 ){//일년
            setviewState ( data );
        }
        else if(vieWOption === 1 ){//일 주
            setviewState ( dataWeek);
        }
        

    }, [vieWOption])
  
    return (
       
        <div>
           <ResponsiveContainer width = "100%"  height = {400}>
            <AreaChart data ={viewState}>
          
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset =" 0%" stopColor= "#2451B7" stopOpacity = {0.4}/>
                        <stop offset =" 75%" stopColor= "#2451B7" stopOpacity = {0.05}/>

                    </linearGradient>
                </defs>

                <Area dataKey="value" stroke="#2451B7" fill = 'url(#color)'/>

                <XAxis dataKey = "date" axisLine={false} tickLine={false} 
                    tickFormatter={(str) =>{
                        const date = parseISO(str)
                          if(date.getDate() % vieWOption === 0){
                              console.log("asssssssssss")
                            return  format(date,"MMM , d");
                          }
                        return "";
                      
                      
                      }}/>

                <YAxis dataKey ="value" axisLine={false} tickLine={false} tickCount={8} tickFormatter={(number)=>`$${number.toFixed(2)}`}/>

                <Tooltip content = {<CustomTooltip/>}/>

                <CartesianGrid opacity={0.1} vertical={false}/>

            </AreaChart>
           </ResponsiveContainer>
        </div>
    )
}

export default Rechart


function CustomTooltip({active,payload,label}){
    if(active) { return(
        <div className = "tooltip">
            <h4>{format(parseISO(label),"eeee,d MMM,yyyy")}</h4>
            <p>
                ${payload[0].value.toFixed(2)}
            </p>

        </div>
    )}
    return null;

}
