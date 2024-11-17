// Local
import './notSupported.scss';

// Component
export const NotSupported = () => {
    return (
        <div className="not-supported">
            <p className="not-supported__header">Apologies!</p>
            <p className="not-supported__text">This game is not currently supported on touch screen devices.</p>
        </div>
    );
};
