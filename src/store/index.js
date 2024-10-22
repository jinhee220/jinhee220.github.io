import { createStore as _createStore } from "vuex";
import VendingMachine from "../assets/VendingMachine.jpg";
import Tenmo from "../assets/Tenmo.jpg";
import Potmole from "../assets/Potmole.png";

export function createStore() {
  return _createStore({
    state: {
      projects: [
        {
          id: 1,
          title: "Vending Machine",
          image: VendingMachine,
          liveLink: "",
          description:
            "A CLI based interactive Vending Machine program which explores the fundamentals of Java, and Data Structures.",
          githubLink: "https://github.com/jinhee220/CLI-Vending-Machine",
          mainStacks: ["Java", "Intellij"],
          selected: true,
        },
        {
          id: 2,
          title: "Tenmo",
          image: Tenmo,
          liveLink: "",
          description:
            "A CLI based clone of Venmo, a cash transfer application, which explores relational databases and server-client interactions.",
          githubLink: "https://github.com/jinhee220/Tenmo",
          mainStacks: [
            "Java",
            "SQL",
            "PostGreSQL",
            "Intellij",
            "Postman",
            "REST APIs",
            "Authentication",
          ],
          selected: false,
        },
        {
          id: 3,
          title: "Potmole",
          image: Potmole,
          liveLink: "",
          description:
            "A webpage designed to allow for multiple levels of authentication and user submission of potholes. Employs mapbox API to allow for precise geolocation and database access for pothole lifecycle tracking.",
          githubLink: "https://github.com/jinhee220/Potmole",
          mainStacks: [
            "Java",
            "Vue",
            "HTML",
            "CSS",
            "Javascript",
            "SQL",
            "PostGreSQL",
            "Intellij",
            "Postman",
            "Authentication",
            "3rd Party APIs (Mapbox)",
          ],
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
