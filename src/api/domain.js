import config from '../../config/index'

const isProdEnv = /cs1997\.cn/.test(window.location.host)

const csDomain = isProdEnv ? config.build.csDomain : config.dev.csDomain

export default {
  csDomain
}
