import { useState } from 'react';

export default function StatusChange () {

   let [notes, setNotes] = useState("");
   let [recipeStatus, setStatus] = useState(false);
   let [pastNotes, setPastNotes] = useState([]);

   const handleChange = (event) => {
      return setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setPastNotes(<><p>{pastNotes}</p><p>{notes}</p></>);
      return setStatus(true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{pastNotes}</p>
         <p className="currentNote">{notes}</p>

         <p>{recipeStatus ? "I've tried this one!" : "I have not tried this recipe!"}</p>
      </div>
   );
}