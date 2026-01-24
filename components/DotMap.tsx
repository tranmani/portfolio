import React, { useEffect, useRef, useState } from "react";

const DotMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    handleResize();

    const spacing = 20;
    const dotSize = 1;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      const mouseX = mousePosRef.current.x;
      const mouseY = mousePosRef.current.y;
      const isHovered = isHoveredRef.current;

      // Draw Dot Grid
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let opacity = 0.12;
          let size = dotSize;

          if (isHovered && dist < 120) {
            opacity = 0.4 - dist / 300;
            size = dotSize * (2 - dist / 120);
          }

          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.fillRect(x - size/2, y - size/2, size, size);
        }
      }

      // Almere, NL Coordinates (Approximate visually center for the effect)
      const nodeX = width * 0.5;
      const nodeY = height * 0.45;
      
      // Draw Target Crosshair
      ctx.strokeStyle = "rgba(0, 255, 65, 0.4)";
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 25 + Math.sin(time / 500) * 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(nodeX - 40, nodeY);
      ctx.lineTo(nodeX + 40, nodeY);
      ctx.moveTo(nodeX, nodeY - 40);
      ctx.lineTo(nodeX, nodeY + 40);
      ctx.stroke();

      // Status Info Box
      const boxW = 150;
      const boxH = 50;
      ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
      ctx.fillRect(nodeX + 20, nodeY + 20, boxW, boxH);
      ctx.strokeStyle = "#00FF41";
      ctx.strokeRect(nodeX + 20, nodeY + 20, boxW, boxH);

      ctx.fillStyle = "#00FF41";
      ctx.font = "bold 10px 'JetBrains Mono'";
      ctx.fillText("NODE: ALMERE_HOME_01", nodeX + 28, nodeY + 35);
      ctx.font = "9px 'JetBrains Mono'";
      ctx.fillText("LAT: 52.3702° N", nodeX + 28, nodeY + 48);
      ctx.fillText("LON: 5.2231° E", nodeX + 28, nodeY + 60);
      
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []); // Empty dependencies ensure the loop is set up once

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[450px] border border-terminal-border bg-black/40 rounded-sm overflow-hidden group cursor-crosshair flex"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="flex items-center gap-2 text-terminal-green text-shadow-none">
          <span className="text-lg animate-pulse">⚙</span>
          <span className="font-bold text-sm tracking-tight">Active_Node_Telemetry</span>
        </div>
        <div className="text-[10px] text-terminal-green/50 ml-6 uppercase">
          Source: NL_NET_HUB // LOCATION: ALMERE
        </div>
      </div>

      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-90"
        onMouseMove={handleMouseMove}
      />
      
      {/* HUD Overlays */}
      <div className="absolute bottom-24 left-6 right-6 pointer-events-none opacity-40">
         <div className="h-[1px] w-full bg-terminal-green/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-terminal-green translate-x-[-100%] animate-[scan_2s_linear_infinite]" />
         </div>
         <div className="text-[8px] mt-2 flex justify-between uppercase">
            <span>Scanning...</span>
            <span>Freq: 4.8 GHz</span>
         </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-terminal-border bg-black/80 backdrop-blur-md flex justify-between items-center text-[10px] uppercase text-terminal-green/50 pointer-events-none">
        <div>
          <div className="text-terminal-green/20 mb-1">LOCAL_TIMESTAMP</div>
          <div className="text-terminal-green/80 tabular-nums font-bold">
            {currentTime.toLocaleTimeString('en-GB')}
          </div>
        </div>
        <div className="text-right">
          <div className="text-terminal-green/20 mb-1">LATENCY_STATUS</div>
          <div className="text-terminal-green/80">0ms (INTERNAL)</div>
        </div>
      </div>
    </div>
  );
};

export default DotMap;
