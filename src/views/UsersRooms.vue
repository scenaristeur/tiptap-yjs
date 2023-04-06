<template>
  <div class="">
  {{awareness}} :  {{user}} /   {{room}}
    <hr>
    {{users}}

    <hr>

    {{rooms}}
    <!-- <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="Finished"
    @load="onLoad"
    >
    <van-cell v-for="u in users" :key="u.user.id" :title="user.name" is-link @click="showUser(user)" />
  </van-list> -->
</div>
</template>

<script>


export default {
  name: 'UsersRooms',
  data(){
    return {

    }
  },
  created(){
    // const coreYdoc = new Y.Doc()
    // this.roomsYmap = coreYdoc.getMap('rooms')
    // this.coreProvider = new HocuspocusProvider({
    //   //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
    //   url: 'wss://hocus-noosphere.glitch.me/', //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
    //   // parameters: {
    //   //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
    //   // },
    //   name: 'noosphere',
    //   document: coreYdoc,
    // })
    // this.awareness = this.coreProvider.awareness
    // // this.coreProvider.on("awarenessUpdate", ({ states }) => {
    // //   console.log("states", states);
    // // });
    //
    //
    // // You can observe when a user updates their awareness information
    // this.awareness.on('change', changes => {
    //   console.log('changes', changes)
    //   // Whenever somebody updates their awareness information,
    //   // we log all awareness information from all users.
    //   console.log(Array.from(this.awareness.getStates().values()))
    //   this.users = Array.from(this.awareness.getStates().values())
    // })

    // // Method 2: Define Y.Map that can be included into the Yjs document
    // const ymapNested = new Y.Map()
    //
    // // Nested types can be included as content into any other shared type
    // this.roomsYmap.set('my nested map', ymapNested)

    // Common methods
    // this.roomsYmap.set('prop-name', 'value') // value can be anything json-encodable
    // let val = this.roomsYmap.get('prop-name') // => 'value'
    // console.log("ROOMS.VAL",val)

    // const ydoc = new Y.Doc()
    // this.provider = new HocuspocusProvider({
    //   //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
    //   url: 'wss://hocus-noosphere.glitch.me/', //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
    //   // parameters: {
    //   //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
    //   // },
    //   name: 'noosphere',
    //   document: ydoc,
    // })
    // this.users = ydoc.getMap('users')
    // console.log("users", this.users)
    // let user = {id: 1, name: "kugi", date: Date.now}
    // this.users.set(user.id, user )
    // let u = this.users.get(1)
    // console.log(u)

  },
  methods:{
    // showUser(u){
    //   console.log(u.id, u.name)
    // },
    // add(){
    //
    // }
  },
  watch: {
    // room(){
    //   console.log('room', this.room)
    // },
    // user(){
    //   this.awareness.setLocalStateField('user', this.user)
    // }
  },
  computed:{
    room(){
      return this.$store.state.room
    },
    user(){
      return this.$store.state.user
    },
    rooms(){
      return this.$store.state.rooms
    },
    users(){
      return this.$store.state.users
    },
    awareness(){
      return this.$store.state.awareness
    }
  }
}
</script>

<style lang="css" scoped>
. {

}
</style>
