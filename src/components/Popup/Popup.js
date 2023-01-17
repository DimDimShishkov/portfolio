import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ onClose, children }) {
  useEffect(() => {
    const closeOnEsc = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeOnEsc);
    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  return (
    <div className="popup" onClick={onClose}>
      <div
        className="popup__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        {children}
        <button
          className="popup__exit-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Popup;
