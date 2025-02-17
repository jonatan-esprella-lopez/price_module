import { DatePricesCard } from "../../data/date-prices-card";

import IconCheck from "../../assets/module-prices/check-circle.svg";
import IconCheckWhite from "../../assets/module-prices/check-circle-white.svg";

import "../../App.css";
import "../../pages/module-prices/view-mobile.module.css";

interface DatePricesCard {
  [key: string]: {
    id: number;
    state: string;
    price: number;
    title: string;
    description: string;
    items: string[];
  };
}

export const ViewPlans = () => {
  return (
    <section className="body-container-prices">
      <header className="container-title">
        <h1>Planes y precios</h1>
        <p>
          Elige el plan que más te convenga y comienza a aprender hoy mismo.
        </p>
      </header>

      <section className="container-cards">
        {Object.values(DatePricesCard).map((plan) => (
          <article
            key={plan.id}
            className={plan.state == "MÁS POPULAR" ? "card-popular" : "card"}
          >
            {plan.state === "MÁS POPULAR" && (
              <p className="item-popular">MÁS POPULAR</p>
            )}
            <p className="price">
              <span>
                
                ${plan.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                {/* {plan.price >= 1000
                  ? plan.price / 1000 + ",000"
                  : plan.price % 1000}{" "} */}
              </span>
              /mes
            </p>

            <h2>{plan.title}</h2>
            <p className="description-prices">{plan.description}</p>

            <ul className="items-prices">
              {plan.items.map((item, index) => (
                  <li key={index}>
                      {plan.state == "MÁS POPULAR" ? (
                        <img src={IconCheck} alt="Icono de verificación" />
                      ) : (
                        <img src={IconCheckWhite} alt="Icono de verificación" />
                      )}
                        <span
                          className={
                            item.status == true ? "item-activo" : "item-inactivo"
                          }
                        >
                      {item.item}
                    </span>
                  </li>
              ))}
            </ul>

            <button className={plan.state == "MÁS POPULAR" ? "Button-popular" : ""}>
              Elegir plan
            </button>
          </article>
        ))}
      </section>
    </section>
  );
};
