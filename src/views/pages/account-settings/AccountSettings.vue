<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs
      v-model="tab"
      show-arrows
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.icon"
      >
        <v-icon
          size="20"
          class="me-3"
        >
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <account-settings-account
          :username="accountSettingData.account.username"
          :firstname="accountSettingData.account.firstname"
          :lastname="accountSettingData.account.lastname"
          :email="accountSettingData.account.email"
          :role="accountSettingData.account.role"
          :status="accountSettingData.account.status"
        ></account-settings-account>
      </v-tab-item>

      <v-tab-item>
        <account-settings-security></account-settings-security>
      </v-tab-item>

      <v-tab-item>
        <account-settings-info
          :information-data="accountSettingData.information"
        ></account-settings-info>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline, mdiInformationOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

// demos
import AccountSettingsAccount from './AccountSettingsAccount.vue'
import AccountSettingsSecurity from './AccountSettingsSecurity.vue'
import AccountSettingsInfo from './AccountSettingsInfo.vue'
import axiosService from '@/axios/AxiosService'

export default {
  components: {
    AccountSettingsAccount,
    AccountSettingsSecurity,
    AccountSettingsInfo,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      {
        title: 'Account',
        icon: mdiAccountOutline,
      },
      {
        title: 'Security',
        icon: mdiLockOpenOutline,
      },
      {
        title: 'Info',
        icon: mdiInformationOutline,
      },
    ]

    return {
      tab,
      tabs,
      icons: {
        mdiAccountOutline,
        mdiLockOpenOutline,
        mdiInformationOutline,
      },
    }
  },
  data() {
    return {
      accountSettingData: {
        account: {
          avatarImg: require('@/assets/images/avatars/1.png'),
          username: 'johnDoe',
          firstname: 'john Doe',
          lastname: 'john Doe',
          email: 'johnDoe@example.com',
          role: 'Admin',
          status: 'Active',
        },
        information: {
          bio: 'The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scaLabel 😀, and lightning 😍 fast search and discovery experiences.',
          birthday: 'February 22, 1995',
          phone: '954-006-0844',
          website: 'https://themeselection.com/',
          country: 'USA',
          languages: ['English', 'Spanish'],
          gender: 'male',
        },
      },
    }
  },
  beforeCreate() {
    axiosService.getAccountSettings()
      .then(resp => {
        this.accountSettingData.account.username = resp.data.username
        this.accountSettingData.account.firstname = resp.data.firstName
        this.accountSettingData.account.lastname = resp.data.lastName
        this.accountSettingData.account.email = resp.data.email
        this.accountSettingData.account.role = resp.data.status
        this.accountSettingData.account.status = resp.data.name
        console.log(resp)
        console.log(this.accountSettingData.account)
      })
  },
}
</script>
