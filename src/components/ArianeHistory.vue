<template lang="">
    <div id="ariane">
        <div v-if="step != null">
            History<br> 
             cid:
            <a 
            :href="'https://ipfs.io/ipfs/'+ step.cid.path"
             target="_blank">
             ...{{step.cid.path.slice(-10)}}
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArianeHistory",
    watch: {
        step() {
            console.log(this.step)
            console.log("path: ", this.step.cid.path, this.step.room)
            //this.path = this.cid.path
        }
    },
    computed: {
        step() {
            return this.$store.state.step
        },
    }

}
</script>
<style >
#ariane {
    color: white
}
</style>