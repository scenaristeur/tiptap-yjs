<template>
  <div class="home">
    <!--     <img alt="Vue logo" src="../assets/logo.png"> -->
    <TextEditor />
    <Web3Store />
    <UsersRooms />
    <!-- <UsersRooms /> -->

    <!-- <IpfsInfo /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from '@/views/TextEditor.vue'
import UsersRooms from '@/views/UsersRooms.vue'
import Web3Store from '@/components/Web3Store.vue'

// import UsersRooms from '@/views/UsersRooms.vue'


// import IpfsInfo from '@/components/IpfsInfo.vue'

export default {
  name: 'HomeView',
  components: {
    TextEditor,
    UsersRooms,
    Web3Store,
    // UsersRooms,

    //IpfsInfo
  }
}
</script>
