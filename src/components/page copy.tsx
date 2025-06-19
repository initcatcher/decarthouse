import FeatureSection1 from '@/components/FeatureSection1'
import FeatureSection2 from '@/components/FeatureSection2'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Notice from '@/components/Notice'
import Profile from '@/components/Profile'
import Sections from '@/components/Sections'
import SmartStore from '@/components/SmartStore'

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <SmartStore />
      <div className="space-y-16 sm:space-y-24">
        <FeatureSection1 />
        <FeatureSection2 />
        <Sections />
        <Notice />
        <Profile />
        <Footer />
      </div>
    </main>
  )
}
