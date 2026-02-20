"use client"

export default function HandsPoints({ landmarks }: any) {
    if (!landmarks?.length) return null;

    return (
        <>
            {landmarks.map((point: any, i: number) => (
                <mesh
                    key={i}
                    position={[
                        (point.x - 0.5) * 5,
                        -(point.y -0.5) *5,
                        -point.z * 5
                    ]}
                >
                    <sphereGeometry args={[0.05]} />
                    <meshStandardMaterial />
                </mesh>
            ))}
        </>
    )




}