import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => calculateTimeLeft(targetDate));
  const { t } = useTranslation();

  useEffect(() => {
    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  if (!timeLeft) {
    return <span className="text-lg font-semibold text-brand-dark">{t('countdown.workshopStarted')}</span>;
  }
  
  const timerComponents = [
    { label: t('countdown.days'), value: timeLeft.days },
    { label: t('countdown.hours'), value: timeLeft.hours },
    { label: t('countdown.minutes'), value: timeLeft.minutes },
  ];

  return (
    <div className="flex space-x-4 md:space-x-8 justify-center">
      {timerComponents.map(component => (
        <div key={component.label} className="text-center">
          <span className="text-4xl md:text-5xl font-bold text-brand-dark">
            {String(component.value).padStart(2, '0')}
          </span>
          <span className="block text-sm uppercase text-gray-500">{component.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
