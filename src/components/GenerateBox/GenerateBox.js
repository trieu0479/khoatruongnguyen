import React from "react";
import style from "./box.module.css";
export default function GenerateBox() {
  const [value, setVal] = React.useState("");
  const [numbers, setNumbers] = React.useState([]);

  const onChangeInput = (event) => {
    setVal(event.target.value);
    console.log(value);
  };
  const handleOnClick = () => {
    console.log("hello");
    const newNumber = makeArray(value);
    setNumbers(newNumber);
    setVal("");
  };
  const makeArray = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    console.log(numbers);
    return arr;
  };
  return (
    <div className={style.body}>
      <h2>GenerateBox</h2>
      <form>
        <div>Number of boxes</div>
        <input type="number" value={value} onChange={onChangeInput} />
        <button type="button" onClick={handleOnClick}>
          Genarate
        </button>
      </form>
      <div>
        {numbers.length > 0
          ? numbers.map((item) => (
              <div key={item} className={style.box}>
                Box #{item}
              </div>
            ))
          : "No Box"}
      </div>
      <br />
    </div>
  );
}
