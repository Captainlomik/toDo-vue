export const timeModule = {
  state: () => ({
    selectLesson: "",
    lessons: [
      { value: "ru", name: "Русский", time: 90 },
      { value: "math", name: "Математика", time: 180 },
    ],
  }),
  getters: {
    // updated(state) {
    //   if (state.selectLesson) {
    //     let time = this.lessons.filter(
    //       (el) => el.value === this.selectLesson
    //     )[0].time;
    //     return this.countTime(time);
    //   }
    updated() {
      return "lol";
    },
    countTime(time) {
      let hours = Math.floor(time / 60);
      let minutes = Math.floor(time % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      return `${hours} час ${minutes} минут`;
    },
  },
  mutations: {
    setSelectLesson(state, selectLesson) {
      state.selectLesson = selectLesson;
    },
  },
  namespaced: true,
};
