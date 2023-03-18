<template>
  <div>
    orb
  </div>
</template>

<script>

import IPFS from 'ipfs'
import OrbitDB from 'orbit-db'

export default {
  name: "OrbitManage",
  created(){
    this.init()

  },
  mounted(){

  },
  methods: {
    async init(){
      let db

      try {
        const ipfs = await IPFS.create({
          repo: './orbitdb/examples/ipfs',
          start: true,
          EXPERIMENTAL: {
            pubsub: true,
          },
        })
        const orbitdb = await OrbitDB.createInstance(ipfs, {
          directory: './orbitdb/examples/eventlog'
        })
        db = await orbitdb.eventlog('example', { overwrite: true })
        await db.load()
      } catch (e) {
        console.error(e)
        process.exit(1)
      }
      // const ipfs = await IPFS.create()
      // const orbitdb = await OrbitDB.createInstance(ipfs)
      //
      // // Create / Open a database
      // const db = await orbitdb.log("hello")
    //  await db.load()

      // Listen for updates from peers
      db.events.on("replicated", address => {
        console.log(address, db.iterator({ limit: -1 }).collect())
      })

      // Add an entry
      const hash = await db.add("world")
      console.log(hash)

      // Query
      const result = db.iterator({ limit: -1 }).collect()
      console.log(JSON.stringify(result, null, 2))
    }
  }

}
</script>

<style>

</style>
