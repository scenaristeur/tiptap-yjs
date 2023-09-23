import { createStore } from "vuex";

export default createStore({
  state: {
    ipfs: null,
    step: null,
    room: null,
    user: null,
    rooms: null,
    users: [],
    awareness: null
  },
  getters: {},
  mutations: {
    setEDITORRoom(state,r){
      state.room = r
      console.log(state.room)
      // let userInRoom = state.rooms.getMap(r)
      // userInRoom.set(state.awareness.clientID, state.user)
    },
    setCORERooms(state, r){
      state.rooms = r
      console.log("setRooms",state.rooms)
    },
    setUser(state, u){
      state.user = u
      console.log("SET USER",state.users)
      state.users.set(state.awareness.clientID, state.user)
    },
    setCOREUsers(state, u){
      console.log('setusers',u)
      state.users = u
    },
    // setclientID(state, id){
    //   state.clientID = id
    // },
    setUsersInRoom(state, data){
      // state.users = u
      // if (state.rooms != undefined){
      try{
        console.log("SET USERS IN ROOM", data.room, data.users)
        state.rooms.set(data.room, data.users)
        console.log("ROOMS3",state.rooms)
      }catch(e){
        console.log(e)
      }

      // }

    },
    setCOREAwareness(state, a){
      state.awareness = a
    },
    updateRooms(state, r){
      console.log("update rooms",r)
      state.rooms.set(r.room, r.users)

    },

    setIpfs(state, i) {
      state.ipfs = i;
    }
  },
  actions: {
    async push(context, step) {
      //  let ipfs = context.state.ipfs;
      //  console.log("step", ipfs, step);
      //if (ipfs != null) {
      // step.cid = await ipfs.add(JSON.stringify(step.data), { cidVersion: 1 });
      // console.info("cid", step);
      context.state.step = step;
      //  context.dispatch("noosphere/addHistory", cid, { root: true });
      // } else {
      //   console.log("IPFS is null");
      // }
    },
  },
  modules: {},
});
