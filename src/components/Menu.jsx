import { Link } from "react-router-dom";
import Credits from './Credits'
import icon_github from '../images/icon-github.svg'

const Menu = () => {

  return (
    <nav className="bg-blue-300">
      <div className="md:w-3/4 mx-auto flex justify-between p-3 gap-x-5">
        <Link className="!text-white hover:opacity-75" to={"/"}>Weather Latam</Link>
        <ul className="flex order-last gap-x-2.5">
          <Credits />
          <li>
            <a className="hover:opacity-60" href="https://github.com/JosenRomero/weather-latam" target="_blank">
              <img src={icon_github} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )

}

export default Menu
