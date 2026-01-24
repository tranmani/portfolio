import React, { useEffect, useRef } from "react";

const DotMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const spacing = 12;
    const dotSize = 1;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 255, 65, 0.15)";

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          // Subtle variance to make it look "techy"
          const opacity = Math.random() > 0.98 ? 0.4 : 0.15;
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.fillRect(x, y, dotSize, dotSize);
        }
      }

      // Highlight a specific "Node" area as seen in the mock
      const nodeX = width * 0.7;
      const nodeY = height * 0.4;
      
      // Draw a target box
      ctx.strokeStyle = "#00FF41";
      ctx.lineWidth = 1;
      ctx.strokeRect(nodeX - 40, nodeY - 15, 80, 30);
      
      // Connection line to central node
      ctx.beginPath();
      ctx.moveTo(nodeX, nodeY);
      ctx.lineTo(nodeX - 50, nodeY + 50);
      ctx.strokeStyle = "rgba(0, 255, 65, 0.3)";
      ctx.stroke();

      ctx.fillStyle = "#00FF41";
      ctx.font = "8px 'JetBrains Mono'";
      ctx.fillText("STATUS: ONLINE", nodeX - 35, nodeY - 3);
      ctx.fillText("LOC: 52.3676° N, 4.9041° E", nodeX - 35, nodeY + 8);
    };

    draw();
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] border border-terminal-border bg-black/40 rounded-sm overflow-hidden">
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 text-terminal-green">
          <span className="text-lg">⚙</span>
          <span className="font-bold text-sm tracking-tight">Contact_Node_Map</span>
        </div>
        <div className="text-[10px] text-terminal-green/50 ml-6">
          Primary Node: Amsterdam, NL (AWS-01)
        </div>
      </div>
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={400} 
        className="w-full h-full object-cover opacity-80"
      />
      
      {/* Footer stats in map */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-terminal-border flex justify-between text-[10px] uppercase text-terminal-green/50">
        <div>
          <div className="text-terminal-green/20 mb-1">CURRENT TIME</div>
          <div className="text-terminal-green/80">22:45:12 GMT+1</div>
        </div>
        <div>
          <div className="text-terminal-green/20 mb-1">NETWORK LATENCY</div>
          <div className="text-terminal-green/80">12ms (avg)</div>
        </div>
      </div>
      
      {/* Signal Strength bar */}
      <div className="absolute bottom-16 left-4 right-4 h-1 bg-terminal-green-faint">
        <div className="h-full bg-terminal-green w-full shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
        <div className="text-[8px] mt-1 flex justify-between uppercase">
          <span>Signal Strength</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default DotMap;
