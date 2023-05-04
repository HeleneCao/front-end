import { skillService } from "../service/skill.service";
import Select from "react-select";
import apiBackEnd from "../service/api.Backend";
import { useEffect, useState } from "react";
import { updateSupervisorValidationSchema } from "../constants/yupConstants";
import { Formik, Form, Field, ErrorMessage } from "formik";


const ModalUpdateSupervisor = ({
    isOpen,
    onClose,
    confirm,
    nomSupervisor,
    prenomSupervisor,
    email,
    role,
    numero,
    skillsSupervisor,
    uuid
}) => {
    const [supervisorFirstName, setSupervisorFirstName ] = useState ("");
    const [supervisorLasttName, setSupervisorLasttName ] = useState ("");
    const [skills, setSkills] = useState([]);
    const [supervisorEmail, setSupervisorEmail ] = useState ("");
    const [supervisorRole, setSupervisorRole ] = useState ("");
    const [supervisorNumber, setSupervisorNumber ] = useState ("");

    const handleUpdateSupervisor = (values) => {
        console.log(values);


    const supervisorDto = {
        firstName: values.firstName,
        lastName: values.lastName,
        skills: values.skills.map((option) => option.value),
        email: values.email,
        role: values.role,
        number: values.number
    };

console.log(uuid)
    apiBackEnd
        .put(`/api/supervisor/admin/update/${uuid}`, supervisorDto)
        .then((response) => {
            console.log(response.data);
            confirm()
        })
        .catch((error) => {
            console.log(error);

        })

    };

    useEffect(() => {
        setSupervisorEmail;
        skillService
        .getAllSkills()
        .then((res) => {
            setSkills(
                res.data.content.map((s) => {
                    return {
                        value: s.label,
                        label: s.label,
                    };
                })
            );
        })
        .catch((err) => console.log(err));
    }, []);

    console.log(skills);

    const [selectedOption, setSelectedOption] = useState(null);


    
    return (
        <>
        {isOpen ? (
             <>
           
            <Formik
              initialValues={{firstName: prenomSupervisor, lastName: nomSupervisor, skills: skillsSupervisor,email: email, number: numero, role: role }}
              validationSchema={updateSupervisorValidationSchema}
              onSubmit={handleUpdateSupervisor}
              >
              {({ setFieldValue, values }) => (
                <Form className="">
                  <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                  <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
                      <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Modifier le responsable</h2>
                      </div>

                      <div className="p-10">
              {/* <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="name"
                  id="supervisor-lastName"
                  placeholder="Nom"
                
                />
                               
              </div> */}

              <div className="mb-4">
                    <div>
                    <label
                      className="block text-gray-800 mb-2"
                      htmlFor="language"
                    >
                      Langage utilisées:
                    </label>
                    </div>
                    <div>
                      
                      <Select
                      name="skills"
                        defaultValue={values.skills}
                        onChange={(value) => setFieldValue("skills", value)}
                        options={skills}
                        isMulti
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="lastName"
                  id="supervisor-lastName"
                  placeholder="lastName"
        
                  
                />
                 <ErrorMessage name="name">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
              </div>

              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="firstName"
                  id="supervisor-firstName"
                  placeholder="supervisor-firstName"
           
                  
                />
              </div>

              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="number"
                  id="supervisor-number"
                  placeholder="supervisor-number"
           
                  
                />
              </div>

              <div className="mb-4">
                <Field
                  className="border-2 border-grey-800  rounded-full p-1 px-5 w-full"
                  type="text"
                  name="role"
                  id="supervisor-role"
                  placeholder="supervisor-role"
           
                  
                />
              </div>
              </div>
              <div className="flex justify-between">
                <button
                  className= "border-2 border-blue-100 rounded-full p-1 px-5 font-bold"
                  onClick={onClose}
                >
                  Annuler
                </button>
                <button
                  type='submit'
                  className= " border-2 border-blue-500 rounded-full p-1 px-5 font-bold"
              
                >
                  Modifier
                  </button>
                </div>
              </div>
            </div>
          </Form>
             )}
          </Formik>
        </>
      ) : null}
    </>
  );
};


export default ModalUpdateSupervisor;
