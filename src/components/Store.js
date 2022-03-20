import { mapState } from 'vuex';
import StoreUI from './StoreUI.vue';

export default {
  components: {
    StoreUI,
  },

  data() {
    return {
      price: 1,
      owned: 0,
      collectInterval: '',
      collectSeconds: 1,
      collectProgress: 0,
      progressMs: 20,
      revenuePerStore: .5,
    }
  },

  computed: {
    ...mapState(['bank']),
    collectPercentage() {
      return (this.collectProgress / (this.collectSeconds * 1000)) * 100
    }
  },

  beforeDestroy() {
    clearInterval(this.collectInterval);
  },

  methods: {
    buy() {
      if(this.bank.money < this.price) {
        console.log('you dont have the money for this!');
      }
      else {
        console.log(`trying to buy a ${this.$options.type}`)
        this.owned += 1;
        this.$store.dispatch('bank/buy', { total: this.price })
      }
    },
    collect() {
      if(this.owned == 0) {
        console.log(`you don't own any ${this.$options.type}s yet!`);
        return;
      }
      console.log(`trying to collect a ${this.$options.type}`)

      this.collectInterval = setInterval(() => {
        this.collectProgress += this.progressMs;
        if(this.collectProgress >= this.collectSeconds * 1000) {
          console.log(`collecting a ${this.$options.type}`)
          this.$store.dispatch('bank/collect', { total: this.revenuePerStore * this.owned })
          this.collectProgress = 0;
          clearInterval(this.collectInterval);
        }
      }, this.progressMs);
    }
  }
}