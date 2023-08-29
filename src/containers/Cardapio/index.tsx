import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { TabPanelFoods } from './styles';
import "react-tabs/style/react-tabs.css";
import CardFood from "../../components/CardFood";
import imgTeste from '../../images/foodImage.png'

const Cardapio = () => {
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
                <CardFood descricao="Arroz, feijão, Strogonoff de  frango e batata palha..." nome="Strogonoff de frango" valor={26.00} imgComida={imgTeste} />
                <CardFood descricao="Arroz, feijão, Strogonoff de  frango e batata palha..." nome="Strogonoff de Carne" valor={26.00} imgComida={imgTeste} />
                <CardFood descricao="Arroz, feijão, Strogonoff de  frango e batata palha..." nome="Strogonoff de Porco" valor={26.00} imgComida={imgTeste} />
            </TabPanelFoods>
            <TabPanelFoods>
               Terça
            </TabPanelFoods>
            <TabPanelFoods>
                Quarta
            </TabPanelFoods>
            <TabPanelFoods>
               Quinta
            </TabPanelFoods>
            <TabPanelFoods>
                Sexta
            </TabPanelFoods>
          </Tabs>
        </TabPanel>
        <TabPanel>
          requisição dos lanches
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Cardapio;
