import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [isTracking, SetIsTracking] = useState(false);
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isTracking) return;

    function handleMouseMove(e) {
      setCoord({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTracking]);
  return (
    <div>
      <h4>Le coordinate del tuo puntatore sono: </h4>
      <p>
        X: {coord.x} - Y: {coord.y}
      </p>
      <button onClick={() => SetIsTracking(!isTracking)}>
        {isTracking ? "Stop Tracking" : "Start Tracking"}
      </button>
    </div>
  );
}
