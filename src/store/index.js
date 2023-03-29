import { createStore } from "vuex";

export default createStore({
  state: {
    ipfs: null,
    step: null,
  },
  getters: {},
  mutations: {
    setIpfs(state, i) {
      state.ipfs = i;
    },
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
