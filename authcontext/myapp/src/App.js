// import logo from './logo.svg';
// import './App.css';

// import UserInfo from './component/UserInfo';
// import { AuthProvider } from './component/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <div className="App">
//         <h1>Authetication App</h1>
//         <UserInfo />
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
// import CounterComponent from './component/Redux/components/CounterComponent';
import Cart from './component/Redux/components/Cart';
import { useSelector } from 'react-redux';

function App() {
  const items= useSelector(state=>state.itemReducer.items)
  return (
    <div>
      <h3>Items in my Cart: {items.length}</h3>
      {/* <GrandParent data={data} /> */}
      {/* <MyGrandParent /> */}
      {/* <CounterComponent /> */}
      <Cart />
    </div>
  );
}

export default App;