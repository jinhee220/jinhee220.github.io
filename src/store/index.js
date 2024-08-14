import { createStore as _createStore } from "vuex";

export function createStore() {
  return _createStore({
    state: {
      projects: [
        {
          id: 1,
          title: "Vending Machine",
          image: "/assets/VendingMachine.jpg",
          liveLink: "",
          githubLink: "",
          mainStacks: ["Java"],
          selected: true,
        },
        {
          id: 2,
          title: "Tenmo",
          image: "",
          liveLink: "",
          githubLink: "",
          mainStacks: [],
          selected: false,
        },
        {
          id: 3,
          title: "Potmole",
          image: "",
          liveLink: "",
          githubLink: "",
          mainStacks: [],
          selected: false,
        },
      ],
    },
    mutations: {
      FLIP_SELECTED(state, projectToChange) {
        projectToChange.selected = !projectToChange.selected;
      },
    },
  });
}
