export default function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}