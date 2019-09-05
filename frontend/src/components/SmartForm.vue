<template>
  <div class="smartform">
    <form @submit.prevent="submit">
      <h4>{{ title }}</h4>
      <slot />      
      <div class="error" v-if="tips">
        {{ tips }}
      </div>
      <div class="actions">
        <slot name="actions" />
      </div>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SmartForm',
    props: {
      title: {
        type: String,
        required: true
      },
      operation: {
        type: Function,
        required: true
      },
      valid: {
        type: Boolean,
        required: true
      },
      tips: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: null,
        busy: false
      }
    },
    methods: {
      async submit () {
        if (this.valid && !this.busy) {
          this.error = null,
          this.busy = true
          try {
            await this.operation()
          } catch (e) {
            this.error = e.message
          }
          this.busy = false
        }
      },
    }
  }
</script>
<style scoped>
.error {
  color: red;
}
</style>