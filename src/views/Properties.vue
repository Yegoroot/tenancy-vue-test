<template>
  <div class="properties">
    <h1> Properties of Contact 📝</h1>
    <div
      v-for="property in properties"
      :key="property.name"
      class="properties__item"
    >
      <div class="properties__title">
        {{ property.title }}
      </div>
      <div class="properties__name">
        {{ property.name }}
      </div>
    </div>
    <div class="properties__add">
      <input
        type="text"
        class="input"
        placeholder="Name"
        name="name"
        :value="newProperty.name"
        @input="onChange"
      >
      <input
        type="text"
        placeholder="Title"
        class="input"
        name="title"
        :value="newProperty.title"
        @input="onChange"
      >
      <div
        class="button"
        @click="onCreate"
      >
        Create Property
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newProperty: {}
    }
  },
  computed: {
    properties() {
      console.log(this.properties)
      return this.$store.getters.getProperties
    }
  },

  methods: {
    onChange(val) {
      const { name, value } = val.target 
      this.newProperty[name] = value
    },
    onCreate() {
      this.$store.dispatch('createProperty', this.newProperty )
      this.newProperty = {}
    }
  }
}
</script>

<style scoped>
.properties__add {
  margin-top: 40px;
}
.properties__item {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.properties__title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 8px;
}
.properties__name {}

</style>