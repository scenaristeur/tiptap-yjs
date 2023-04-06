<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png"> -->
  <TextEditor />
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from '@/views/TextEditor.vue'

export default {
  name: 'HomeView',
  components: {
    TextEditor
  }
}
</script>
