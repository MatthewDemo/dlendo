import { createSlice } from "@reduxjs/toolkit";
import Home1 from "../../assets/img/houses/home1.svg";
import Home2 from "../../assets/img/houses/home2.svg";
import Home3 from "../../assets/img/houses/home3.svg";
import Home4 from "../../assets/img/houses/home4.svg";
import Home5 from "../../assets/img/houses/home5.svg";
import Home6 from "../../assets/img/houses/home6.svg";
import Home7 from "../../assets/img/houses/home7.svg";
import Home8 from "../../assets/img/houses/home8.svg";

const initialState = {
  allHouses: [
    {
      photos: [Home1],
      address: "Alberchtstrabe 335",
      alreadyFunded: 425000,
      totalPrice: 642000,
      return: 8,
      term: 24,
      location: "Germany",
      distribution: "Yearly",
      description:
        "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
      coordinates: [50.848696231323466, 11.73586373213352],
    },
    {
      photos: [Home2],
      address: "Grebenhain 36355",
      alreadyFunded: 425000,
      totalPrice: 847000,
      return: 9,
      term: 22,
      location: "Denmark",
      distribution: "Yearly",
      description:
        "Dieses wunderschöne Einfamilienhaus bietet Ihnen modernen Komfort und eine einzigartige Atmosphäre,",
      coordinates: [55.60667101051827, 9.187411915986292],
    },
    {
      photos: [Home3],
      address: "Hosenfeld 36154",
      alreadyFunded: 45000,
      totalPrice: 847000,
      return: 7,
      term: 26,
      location: "England",
      distribution: "Yearly",
      description:
        "Das charmante Stadthaus im Herzen der Stadt vereint historischen Charme mit zeitgemäßer Ausstattung",
      coordinates: [52.723427527818934, -0.8048238694044272],
    },
    {
      photos: [Home4],
      address: "Lauterbach (Hessen) 36341",
      alreadyFunded: 35000,
      totalPrice: 235000,
      return: 10,
      term: 19,
      location: "Austria",
      distribution: "Yearly",
      description:
        "Dieses stilvolle Mehrfamilienhaus besticht durch seine moderne Architektur und hochwertige Ausstattung.",
      coordinates: [48.19462518951254, 15.060658770338424],
    },
    {
      photos: [Home5],
      address: "Himmelkron",
      alreadyFunded: 54000,
      totalPrice: 684300,
      return: 6,
      term: 6,
      location: "Poland",
      distribution: "Monthly",
      description:
        "Die Doppelhäuser bieten ein Höchstmaß an Lebensqualität",
      coordinates: [52.335409704948184, 16.69539923876806],
    },
    {
      photos: [Home6],
      address: "Zwickau",
      alreadyFunded: 554000,
      totalPrice: 684300,
      return: 10,
      term: 12,
      location: "Germany",
      distribution: "Yearly",
      description:
        "Die Eigentumswohnungen sind hochwertig gebaut, variabel…",
      coordinates: [53.59982375707324, 11.012748850350643],
    },
    {
      photos: [Home7],
      address: "Lichtenstein/Sachsen",
      alreadyFunded: 154000,
      totalPrice: 384300,
      return: 4,
      term: 6,
      location: "Germany",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [50.20383499791731, 6.74824656805034],
    },
    {
      photos: [Home8],
      address: "Hof",
      alreadyFunded: 254000,
      totalPrice: 444300,
      return: 7,
      term: 24,
      location: "France",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [48.51644147290318, 5.169705509958305],
    },
  ],
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = houseSlice.actions;

export default houseSlice.reducer;
