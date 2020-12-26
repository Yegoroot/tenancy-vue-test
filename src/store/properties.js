export default {
  state: {
    properties: []
  },
  getters: {
    getProperties: state => state.properties || []
  },
  actions: {
    setProperties({ commit }, payload) {
      commit('SET_PROPERTIES', payload)
    },
    createProperty({ commit }, payload) {
      commit('CREATE_PROPERTY', payload)
    }
    
  },
  mutations: {
    SET_PROPERTIES(state, payload) {
      state.properties = payload
    } ,
    CREATE_PROPERTY(state, property) {
      console.log(property)
      state.properties.push(property)
    } 
  }
}