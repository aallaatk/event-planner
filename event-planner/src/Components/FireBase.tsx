






 
      import { useEffect, useState } from 'react';
      import { initializeApp } from 'firebase/app';
      import { getFirestore, collection, getDocs } from 'firebase/firestore';
      import { EventData } from '../App';
      
      interface FirebaseConfig {
        apiKey: string;
        authDomain: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
      }
      
      const firebaseConfig: FirebaseConfig= { apiKey: "AIzaSyC21YWAeDVPK_FoaIu8uOGeG-wyAzJWzI0", 
      authDomain: "event-planner-5c081.firebaseapp.com",
       projectId: "event-planner-5c081", 
       storageBucket: "event-planner-5c081.appspot.com",
        messagingSenderId: "297081216810", 
        appId: "1:297081216810:web:d6bff954610ef72be98853" };
      
      const FireBase: React.FC = () => {
        const [eventsData, setEventsData] = useState<EventData[]>([]);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const app = initializeApp(firebaseConfig);
              const db = getFirestore(app);
              const eventsCollection = collection(db, 'events');
              const querySnapshot = await getDocs(eventsCollection);
      
              const eventData: EventData[] = [];
              querySnapshot.forEach((doc) => {
                eventData.push(doc.data() as EventData);
              });
              
              setEventsData(eventData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
      
        return (
            <div className='fire'>
              <h1>Events</h1>
              <div className="card-group">
                {eventsData.map((event, index) => (
                  <div className="card" style={{ width: '18rem' }} key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{event.eventName}</h5>
                      <p className="card-text"><span>Creator:</span> {event.creator}</p>
                      <p className="card-text"><span>description:</span> {event.description}</p>
                      <p className="card-text"><span>Guests  : </span>{event.guestsNumber}</p>
                      <p className="card-text"><span> Date:</span> {event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
          
      };
      
      export default FireBase;
      