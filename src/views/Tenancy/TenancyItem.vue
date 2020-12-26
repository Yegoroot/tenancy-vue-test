<template>
  <div class="tenancies">
    <h1> Show tenancy - {{ tenancy.name }} {{ tenancy.lastName }}</h1>
    <div class="tenancy">
      <div
        v-for="(val, key) in tenancy"
        :key="key"
      >
        <span>{{ propertiesToObj[key]?.title }}</span>
        <span>{{ val }} </span>
      </div>
    </div>
  
    <router-link
      :to="`/tenancies/${tenancy.id}/edit`"
      class="button-edit button"
    >
      Edit Tenancy
    </router-link>
  </div>
</template>

<script>
import { propertiesMixin } from '@/mixins/properties'
export default {
  mixins: [propertiesMixin],
  data() {
    return {
      tenancy: this.$store.getters.getTenancy(this.$route.params.id)
    }
  },
  created(){
    console.log(this.propertiesToObj)
  }
}
</script>

<style scoped>
.tenancy {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.tenancy > div {
  display: flex;
  padding: 16px;
  flex-direction: column;
}
.tenancy > div span:first-child {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>