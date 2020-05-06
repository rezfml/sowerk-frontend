export default function({ $axios }) {
  $axios.setBaseURL(process.env.API_URL)
  $axios.setHeader('Accept', 'application/json')
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Access-Control-Allow-Origin', '*')

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
