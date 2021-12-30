<template>
  <v-card>
    <div class="d-flex flex-sm-row flex-column">
      <div class="flex-grow-1">
        <v-card-title>
          <span class="me-3">Additional profit</span>
          <v-spacer></v-spacer>
          <span class="text-xs text--disabled cursor-pointer">View All</span>
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(data,index) in deposit"
              :key="data.img"
              :class="`d-flex px-0 ${index > 0 ? 'mt-4':''}`"
            >
              <v-img
                contain
                max-height="30"
                max-width="30"
                :src="data.img"
                class="me-3"
              ></v-img>

              <div class="d-flex align-center flex-grow-1 flex-wrap">
                <div class="me-auto pe-2">
                  <h4 class="font-weight-semibold">
                    {{ data.title }}
                  </h4>
                  <span class="text-xs">{{ data.subtitle }}</span>
                </div>

                <span class="font-weight-semibold success--text">{{ data.amount }}</span>
              </div>
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>

      <v-divider
        class="my-sm-5 mx-5"
        :vertical="$vuetify.breakpoint.smAndUp"
      ></v-divider>

      <div class="flex-grow-1">
        <v-card-title>
          <span class="me-3">Withdraw</span>
          <v-spacer></v-spacer>
          <span class="text-xs text--disabled cursor-pointer">View All</span>
        </v-card-title>

        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(data,index) in withdraw"
              :key="data.img"
              :class="`d-flex px-0 ${index > 0 ? 'mt-4':''}`"
            >
              <v-img
                max-height="30"
                max-width="30"
                :src="data.img"
                class="me-3"
              ></v-img>

              <div class="d-flex align-center flex-grow-1 flex-wrap">
                <div class="me-auto pe-2">
                  <h4 class="font-weight-semibold">
                    {{ data.title }}
                  </h4>
                  <span class="text-xs">{{ data.subtitle }}</span>
                </div>

                <span class="font-weight-semibold error--text">{{ data.amount }}</span>
              </div>
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  setup() {
    const deposit = [
      {
        img: require('@/assets/images/logos/gumroad.png'),
        title: 'Subscription',
        subtitle: 'Sell subscriptions',
        amount: '+$4,650',
      },
      {
        img: require('@/assets/images/logos/master.png'),
        title: 'Mastercard partnership',
        subtitle: 'Wallet deposit',
        amount: '+$4,705',
      },
      {
        img: require('@/assets/images/logos/stripe-account.png'),
        title: 'Advertising',
        subtitle: 'iOS and Android Application, website',
        amount: '+$1957',
      },
      {
        img: require('@/assets/images/logos/american-bank.png'),
        title: 'Partnership',
        subtitle: 'Xbox, Apple',
        amount: '+$6,837',
      },
      {
        img: require('@/assets/images/logos/bank-account.png'),
        title: 'Repair service',
        subtitle: 'Fix devices',
        amount: '+$5446',
      },
    ]
    const withdraw = [
      {
        img: require('@/assets/images/logos/google.png'),
        title: 'Google Adsense',
        subtitle: 'Advertising in Google',
        amount: '-$10000',
      },
      {
        img: require('@/assets/images/logos/github.png'),
        title: 'Github Enterprise',
        subtitle: 'Security & compliance',
        amount: '-$1870',
      },
      {
        img: require('@/assets/images/logos/slack.png'),
        title: 'Salary ',
        subtitle: 'Salary plan',
        amount: '-$20500',
      },
      {
        img: require('@/assets/images/logos/digital-ocean-logo.png'),
        title: 'Office and other',
        subtitle: 'Rent + light etc',
        amount: '-$1040',
      },
      {
        img: require('@/assets/images/logos/amazon-web-services-logo.png'),
        title: 'Bank Account',
        subtitle: 'Host money in banks',
        amount: '-$200',
      },
    ]

    return {
      deposit,
      withdraw,
    }
  },
}
</script>
