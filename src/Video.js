import { forwardRef, useImperativeHandle, useRef } from 'react'

import video1 from './videos/video1.mp4'

function Video(props, ref){

    const videoRef = useRef()

    useImperativeHandle(ref, ()=> ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
        
    }))
    return(
        <video src={video1}
        ref={videoRef}
        width={400}
        height={400}
        style={{marginLeft: 40, marginTop:40}}
        />
    )
}
export default forwardRef(Video)