import job00Common from '@/utils/jobs/job.00.common'
import job01TMoney from '@/utils/jobs/job.01.Tmoney'
import job02TMoneyTransit from '@/utils/jobs/job.02.TmoneyTransit'

const tabData = [
  {
    name: '공통',
    item: job00Common
  },
  {
    name: '장차법',
    item: job01TMoney
  },
  {
    name: '운송중개플랫폼',
    item: job02TMoneyTransit
  }
]

export default tabData
