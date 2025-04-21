"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { cn } from "@/lib/utils"

interface Hero3DProps {
  className?: string
}

export function Hero3D({ className }: Hero3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(2, 2, 5)
    scene.add(directionalLight)

    // Create a group for all objects
    const group = new THREE.Group()
    scene.add(group)

    // Create a cube representing a server
    const serverGeometry = new THREE.BoxGeometry(1, 1.5, 0.5)
    const serverMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.3,
      roughness: 0.4,
    })
    const server = new THREE.Mesh(serverGeometry, serverMaterial)
    server.position.x = -1.5
    group.add(server)

    // Create small cubes representing data/proofs
    const dataGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const dataMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x60a5fa }),
      new THREE.MeshStandardMaterial({ color: 0x34d399 }),
      new THREE.MeshStandardMaterial({ color: 0xa78bfa }),
    ]

    const dataPoints = []
    for (let i = 0; i < 8; i++) {
      const data = new THREE.Mesh(dataGeometry, dataMaterials[i % dataMaterials.length])
      data.position.set((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3)
      data.userData = {
        originalPosition: data.position.clone(),
        speed: 0.01 + Math.random() * 0.02,
        amplitude: 0.1 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      }
      dataPoints.push(data)
      group.add(data)
    }

    // Create a sphere representing the K Framework
    const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32)
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.x = 1.5
    group.add(sphere)

    // Create connecting lines between objects
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.5,
    })

    // Connect server to sphere
    const serverToSpherePoints = []
    serverToSpherePoints.push(server.position.clone())
    serverToSpherePoints.push(sphere.position.clone())
    const serverToSphereGeometry = new THREE.BufferGeometry().setFromPoints(serverToSpherePoints)
    const serverToSphereLine = new THREE.Line(serverToSphereGeometry, lineMaterial)
    group.add(serverToSphereLine)

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      // Animate data cubes
      const time = Date.now() * 0.001
      dataPoints.forEach((data) => {
        const { originalPosition, speed, amplitude, phase } = data.userData
        data.position.y = originalPosition.y + Math.sin(time * speed + phase) * amplitude
        data.rotation.x += 0.01
        data.rotation.y += 0.01
      })

      // Animate server
      server.rotation.y += 0.005

      // Animate sphere
      sphere.rotation.y += 0.01

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameIdRef.current)

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      // Dispose geometries and materials
      serverGeometry.dispose()
      serverMaterial.dispose()
      dataGeometry.dispose()
      dataMaterials.forEach((material) => material.dispose())
      sphereGeometry.dispose()
      sphereMaterial.dispose()
      serverToSphereGeometry.dispose()
      lineMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className={cn("w-full h-[400px] md:h-[500px]", className)} aria-hidden="true" />
}
