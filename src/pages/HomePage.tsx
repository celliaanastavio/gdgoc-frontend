import BelongingBanner from '../components/sections/BelongingBanner'
import FaqSection from '../components/sections/FaqSection'
import FormatsSection from '../components/sections/FormatsSection'
import GettingStartedSection from '../components/sections/GettingStartedSection'
import Hero from '../components/sections/Hero'
import IntroSection from '../components/sections/IntroSection'
import InvitationBanner from '../components/sections/InvitationBanner'
import ProjectSection from '../components/sections/ProjectSection'
import PromiseBar from '../components/sections/PromiseBar'
import TracksSection from '../components/sections/TracksSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseBar />
      <IntroSection />
      <TracksSection />
      <FormatsSection />
      <ProjectSection />
      <GettingStartedSection />
      <BelongingBanner />
      <FaqSection />
      <InvitationBanner />
    </>
  )
}