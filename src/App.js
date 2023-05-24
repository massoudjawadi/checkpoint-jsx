import logo from './logo.svg';
import './App.css';
import FullName from  "./Component/Profile/FullName.js"
import Address from "./Component/Profile/Address.js"
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js"
function App() {
  return (
    <div >
      <FullName />
      <Address/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
