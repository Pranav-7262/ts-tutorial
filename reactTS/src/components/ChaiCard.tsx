interface ChaiCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const ChaiCard = ({ name, price, isSpecial = false }: ChaiCardProp) => {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span> 🔥</span>}
      </h2>
      <p>price : {price}</p>
    </article>
  );
};

export default ChaiCard;
