import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTimeTracker } from '../redux/time';
import { AiFillPlayCircle } from 'react-icons/ai';
import { StyledAddNewTracker } from '../styles/components/StyledAddNewTracker';

const AddNewTracker = () => {
  let [trackName, setTrackName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!trackName.trim()) return;

    const newObj = {
      id: uuid(),
      title: trackName,
      savedTime: 0,
      isActive: true
    };

    dispatch(addTimeTracker(newObj));
    setTrackName('');
  };

  return (
    <StyledAddNewTracker onSubmit={handleSubmit}>
      <div className='input__wrapper'>
        <input
          type='text'
          placeholder='Enter tracker name'
          onChange={e => setTrackName(e.target.value)}
          value={trackName}
        />
        <button type='submit'>
          <AiFillPlayCircle className='add' />
        </button>
      </div>
    </StyledAddNewTracker>
  );
};

export default AddNewTracker;
