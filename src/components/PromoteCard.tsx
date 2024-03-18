"use client"

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";


export default function PromoteCard(){
    
    const [vdoPlay,setVdoPlay] = useState(true);

    useWindowListener("contextmenu" ,(e)=>e.preventDefault())

    return(
        <div className="flex flex-row w-fit h-fit p-5 pr-32 gap-x-5 mx-auto mt-10 bg-slate-100 rounded-sm">
            <VideoPlayer vdoSrc={"/video/getvaccine.mp4"} isPlaying={vdoPlay} />
            <div className="flex flex-col flex-nowrap text-2xl font-semibold">
                <div>Get Your vaccine today</div>
                <button onClick={()=>setVdoPlay(prev=>!prev)}
                    className="rounded-2xl w-32 h-fit text-xl bg-blue-500 text-slate-100 mt-auto p-1 pl-6 pr-6 hover:scale-105 hover:bg-blue-600 transition-all">
                    {vdoPlay? "Pause":"Play"}
                </button>
            </div>
        </div>        
    )
}