<template>
  <div class="tenancy">
    <div class="tenancy__items">
      <div
        v-for="(val, key) in tenancy"
        :key="key"
        :class="`tenancy__${key}`"
      >
        <b>   {{ propertiesToObj[key]?.title }}   </b>
        {{ val }}
      </div>
    </div>
    <div class="tenancy__actions">
      <span
        class="tenancy__edit"
        role="img"
        aria-label="show"
      > <router-link :to="`/tenancies/${tenancy.id}`">👈</router-link></span>
      <span
        class="tenancy__edit"
        role="img"
        aria-label="edit"
      > <router-link :to="`/tenancies/${tenancy.id}/edit`">✏️</router-link></span>
      <span
        class="tenancy__delete"
        role="img"
        aria-label="delete"
        @click="() => deleteTenancy(tenancy.id)"
      >❌</span>
    </div>
  </div>
</template>

<script>
import { propertiesMixin } from '@/mixins/properties'
export default {
  name: 'Tenancy',
  mixins: [propertiesMixin],
  props: {
    tenancy: { type: Object, default: ()=> {} },
    onDelete: { type: Function, default: ()=> console.warn('default props func') }
  },
  emits: ['onDelete'],
  methods: {
    deleteTenancy(id) {
      this.$emit('onDelete', id)
    }
  }
    
}
</script>

<style >
.tenancy {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #cccccc30;
  padding: 30px;
}
.tenancy:hover {
  background: #42b98305;
}
.tenancy__items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  flex-grow: 1;
}
.tenancy__items > div{padding: 16px}
.tenancy__name {
  font-weight: bold;
}
.tenancy__lastName {
  font-weight: bold;
}
.tenancy__actions {
  padding: 10px;
  width: 150px;
  flex-direction: row;

}
.tenancy__actions span {
  padding: 8px;
  cursor: pointer;
  border: solid 1px #ccc0;
  border-radius: 6px;
}
.tenancy__delete {
  margin-left: 4px;
}
.tenancy__actions span:hover {
  border: solid 1px #ccc;
}
</style>