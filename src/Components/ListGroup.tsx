import { Fragment } from "react";
function ListGroup() {
  let items = ["Thirumarugal", "Chennai", "Gothenburg", "St.Johns"];
  items = [];
  if (length == 0)
  return <><h1>List</h1><li>No item found</li></>
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
