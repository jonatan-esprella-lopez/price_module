
import { DatePricesCard } from './data/date-prices-card'

import './App.css'

interface DatePricesCard {
  [key: string]: {
    id: number;
    price: number; 
    title: string;
    description: string;
    items: string[];
  };
}

function App() {

  const datePricesCard: DatePricesCard  = DatePricesCard

  const basic = datePricesCard.basic
  const intermediate = datePricesCard.intermediate
  const professional = datePricesCard.professional
  const professionalPlus = datePricesCard.professionalPlus

  console.log(datePricesCard)

  return (
    <>
     <h1>Planes y precios</h1>
     <p>Elige el plan que más te convenga y comienza a aprender hoy mismo.</p>

     <section className='container-cards'>
      {Object.values(DatePricesCard).map((plan) => (
      <article className='card'>
        <p>
          <span>${plan.price} </span> 
          /mes
        </p>
        <h2>{plan.title}</h2>
        <p>{plan.description}</p>
        <ul>
          {plan.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button>Elegir plan</button>
      </article>
      ))}
     </section>
    </>
  )
}

export default App
