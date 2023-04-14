import React from "react";

const GestionStagiaires = () => {
  return (
    
    <div className="overflow-x-auto">
      <div className="bg-blue-700 text-center border border-blue-700 rounded-t-2xl">
      <h2 className="font-mono not-italic font-bold text-4xl leading-9 text-white">Liste des stagiaires</h2>
    </div>
    <table className="w-full">
      {/* head */}
      <thead className="text-left ">
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Nom de la team</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <td>Charef</td>
          <td>Miloud</td>
          <td>Feteam</td>
          <td><button>x</button></td>
        </tr>
        {/* row 2 */}
        <tr>
          <td>Cao</td>
          <td>Hélène</td>
          <td>Feteam</td>
          <td><button>x</button></td>
        </tr>
       
      </tbody>
    </table>
    <div className="self-end">
    <button className="border border-gray-400 rounded-full p-1 px-2 self-end">Ajouter un membre</button>
  </div>
  </div>
  );
};

export default GestionStagiaires;
