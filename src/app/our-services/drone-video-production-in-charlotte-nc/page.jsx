import MyGallery from '@/components/MyGallery'
import DroneContent from '@/components/services/drone-video-production-in-charlotte-nc/DroneContent'
import DroneDetails from '@/components/services/drone-video-production-in-charlotte-nc/DroneDetails'
import DroneRequestForm from '@/components/services/drone-video-production-in-charlotte-nc/DroneRequestForm'
import DroneServiceHero from '@/components/services/drone-video-production-in-charlotte-nc/DroneServiceHero'
import DroneUseCases from '@/components/services/drone-video-production-in-charlotte-nc/DroneUseCases'
import Map from '@/components/services/drone-video-production-in-charlotte-nc/Map'
import React from 'react'

export default function page() {
  return (
    <div>
        <DroneServiceHero></DroneServiceHero>
        <DroneDetails></DroneDetails>
        <DroneContent></DroneContent>
        
        <DroneUseCases></DroneUseCases>
        <MyGallery></MyGallery>
        <DroneRequestForm></DroneRequestForm>
        <Map></Map>
    </div>
  )
}
