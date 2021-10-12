import './App.css';
import FooterLayout from './components/FooterLayout';
import HeaderLayout from './components/HeaderLayout';
import PinterestLayout from './components/PinterestLayout';
import HeaderMobile from './components/HeaderMobile';

const App = () => {
  return (
    <div>
      <HeaderLayout />
      <PinterestLayout />
      <FooterLayout />
      <HeaderMobile/>
    </div>
  );
};

export default App;
