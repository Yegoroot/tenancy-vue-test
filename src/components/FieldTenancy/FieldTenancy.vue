<template>
  <div
    class="field"
  > 
    <component 
      :is="typeField"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="onChange"
    />
  </div>
</template>

<script>
import Input from '@/components/FieldTenancy/Input'
export default {
  components: {
    Input
  },
  props: {
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    name: {},
    value: { },
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
      // const target = {
      //   value: val.target.value,
      //   name: this.name
      // }
      this.$emit('onChange', val)
    }
  }
}
</script>

<style >

</style>