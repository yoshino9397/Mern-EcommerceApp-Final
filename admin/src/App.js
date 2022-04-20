import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  // const admin = true;

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const admin = currentUser?.isAdmin;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
