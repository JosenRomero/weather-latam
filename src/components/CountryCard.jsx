
const CountryCard = ({img, country, city, temp_max, temp_min, icon}) => {

  return (
    <div className="flex items-center text-3xl">
      <img src={img} className="w-32 flex-none" alt={country} />
      <div className="ml-4 grow">
        <p className="pb-3">{country}</p>
        <p>{city}</p>
      </div>
      <img src={icon} className="w-32 flex-none" alt={country} />
      <div className="ml-4 flex-none">
        <p className="bg-red-200 p-2">{Math.floor(temp_max)}°</p>
        <p className="bg-blue-200 p-2">{Math.floor(temp_min)}°</p>
      </div>
    </div>
  )

}

export default CountryCard
