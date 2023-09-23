<template>
  <div>Rooms : {{ rooms }}</div>
  <div>awareness : {{ awareness }}</div>
  <div ref="graph"></div>
</template>

<script>
import ForceGraph3D from "3d-force-graph";

import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";

export default {
  name: "ThreeView",
  props: ["rooms"],
  data() {
    return {
      nodes: [],
      links: [],
      coreYdoc: null,
    };
  },
  created() {
    this.coreYdoc = new Y.Doc();
    this.roomsYmap = this.coreYdoc.getMap("rooms");
    this.coreProvider = new HocuspocusProvider({
      //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
      url: "wss://hocus-noosphere.glitch.me/", //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
      // parameters: {
      //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
      // },
      name: "noosphere",
      document: this.coreYdoc,
    });
    this.$store.commit("setRooms", this.roomsYmap);
  },
  mounted() {
    // Random tree
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1)),
        })),
    };

    const Graph = ForceGraph3D()(this.$refs.graph)
      .graphData(gData)
      .height(480)
      .width(480)
      .onNodeClick((node) => {
        console.log(node);
      });
    console.log(Graph);
  },
  methods: {
    showRoom(r) {
      console.log(r);
      this.$store.commit("setRoom", r);
    },
  },
  watch: {
    rooms() {
      //let rooms = Array.from(this.coreYdoc.getMap("rooms").values());
      console.log("rooms", this.rooms);
      // for (const [key, value] of Object.entries(rooms.toJSON())) {
      //   console.log(`EFEEFE ${key}: ${value}`);
      // }
      // var next;
      // while (((next = rooms.next()), !next.done)) {
      //   console.log("VAl", next.value);
      // }
    },
    users(u) {
      console.log(Array.from(u));
      console.log("users", u);
    },
    awareness() {
      console.log("aware", this.awareness);
    },
  },
  computed: {
    room() {
      return this.$store.state.room;
    },
    user() {
      return this.$store.state.user;
    },
    // rooms() {
    //   return this.$store.state.rooms;
    // },
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
