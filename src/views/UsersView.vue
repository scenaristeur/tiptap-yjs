<template>
  <div>
    User : {{ user }}
    <hr />
    Users: {{ users }}
    <hr />
    COREawareness : {{ COREawareness }}
    <hr />
    EDITORawareness: {{ EDITORawareness }}
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
    COREawareness() {
      return this.$store.state.COREawareness;
    },
    EDITORawareness() {
      return this.$store.state.EDITORawareness;
    },
  },
};
</script>

<style scoped></style>
