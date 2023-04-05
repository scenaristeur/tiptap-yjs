<template lang="">
    <div id="ariane">
        <div v-if="step != null">
         <a :href="'https://ipfs.io/ipfs/'+ step.cid.path"
             target="_blank">
             ...{{step.cid.path.slice(-10)}}
            </a>
            <web3-store />
        </div>
    </div>
</template>
<script>
import Web3Store from '@/components/Web3Store.vue'

export default {
    name: "ArianeHistory",
    components: {
        Web3Store
  },
    watch: {
        step() {
            console.log(this.step)
            console.log("path: ", this.step.cid.path, this.step.room)
        }
    },
    computed: {
        step() {
            return this.$store.state.step
        },
    }
}
</script>
