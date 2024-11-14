'use client'

import { error } from "console"
import { useEffect, useState } from "react"

export const FetchingFounders = ()=>{
    const [founder, setFounder] = useState('')
    const 
    useEffect(()=>{
        const fetchFounders = async ()=>{
            const response = await fetch('/api/founders')
            if(!response.ok){
                throw error("Failed to fetch founders")
            }
            
        }

        fetchFounders()
    }, [])

    
}