"use client"

import { useEffect, useState } from "react"

export default function useHandTracking() {
  const [landmarks, setLandmarks] = useState<any[]>([])

    useEffect(() => {
        let video: HTMLVideoElement
        let animationFrameId: number
        let stream: MediaStream

        async function init() {
            // importa mediapipe dinamicamente (IMPORTANTE)
            const mpHands = await import("@mediapipe/hands")
            const Hands = mpHands.Hands

            video = document.createElement("video")
            video.autoplay = true
            video.playsInline = true

            stream = await navigator.mediaDevices.getUserMedia({ video: true })
            video.srcObject = stream
            await video.play()

            const hands = new Hands({
                locateFile: (file: string) =>
                `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
            })

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.7,
            })

            hands.onResults((results: any) => {
                console.log("RESULTS:", results)
                if (results.multiHandLandmarks?.length) {
                    setLandmarks(results.multiHandLandmarks[0])
                }
            })

            async function processFrame() {
                await hands.send({ image: video })
                animationFrameId = requestAnimationFrame(processFrame)
            }

            processFrame()
        }

        init()

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
            if (stream) stream.getTracks().forEach((t) => t.stop())
            }
    }, [])

    return landmarks
}