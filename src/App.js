import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';
import { AddNewTracker, Tracker } from './components';

export const App = () => {
  const { trackers, counter } = useSelector(state => state.time);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1 className='title'>Tracker</h1>
        <div className='wrapper'>
          <div className='left'>
            <AddNewTracker />
            <ul className='list'>
              {trackers.map(tracker => (
                <Tracker key={tracker.id} {...tracker} />
              ))}
            </ul>
          </div>
          <div className='right'>
            <h2>Total time</h2>
            <div className='total-time'>
              <span className='time'>
                {('0' + Math.floor((counter / 3600000) % 60)).slice(-2)}
              </span>
              <span>:</span>
              <span className='time'>
                {('0' + Math.floor((counter / 60000) % 60)).slice(-2)}
              </span>
              <span>:</span>
              <span className='time'>
                {('0' + Math.floor((counter / 1000) % 60)).slice(-2)}
              </span>
            </div>
          </div>
        </div>
      </StyledApp>
    </>
  );
};
