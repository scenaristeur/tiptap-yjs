<template>
  <div>
    User : {{ user }}
    <hr />
    Users: {{ users }}
    <hr />
    Awareness : {{ awareness }}
  </div>
</template>

<script>
export default {
  name: "UsersView",
  computed: {
    user() {
      return this.$store.state.user;
    },

    users() {
      return this.$store.state.users;
    },
    awareness() {
      return this.$store.state.awareness;
    },
  },
};
</script>

<style scoped></style>
