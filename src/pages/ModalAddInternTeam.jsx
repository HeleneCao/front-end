import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import apiBackEnd from "../service/api.Backend";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { internService } from "../service/intern.service";


const ModalAddInterTeam = ({ isOpen, onClose, confirm, uuidTeam }) => {
    const [intern, setIntern] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
  const validationSchema = Yup.object().shape({
    
  });

  const handleAddIntern = (values) => {
    console.log(values);

    const internDto = {
        intern: values.intern.map((option) => option.value)
     
    };

   
      internService.addInternByUuidTeam(uuidTeam, internDto)
      .then((response) => {
        console.log(response.data);
        confirm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    internService
      .getAllInterns()
      .then((res) => {
        setIntern(
          res.data.content.map((intern) => {
            return {
              value: intern.firstName,
              label: intern.firstName, 
             
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ intern: [] }}
            validationSchema={validationSchema}
            onSubmit={handleAddIntern}
          >
            {({ setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
                    <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                        Ajouter un stagiaire à cette équipe
                      </h2>
                    </div>

                    
                    <div className="mb-8 px-5 p-9">
                        <label
                          className="block text-gray-800 mb-2 "
                          htmlFor="intern"
                        >
                          Liste de stagiaires:
                        </label>
                        <div>
                          <Select
                            name="intern"
                            defaultValue={selectedOption}
                            onChange={(value) => setFieldValue("intern", value)}
                            options={intern}
                            isMulti
                          />
                        </div>
                      </div>
                    

                    <div className="flex justify-between">
                      <button
                        className="border-2 border-blue-100 rounded-full p-1 px-5 font-bold "
                        onClick={onClose}
                      >
                        Annuler
                      </button>

                      <button
                        type="submit"
                        className=" border-2 border-blue-500 rounded-full p-1 px-5 font-bold "
                      >
                        Ajouter
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

export default ModalAddInterTeam;
