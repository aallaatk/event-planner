import  { useState } from 'react';
import Button from './Button';

function CreateEvent() {
  const [creator, setCreator] = useState('');
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [guestsNumber, setGuestsNumber] = useState('');
  const [date, setDate] = useState('2017-06-01'); // Default date

  return (
    <div className="right">
      <h1 className="mb-3">Create an event</h1>
      <div className="mb-3">
        <label htmlFor="creator" className="form-label">
          Creator:
        </label>
        <input
          type="text"
          className="form-control"
          id="creator"
          placeholder="Creator name"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description:
        </label>
        <textarea
          className="form-control"
          id="desc"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <p style={{ marginBottom: '0.5rem' }}>Guests Number:</p>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="guestsNumber"
          id="guests1"
          value="1-10"
          checked={guestsNumber === '1-10'}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label className="form-check-label" htmlFor="guests1">
          1-10
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="guestsNumber"
          id="guests2"
          value="10-30"
          checked={guestsNumber === '10-30'}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label className="form-check-label" htmlFor="guests2">
          10-30
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="guestsNumber"
          id="guests3"
          value="+30"
          checked={guestsNumber === '+30'}
          onChange={(e) => setGuestsNumber(e.target.value)}
        />
        <label className="form-check-label" htmlFor="guests3">
          +30
        </label>
      </div>
      <div className="mt-3">
        <label className="form-label" htmlFor="date">
          Date:
        </label>
        <input
          className="form-control"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="bott">
        <Button txt={'Create'} />
      </div>
    </div>
  );
}

export default CreateEvent;
