// Third Party
import { ReactNode } from 'react';

// Local
import './pageContainer.scss'

// Types
type PageContainerProps = {
    children: ReactNode;
}   

// Component
export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <div className="page-container">
            { children }
        </div>
    );
};
