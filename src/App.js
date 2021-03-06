import React from 'react';
import './styles/App.css';
import ListItem from './components/ListItem.js';
import Nav from './components/Nav.js';

const mockData = [
  {
    id: "1",
    imgSrc: "https://miro.medium.com/max/3476/0*9Rl22ATE2kqe2UyX.jpg",
    url: "https://www.google.com",
    name: "Intel",
    status: "Out of Stock",
  },
  {
    id: "2",
    imgSrc: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356277_sd.jpg;maxHeight=640;maxWidth=550",
    url: "https://www.amazon.com",
    name: "AMD",
    status: "2",
  },
  {
    id: "3",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/01/KL_Intel_Pentium_A80501.jpg",
    url: "https://www.scott-curtis.com",
    name: "Ancient Artifact",
    status: "3",
  },
]


function App() {
  return (
    <>
    <Nav></Nav>
    <div className="App-header1">
      Following Items
    </div>
    <hr className="line"/>
    <div className="App">
      {mockData.map(
        data => (
          <ListItem 
          imgSrc={data.imgSrc} 
          url={data.url} 
          name={data.name} 
          status={data.status}>
          </ListItem>
        )
      )}
    </div>
    </>
  );
}

export default App;
