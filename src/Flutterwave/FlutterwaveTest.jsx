import React from "react";
import { Button } from "@material-ui/core";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Flutterwave({amount}) {
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "Yemz-Shop",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      {/* <h1>Hello Test user</h1> */}

      <Button
        size="large"
        variant="contained"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Checkout
      </Button>
    </div>
  );
}
