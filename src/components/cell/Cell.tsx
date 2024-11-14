// Local
import './cell.scss';

// Types
type CellProps = {
    color: string;
}   

// Component
export const Cell = ({ color }: CellProps) => {
    return (
        <div className='cell' style={{ background: color }}>

        </div>
    );
};
