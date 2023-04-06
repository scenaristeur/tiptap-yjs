import { createStore } from "vuex";

export default createStore({
  state: {
    ipfs: null,
    step: null,
    room: null,
    user: null,
    rooms: {},
    users: {},
    awareness: null
  },
  getters: {},
  mutations: {
    setRoom(state,r){
      state.room = r
      console.log(state.room)
      // let userInRoom = state.rooms.getMap(r)
      // userInRoom.set(state.awareness.clientID, state.user)
    },
    setRooms(state, r){
      state.rooms = r
      console.log(state.rooms)
    },
    setUser(state, u){
      state.user = u
      console.log(state.users)
      //state.users.set(state.awareness.clientID, state.user)
    },
    // setClientID(state, id){
    //   state.clientID = id
    // },
    setUsers(state, u){
      state.users = u
      console.log(state.users)
    },
    setAwareness(state, a){
      state.awareness = a
    },

    setIpfs(state, i) {
      state.ipfs = i;
    }
  },
  actions: {
    async push(context, step) {
      let ipfs = context.state.ipfs;
      console.log("step", ipfs, step);
      if (ipfs != null) {
        step.cid = await ipfs.add(JSON.stringify(step.data), { cidVersion: 1 });
        console.info("cid", step);
        context.state.step = step;
        //  context.dispatch("noosphere/addHistory", cid, { root: true });
      } else {
        console.log("IPFS is null");
      }
    },
  },
  modules: {},
});
