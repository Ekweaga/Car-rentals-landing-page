import logo from './logo.svg';
import './App.css';
import Header from './components/header';

import img1 from './images/0x0-ModelX_01.jpg'
import img2 from './images/0x0-ModelX_02.jpg'
import img3 from './images/0x0-ModelX_03.jpg'
import img4 from './images/0x0-ModelX_04.jpg'
import img5 from './images/0x0-ModelX_05.jpg'
import img6 from './images/0x0-ModelX_06.jpg'
import img7 from './images/0x0-ModelX_07.jpg'
import img8 from './images/0x0-ModelX_08.jpg'
import img9 from './images/0x0-ModelX_09.jpg'
import img10 from './images/0x0-ModelX_10.jpg'
import img11 from './images/0x0-ModelX_11.jpg'
import img12 from './images/0x0-ModelX_12.jpg'
import Item from './components/item';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header />
     <div className='app_itemsContainer'>
       <Item
        title='MODEL 1'
        desc='Money-back guarantee'
        desclink=''
        backgroundimg={img1}
        leftbtntxt='Order Now'
        leftbtnlink=''
        rightbtntxt="LEARN MORE"
        rightbtnlink=''
        twobuttons='true'
        first

       />
        <Item
          title='MODEL 2'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img2}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
        <Item
          title='MODE 3'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img3}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
        <Item
          title='MODEL 4'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img4}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
        <Item
          title='MODEL 5'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img5}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
         <Item
          title='MODEL 6'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img11}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
         <Item
          title='MODEL 7'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img12}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
        <Item
          title='MODEL 8'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img6}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
        <Item
          title='MODEL 9'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img7}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
       <Item
          title='MODEL 10'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img8}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
       <Item
          title='MODEL 11'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img9}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
       <Item
          title='MODEL 12'
          desc='Money-back guarantee'
          desclink=''
          backgroundimg={img10}
          leftbtntxt='Order Now'
          leftbtnlink=''
          rightbtntxt="LEARN MORE"
          rightbtnlink=''
          twobuttons='true'
       />
     </div>
    </div>
  );
}

export default App;
