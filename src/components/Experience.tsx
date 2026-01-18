import { OrbitControls, ContactShadows, Environment, Float, Grid } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Phone } from './Phone'

interface ExperienceProps {
    textureUrl: string | null
}

export const Experience = ({ textureUrl }: ExperienceProps) => {
    const { viewport } = useThree()
    return (
        <>
            <color attach="background" args={['#050505']} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#a855f7" />
            <directionalLight position={[-10, -10, -5]} intensity={2} color="#3b82f6" />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* Volumetric / Grid pulse effect */}
            <Grid
                renderOrder={-1}
                position={[0, -2, 0]}
                infiniteGrid
                cellSize={0.6}
                sectionSize={3}
                fadeDistance={30}
                sectionColor="#a855f7"
                cellColor="#6366f1"
            />

            {/* Main Content */}
            <group position={[viewport.width > 6 ? -2 : 0, viewport.width > 6 ? 0 : 0.5, 0]}>
                <Float
                    speed={2}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                    floatingRange={[-0.1, 0.1]}
                >
                    <Phone textureUrl={textureUrl} />
                </Float>
            </group>

            <ContactShadows
                position={[0, -2.5, 0]}
                opacity={0.5}
                scale={10}
                blur={2}
                far={4}
                color="#a855f7"
            />

            <OrbitControls makeDefault enableZoom={false} enablePan={false} />
        </>
    )
}
