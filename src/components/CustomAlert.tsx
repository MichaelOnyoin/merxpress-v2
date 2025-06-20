'use client'
import React, { useEffect } from 'react';

interface CustomAlertProps {
    message: string;
    duration: number;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, duration, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white p-4 rounded shadow-sm opacity-80">
            {message}
        </div>
    );
};

export default CustomAlert;