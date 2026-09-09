import { services } from '../data';
import { useState } from 'react';
import Title from './Title';
import Service from './Service'; 

const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return 
                <div>
                  <Service {...service} key={service.id} />
                  <button onClick={setServiceData=([])}>Not Interested</button>
                </div>
        })}
      </div>
    </section>
  )
}
export default Services