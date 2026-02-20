"use client"


import Cube from "./Objetcs"
import Lights from "./Lights"
import CameraControls from "./Camera"

import HandsPoints from "./Hands"
import useHandTracking from "@/hooks/useHandTracking"

export default function Scene() {
    return (
        <>
            <Lights />
            {/* <Cube /> */}
            <HandsPoints landmarks={useHandTracking()} />
            {/* <CameraControls /> */}
        </>
    )
}


