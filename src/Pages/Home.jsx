import { useEffect } from "react";

// Pages & Components Import
import WorkoutDetails from "../Components/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm";
import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";

// JSX Function Component
const Home = () => {
   //React Hoocks
   const {workouts, dispatch}=useWorkoutsContext()

   useEffect(() => {
      const fetchWorkouts = async () => {
         const response = await fetch("/api/workouts");
         const json = await response.json();

         if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})
         }
      };
      fetchWorkouts();
   },[dispatch]);


   //JSX Return
   return (
      <div className="home">
         <div className="workouts">
            {workouts && workouts.map((workout) =>(
               <WorkoutDetails key={workout._id} workout={workout} />
            ))}
         </div>
         <WorkoutForm/>
      </div>
   );
};

// JSX Component Export
export default Home;
