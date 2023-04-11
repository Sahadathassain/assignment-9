import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function statistics()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const getStudentdata= async()=>{
       const reqData= await fetch("Assignment.json");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        sSubject.push(resData[i].subject);
        sMarks.push(parseInt(resData[i].marks));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
    
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3 text-center mb-10 font-extrabold text-xl">Statistics Assignment Number</h3>
                <Chart 
                type="pie"
                width={1149}
                height={400}

                series={ studentMarks }                

                options={{
                         
                       noData:{text:"Empty Data"},                        
                      
                      labels:stdudentSubject                     

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default statistics ;