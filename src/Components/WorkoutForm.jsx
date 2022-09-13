import { useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";

const WorkoutForm = () => {
   const {dispatch} = useWorkoutsContext()
   const [title, setTitle] = useState("");
   const [load, setLoad] = useState("");
   const [reps, setReps] = useState("");
   const [error, setError] = useState(null);

   const hanbleSubmit = async (e) => {
      e.preventDefault();

      const workout = { title, load, reps };

      const response = await fetch("/api/workouts", {
         method: "POST",
         body: JSON.stringify(workout),
         headers: {
            "Content-Type": "application/json",
         },
      });
      const json = await response.json();

      if (!response.ok) {
         setError(json.error);
      }
      if (response.ok) {
         setTitle("");
         setLoad("");
         setReps("");
         setError(null);
         console.log("New workout added", json);
         dispatch({type: 'CREATE_WORKOUT', payload: json})
      }
   };

   return (
      <div>
         <form className="create" onSubmit={hanbleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Excersize Title:</label>
            <input
               type="text"
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />

            <label>Load (in kg):</label>
            <input
               type="number"
               onChange={(e) => setLoad(e.target.value)}
               value={load}
            />

            <label>Number of Reps:</label>
            <input
               type="number"
               onChange={(e) => setReps(e.target.value)}
               value={reps}
            />

            <button>Add Workout</button>

            {error && <div className="error">{error}</div>}
         </form>
      </div>
   );
};

export default WorkoutForm;
