// Third Party
import { useState, useEffect } from 'react';

// Hook
export const useIsTouchDevice = (): boolean => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
            if (window.matchMedia("(pointer: coarse)").matches) {
                setIsTouchDevice(true);
            } else {
                setIsTouchDevice(false);
            }
        };

        checkTouchDevice();
        window.addEventListener("resize", checkTouchDevice);

        return () => {
            window.removeEventListener("resize", checkTouchDevice);
        };
    }, []);

    return isTouchDevice;
};
