import { useEffect, useState } from "react";
import { skillService } from "../service/skill.service";
import Select from "react-select";


const ModalTeamAdd = ({ isOpen, onClose, confirm }) => {
  const [teamName, setTeamName] = useState("");
  const [language, setLanguage] = useState("");
  const [skills, setSkills] = useState([]);
 
  const handleAddTeam = () => {
    //creer la fonction ajouté
    console.log(teamName);
    console.log(language);
    confirm;
  };

  useEffect(() => {
    skillService.getAllSkills()
    .then(res => {
      setSkills(
        res.data.content.map(s => {
          return {
            value: s.label,
            label: s.label
          }
        })
        )
    })
    .catch(err => console.log(err))
  }, []);

  console.log(skills)

  
  const [selectedOption, setSelectedOption] = useState(null);

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
                <div>
          
                
                <div>
                


                </div>
                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={skills} isMulti
                 />
                </div>



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
                  type='submit'
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
