import React from 'react';

const GestionResponsables = () => {
    return (
        <div className="p-28">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des
                        Responsable</h2>
                </div>
                <table className="w-full border border-slate-300">
                    {/* head */}
                    <thead className=" text-left border border-t-gray-300">
                    <tr>
                        <th className="p-2" scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td className="border-2 border-b-white border-r-gray-500">Charef</td>
                        <td className="border-2 border-b-white border-r-gray-500">Miloud</td>
                        <td className="text-center">
                            <button><img
                                src="src\images\Vector.png"
                                alt="Bouton archivé"
                                className="h-3 w-auto mr-2"
                            /></button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>Cao</td>
                        <td>Hélène</td>
                        <td className="text-center">
                            <button><img
                                src="src\images\Vector.png"
                                alt="Bouton archivé"
                                className="h-3 w-auto mr-2"
                            /></button>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <div className="p-7 grid place-items-end">
                    <button className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end">Ajouter un
                        membre
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GestionResponsables;
