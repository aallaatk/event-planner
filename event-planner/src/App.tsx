import { useState } from 'react';
import Home from './Components/Home';
import CreateEvent from './Components/CreateEvent';
import Browse from './Components/Browse';

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
    setShowBrowse(true);
  };

  const handleBrowse = () => {
    setShowHome(false);
    setShowBrowse(true);
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
        
      </div> 
    <div className="right">
    {showBrowse && (
          <Browse
            events={events}
            onEdit={handleEditEvent}
            onDelete={handleDeleteEvent}
          />
        )}
      </div> 
    </div>
  );
}

export default App;
