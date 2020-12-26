
export default {
  state: {
    tenancies: [] 
  },
  getters: {
    getTenancies: state => state.tenancies || [],
    getTenancy: state => id => {
      const tenancy = state.tenancies.find(c => c.id == id ) || {}
      console.log('sdsd', state, id, state.tenancies)
      localStorage.setItem('currentTenancy', JSON.stringify(tenancy))
      return tenancy
    }
  },
  actions: {
    setTenancies({ commit }, payload) {
      commit('SET_TENANCIES', payload)
    },
    deleteTenancy({ commit }, payload) {
      commit('DELETE_TENACY', payload)
    },
    saveTenancy({ commit }, payload) {
      commit('SAVE_TENACY', payload)
    },
    createTenancy({ commit }, payload) {
      commit('CREATE_TENACY', payload)
    }
  },
  mutations: {
    SET_TENANCIES(state, tenancies) {
      state.tenancies = tenancies
    } ,
    DELETE_TENACY(state, id) {
      state.tenancies = state.tenancies.filter((el)=> el.id !== id)
    },
    SAVE_TENACY(state, tenancy) {
      state.tenancies = state.tenancies.map(c=> {
        if (c.id === tenancy.id) {
          return tenancy
        } 
        return c
      })
    },
    CREATE_TENACY(state, newTenant) {
      state.tenancies.push(newTenant)
    }
  }

}
