<template>
  <div>awareness : {{ awareness }}</div>
  <div ref="graph"></div>
  <hr />

  <!-- <div>Rooms : {{ rooms }}</div> -->
  <hr />
  {{ room }}
  <hr />
  {{ users }}
  <hr />
  {{ user }}
</template>

<script>
import ForceGraph3D from "3d-force-graph";
import { applyUpdateV2 } from "yjs";

// import * as Y from "yjs";
// import { HocuspocusProvider } from "@hocuspocus/provider";

export default {
  name: "ThreeView",
  //props: ["rooms"],
  data() {
    return {
      nodes: [],
      links: [],
      coreYdoc: null,
      Graph: null,
    };
  },
  created() {
    // const gData = {
    //   nodes: [],
    //   links: [],
    // };
  },
  mounted() {
    // Random tree
    // const N = 300;
    // const gData = {
    //   nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    //   links: [...Array(N).keys()]
    //     .filter((id) => id)
    //     .map((id) => ({
    //       source: id,
    //       target: Math.round(Math.random() * (id - 1)),
    //     })),
    // };

    this.Graph = ForceGraph3D()(this.$refs.graph)
      //.graphData(gData)
      .nodeAutoColorBy("group")
      //.linkAutoColorBy("name")
      .height(480)
      .width(480)
      .onNodeClick((node) => {
        console.log(node);
        if (node.type == "room") {
          this.$store.commit("setRoom", node);
        }
      });
    console.log(this.Graph);

    // this.coreYdoc = new Y.Doc();
    // this.roomsYmap = this.coreYdoc.getMap("rooms");
    // this.coreProvider = new HocuspocusProvider({
    //   //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
    //   url: "wss://hocus-noosphere.glitch.me/", //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
    //   // parameters: {
    //   //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
    //   // },
    //   name: "noosphere",
    //   document: this.coreYdoc,
    // });
    // this.$store.commit("setRooms", this.roomsYmap);
  },
  methods: {
    showRoom(r) {
      console.log(r);
      this.$store.commit("setRoom", r);
    },
  },
  watch: {
    rooms() {
      let app = this;
      //let rooms = Array.from(this.coreYdoc.getMap("rooms").values());
      console.log("rooms", this.rooms);
      if (this.Graph != null) {
        //let { nodes, links } = this.Graph.graphData();
        for (const [key, value] of Object.entries(this.rooms)) {
          //console.log(`EFEEFE ${key}:`);

          let roomNode = { id: key, group: "room" };
          let exist = this.nodes.find((x) => x.id == roomNode);
          // console.log("exist", exist);
          exist == undefined ? this.nodes.push(roomNode) : "";

          // console.log(value);
          if (value != undefined) {
            //console.log(value.keys());

            value.forEach((v) => {
              // console.log(v);
              let clientId = { id: v.name, name: v.name, group: "user" };
              if (applyUpdateV2.user != null && v.name == app.user.name) {
                clientId.color = "red";
              }

              let exist3 = this.nodes.find((x) => x.id == clientId.id);
              // console.log("exist3", exist3);
              exist3 == undefined ? this.nodes.push(clientId) : "";

              let activeLink = {
                source: clientId.id,
                target: key,
                name: "active",
                color: "red",
                width: 4,
                opacity: 1,
              };

              let activeExist = this.links.find(
                (x) =>
                  x.source == activeLink.source &&
                  x.target == activeLink.target &&
                  x.name == activeLink.name
              );
              //console.log("activeLink", activeLink);
              activeExist == undefined ? this.links.push(activeLink) : "";

              /* 
              !!!!!!!!!!!!!!!!!!!
              
              !!!!!!!!!!!!
              
              suppression temporaire car trop de boucles !!!!!!!!!

              !!!!!!!!!!!!!!!!!!!!!!!!

              !!!!!!!!!!!!!!!!!!
              console.log(v.rooms);
              for (const [id, room] of Object.entries(v.rooms)) {
                let roomNode2 = { id: id, name: room.room, group: "room" };
                let exist2 = this.nodes.find((x) => x.id == roomNode2.id);
                // console.log("exist2", exist2);
                exist2 == undefined ? this.nodes.push(roomNode2) : "";

                let visitedLink = {
                  source: clientId.id,
                  target: id,
                  name: "visited",
                  color: "blue",
                };

                let visitedExist = this.links.find(
                  (x) =>
                    x.source == visitedLink.source &&
                    x.target == visitedLink.target &&
                    x.name == visitedLink.name
                );
                //console.log("visitedLink", visitedLink);
                visitedExist == undefined
                  ? this.links.push(visitedLink) && console.log(visitedExist)
                  : "";
              }
*/

              // for (let [id, room] of v.rooms.toArray()) {
              //   nodes.push({ id: id, name: room.room, group: "room" });
              // }
            });
          }
          // for (let v of value[0]) {
          //   console.log(v);
          // }
        }
        // let {n, links} = this.Graph.graphData()
        // consol
        this.Graph.graphData({ nodes: this.nodes, links: this.links });

        // var next;
        // while (((next = rooms.next()), !next.done)) {
        //   console.log("VAl", next.value);
        // }

        console.log(this.nodes, this.links);
      } else {
        console.log("graph is null");
      }
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
    rooms() {
      return this.$store.state.rooms != null ? this.$store.state.rooms.toJSON() : [];
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
