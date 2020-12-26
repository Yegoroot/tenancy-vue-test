<template>
  <div class="tenancies">
    <h1>Tenancy List 📖</h1>
    <div
      v-for="tenancy in tenancies"
      :key="tenancy.id"
    >
      <Tenancy
        :key="tenancy.id"
        :tenancy="tenancy"
        @onDelete="onDelete"
      />
    </div>
    <router-link
      :to="`/tenancies/create`"
      class="tenancys__create button"
    >
      Create New
    </router-link>
  </div>
</template>

<script>

import Tenancy from '@/components/Tenancy'

export default {
  name: 'Tenancies',
  components: { Tenancy },
  computed: {
    tenancies() {
      return this.$store.getters.getTenancies
    }
  },
  methods: {
    onDelete(id) {
      if (confirm('Delete this line'))
        this.$store.dispatch('deleteTenancy', id)
    }
  }
}

</script>

<style  scoped>
.tenancies {
  margin-bottom: 80px;
}
.tenancys__create {
  bottom: 50px;
  position: fixed;
  right: 50px;
}

</style>

