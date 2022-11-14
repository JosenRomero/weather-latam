import { useWeather } from '../hooks/useWeather'
import { countriesInfo, weatherIcon } from '../countriesInfo'
import CountryCard from './CountryCard'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Loader from './Loader'

const CountriesList = () => {

  const { data } = useWeather();

  if(!data) return <Loader />

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
              stroke_text={countriesInfo[obj.sys.country].stroke_text}
              temp={obj.main.temp}
              icon={weatherIcon[obj.weather[0].main] || `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
              sunrise={obj.sys.sunrise}
              sunset={obj.sys.sunset}
              timezone={obj.sys.timezone}
            />
          })}
        
        </Carousel>

      </div>
    </div>
  )

}

export default CountriesList
