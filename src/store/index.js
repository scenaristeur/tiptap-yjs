import { createStore } from "vuex";

export default createStore({
  state: {
    ipfs: null,
    step: null,
    room: null,
    user: null,
    rooms: {},
    users: {}
  },
  getters: {},
  mutations: {
      setRoom(state,r){
      state.room = r
      console.log(state.room)
    },
    setRooms(state, r){
      state.rooms = r
      console.log(state.rooms)
    },
    setUser(state, u){
      state.user = u
    },
    setUsers(state, u){
      state.users = u
      console.log(state.users)
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
