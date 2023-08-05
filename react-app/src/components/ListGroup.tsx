// import ListGroup from "./components/ListGroup";

import { useState } from "react";

// import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Bagbazar", "Mhepi", "Boudha", "Samakhusi", "Bhaktapur"];
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };
  //event handler
  // const handleEvent = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Lists</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
