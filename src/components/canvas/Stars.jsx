const StarCanvas = () => {
  // Generate stars with random start and end positions, and random durations
  const stars = Array.from({ length: 100 }, (_, i) => {
    const startX = Math.random() * 100; // Start X position (0-100vw)
    const startY = Math.random() * 100; // Start Y position (0-100vh)
    const endX = Math.random() * 100; // End X position (0-100vw)
    const endY = Math.random() * 100; // End Y position (0-100vh)
    const duration = 5 + Math.random() * 10; // Random duration between 5-15 seconds
    return {
      id: i,
      startX,
      startY,
      endX,
      endY,
      duration,
    };
  });

  return (
    <>
      {/* Custom CSS for dynamic keyframes */}
      <style>
        {stars
          .map(
            (star) => `
              @keyframes moveStar${star.id} {
                0% { transform: translate(${star.startX}vw, ${star.startY}vh); }
                100% { transform: translate(${star.endX}vw, ${star.endY}vh); }
              }
            `
          )
          .join('')}
      </style>

      <div className="w-full h-full absolute inset-0 z-[-1] bg-black">
        {/* Render moving stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              animation: `moveStar${star.id} ${star.duration}s linear infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarCanvas;