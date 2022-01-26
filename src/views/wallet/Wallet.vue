<template>
  <v-card
      class="mx-auto my-12"
      width="300"
      height="300"
      elevation="7"
  >
    <template slot="progress">
      <v-progress-linear
          color="orange"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        v-if="wallet.currency.image"
        height="80"
        width="80"
        :src = wallet.currency.image
        @error="imageUrlAlt"
        class="mx-auto mt-5"
    ></v-img>
    <v-img
        v-else
        height="80"
        width="80"
        :src = coin_img
        @error="imageUrlAlt"
        class="mx-auto mt-5"
    ></v-img>

    <v-card-title class="justify-center">{{wallet.currency.name}}</v-card-title>

    <v-card-text>
      <h2>{{wallet.amount}}  {{wallet.currency.abbreviation}}</h2>
      <div>{{wallet.amount * wallet.currency.value}}  $</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
          color="primary"
          link
          @click="$router.push({ path: '/subjectInfo/'+wallet.id })"
      >
        Use
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  name: "Wallet",
  props: {
    wallet: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
        coin_img: require('@/assets/images/logos/digital_coin.png')
      }
  },
  methods: {
    imageUrlAlt(event) {

      event.target.src = '@/assets/images/logos/digital_coin.png'
    }
  }
}
</script>

<style scoped>
</style>