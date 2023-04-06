<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png"> -->
  <TextEditor />
  <UsersRooms />
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from '@/views/TextEditor.vue'
import UsersRooms from '@/views/UsersRooms.vue'

export default {
  name: 'HomeView',
  components: {
    TextEditor,
    UsersRooms
  }
}
</script>
