import "./App.css";
import ChaiCard from "./components/ChaiCard";
import ChaiList from "./components/ChaiList";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "Masala Chai", price: 21 },
  { id: 2, name: "Ginger Chai", price: 10 },
  { id: 3, name: "Elaichi Chai", price: 30 },
];
function App() {
  return (
    <>
      <div>Click on the Vite and React logos to learn more</div>
      <div>
        <ChaiCard name="Ear Buds" price={3000} />
        <ChaiCard name="Iphone" price={80000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log(`Placed ${order.name} and cups ${order.cups}`);
          }}
        />
      </div>
    </>
  );
}

export default App;
