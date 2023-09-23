<template>
  <div>
    Room : {{ room }}
    <hr />
    Rooms: {{ rooms }}
  </div>
</template>

<script>
export default {
  name: "RoomsView",
  computed: {
    room() {
      return this.$store.state.room;
    },

    rooms() {
      return this.$store.state.rooms;
    },
  },
};
</script>

<style scoped></style>
