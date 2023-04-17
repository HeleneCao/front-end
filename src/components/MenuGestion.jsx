import React from 'react'
import { Link } from 'react-router-dom'

const MenuGestion = () => {
  return (
    <div className="border border-b-base-700 p-5">
      <div >
      <ul className="menu menu-horizontal border bg-base-500 rounded-full">
  <li></li>
  <li tabIndex={0}>
    <span><img
              src="src\images\BarreMenu.png"
              alt="icone menu"
              className="h-4 w-auto mr-4"
            />Gestions
        <img
              src="src\images\PolygonMenu.png"
              alt="icone menu"
              className="h-3 w-auto mr-2"
            /></span>
    <ul className="rounded-box bg-base-100 secondary-focus-bg-blue-500 p-2">
      <li><Link to="gestionStagiaires">Stagiaire</Link></li>
      <li><Link to="gestionEquipes">Équipe</Link></li>
      <li><Link to="gestionResponsables">Responsable</Link></li>
    </ul>
  </li>
</ul>


      </div>
    </div>
  )
}

export default MenuGestion
