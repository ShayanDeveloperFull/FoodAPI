import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";
import Modal from "./components/Modal";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("650946");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(true);

  const handleViewRecipe = (id) => {
    setFoodID(id);

    if (window.innerWidth < 768) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} setIsLoading={setIsSearchLoading} />
      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodID={handleViewRecipe}
            isLoading={isSearchLoading}
          />
        </InnerContainer>
        <InnerContainer className="desktop-only">
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Container>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FoodDetail foodID={foodID} />
      </Modal>
    </div>
  );
}

export default App;
