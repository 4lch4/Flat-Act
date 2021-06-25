import { getInput, setOutput, setFailed } from '@actions/core'
import GitHub from '@actions/github'

const main = () => {
  try {
    const nameToGreet = getInput('who-to-greet')
    console.log(`Hello ${nameToGreet}`)

    const time = new Date().toTimeString()

    setOutput('time', time)

    const payload = JSON.stringify(GitHub.context.payload, unescape, 2)
    console.log(`Event payload: ${payload}`)
  } catch (err) {
    setFailed(err)
  }
}

main()
