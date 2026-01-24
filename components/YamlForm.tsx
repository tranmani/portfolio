import React, { useState } from "react";

const YamlForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.name,
          userEmail: formData.email,
          subject: formData.subject,
          messagesToSent: [
            {
              id: Date.now(),
              content: formData.message,
              isMe: true,
              time: new Date().toLocaleTimeString(),
            },
          ],
          type: "tranmani-view",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="font-mono text-sm space-y-2">
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">1</span>
        <div><span className="text-terminal-green">apiVersion:</span> <span className="text-terminal-green/80">v1</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">2</span>
        <div><span className="text-terminal-green">kind:</span> <span className="text-terminal-green/80">CommunicationRequest</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">3</span>
        <div><span className="text-terminal-green">metadata:</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">4</span>
        <div className="pl-4 flex items-center gap-2 text-wrap">
          <span className="text-terminal-green">name:</span> 
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="sender-identity"
            className="bg-transparent border border-dashed border-terminal-border px-2 py-0.5 outline-none focus:border-terminal-green transition-colors text-terminal-green/80 w-48"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">5</span>
        <div><span className="text-terminal-green">spec:</span></div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">6</span>
        <div className="pl-4 flex items-center gap-2 text-wrap grow">
          <span className="text-terminal-green">sender_email:</span> 
          <div className="flex items-center gap-2 border border-dashed border-terminal-border px-2 py-0.5 focus-within:border-terminal-green transition-colors grow max-w-sm">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@domain.com"
              className="bg-transparent outline-none text-terminal-green/80 w-full"
            />
            <div className="flex items-center bg-red-500 px-1 rounded-sm flex-shrink-0">
               <span className="text-[8px] text-black font-bold tracking-tighter">***|</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">7</span>
        <div className="pl-4 flex items-center gap-2 text-wrap">
          <span className="text-terminal-green">subject:</span> 
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="collaboration_proposal"
            className="bg-transparent border border-dashed border-terminal-border px-2 py-0.5 outline-none focus:border-terminal-green transition-colors text-terminal-green/80 w-64"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <span className="text-terminal-green/50 w-4 select-none">8</span>
        <div className="pl-4 grow">
          <span className="text-terminal-green">message:</span> 
          <div className="mt-2 border border-dashed border-terminal-border p-4 relative min-h-[150px]">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message payload here ..."
              className="bg-transparent w-full h-32 outline-none resize-none text-terminal-green/80"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-8 flex justify-between items-center sm:flex-row flex-col gap-4">
        <div className="text-[10px] uppercase font-bold">
           {status === "idle" && <span className="text-terminal-green/40 animate-pulse">READY_FOR_DEPLOYMENT</span>}
           {status === "submitting" && <span className="text-terminal-green">STATUS: DEPLOYING...</span>}
           {status === "success" && <span className="text-terminal-green shimmer">STATUS: 200 OK (Email Sent)</span>}
           {status === "error" && <span className="text-red-500">STATUS: 500 FAIL (Try Again)</span>}
        </div>
        <button 
          type="submit"
          disabled={status === "submitting"}
          className="bg-terminal-green text-background px-6 py-2 font-bold flex items-center gap-2 hover:bg-white transition-all uppercase text-xs disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
        >
          <span>{status === "submitting" ? "⌛" : "⚡"}</span> 
          {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </div>
    </form>
  );
};

export default YamlForm;
