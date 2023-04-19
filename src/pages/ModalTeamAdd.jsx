import { useEffect, useState } from "react";
import { skillService } from "../service/skill.service";

const ModalTeamAdd = ({ isOpen, onClose, confirm }) => {
  const [teamName, setTeamName] = useState("");
  const [language, setLanguage] = useState("");
 

  const handleAddTeam = () => {
    console.log("ajoutée");
    confirm;
  };

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    skillService.getAllSkills()
    .then(res => {
      setSkills(res.data.content)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      {isOpen ? (
        <>
        <div className="">
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed inset-0 z-50 flex justify-center items-center">

            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
              <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
              <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Ajouter une team</h2>
              </div>

<div className="p-10">
              <div className="mb-4">
                <input
                  className="border-2 border-grey-800  rounded-full p-1 px-5"
                  type="text"
                  id="team-name"
                  placeholder="Nom de la team"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="language">
                  Langage utilisées:
                </label>
                <select className="border-2 border-grey rounded-full p-1 px-5"
                multiple=""
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                 
                  {/* Récupérez les langages depuis l'API */}
                  {skills.map((skill, index) => (
                    <option key={index} value={skill.label}>
                      {skill.label}
                    </option>
                  ))}
                  
                </select>
              </div>

              </div>
            
              <div className="flex justify-end">
                <button
                  className= "border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
                  onClick={onClose}
                >
                  Annuler
                </button>
                <button
                  className= " border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
                  onClick={handleAddTeam}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalTeamAdd;
