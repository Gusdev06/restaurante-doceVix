import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { TabPanelFoods } from "./styles";
import "react-tabs/style/react-tabs.css";
import CardFood from "../../components/CardFood";
import { useEffect, useState } from "react";

const Cardapio = () => {
  const API = "https://apirestaurante.onrender.com/lanches";
  const [food, setNome] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(API);
      const data = await response.json();

      setNome(data);
    }

    fetchdata();
  }, []);

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Marmitex Prato do Dia</Tab>
          <Tab>Lanches</Tab>
        </TabList>
        <TabPanel>
          <Tabs>
            <Tab>Segunda Feira</Tab>
            <Tab>Terça Feira</Tab>
            <Tab>Quarta Feira</Tab>
            <Tab>Quinta Feira</Tab>
            <Tab>Sexta Feira</Tab>
            <TabPanelFoods>
            {food.map(({ id, item, preco, img, descricao, sem }) => {
                if (sem === 'segunda' || sem === null) {
                  return (
                    <CardFood
                      key={id}
                      nome={item}
                      valor={preco}
                      descricao={descricao}
                      imgComida={img}
                      semana={sem}
                    />
                  );
                }
              })}
            </TabPanelFoods>
            <TabPanelFoods>
              {food.map(({ id, item, preco, img, descricao, sem }) => {
                if (sem === 'terca' || sem === null) {
                  return (
                    <CardFood
                      key={id}
                      nome={item}
                      valor={preco}
                      descricao={descricao}
                      imgComida={img}
                      semana={sem}
                    />
                  );
                }
              })}
            </TabPanelFoods>
            <TabPanelFoods>Quarta</TabPanelFoods>
            <TabPanelFoods>Quinta</TabPanelFoods>
            <TabPanelFoods>Sexta</TabPanelFoods>
          </Tabs>
        </TabPanel>
        <TabPanel>requisição dos lanches</TabPanel>
      </Tabs>
    </>
  );
};

export default Cardapio;
