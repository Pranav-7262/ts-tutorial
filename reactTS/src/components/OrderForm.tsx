import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}
const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setname] = useState<string>("Masala");
  const [cups, setcups] = useState<number>(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups }); //data is going from OrderForm → App, but through a function.
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Chai Name : </label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setname(e.target.value)
        }
      />
      <label>Enter Cups : </label>
      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setcups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order </button>
    </form>
  );
};

export default OrderForm;

// input typing	React.ChangeEvent<HTMLInputElement>
// form submit	React.SubmitEvent<HTMLFormElement>
