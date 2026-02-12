import { useEffect, useRef } from "react";
export default function AnalogClock() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = (hours % 12) * 30 + minutes * 0.5;

      if (secondRef.current)
        secondRef.current.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

      if (minuteRef.current)
        minuteRef.current.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;

      if (hourRef.current)
        hourRef.current.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock" style={{margin: "auto"}}>
      <div ref={hourRef} className="hand hour"></div>
      <div ref={minuteRef} className="hand minute"></div>
      <div ref={secondRef} className="hand second"></div>
      <div className="center-dot"></div>
    </div>
  );
}
