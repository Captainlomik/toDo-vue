import { createStore } from "vuex";
import { timeModule } from "@/store/timeModule";

export default createStore({
  state: {},
  modules: {
    time: timeModule,
  },
});
