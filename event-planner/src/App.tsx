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
// const predefinedEvents = [
//   {
//     creator: 'Alice',
//     eventName: 'Party',
//     description: 'Join us for a fun-filled evening!',
//     guestsNumber: '10-30',
//     date: '2023-12-01',
//   },
//   {
//     creator: 'Bob',
//     eventName: 'Conference',
//     description: 'A conference on the latest technologies.',
//     guestsNumber: '+30',
//     date: '2023-12-02',
//   },
//   {
//     creator: 'Charlie',
//     eventName: 'Workshop',
//     description: 'Hands-on workshop for beginners.',
//     guestsNumber: '1-10',
//     date: '2023-12-03',
//   },
//   {
//     creator: 'David',
//     eventName: 'Meeting',
//     description: 'Team meeting to discuss project updates.',
//     guestsNumber: '10-30',
//     date: '2023-12-04',
//   },
//   {
//     creator: 'Eva',
//     eventName: 'Seminar',
//     description: 'Educational seminar on environmental issues.',
//     guestsNumber: '+30',
//     date: '2023-12-05',
//   },
//   {
//     creator: 'Frank',
//     eventName: 'Gathering',
//     description: 'Casual gathering for networking.',
//     guestsNumber: '1-10',
//     date: '2023-12-06',
//   },
//   {
//     creator: 'Grace',
//     eventName: 'Training',
//     description: 'Training session for professionals.',
//     guestsNumber: '10-30',
//     date: '2023-12-07',
//   },
//   {
//     creator: 'Hannah',
//     eventName: 'Webinar',
//     description: 'Interactive webinar on digital marketing.',
//     guestsNumber: '+30',
//     date: '2023-12-08',
//   },
// ];
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
