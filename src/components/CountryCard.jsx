import { formatDate } from '../utils/utils'
import ToolTip from './ToolTip'

const CountryCard = ({img, country, city, stroke_text, temp, icon, weather_description, sunrise, sunset, timezone}) => {

  return (
    <div>
      <div className="flex items-center text-xl md:text-3xl my-8">
        <img src={img} className="!w-32 md:!w-40 flex-none" alt={country} />
        <div className="ml-4 grow text-start text-white">
          <p className={`${stroke_text} pb-3`}>{country}</p>
          <p className="stroke-text-black">{city}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="!w-16 lg:!w-32 flex-none tooltip">
            <img src={icon} alt={country} />
            <ToolTip text={weather_description} />
          </div>
          <div className="mt-1 sm:mt-0 sm:ml-6 flex-none text-white">
            <p className="bg-indigo-200 p-2 text-xl md:text-4xl tooltip">
              {Math.round(temp)}°
              <ToolTip text="Temperatura Actual" className="bottom-full" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-sky-100 text-stone-500">
        <p className="grow">Amaneció: {formatDate(sunrise, timezone)}</p>
        <p className="grow">Anochecerá: {formatDate(sunset, timezone)}</p>
      </div>
    </div>
  )

}

export default CountryCard
