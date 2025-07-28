'use client'

import Header from './Header'
import Hero from './Hero'
import TopNavigation from './TopNavigation'
import ConceptSection from './ConceptSection'
import MedicalGuideSection from './MedicalGuideSection'
import DoctorSection from './DoctorSection'

// Splash screen component
// const SplashScreen = dynamic(() => import('./SplashScreen'), { ssr: false })

export default function MainPage() {
  return (
    <>
      {/* <SplashScreen /> */}
      <div className="contents-cov">
        <Header />
        <Hero />
        <TopNavigation />

        <ConceptSection />
        <MedicalGuideSection />
        {/* <NewsSection /> */}
        <div id="doctor">
          <DoctorSection />
        </div>

        {/* <Footer /> */}
      </div>
    </>
  )
}
