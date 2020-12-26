export const propertiesMixin = {
  data(){
    return {
      properties: this.$store.getters.getProperties
    }
  },
  computed: {
    propertiesToObj() {
      const obj = {}
      this.properties.map( property => obj[property.name] = property )
      return obj
    }
  }
}