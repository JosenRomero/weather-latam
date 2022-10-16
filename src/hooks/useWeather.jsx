import { useEffect, useState } from 'react';
import { weather } from '../services/api'

export const useWeather = () => {

  const [data, setData] = useState(null);

  useEffect(() => {

    (async () => {

      const { list } = await weather();

      setData(list);

    })()

  }, [])

  return {
    data
  }

}
