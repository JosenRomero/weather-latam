import Snowfall from 'react-snowfall'

const Snow = ({show}) => {

  if(!show) return <></>

  return (
    <Snowfall
      color="#fff"
      snowflakeCount={33}
    />
  )

}

export default Snow
