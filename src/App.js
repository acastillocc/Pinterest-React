import './App.css';
import FooterLayout from './components/FooterLayout';
import HeaderLayout from './components/HeaderLayout';
import PinterestLayout from './components/PinterestLayout';

const App = () => {
  return (
    <div>
      <HeaderLayout />
      <PinterestLayout>
      </PinterestLayout>
      <FooterLayout />
    </div>
  );
};

export default App;
