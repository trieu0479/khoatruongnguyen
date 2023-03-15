import React from "react";
import style from "./boxes.module.css";
export default function BoxesColor() {
  const [isColor, setIsColor] = React.useState("");
  const [changeColor, setChangeColor] = React.useState();
  const [isAuthRed, setIsAuthRed] = React.useState(false);
  const [isAuthGold, setIsAuthGold] = React.useState(false);
  const [isAuthAqua, setIsAuthAqua] = React.useState(false);
  const [isAuthPurple, setIsAuthPurple] = React.useState(false);

  var red = style.red;
  var gold = style.gold;
  var aqua = style.aqua;
  var purple = style.purple;
  function handleOnClickRed() {
    setIsAuthRed((prevState) => !prevState);
    setIsAuthAqua(false);
    setIsAuthGold(false);
    setIsAuthPurple(false);
    setChangeColor(style.red);
    setIsColor("red");
  }
  function handleOnClickGold() {
    setIsAuthGold((prevState) => !prevState);
    setIsAuthAqua(false);
    setIsAuthRed(false);
    setIsAuthPurple(false);
    setChangeColor(style.gold);
    setIsColor("gold");
    console.log("gold");
  }
  function handleOnClickAqua() {
    setIsAuthAqua((prevState) => !prevState);
    setIsAuthRed(false);
    setIsAuthGold(false);
    setIsAuthPurple(false);
    setChangeColor(style.aqua);
    setIsColor("aqua");
    console.log("aqua");
  }
  function handleOnClickPurple() {
    setIsAuthPurple((prevState) => !prevState);
    setIsAuthAqua(false);
    setIsAuthGold(false);
    setIsAuthRed(false);
    setChangeColor(style.purple);
    setIsColor("purple");
    console.log("purple");
  }
  if (isColor === "red" && changeColor === style.red && isAuthRed === true) {
    red = gold = aqua = purple = changeColor;
    console.log("haha");
  }
  if (isColor === "gold" && changeColor === style.gold && isAuthGold === true) {
    console.log("haha");
    red = gold = aqua = purple = changeColor;
  }
  if (isColor === "aqua" && changeColor === style.aqua && isAuthAqua === true) {
    console.log("haha");
    red = gold = aqua = purple = changeColor;
  }
  if (
    isColor === "purple" &&
    changeColor === style.purple &&
    isAuthPurple === true
  ) {
    console.log("haha");
    red = gold = aqua = purple = changeColor;
  }

  return (
    <div className={style.boxes}>
      <h2>Boxes Color</h2>
      <div className={red} onClick={handleOnClickRed}>
        Red
      </div>
      <div className={gold} onClick={handleOnClickGold}>
        Gold
      </div>
      <div className={aqua} onClick={handleOnClickAqua}>
        Aqua
      </div>
      <div className={purple} onClick={handleOnClickPurple}>
        Purple
      </div>
    </div>
  );
}
