<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <TextEditor />
        </b-col>
        <b-col>
          <Web3Store />
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <ThreeView />
        </b-col>
        <b-col>
          <UsersRooms />
        </b-col>
      </b-row>
    </b-container>

    <!-- IpfsInfo /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import TextEditor from "@/views/TextEditor.vue";
import UsersRooms from "@/views/UsersRooms.vue";
import Web3Store from "@/components/Web3Store.vue";
import ThreeView from "@/views/ThreeView.vue";

/*  import IpfsInfo from '@/components/IpfsInfo.vue'
 */
export default {
  name: "HomeView",
  components: {
    TextEditor,
    UsersRooms,
    Web3Store,
    ThreeView,

    /* IpfsInfo */
  },
};
</script>
