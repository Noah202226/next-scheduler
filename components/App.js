import { db } from "../firebaseConfig";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Heading from "./Heading";
import AppStyles from "../styles/App.module.css";

export default function App({ signOut, user }) {
  const [schedules, setSchedules] = useState([]);

  const colRef = collection(db, "schedules");
  onSnapshot(colRef, (snapshot) =>
    setSchedules(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  );

  return (
    <>
      <Heading
        title="Next JS - Noah's Scheduler"
        content="productive"
        description="Learning Next JS"
      />
      <div className={AppStyles.main}>
        <h1>Welcome {user.displayName}</h1>
        <button onClick={signOut}>Logout</button>

        <div className={AppStyles.grid}>
          <div className={AppStyles.g1}>
            <h2>Schedules</h2>
            {schedules.map((schedule) => (
              <h4>{schedule.name}</h4>
            ))}
          </div>
          <div className={AppStyles.g2}>
            <h2>Todo</h2>
            {schedules.map((schedule) => (
              <h4>{schedule.name}</h4>
            ))}
          </div>
          <div className={AppStyles.g3}>
            <h2>Routine</h2>
            {schedules.map((schedule) => (
              <h4>{schedule.name}</h4>
            ))}
          </div>
          <div className={AppStyles.g4}>
            <h2>Goals for this month</h2>
            {schedules.map((schedule) => (
              <h4>{schedule.name}</h4>
            ))}
          </div>
          <div className={AppStyles.g5}>
            <h2>Goals for this year</h2>
            {schedules.map((schedule) => (
              <h4>{schedule.name}</h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
