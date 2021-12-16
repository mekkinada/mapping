import React, { useState } from "react";

import style from "./app-info.module.css";

function InfoButton() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className={style.infoButtonContainer}>
        <button
          className={style.infoButton}
          onClick={() => setShowInfo(!showInfo)}
        >
          À propos
        </button>
      </div>

      {showInfo && (
        <div className={style.infoContainer}>
          <div></div>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={style.closeInfoButton}
          >
            <svg
              id="Capa_1"
              enableBackground="new 0 0 413.348 413.348"
              height="512"
              viewBox="0 0 413.348 413.348"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
  //
}

export default InfoButton;
