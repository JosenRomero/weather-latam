import { useWeather } from '../hooks/useWeather'
import { countriesInfo } from '../countriesInfo'
import CountryCard from './CountryCard'
import lightning_and_rainy from '../images/lightning_and_rainy.svg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CountriesList = () => {

  const { data } = useWeather();

  if(!data) return <></>

  return (
    <div className="md:w-3/4 mx-auto">
      <div className="p-6 m-2 bg-white rounded-xl text-zinc-800">

        <Carousel
          autoFocus={false}
          autoPlay={false}
          emulateTouch={false}
          infiniteLoop={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >

          {data.map((obj, i) => {
            return <CountryCard
              key={i}
              img={countriesInfo[obj.sys.country].img}
              country={countriesInfo[obj.sys.country].country}
              city={countriesInfo[obj.sys.country].city}
              temp_max={obj.main.temp_max}
              temp_min={obj.main.temp_min}
              icon={lightning_and_rainy}
            />
          })}
        
        </Carousel>

      </div>
    </div>
  )

}

export default CountriesList
