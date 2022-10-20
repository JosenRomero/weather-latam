
const CountryCard = ({img, country, city, stroke_text, temp, temp_max, temp_min, icon}) => {

  return (
    <div className="flex items-center text-xl md:text-3xl my-8">
      <img src={img} className="!w-32 md:!w-40 flex-none" alt={country} />
      <div className="ml-4 grow text-start text-white">
        <p className={`${stroke_text} pb-3`}>{country}</p>
        <p className="stroke-text-black">{city}</p>
      </div>
      <img src={icon} className="!w-16 md:!w-32 flex-none" alt={country} />
      <div className="ml-6 flex-none text-white">
        {(Math.ceil(temp_max) === Math.ceil(temp_min)) ? <p className="bg-indigo-200 p-2">{Math.ceil(temp)}°</p>
          : <>
            <p className="bg-red-200 p-2">{Math.ceil(temp_max)}°</p>
            <p className="bg-blue-200 p-2">{Math.ceil(temp_min)}°</p>
        </>}
      </div>
    </div>
  )

}

export default CountryCard
