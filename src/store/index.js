import { createStore } from "vuex";
import axios from "axios";

export const actions = {
  getIdInformation({ commit }) {
    axios
      .get(
        "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
      )
      .then((res) => {
        commit("SET_ID_INFORMATIONS", res.data);
      })
      .catch((error) => console.log(error));
  },
};

export const mutations = {
  SET_ID_INFORMATIONS: (state, getIdInformation) => {
    state.getIdInformation = getIdInformation;
  },
};

export default createStore({
  mutations: mutations,
  actions: actions,
});
