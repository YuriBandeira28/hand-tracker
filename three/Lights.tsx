export default function Lights(){
    return(
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2,2,2]}/>
        </>
    )
}