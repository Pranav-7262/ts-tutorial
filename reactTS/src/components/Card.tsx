import type, { PropsWithChildren, ReactNode } from "react";

interface CardProp extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}
const Card = ({ title, footer, children }: CardProp) => {
  return (
    <section>
      <h2>title is : {title}</h2>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
};

export default Card;
