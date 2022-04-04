import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useLocation } from "react-router";

const Success = () => {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    createOrder();
  }, [cart, currentUser]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4a919e",
        }}
      >
        <div
          style={{
            width: "30%",
            padding: "60px 40px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            Order has been created successfully.
            <br />
            {/* Your order number is ${cart.total} */}
            Your order number is ${cart.total}&{orderId}
          </h3>
          <Link to={"/"}>
            <button
              style={{
                padding: 10,
                marginTop: 20,
                cursor: "pointer",
              }}
            >
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
