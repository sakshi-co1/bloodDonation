import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Del = () => {
    // promise
    const history = useHistory();
    useEffect(()=>{
        fetch('/delete',{
            method:"DELETE",
            headers:{
                Accept :"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            history.push('/appointment');
            if(!res.status ===200){
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div>
            
        </div>
    )
}

export default Del