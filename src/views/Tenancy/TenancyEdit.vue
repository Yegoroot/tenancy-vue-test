<template>
  <div class="tenancies">
    <h1> {{ title }} </h1>
    <div v-if="isEdited">
      <div
        v-for="(val, key) in tenancy" 
        :key="key"
      >
        <FieldTenancy
          :name="key"
          :disabled="propertiesToObj[key]?.primary"
          :placeholder="propertiesToObj[key]?.title"
          :value="val"
          @onChange="onChange"
        />
      </div>
    </div>
    <div v-if="!isEdited">
      <div
        v-for="(val, key) in propertiesToObj"
        :key="key"
      >
        <FieldTenancy
          :name="key"
          :disabled="propertiesToObj[key]?.primary"
          :placeholder="propertiesToObj[key]?.title"
          :value="newTenant[propertiesToObj[key]?.name]"
          @onChange="onChangeNew"
        />
      </div>
    </div>
    <div>
      <div
        v-if="isEdited"
        class="button"
        @click="onReset"
      >
        Reset to previous
      </div>
      <div
        v-if="isEdited"
        class="button button-edit"
        @click="onSave"
      >
        Save Changes
      </div>
      <div
        v-else
        class="button button-edit"
        @click="onCreate"
      >
        Create Tenancy
      </div>
    </div>
  </div>
</template>

<script>
import FieldTenancy from '@/components/FieldTenancy/FieldTenancy'
import { propertiesMixin } from '@/mixins/properties'

export default {
  components: { FieldTenancy },
  mixins: [propertiesMixin],
  data() {
    return {
      tenancy: this.$store.getters.getTenancy(this.$route.params.id),
      isEdited: this.$route.params.id ? true : false,
      newTenant: {
        id: Date.now()
      }
    }
  },
  computed: {
    title() {
      return this.isEdited ? 'Edit Tenancy' : 'Create new Tenancy'
    }
  },
  methods: {
    onChange(val){
      const { name, value } = val.target 
      this.tenancy[name] = value
    },
    onChangeNew(val){
      const { name, value } = val.target 
      this.newTenant[name] = value
    },
    onSave() {
      this.$store.dispatch('saveTenancy', this.tenancy)
      this.$router.push('/tenancies') // @FIXME - need push after changes
    },
    onCreate() {
      this.$store.dispatch('createTenancy', this.newTenant)
      this.$router.push('/tenancies') // @FIXME - need push after create
    },
    onReset() {
      this.tenancy = JSON.parse(localStorage.getItem('currentTenancy'))
    }
  }
}
</script>

<style >
.button-edit {
  margin-left: 8px;
}
</style>