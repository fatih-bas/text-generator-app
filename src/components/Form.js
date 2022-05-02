import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [text, setText] = useState("");
  const [paras, setParas] = useState(4);
  const [type, setType] = useState("text");

  const textURL = `https://baconipsum.com/api/?type=meat-and-filler&paras=${paras}&format=${type}`;

  const handleParas = (e) => {
    setParas(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

 

  useEffect(() => {
    getText();
  }, [paras, type]);

  const getText = async () => {
    await axios.get(textURL).then((res) => {
      setText(res.data);
    });
  };

  return (
    <>
      <form className="flex flex-row mt-5">
        <div className="flex flex-col">
          <label className="text-white">Paragraphs</label>
          <input
            onChange={(e) => handleParas(e)}
            type="number"
            className="py-2"
            defaultValue={paras}
          />
        </div>
        <div className="ml-5">
          <label className="text-white" htmlFor="choice">
            Include HTML
            <select
              id="choice"
              className="block w-3/5 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-black"
              onChange={(e) => handleType(e)}
            >
              <option value="text">No</option>
              <option value="html">Yes</option>
            </select>
          </label>
        </div>
      </form>
      <div className="bg-color text-white px-10 py-10 mt-10">
        <p>{text}</p>
      </div>
    </>
  );
};

export default Form;
