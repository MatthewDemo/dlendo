import React, { useState } from "react";
import LeftArrow from "../../../assets/img/main-header-icons/left-arrow.svg";
import RightArrow from "../../../assets/img/main-header-icons/right-arrow.svg";
import Card from "./Card/Card";
import styled from "styled-components";


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #090b32;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0 30px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  line-height: 29.9px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#FA544D" : "#8186AF")};
  margin-right: 20px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: calc(100% + 10px);
    height: ${(props) => (props.active ? "2px" : "0")};
    background-color: #fa544d;
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #1e2044;
  border: 1px solid #323054;
  font-size: 12px;
  font-weight: 700;
  line-height: 29.9px;
  color: #fa544d;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 29.9px;
  font-weight: 700;
  color: #ffffff;
`;
const CardsWrapper = styled.div`
  display: flex;
`;

const Projects = ({allCards}) => {
  const [activeButton, setActiveButton] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // const allCards = [
  //   {
  //     photos: [Home1],
  //     address: "Alberchtstrabe 335",
  //     alreadyFunded: 425000,
  //     totalPrice: 642000,
  //     return: 8,
  //     term: 24,
  //     location: "Germany",
  //     distribution: "Yearly",
  //     description:
  //       "Für die Ausführung gelten die zum Zeitpunkt des Bauantrages….",
  //   },
  //   {
  //     photos: [Home2],
  //     address: "Grebenhain 36355",
  //     alreadyFunded: 425000,
  //     totalPrice: 847000,
  //     return: 9,
  //     term: 22,
  //     location: "Norway",
  //     distribution: "Yearly",
  //     description:
  //       "Dieses wunderschöne Einfamilienhaus bietet Ihnen modernen Komfort und eine einzigartige Atmosphäre,",
  //   },
  //   {
  //     photos: [Home3],
  //     address: "Hosenfeld 36154",
  //     alreadyFunded: 45000,
  //     totalPrice: 847000,
  //     return: 7,
  //     term: 26,
  //     location: "England",
  //     distribution: "Yearly",
  //     description:
  //       "Das charmante Stadthaus im Herzen der Stadt vereint historischen Charme mit zeitgemäßer Ausstattung",
  //   },
  //   {
  //     photos: [Home4],
  //     address: "Lauterbach (Hessen) 36341",
  //     alreadyFunded: 35000,
  //     totalPrice: 235000,
  //     return: 10,
  //     term: 19,
  //     location: "Austria",
  //     distribution: "Yearly",
  //     description:
  //       "Dieses stilvolle Mehrfamilienhaus besticht durch seine moderne Architektur und hochwertige Ausstattung.",
  //   },
  // ];

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setCurrentPage(1);
  };

  const handleSwitchButtonClick = (direction) => {
    const totalPages = Math.ceil(allCards.length / cardsPerPage);
    if (direction === "left") {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
    } else if (direction === "right") {
      setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
    }
  };

  return (
    <div>
      <Header>
        <ButtonsWrapper>
          <Button
            active={activeButton === "new"}
            onClick={() => handleButtonClick("new")}
          >
            New projects
          </Button>
          <Button
            active={activeButton === "hot"}
            onClick={() => handleButtonClick("hot")}
          >
            Hot projects
          </Button>
        </ButtonsWrapper>
        <SwitchWrapper>
          <SwitchButton onClick={() => handleSwitchButtonClick("left")}>
            <img src={LeftArrow} alt="" />
          </SwitchButton>
          <PageNumber>
            {currentPage}/{Math.ceil(allCards.length / cardsPerPage)}
          </PageNumber>
          <SwitchButton onClick={() => handleSwitchButtonClick("right")}>
            <img src={RightArrow} alt="" />
          </SwitchButton>
        </SwitchWrapper>
      </Header>
      <CardsWrapper>
        {allCards.map((card) => (
          <Card card={card} />
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Projects;
