export default function Person({ id, first_name, email, avatar }) {
  return (
    <div key={id}>
      <h2>{first_name}</h2>
      <img src={avatar} alt={first_name}></img>
      <p>{email}</p>
    </div>
  );
}
