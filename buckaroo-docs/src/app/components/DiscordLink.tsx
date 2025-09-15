"use client";

interface DiscordLinkProps {
  children: React.ReactNode;
  className?: string;
}

export function DiscordLink({ children, className }: DiscordLinkProps) {
  const handleClick = () => {
    // Client-side Discord link obfuscation
    const chars = [104, 116, 116, 112, 115, 58, 47, 47, 100, 105, 115, 99, 111, 114, 100, 46, 103, 103, 47, 104, 83, 103, 68, 57, 109, 55, 70, 87, 87];
    const url = chars.map(c => String.fromCharCode(c)).join('');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
