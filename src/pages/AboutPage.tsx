import AboutHero from '../components/sections/about/AboutHero'
import CommitmentBanner from '../components/sections/about/CommitmentBanner'
import PurposeSection from '../components/sections/about/PurposeSection'
import RolesSection from '../components/sections/about/RolesSection'
import ValuesSection from '../components/sections/about/ValuesSection'
import InvitationBanner from '../components/sections/InvitationBanner'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PurposeSection />
      <ValuesSection />
      <RolesSection />
      <CommitmentBanner />
      <InvitationBanner />
    </>
  )
}