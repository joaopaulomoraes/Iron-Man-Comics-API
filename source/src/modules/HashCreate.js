import md5 from 'md5'
import Credentials from '@/config/Credentials'
import TimeStamp from '@/modules/TimeStamp'

const HashCreate = ({
  hash:
    md5(
      TimeStamp.now +
      Credentials.privateKey +
      Credentials.publicKey
    )
})

export default HashCreate
