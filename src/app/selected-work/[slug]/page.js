import { notFound } from 'next/navigation'
import AxisFinancePage from '@/app/case-studies/axis-finance/page'
import ArchimedesFinancePage from '@/app/case-studies/archimedes-finance/page'
import BtcPayServerPage from '@/app/case-studies/btcpayserver/page'
import F18PayPage from '@/app/case-studies/f18-pay/page'
import FeltWeatherPage from '@/app/case-studies/felt-weather/page'
import ForgingBlockDashboardPage from '@/app/case-studies/forgingblock-dashboard/page'
import ForgingBlockWebsitePage from '@/app/case-studies/forgingblock-website/page'
import HashboardPage from '@/app/case-studies/hashboard/page'
import IpGeoPage from '@/app/case-studies/ipgeo/page'
import LedgerPage from '@/app/case-studies/ledger/page'
import NatalChartsPage from '@/app/case-studies/natal-charts/page'
import PulseOpsPage from '@/app/case-studies/pulseops/page'
import SignalMapPage from '@/app/case-studies/signalmap/page'
import SocialPublisherPage from '@/app/case-studies/social-publisher/page'
import SMPPage from '@/app/case-studies/smp/page'
import ClientDeskPage from '@/app/case-studies/client-desk/page'
import WalletScrutinyPage from '@/app/case-studies/walletscrutiny/page'
import WorkoutsPage from '@/app/case-studies/workouts/page'
import WorldEarningsPage from '@/app/case-studies/world-earnings/page'
import ZettahashDaoPage from '@/app/case-studies/zettahash-dao/page'
import { selectedWorkProjects } from '@/lib/selected-work-projects'

const pageMap = {
  'zettahash-dao': ZettahashDaoPage,
  'axis-finance': AxisFinancePage,
  'archimedes-finance': ArchimedesFinancePage,
  btcpayserver: BtcPayServerPage,
  'f18-pay': F18PayPage,
  'felt-weather': FeltWeatherPage,
  'forgingblock-dashboard': ForgingBlockDashboardPage,
  'forgingblock-website': ForgingBlockWebsitePage,
  hashboard: HashboardPage,
  ipgeo: IpGeoPage,
  ledger: LedgerPage,
  'natal-charts': NatalChartsPage,
  pulseops: PulseOpsPage,
  signalmap: SignalMapPage,
  'social-publisher': SocialPublisherPage,
  smp: SMPPage,
  'client-desk': ClientDeskPage,
  walletscrutiny: WalletScrutinyPage,
  workouts: WorkoutsPage,
  'world-earnings': WorldEarningsPage,
}

export function generateStaticParams() {
  return selectedWorkProjects.map(({ slug }) => ({ slug }))
}

export default function SelectedWorkSlugPage({ params }) {
  const Page = pageMap[params?.slug]

  if (!Page) {
    notFound()
  }

  return <Page />
}
