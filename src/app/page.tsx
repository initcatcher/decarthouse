import FeatureSection1 from "@/components/FeatureSection1";
import FeatureSection2 from "@/components/FeatureSection2";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import Profile from "@/components/Profile";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main className="space-y-16 sm:space-y-24">
      <Hero />
      <FeatureSection1 />
      <FeatureSection2 />
      <Sections />
      <Notice />
      <Profile />
      <Footer />
    </main>
  );
}
