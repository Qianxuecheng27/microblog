<template>
  <div id="login">
    <div class="container">
        <div class="four offset-by-two columns">
          <SmartForm
            :title="title"
            :operation="operation"
            :valid="valid"
            :tips="tips">
            <FormInput
              name="username"
              v-model="username"
              placeholder="用户名"/>
            <FormInput
              type="password"
              name="passoword"
              v-model="password"
              placeholder="密码"/>
            <template v-if="mode === 'signup'">
              <FormInput
                type="password"
                name="password2"
                v-model="password2"
                placeholder="确认密码"
                :invalid="retypePasswordError"
                errorText="密码不一致"/>
              <FormInput
                type="email"
                name="email"
                v-model="email"
                placeholder="E-mail"/>
            </template>
            <template slot="actions">
              <br>
              <template v-if="mode === 'login'">
                <div class="row">
                  <button
                    type="button" 
                    class="four columns"
                    @click="switchMode">
                    注册
                  </button>
                  <button 
                    class="button-primary four offset-by-four columns"
                    type="submit"
                    :disabled="!valid">
                    登录
                  </button>
                </div>
              </template>
              <template v-else-if="mode === 'signup'">
                <div class="row">
                  <button
                  class="four columns"
                  type="button"
                  @click="switchMode">
                  返回
                </button>
                <button
                  class="button-primary four offset-by-four columns"
                  type="submit"
                  :disabled="!valid">
                  注册
                </button>
                </div>
              </template>
            </template>
          </SmartForm>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        mode: 'login',
        title: '用户登录',
        username: '',
        password: '',
        password2: '',
        email: '',
        tips: '',
      }
    },
    computed: {
      retypePasswordError () {
        if (this.password2 === '') {
          return false
        } else {
          return this.password2 && this.password !== this.password2
        }
      },
      signupValid () {
        return this.password2 && this.email && !this.retypePasswordError
      },
      valid () {
        return this.username && this.password &&
        (this.mode !== 'signup' || this.signupValid)
      }
    },
    methods: {
      async operation (){
        await this[this.mode]()
      },
      async login () {
        try {
          const response = await this.$axios.post('/api/login', {
            username: this.username,
            password: this.password
          })
          console.log(response)
          if (response.data.flag === 'success') {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            let user = localStorage.getItem('user')
            this.$store.dispatch('login', JSON.parse(user))
            this.$router.push({ name: 'index' })
          } else {
            this.tips = response.data.message
          }
        } catch (error) {
          throw error
        }
      },
      async signup () {
        try {
          const response = await this.$axios.post('/api/signup', {
            username: this.username,
            password: this.password,
            email: this.email
          })
          console.log(response)
          if (response.data === 'success') {
            this.switchMode()
          } else {
            this.tips = response.data
          }
        } catch (error) {
          throw error
        }
      },
      switchMode () {
        switch (this.mode) {
          case 'login': 
            this.title = "用户注册"
            this.mode = 'signup'
            break
          case 'signup': 
            this.title = "用户登录"
            this.mode = 'login'
            break
        }
        this.username = ''
        this.password = ''
        this.password2 = ''
        this.email = ''
        this.tips = ''
      },
    },
  }
</script>

<style scoped>
.container {
  margin-top: 20vh
}
</style>