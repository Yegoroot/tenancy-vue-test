<template>
  <div class="tenants">
    <h1>Tenant List 📖</h1>
    <div
      v-for="tenant in tenants"
      :key="tenant.id"
    >
      <Tenant
        :key="tenant.id"
        :tenant="tenant"
      />
    </div>
  </div>
</template>

<script>

import Tenant from '@/components/Tenant'

export default {
  name: 'Tenants',
  components: { Tenant },
  computed: {
    tenants() {
      return this.$store.getters.getTenants
    }
  }
}

</script>

<style  scoped>
.tenants {
  margin-bottom: 80px;
}
.tenants__create {
  bottom: 50px;
  position: fixed;
  right: 50px;
}

</style>

