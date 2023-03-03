import React from "react";
function formatDate(date) {
  return date.toLocaleDateString();
}
function UserInfo(props) {
  return <div>{props.user.name}</div>;
}
function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}
function Datee(props) {
  return <div>{formatDate(props.date)}</div>;
}
function Text(props) {
  return <div>{props.text}</div>;
}
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function ComposeComponent() {
  return (
    <div className="App">
      <h2>ComposeComponent</h2>
      <Avatar user={comment.author} />
      <UserInfo user={comment.author} />
      <Text text={comment.text} />
      <Datee date={comment.date} />
    </div>
  );
}

export default ComposeComponent;
