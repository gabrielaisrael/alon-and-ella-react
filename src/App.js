import logo from './logo.svg';
import './App';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DonorChoose from './components/DonorChoose';
import FoodDetails from './components/FoodDetails'
import DonorFile from './components/DonorFile'
import AddressDetails from './components/AddressDetails';
import DonorFinish from './components/DonorFinish'
import FoodTransfer from './components/FoodTransfer';
import HelperList from './components/HelperList'
import GiveFood from './components/GiveFood'
import AddImage from './components/AddImage'
import Activist from './components/Activist/Activist'
import FoodType from './components/FoodType'
import Groceries from './components/Groceries '
import CookedFood from './components/CookedFood'
import ClientFinish from './components/ClientFinish'
import LastGroceries from './components/LastGroceries'
import ClientHome from './components/ClientHome'
import DonorHome from './components/DonorHome';
import AllOrders from './components/AllOrders';
import AdminManagment from './components/Admin/AdminManagement';
import OrderCompleted from './components/Admin/OrderCompleted';
import OrderInProgress from './components/Admin/OrderInProgress';
import OrderToConfirmation from './components/Admin/OrderToConfirmation';
import OrderDetails from './components/OrderDetails';
import MyOrderDetails from './components/MyOrderDetails';
import {AuthProvider} from './components/Contexts/AuthContext'
import Alon from './components/Alon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <AuthProvider>
            <Home />
          </AuthProvider>
        </Route>
        <Route exact path="/donor">
          <DonorHome />
        </Route>
        <Route exact path="/donor/all-orders">
          <AllOrders />
        </Route>
        <Route exact path="/donor/order-details">
          <OrderDetails />
        </Route>
        <Route exact path="/donor/my-order-details">
          <MyOrderDetails />
        </Route>
        <Route exact path="/donor/choose">
          <DonorChoose />
        </Route>
        <Route exact path="/needy/food">
          <FoodDetails />
        </Route>
        <Route exact path="/donor/food">
          <FoodDetails />
        </Route>
        <Route exact path="/donor/food/cooked">
          <CookedFood />
        </Route>
        <Route exact path="/donor/file">
          <DonorFile />
        </Route>
        <Route exact path="/donor/address-details">
          <AddressDetails />
        </Route>
        <Route exact path="/needy/address-details">
          <AddressDetails />
        </Route>
        <Route exact path="/donor/finish">
          <DonorFinish />
        </Route>
        <Route exact path="Admin/AdminManagement">
          <AdminManagment />
        </Route>
        <Route exact path="Admin/OrderCompleted">
          <OrderCompleted />
        </Route>
        <Route exact path="Admin/OrderInProgress">
          <OrderInProgress />
        </Route>
        <Route exact path="Admin/OrderToConfirmation">
          <OrderToConfirmation />
        </Route>
        <Route path="/FoodTransfer"> <FoodTransfer />
        </Route>
        <Route path="/HelperList"> <HelperList />
        </Route>

        <Route path="/GiveFood"> <GiveFood />
        </Route>
        <Route path="/AddImage"> <AddImage />
        </Route>

        <Route path="/CookedFood"> <CookedFood />
        </Route>
        <Route path="/FoodType"> <FoodType />
        </Route>
        <Route path="/Groceries"> <Groceries />
        </Route>
        <Route path="/ClientFinish"> <ClientFinish />
        </Route>
        <Route path="/LastGroceries"> <LastGroceries />
        </Route>

        <Route path="/donor/ClientHome">
          <ClientHome />
        </Route>

        <Route path="/alon">
          <Alon/>
        </Route>


      </div>
    </BrowserRouter>
  );
}

export default App;
