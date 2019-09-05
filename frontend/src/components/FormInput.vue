<template>
  <div class="FormInput">
    <div class="row" v-if="label">
      <label>{{ label }}</label>
    </div>
    <div class="row">
      <input
        class="u-full-width"
        :class="inputClass"
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)" />
      <span class="error" v-if="invalid">{{ errorText }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      label: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        required: true
      },
      placeholder: {
        type: String
      },
      invalid: {
        type: Boolean,
        default: false
      },
      errorText: {
        type: String,
      }
    },
    computed: {
      inputClass () {
        return { 'invalid': this.invalid }
      }
    }
  }
</script>

<style scoped>
.invalid {
  border: 1px solid red;
  outline: 0
}
.error {
  position: relative;
  top: -18px;
  color: red;
  font-size: 13px;
}
</style>