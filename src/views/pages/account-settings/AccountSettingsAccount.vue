<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="username"
              label="Username"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="firstname"
              label="Firstname"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="lastname"
              label="Lastname"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="role"
              dense
              label="Status"
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
          </v-col>

          <!-- alert -->

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-4"
              @click="saveChanges(username, fio, email, role)"
            >
              Save changes
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-4"
              type="reset"
              @click="cancel"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axiosService from '@/axios/AxiosService'

export default {
  props: ['username', 'firstname', 'lastname', 'email', 'role', 'state'],
  methods: {
    cancel() {
      this.$router.push('/dashboard')
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/pages/login')
    },
    saveChanges(username, fio, email, state) {
      try {
        axiosService.editAccountDetails(username, fio, email, state)
        this.logout()
      } catch (ext) {
        console.log(ext)
      }
    },
  },
}
</script>
