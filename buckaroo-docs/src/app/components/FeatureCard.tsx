interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animationDelay?: string;
  hasHover?: boolean;
}

export function FeatureCard({ icon, title, description, animationDelay = '0s', hasHover = true }: FeatureCardProps) {
  const animationClass = animationDelay === '0s' ? 'animate-slide-up' : 
                        animationDelay === '0.1s' ? 'animate-slide-up-delay-1' : 
                        'animate-slide-up-delay-2';

  return (
    <div className={`border-2 border-gray-800 bg-black p-8 transition-all duration-200 ${animationClass} ${hasHover ? 'feature-card' : ''}`}>
      <div className="w-12 h-12 bg-orange-500 border border-orange-400 flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-mono font-bold text-white mb-4 tracking-wide uppercase-text">{title}</h3>
      <p className="text-gray-400 font-mono text-sm leading-relaxed uppercase-text">
        {description}
      </p>
    </div>
  );
}
