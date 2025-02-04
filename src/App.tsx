
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
      {
      <article>
        <p>
          <span>${basic.price} </span>
          /mes
        </p>
        <h2>{basic.title}</h2>
        <p>{basic.description}</p>
        <ul>
          {basic.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button>Elegir plan</button>
      </article>
      }
     </section>
    </>
  )
}

export default App
