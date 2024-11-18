'use client'
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default  function Game() {
    const params = useParams();
    const id  = params.id; 

   useEffect(()=>{
    const Fdata = async ()=>{
        try{
        const data = await fetch(`/api/games?id=${id}`)
        const alldata = await data.json()
        console.log(alldata)
        }catch(err){
            console.log(err);
            
        }
    }
    Fdata()
   }, [])
    

    

    return (
        <div>
            THIS IS DYNAMIC GAMES PAGE FOR THE ID {id}
        </div>
    );
}
