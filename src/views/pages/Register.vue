<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>
            <h2 class="text-2xl font-weight-semibold">
              Business-Service
            </h2>
          </router-link>
        </v-card-title>
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Adventure starts here 🚀
          </p>
          <p class="mb-2">
            Make your app management easy and fun!
          </p>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="JohnDoe"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="firstName"
              outlined
              label="First name"
              placeholder="JohnDoe"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              outlined
              label="Last name"
              placeholder="JohnDoe"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <v-checkbox
              hide-details
              class="mt-1"
            >
              <template #label>
                <div
                  class="d-flex align-center flex-wrap"
                  @click="agree = !agree"
                >
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy
                    &amp; terms</a>
                </div>
              </template>
            </v-checkbox>
            <v-btn
              block
              color="primary"
              class="mt-6"
              @click="register(username, email, password, firstName, lastName)"
            >
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Already have an account?
          </span>
          <router-link :to="{ name:'pages-login' }">
            Sign in instead
          </router-link>
        </v-card-text>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import axiosService from '@/axios/AxiosService'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const text = ref('')
    const timeout = ref('')
    const snackbar = false
    const agree = false

    return {
      isPasswordVisible,
      username,
      email,
      agree,
      password,
      firstName,
      lastName,
      text,
      timeout,
      snackbar,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
  methods: {
    async register(username, email, password, firstName, lastName) {
      if (this.agree === true) {
        try {
          const resp = await axiosService.register(username, email, password, firstName, lastName)
            .catch(error => {
              console.log(error.response.data.message)
              this.snackbar = true
              this.text = error.response.data.message
              this.timeout = 2000
              // eslint-disable-next-line no-throw-literal
              throw 'Error'
            })
          console.log(resp)
          this.snackbar = true
          this.text = 'Success'
          this.timeout = 2000
          setTimeout(() => {
            this.$router.push('/pages/login')
          }, 3000)
        } catch (ex) {
          console.log(ex)
        }
      } else {
        this.snackbar = true
        this.text = 'You should be agree with our terms'
        this.timeout = 2000
      }
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
