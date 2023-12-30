import React, { useState } from 'react';
import Buttons from './Button';

interface EventData {
  creator: string;
  eventName: string;
  description: string;
  guestsNumber: '1-10' | '10-30' | '+30';
  date: string;
}

interface BrowseProps {
  events: EventData[];
  onEdit: (index: number, updatedEvent: EventData) => void;
  onDelete: (index: number) => void;
}

const Browse: React.FC<BrowseProps> = ({ events, onEdit, onDelete }) => {
  const [editableIndex, setEditableIndex] = useState<number | null>(null);
  const [editedEvent, setEditedEvent] = useState<EventData>({
    creator: '',
    eventName: '',
    description: '',
    guestsNumber: '1-10',
    date: '',
  });

  const handleEditClick = (index: number, event: EventData) => {
    setEditableIndex(index);
    setEditedEvent(event);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSaveClick = (index: number) => {
    onEdit(index, editedEvent);
    setEditableIndex(null);
  };

  return (
    <>
      {events.map((event, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">
              <span>Name : </span>
              {editableIndex === index ? (
                <input
                  type="text"
                  name="eventName"
                  value={editedEvent.eventName}
                  onChange={handleInputChange}
                />
              ) : (
                event.eventName
              )}
            </h5>
            <p className="card-text">
              <span>Description : </span>
              {editableIndex === index ? (
                <textarea
                  name="description"
                  value={editedEvent.description}
                  onChange={handleInputChange}
                />
              ) : (
                event.description
              )}
            </p>
            <p className="card-text">
              <span>Creator : </span>
              {editableIndex === index ? (
                <input
                  type="text"
                  name="creator"
                  value={editedEvent.creator}
                  onChange={handleInputChange}
                />
              ) : (
                event.creator
              )}
            </p>
            <p className="card-text">
              <span>Guests Number : </span>
              {editableIndex === index ? (
                <div>
                  <label>
                    <input
                      type="radio"
                      name="guestsNumber"
                      value="1-10"
                      checked={editedEvent.guestsNumber === '1-10'}
                      onChange={handleInputChange}
                    />
                    1-10
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="guestsNumber"
                      value="10-30"
                      checked={editedEvent.guestsNumber === '10-30'}
                      onChange={handleInputChange}
                    />
                    10-30
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="guestsNumber"
                      value="+30"
                      checked={editedEvent.guestsNumber === '+30'}
                      onChange={handleInputChange}
                    />
                    +30
                  </label>
                </div>
              ) : (
                event.guestsNumber
              )}
            </p>
            <p className="card-text">
              <span>Date : </span>
              {editableIndex === index ? (
                <input
                  type="date"
                  name="date"
                  value={editedEvent.date}
                  onChange={handleInputChange}
                />
              ) : (
                event.date
              )}
            </p>
          </div>
          <div className="card-body">
            {editableIndex === index ? (
              <Buttons txt="Save" icon="fa-save" fn={() => handleSaveClick(index)} />
            ) : (
              <div className="card-bot">
                <Buttons txt="Edit" icon="fa-pen-to-square" fn={() => handleEditClick(index, event)} />
                <Buttons txt="Delete" icon="fa-trash" fn={() => onDelete(index)} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Browse;
