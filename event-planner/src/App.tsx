import { useState } from 'react';
import Home from './Components/Home';
import CreateEvent from './Components/CreateEvent';
import Browse from './Components/Browse';
import FireBase from './Components/FireBase';
import eve from './Assets/EVENT.png'
import eve2 from './Assets/bk2.jpg'
export interface EventData {
  creator: string;
  eventName: string;
  description: string;
  guestsNumber: '1-10' | '10-30' | '+30';
  date: string;
}

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
  const [events, setEvents] = useState<EventData[]>([]);

  const handleCreateEvent = () => {
    setShowHome(false);
    setShowCreateEvent(true);
    setShowBrowse(false);
  };

  const handleBrowse = () => {
    setShowHome(false);
    setShowBrowse(true);
    setShowCreateEvent(false);
  };

  const handleAddEvent = (newEvent: EventData) => {
    setEvents([...events, newEvent]);
    setShowBrowse(true);
  };

  const handleEditEvent = (index: number, updatedEvent: EventData) => {
    const updatedEvents = [...events];
    updatedEvents[index] = updatedEvent;
    setEvents(updatedEvents);
  };

  const handleDeleteEvent = (index: number) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  return (
    <div className="app">
      <div className="left"> 
        {showHome && <Home fn={handleBrowse} fn1={handleCreateEvent} />}
        {showCreateEvent && <CreateEvent fn={handleAddEvent} />}
        {showBrowse && !showCreateEvent && <img style={{width:'660px',height:'530px',backgroundSize:'cover'}} src={eve2} alt="back" /> }
      </div> 
    
      <div className="right">
    { !showBrowse&& <img style={{height:'500px',width:'530px'}} src={eve} alt="EVENT" />}

        {showBrowse && (
          <Browse
            events={events}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
          />
        )}
         {showBrowse && !showCreateEvent && <FireBase />}
      </div> 
    </div>
  );
}

export default App;
