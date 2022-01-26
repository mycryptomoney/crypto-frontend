<template>
  <div>
    <h1>Your wallets</h1>
    <div class="row">
      <Wallet v-for="wallet in wallets" :key="wallet.id" :wallet="wallet"/>
    </div>
  </div>
</template>

<script>
import Wallet from "./Wallet";
import axiosService from '@/axios/AxiosService'

export default {
  name: 'Wallets',
  components: {
    Wallet
  },
  data() {
    return {
      wallets: []
    }
  },

  beforeCreate(){
    axiosService.getUserWallets().then(response => {
      this.wallets = response.data;
    })
  },
}
</script>

<style scoped>

</style>
