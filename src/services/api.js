import axios from "axios"
import { countriesID } from '../countriesInfo'

export const weather = async () => {

  const APIkey = import.meta.env.VITE_API_KEY

  const options = {
    method: "GET", 
    url: `https://api.openweathermap.org/data/2.5/group?id=${countriesID}&units=metric&appid=${APIkey}&lang=es`
  }

  return await axios.request(options).then(res => res.data)

}