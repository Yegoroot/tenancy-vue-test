
export default {
  state: {
    tenants: [] 
  },
  getters: {
    getTenants: state => state.tenants || [],
    getTenant: state => id => state.tenants.find(c => c.id == id ) || {}
  },
  actions: {
    setTenants({ commit }, payload) {
      commit('SET_TENANTS', payload)
    }
    // deleteTenant({ commit }, payload) {
    //   commit('DELETE_TENANT', payload)
    // },
    // saveTenant({ commit }, payload) {
    //   commit('SAVE_TENANT', payload)
    // },
    // createTenant({ commit }, payload) {
    //   commit('CREATE_TENANT', payload)
    // }
  },
  mutations: {
    SET_TENANTS(state, tenants) {
      state.tenants = tenants
    } 
    // DELETE_TENANT(state, id) {
    //   state.tenants = state.tenants.filter((el)=> el.id !== id)
    // },
    // SAVE_TENANT(state, tenant) {
    //   state.tenants = state.tenants.map(c=> {
    //     if (c.id === tenant.id) {
    //       return tenant
    //     } 
    //     return c
    //   })
    // },
    // CREATE_TENANT(state, newTenant) {
    //   state.tenants.push(newTenant)
    // }
  }

}
