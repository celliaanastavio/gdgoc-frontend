import FormatsOverview from '../components/sections/overview/FormatsOverview'
import JourneySection from '../components/sections/overview/JourneySection'
import OutcomesTable from '../components/sections/overview/OutcomesTable'
import OverviewHero from '../components/sections/overview/OverviewHero'
import SectionNav from '../components/sections/overview/SectionNav'
import StartingPoint from '../components/sections/overview/StartingPoint'
import TracksOverview from '../components/sections/overview/TracksOverview'
import InvitationBanner from '../components/sections/InvitationBanner'

export default function OverviewPage() {
  return (
    <>
      <OverviewHero />
      <SectionNav />
      <TracksOverview />
      <OutcomesTable />
      <FormatsOverview />
      <JourneySection />
      <StartingPoint />
      <InvitationBanner />
    </>
  )
}
