interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  target?: string;
  rel?: string;
  className?: string;
}

export function Button({ href, children, variant, target, rel, className = '' }: ButtonProps) {
  const baseClasses = "px-8 py-4 font-mono font-bold border-2 transition-all duration-200 tracking-wider flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-orange-500 text-black border-orange-500 hover:bg-transparent hover:text-gray-300 hover:border-gray-600",
    secondary: "border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400"
  };

  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
