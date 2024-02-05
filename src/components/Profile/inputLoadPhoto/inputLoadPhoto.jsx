import React from "react";
import s from "./inputLoadPhoto.module.css"
const InputLoadPhoto = ({handleFileChange, ...props }) => {
    
  return (
    <>
      <label htmlFor="myfile">
        <input
          type="file"
          className={s.updateAvaInput}
          onChange={handleFileChange}
          id="myfile"
          name="myfile"
        />
        Обновить фото
      </label>
    </>
  );
};
export default InputLoadPhoto;
