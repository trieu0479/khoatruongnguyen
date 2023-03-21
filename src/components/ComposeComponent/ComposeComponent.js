import React from "react";

import Avatar from "../Avatar";


// import { useBookContext } from "../../context/BookContext";
import { useAppContext } from "../../context/AppContext";

function formatDate(date) {
  return date.toLocaleDateString();
}
function UserInfo(props) {
  return <div>{props.user.name}</div>;
}

function Datee(props) {
  return <div>{formatDate(props.date)}</div>;
}
function Text(props) {
  return <div>{props.text}</div>;
}

function ComposeComponent() {
  // const bookContext = useBookContext();
  const { theme, setTheme } = useAppContext();

  const [comment, setComment] = React.useState({
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  })

  console.log('ComposeComponent render', { theme })
  return (
    <div className="App">
      <h2>ComposeComponent</h2>
      <Avatar user={comment.author} />
      <UserInfo user={comment.author} />
      <Text text={comment.text} />
      <Datee date={comment.date} />

      <button type="button" onClick={() => setTheme('dark')}>
        Set Theme
      </button>
    </div>
  );
}

export default ComposeComponent;
