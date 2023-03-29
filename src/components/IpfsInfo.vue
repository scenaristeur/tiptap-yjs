<template>
  <div>
    <div>{{ status }}</div>
    <div v-if="online" class="ipfs-info">
      <!--     <h3>
        ID: <span id="ipfs-info-id">{{ id }}</span>
      </h3> -->
      <small>
        Agent version: <span id="ipfs-info-agent">{{ agentVersion }}</span>
      </small>
      <ariane-history />
    </div>
  </div>
</template>
  
<script>

import * as IPFS from 'ipfs-core'
import ArianeHistory from '@/components/ArianeHistory.vue'



export default {
  name: "IpfsInfo",
  components: {
    ArianeHistory
  },
  data: function () {
    return {
      ipfs: null,
      status: "Connecting to IPFS...",
      id: "",
      agentVersion: "",
      online: false
    };
  },
  created: async function () {

  },
  mounted: async function () {
    this.ipfs = await IPFS.create()
    this.$store.commit('setIpfs', this.ipfs)
    console.log("ipfs", this.ipfs)
    this.getIpfsNodeInfo();
  },
  methods: {
    async getIpfsNodeInfo() {
      try {
        // Await for ipfs node instance.
        //const ipfs = await this.$ipfs;
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const { agentVersion, id } = await this.ipfs.id();
        this.agentVersion = agentVersion;
        this.id = id;
        // Set successful status text.
        this.status = "Connected to IPFS =)";
        this.online = this.ipfs.isOnline();

        const cid1 = await this.ipfs.add('Hello world')
        console.info(cid1.path)


      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`;
      }
    }
  }
};
</script>