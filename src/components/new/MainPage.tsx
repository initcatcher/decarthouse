'use client'

import dynamic from 'next/dynamic'
import Header from './Header'
import Hero from './Hero'
import TopNavigation from './TopNavigation'
import ConceptSection from './ConceptSection'
import MedicalGuideSection from './MedicalGuideSection'
import NewsSection from './NewsSection'
import DoctorSection from './DoctorSection'
import Footer from './Footer'

// Splash screen component
const SplashScreen = dynamic(() => import('./SplashScreen'), { ssr: false })

export default function MainPage() {
  return (
    <>
      <SplashScreen />
      <div className="contents-cov">
        <Header />
        <Hero />
        <TopNavigation />

        <ConceptSection />
        <MedicalGuideSection />
        {/* <NewsSection /> */}
        <DoctorSection />

        <Footer />
      </div>
    </>
  )
}
