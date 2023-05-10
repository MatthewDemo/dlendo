import { createSlice } from "@reduxjs/toolkit";
import Home1 from "../../assets/img/houses/home1.svg";
import Home1_1 from "../../assets/img/houses/home1.1.jfif";
import Home2 from "../../assets/img/houses/home2.svg";
import Home2_1 from "../../assets/img/houses/home2_1.jpeg";

import Home3 from "../../assets/img/houses/home3.svg";
import Home3_1 from "../../assets/img/houses/home3_1.jpeg";

import Home4 from "../../assets/img/houses/home4.svg";
import Home5 from "../../assets/img/houses/home5.svg";
import Home6 from "../../assets/img/houses/home6.svg";
import Home7 from "../../assets/img/houses/home7.svg";
import Home8 from "../../assets/img/houses/home8.svg";

const initialState = {
  allHouses: [
    {
      photos: [Home1, Home1_1],
      address: "Alberchtstrabe 335",
      alreadyFunded: 425000,
      totalPrice: 642000,
      return: 8,
      term: 24,
      location: "Berlin",
      distribution: "Yearly",
      description:
        "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
      coordinates: [52.16169185611335, 9.186559630109148],
      assetClass: "commercial",
      index: 0
    },
    {
      photos: [Home2, Home2_1],
      address: "Grebenhain 36355",
      alreadyFunded: 425000,
      totalPrice: 847000,
      return: 9,
      term: 22,
      location: "Kopengagen",
      distribution: "Yearly",
      description:
        "Dieses wunderschöne Einfamilienhaus bietet Ihnen modernen Komfort und eine einzigartige Atmosphäre,",
      coordinates: [57.01423283652072, 9.94542265928368],
      assetClass: "residental",
      index: 1
    },
    {
      photos: [Home3, Home3_1],
      address: "Hosenfeld 36154",
      alreadyFunded: 45000,
      totalPrice: 847000,
      return: 7,
      term: 26,
      location: "London",
      distribution: "Yearly",
      description:
        "Das charmante Stadthaus im Herzen der Stadt vereint historischen Charme mit zeitgemäßer Ausstattung",
      coordinates: [50.8315645482643, -4.083145290741502],
      assetClass: "commercial",
      index: 2
    },
    {
      photos: [Home4],
      address: "Lauterbach (Hessen) 36341",
      alreadyFunded: 35000,
      totalPrice: 235000,
      return: 10,
      term: 19,
      location: "Viena",
      distribution: "Yearly",
      description:
        "Dieses stilvolle Mehrfamilienhaus besticht durch seine moderne Architektur und hochwertige Ausstattung.",
      coordinates: [46.83343089576256, 14.328789093860452],
      assetClass: "residental",
      index: 3
    },
    {
      photos: [Home5],
      address: "Himmelkron",
      alreadyFunded: 54000,
      totalPrice: 684300,
      return: 6,
      term: 6,
      location: "Warsaw",
      distribution: "Monthly",
      description:
        "Die Doppelhäuser bieten ein Höchstmaß an Lebensqualität",
      coordinates: [53.99780322524947, 17.00300235751887],
      assetClass: "commercial",
      index: 4
    },
    {
      photos: [Home6],
      address: "Zwickau",
      alreadyFunded: 554000,
      totalPrice: 684300,
      return: 10,
      term: 12,
      location: "Munich",
      distribution: "Yearly",
      description:
        "Die Eigentumswohnungen sind hochwertig gebaut, variabel…",
      coordinates: [50.042577005554165, 9.953731496412214],
      assetClass: "residental",
      index: 5
    },
    {
      photos: [Home7],
      address: "Lichtenstein/Sachsen",
      alreadyFunded: 154000,
      totalPrice: 384300,
      return: 4,
      term: 6,
      location: "Frankfurt",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [50.73460432115178, 7.840586229358913],
      assetClass: "residental",
      index: 6
    },
    {
      photos: [Home8],
      address: "Hof Home 9",
      alreadyFunded: 254000,
      totalPrice: 444300,
      return: 7,
      term: 24,
      location: "Paris",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [45.819363849090585, 0.8082097138707984],
      assetClass: "residental",
      index: 7
    },
    {
      photos: [Home8],
      address: "Hof Dupl",
      alreadyFunded: 254000,
      totalPrice: 444300,
      return: 7,
      term: 24,
      location: "Lion",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [48.16576158644448, 4.915138969903859],
      assetClass: "residental",
      index: 8
    },
    {
      photos: [Home7],
      address: "Lichtenstein/Sachsen Dupl",
      alreadyFunded: 154000,
      totalPrice: 384300,
      return: 4,
      term: 6,
      location: "Levercusen",
      distribution: "Monthly",
      description:
        "Ruhig wohnen und zentral leben in einer sehr exklusiven, kleinen",
      coordinates: [48.81990905588695, 13.27552218492335],
      assetClass: "residental",
      index: 9
    },
    {
      photos: [Home6],
      address: "Zwickau Dupl",
      alreadyFunded: 554000,
      totalPrice: 684300,
      return: 10,
      term: 12,
      location: "Keln",
      distribution: "Yearly",
      description:
        "Die Eigentumswohnungen sind hochwertig gebaut, variabel…",
      coordinates: [48.64581442447542, 8.609737516454658],
      assetClass: "residental",
      index: 10
    },
    {
      photos: [Home5],
      address: "Himmelkron Dupl",
      alreadyFunded: 54000,
      totalPrice: 684300,
      return: 6,
      term: 6,
      location: "Krakow",
      distribution: "Monthly",
      description:
        "Die Doppelhäuser bieten ein Höchstmaß an Lebensqualität",
      coordinates: [50.85779702637274, 18.492592051940214],
      assetClass: "residental",
      index: 11
    },
    {
      photos: [Home4],
      address: "Lauterbach (Hessen) 36341 Dupl",
      alreadyFunded: 35000,
      totalPrice: 235000,
      return: 10,
      term: 19,
      location: "Zalzburg",
      distribution: "Yearly",
      description:
        "Dieses stilvolle Mehrfamilienhaus besticht durch seine moderne Architektur und hochwertige Ausstattung.",
      coordinates: [48.198124282125114, 14.490955491189231],
      assetClass: "residental",
      index: 12
    },
    {
      photos: [Home3],
      address: "Hosenfeld 36154 Dupl",
      alreadyFunded: 45000,
      totalPrice: 847000,
      return: 7,
      term: 26,
      location: "Manchester",
      distribution: "Yearly",
      description:
        "Das charmante Stadthaus im Herzen der Stadt vereint historischen Charme mit zeitgemäßer Ausstattung",
      coordinates: [52.63019044194845, 1.0234672037996013],
      assetClass: "residental",
      index: 13
    },
    {
      photos: [Home2],
      address: "Grebenhain 36355 Dupl",
      alreadyFunded: 425000,
      totalPrice: 847000,
      return: 9,
      term: 22,
      location: "Odense",
      distribution: "Yearly",
      description:
        "Dieses wunderschöne Einfamilienhaus bietet Ihnen modernen Komfort und eine einzigartige Atmosphäre,",
      coordinates: [56.428334896941486, 9.35856235024316],
      assetClass: "residental",
      index: 14
    },
    {
      photos: [Home1, Home1_1],
      address: "Alberchtstrabe 335 Dupl",
      alreadyFunded: 425000,
      totalPrice: 642000,
      return: 8,
      term: 24,
      location: "Bremen",
      distribution: "Yearly",
      description:
        "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
      coordinates: [52.58791575671688, 12.490946110191473],
      assetClass: "residental",
      index: 15
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
