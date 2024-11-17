'use client'
import { useParams } from "next/navigation";

export default function Game() {
    const params = useParams();
    const id  = params.id; 

    return (
        <div>
            THIS IS DYNAMIC GAMES PAGE FOR THE ID {id}
        </div>
    );
}
