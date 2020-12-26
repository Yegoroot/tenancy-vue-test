<template>
  <input
    :disabled="disabled"
    type="text"
    class="input"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    @input="onChange"
  >
</template>

<script>

export default {
  props: {
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    name: {},
    value: {},
    input: {
      type: Function
    }
  },
  data(){
    return {
      typeField: 'Input'
    }
  },
  methods: {
    onChange(val) {
      this.$emit('onChange', val)
    }
  }
}
</script>

<style >

</style>