<template>
  <div class="home">
    <TextEditor />
    <Web3Store />
    <UsersRooms />

     <!-- IpfsInfo /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from '@/views/TextEditor.vue'
import UsersRooms from '@/views/UsersRooms.vue'
import Web3Store from '@/components/Web3Store.vue'



/*  import IpfsInfo from '@/components/IpfsInfo.vue'
 */
export default {
  name: 'HomeView',
  components: {
    TextEditor,
    UsersRooms,
    Web3Store,
    /* IpfsInfo */
  }
}
</script>
