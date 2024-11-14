// Local
import './statePanel.scss';

// Component
export const StatePanel = () => {
    return (
        <div className='state-panel'>
            <h2 className='state-panel__header'>COMPUTER - PLAYER</h2>
            <p className='state-panel__turn'>Turn 0</p>
            <div className='state-panel__ctas'>
                <button className='state-panel__button'>Undo</button>
                <button className='state-panel__button'>Restart</button>
            </div>
        </div>
    );
}