import { createStore } from 'vuex'
import properties from './properties'
import tenancies from './tenancies'
import tenants from './tenants'

export default createStore({

  modules: {
    properties: {
      ...properties
    },
    tenancies: {
      ...tenancies
    },
    tenants: {
      ...tenants
    }
  }
})
