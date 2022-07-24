import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resumeTimer, deleteTimer } from '../redux/time';
import CustomInput from './CustomInput';
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineMinusCircle
} from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { StyledTracker } from '../styles/components/StyledTracker';

const Tracker = ({ id, title, savedTime, isActive }) => {
  const [activeInput, setActiveInput] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        const newObj = {
          id,
          title,
          savedTime: savedTime + 1000,
          isActive
        };

        dispatch(resumeTimer(newObj));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [id, title, savedTime, isActive, dispatch]);

  const onResume = () => {
    const newObj = {
      id,
      title,
      savedTime,
      isActive: !isActive
    };

    dispatch(resumeTimer(newObj));
  };

  const onDelete = () => {
    dispatch(deleteTimer(id));
  };

  const onEdit = () => {
    setActiveInput(!activeInput);
  };

  const changeTime = e => {
    e.preventDefault();
    const newObj = {
      id,
      title,
      savedTime: hours * 3600000 + minutes * 60000 + seconds * 1000,
      isActive
    };

    dispatch(resumeTimer(newObj));
    setActiveInput(!activeInput);
  };

  return (
    <StyledTracker>
      {activeInput ? (
        <form className='input__wrapper' onSubmit={changeTime}>
          <CustomInput
            max={24}
            changeValue={e => setHours(e.target.value)}
            label='hours'
          />
          <CustomInput
            max={60}
            changeValue={e => setMinutes(e.target.value)}
            label='minutes'
          />
          <CustomInput
            max={60}
            changeValue={e => setSeconds(e.target.value)}
            label='seconds'
          />
          <button type='submit'>
            <AiFillPlayCircle className='resume' />
          </button>
          <ImCancelCircle className='cancel' onClick={onEdit} />
        </form>
      ) : (
        <>
          <p className={isActive ? 'active' : ''}>{title}</p>
          <div className='wrapper__time'>
            <div className={isActive ? 'active' : ''}>
              <span>
                {('0' + Math.floor((savedTime / 3600000) % 60)).slice(-2)}:
              </span>
              <span>
                {('0' + Math.floor((savedTime / 60000) % 60)).slice(-2)}:
              </span>
              <span>
                {('0' + Math.floor((savedTime / 1000) % 60)).slice(-2)}
              </span>
            </div>
            <div>
              <MdModeEditOutline className='edit' onClick={onEdit} />
              {isActive ? (
                <AiFillPauseCircle className='stop' onClick={onResume} />
              ) : (
                <AiFillPlayCircle className='resume' onClick={onResume} />
              )}
              <AiOutlineMinusCircle className='delete' onClick={onDelete} />
            </div>
          </div>
        </>
      )}
    </StyledTracker>
  );
};

export default Tracker;
