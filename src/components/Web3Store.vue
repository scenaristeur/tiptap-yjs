<template>
    <hr>
           <span id="web3" v-if="step != null">
          <button @click="get_token">💾 web3</button> 
          <span>
            <input type="checkbox" id="replace" name="replace" disabled/> <!-- checked> -->
            <label for="replace">overwrite</label>
          </span>
          
            <a v-if="rootCid !=null" :href="'https://'+rootCid+'.ipfs.w3s.link/'" target="_blank">last save</a>

           files ({{uploads.length}}): <a href="https://web3.storage/tokens/" target="_blank">5GiB web3 storage</a>  <span v-if="uploads[0] == 'updating'">Updating</span>
            <ul v-else>
                <li v-for="u of uploads" :key="u._id">
                    {{u.name}}, created: {{new Date(u.created).toLocaleString()}}, updated: {{new Date(u.updated).toLocaleString()}},
                    <a :href="'https://'+u.cid+'.ipfs.w3s.link/'+u.name+'.json'" target="_blank">{{u.cid.slice(-10)}}</a>, status: {{u.pins[0].status}}
                </li>
            </ul>
        </span>

</template>
<script>
import { Web3Storage } from 'web3.storage';
export default {
    name: "Web3Store",
    data() {
        return {
            web3_token: localStorage.getItem('web3_token'),
            rootCid: null,
            uploads: []
        }
    },
    created() {
        this.updatePinned()
    },
    watch: {
        step() {
            console.log(this.step)
            console.log("path: ", this.step.cid.path, this.step.room)
        }
    },
    methods: {
        get_token() {
            //console.log(this.web3_token)
            if (this.web3_token == null || this.web3_token.length < 10) {
                this.web3_token = prompt('My web3 token')
                //console.log(this.web3_token)
                if(this.web3_token != null && this.web3_token.length > 9){
                    localStorage.setItem('web3_token', this.web3_token)
                }
           
            }
            this.pin()
        },
        async updatePinned() {
            console.log('update')
            this.uploads = ['updating']
            if (this.web3_token != null) {
                try {
                    let client = new Web3Storage({ token: this.web3_token });
                    const uploads = [];
                    for await (const item of client.list(/*{ maxResults: 20 }*/)) {
                        uploads.push(item);
                    }
                    console.log(uploads)
                    this.uploads = uploads.filter(u => u.name.startsWith('rooms.'))
                } catch (e) {
                    alert(e)
                }
            }
        },
        async pin() {
            console.log("pinning")
            let fileName = this.step.room
            let file = new File([JSON.stringify(this.step.data)], fileName + '.json')
            console.log(file)
            //store.commit('web3/addPinMessage', "[pinning]: "+options.fileName)

            let client = new Web3Storage({ token: this.web3_token });


            const onRootCidReady = rootCid => {
                console.log('-- root cid:', rootCid)
                // store.commit('web3/addPinMessage', "[root cid] " + rootCid)
                this.rootCid = rootCid
                
            }
            const onStoredChunk = chunkSize => {
                console.log(`stored chunk of ${chunkSize} bytes`)
                //store.commit('web3/addPinMessage', "[stored chunk of] " + chunkSize + ' bytes')
            }

            // const rootCid =
            await client.put([file], {
                name: fileName, //+'_'+Date.now(),
                maxRetries: 3,
                onRootCidReady,
                onStoredChunk
            });
            // console.log(rootCid)
            this.updatePinned()
        }
    },
    computed: {
        step() {
            return this.$store.state.step
        },
    }
}
</script>
