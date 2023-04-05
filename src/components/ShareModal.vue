<template>
    <div>
        <!-- <van-button type="primary">Primary</van-button> -->
        <van-cell title="Share" is-link @click="showPopup" />
        <van-popup v-model:show="show" :style="{ padding: '64px' }">Content</van-popup>

    </div>
</template>

<script>
// import { Button } from 'vant'
import { Popup, Cell } from 'vant';
export default {
    name: 'ShareModal',
    components: {
        // VanButton: Button,
        VanPopup: Popup,
        VanCell: Cell
    },
    data() {
        return {
            show: false
        }
    },
    methods:{
        showPopup(){
            this.show = true
        }
    }
}
</script>