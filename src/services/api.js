import axios from "axios"

export const weather = async () => {

  const APIkey = import.meta.env.VITE_API_KEY

  const countriesID = '3435910,3441575,3871336' 

  const options = {
    method: "GET", 
    url: `http://api.openweathermap.org/data/2.5/group?id=${countriesID}&units=metric&appid=${APIkey}`
  }

  return await axios.request(options).then(res => res.data)

}