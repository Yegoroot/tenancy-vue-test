<template>
  <div class="tenant">
    <div class="tenant__items">
      <div
        v-for="(val, key) in tenant"
        :key="key"
        :class="`tenant__${key}`"
      >
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tenant',
  props: {
    tenant: { type: Object, default: ()=> {} }
  }
}
</script>

<style >
.tenant {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #cccccc30;
  padding: 30px;
}
.tenant:hover {
  background: #42b98305;
}
.tenant__items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  flex-grow: 1;
}
.tenant__items > div{padding: 16px}
.tenant__name {
  font-weight: bold;
}
.tenant__lastName {
  font-weight: bold;
}
</style>