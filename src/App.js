import './App.css';
import Header from './components/header'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import Item from './components/item';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_itemcontainer'>
        <Item
          title='Model S'
          desc='Rs. 1.50 Cr'
          desclink=''
          backgroundImg={ModelS}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
          first
        />

        <Item
          title='Model Y'
          desc='Rs. 50 Lakh'
          desclink=''
          backgroundImg={ModelY}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model 3'
          desc='Rs. 60 Lakh'
          desclink=''
          backgroundImg={Model3}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model X'
          desc='Rs. 2 Cr.'
          desclink=''
          backgroundImg={ModelX}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Accesories'
          desc='Money-Back Gaurentee'
          desclink=''
          backgroundImg={Accessories}
          leftBtnTxt='Custom Order'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
          first
        />

      </div>
    </div>
  );
}

export default App;
