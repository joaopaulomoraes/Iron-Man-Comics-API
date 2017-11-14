import axios from 'axios'
import Credentials from '@/config/Credentials'
import TimeStamp from '@/modules/TimeStamp'
import HashCreate from '@/modules/HashCreate'

const Request = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: TimeStamp.now,
    apikey: Credentials.publicKey,
    hash: HashCreate.hash
  }
})

export default Request
