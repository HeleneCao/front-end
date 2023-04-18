import React from "react";

function DialogAdd({show, title, description, confirm, cancel}) {

    if (!show){
        return <></>;
    }

    return(
        <div className="overlay">

            <div className="dialog p-60 ">

                <div className="dialog__content">

                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                <h2 className="dialog__title font-mono not-italic font-bold text-2xl leading-9 text-white">{title}</h2>
                </div>

                <div>
                <p className="dialog__description">{description}</p>
                </div>

                </div>

                <hr />
                
                <div className="dialog__footer p-7 grid place-items-end">

                <div className="flex items-end">
                <button onClick={cancel} className="dialog__cancel border-2 border-blue-500 rounded-full p-1 px-5 pe-8">Annuler</button>
                <button onClick={confirm} className="dialog__confirm border-2 border-blue-500 rounded-full p-1 px-5 ">Ajouter</button>
                </div>
                
                </div>

            </div>

        </div>
    )
}

export default DialogAdd;
