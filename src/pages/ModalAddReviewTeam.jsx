import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import apiBackEnd from "../service/api.Backend";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { reviewService } from './../service/review.service';

const ModalAddReviewTeam = ({ isOpen, onClose, confirm, uuidTeam }) => {
  const validationSchema = Yup.object().shape({
    date: Yup.string().required("La date est requise"),
    comment: Yup.string().required("Un commentaire est requis"),
  });

  const handleAddReview = (values) => {
    console.log(values);

    const reviewDto = {
      date: values.date,
      comment: values.comment,
    };

   
      reviewService.addReviewByUuidTeam(uuidTeam, reviewDto)
      .then((response) => {
        console.log(response.data);
        confirm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isOpen ? (
        <>
          <Formik
            initialValues={{ date: "", comment: "" }}
            validationSchema={validationSchema}
            onSubmit={handleAddReview}
          >
            {({ setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
                    <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                      <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                        Ajouter une review
                      </h2>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-800 mb-2"
                        htmlFor="date"
                      >
                        Date:
                      </label>
                      <div className="text-center">
                        <Field
                          name="date"
                          type="date"
                          className="border-2 border-grey-800 text-center  rounded-full p-1 px-16"
                        />
                            </div>
                        <ErrorMessage name="date">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>

                    
                      <div className="mb-5">
                        <Field
                          className="border-2 border-grey-800  rounded-full p-1.5 px-5 w-full "
                          type="text"
                          name="comment"
                          id="Comment"
                          placeholder="Commentaire"
                        />
                        <ErrorMessage name="comment">
                          {(msg) => (
                            <div className="text-red-600 text-sm">{msg}</div>
                          )}
                        </ErrorMessage>
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

export default ModalAddReviewTeam;
