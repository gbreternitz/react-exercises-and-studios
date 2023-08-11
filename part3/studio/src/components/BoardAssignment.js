import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label:"Seafood", value:1},
      {label:"Fine Dining", value:2},
      {label:"Appetizers", value:3}
   ];

   const handleChange = (event) => {
      return setName(event.target.value)
   }

   const [boardName, setName] = useState("no boards yet!");

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map( (props) => {
               return (
                  <option value = {props.value}>{props.label}</option>
               );
            })}
         </select>
         <p>Saved to {boardName}!</p>
      </div>
   );
}