import { useState } from "react";
export default function SecEmail() {
  const [copied, setCopied] = useState(false);
  const email = "counterspellgta@gmail.com";

  const handleCopy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }

    document.body.removeChild(tempInput);
  };

  return (
    <div className="relative px-6 text-center neuebit bg retro">
      <button
        onClick={handleCopy}
        className={`
            inline-block px-12 py-3 text-2xl uppercase
            ${copied ? "bg-cyan-400 text-pink-600" : "bg-pink-600 text-cyan-300"}
            hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all
            rounded-xl border-2 border-cyan-300
            shadow-lg shadow-cyan-500/50
        `}
        style={{ textDecorationLine: "none" }}
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>
    </div>
  );
}
