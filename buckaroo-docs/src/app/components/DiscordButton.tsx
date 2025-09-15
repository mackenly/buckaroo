"use client";

interface DiscordButtonProps {
  variant: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export function DiscordButton({ variant, className, children }: DiscordButtonProps) {
  const handleClick = () => {
    // Client-side Discord link obfuscation
    const chars = [104, 116, 116, 112, 115, 58, 47, 47, 100, 105, 115, 99, 111, 114, 100, 46, 103, 103, 47, 104, 83, 103, 68, 57, 109, 55, 70, 87, 87];
    const url = chars.map(c => String.fromCharCode(c)).join('');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      className={`px-8 py-4 font-mono font-bold border-2 transition-all duration-200 tracking-wider flex items-center justify-center ${
        variant === 'primary' 
          ? 'bg-orange-500 text-black border-orange-500 hover:bg-transparent hover:text-gray-300 hover:border-gray-600'
          : 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400'
      } ${className || ''}`}
    >
      {children}
    </button>
  );
}
