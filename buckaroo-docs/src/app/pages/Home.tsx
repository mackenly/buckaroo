import { RequestInfo } from "rwsdk/worker";
import { Button } from "@/app/components/Button";
import { FeatureCard } from "@/app/components/FeatureCard";
import { DiscordButton } from "@/app/components/DiscordButton";
import { DiscordLink } from "@/app/components/DiscordLink";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="min-h-screen bg-black text-white military-bg">
      {/* Animated Background Elements */}
      <div className="edge-nodes">
        <div className="node" style={{top: '15%', left: '10%', animationDelay: '0s'}}></div>
        <div className="node" style={{top: '25%', left: '85%', animationDelay: '1s'}}></div>
        <div className="node" style={{top: '45%', left: '15%', animationDelay: '2s'}}></div>
        <div className="node" style={{top: '65%', left: '90%', animationDelay: '0.5s'}}></div>
        <div className="node" style={{top: '80%', left: '20%', animationDelay: '1.5s'}}></div>
        <div className="node" style={{top: '35%', left: '70%', animationDelay: '2.5s'}}></div>
        <div className="node" style={{top: '55%', left: '45%', animationDelay: '0.8s'}}></div>
        <div className="node" style={{top: '75%', left: '60%', animationDelay: '1.8s'}}></div>
        
        <div className="connection-line" style={{
          top: '20%', left: '15%', width: '70%', 
          transform: 'rotate(5deg)', animationDelay: '0.5s'
        }}></div>
        <div className="connection-line" style={{
          top: '50%', left: '20%', width: '65%', 
          transform: 'rotate(-3deg)', animationDelay: '1.2s'
        }}></div>
        <div className="connection-line" style={{
          top: '70%', left: '25%', width: '60%', 
          transform: 'rotate(2deg)', animationDelay: '2s'
        }}></div>
      </div>

      <div className="data-flow">
        <div className="particle" style={{top: '20%', animationDelay: '0s'}}></div>
        <div className="particle" style={{top: '35%', animationDelay: '2s'}}></div>
        <div className="particle" style={{top: '50%', animationDelay: '4s'}}></div>
        <div className="particle" style={{top: '65%', animationDelay: '1s'}}></div>
        <div className="particle" style={{top: '80%', animationDelay: '3s'}}></div>
      </div>

      <div className="circuit-pattern">
        <div className="circuit-line" style={{
          top: '10%', left: '5%', width: '90%', height: '1px',
          animationDelay: '0s'
        }}></div>
        <div className="circuit-line" style={{
          top: '30%', left: '10%', width: '80%', height: '1px',
          animationDelay: '1s'
        }}></div>
        <div className="circuit-line" style={{
          top: '50%', left: '15%', width: '70%', height: '1px',
          animationDelay: '2s'
        }}></div>
        <div className="circuit-line" style={{
          top: '70%', left: '20%', width: '60%', height: '1px',
          animationDelay: '3s'
        }}></div>
        <div className="circuit-line" style={{
          top: '90%', left: '25%', width: '50%', height: '1px',
          animationDelay: '4s'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative px-6 py-4 border-b border-orange-500 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center border border-orange-400">
              <div className="w-4 h-4 bg-black"></div>
            </div>
            <span className="text-white font-mono font-bold text-xl tracking-wider military-heading">Buckaroo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <DiscordLink className="btn-link">DISCORD</DiscordLink>
            <a href="https://github.com/mackenly/buckaroo" target="_blank" rel="noopener noreferrer" className="btn-link">GITHUB</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-6 py-20 z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-6 py-3 border-2 border-orange-500 mb-8 bg-black animate-slide-up">
            <div className="w-2 h-2 bg-orange-500 mr-3 animate-pulse-glow"></div>
            <span className="text-orange-400 font-mono font-bold tracking-widest uppercase-text">Coming Soon</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-8 tracking-tight animate-slide-up-delay-1">
            <span className="text-white military-heading">Buckaroo</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto font-mono tracking-wide animate-slide-up-delay-2 uppercase-text">
            The Rust framework for building blazing-fast web applications on Cloudflare
          </h2>

          <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto font-mono leading-relaxed animate-slide-up-delay-3 uppercase-text">
            Experience the power of Rust with zero-copy performance, memory safety, and seamless Cloudflare integration. 
            Built for developers who demand speed, reliability, and modern web standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
            <DiscordButton variant="primary" className="industrial-button uppercase-text">
              Join Discord
            </DiscordButton>
            <Button href="https://github.com/mackenly/buckaroo" variant="secondary" target="_blank" rel="noopener noreferrer" className="industrial-button uppercase-text">
              View on GitHub
            </Button>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mt-20">
            <FeatureCard 
              icon={<div className="icon-blazing"></div>}
              title="Blazing Fast"
              description="WASM-based performance with Rust's memory safety and Cloudflare's global edge network"
              animationDelay="0s"
              hasHover={true}
            />

            <FeatureCard 
              icon={<div className="icon-shield"></div>}
              title="Memory Safe"
              description="Eliminate entire classes of bugs with Rust's ownership system and compile-time guarantees"
              animationDelay="0s"
              hasHover={true}
            />

            <FeatureCard 
              icon={<div className="icon-globe"></div>}
              title="Edge First"
              description="Deploy WASM modules to Cloudflare's global network for lightning-fast response times worldwide"
              animationDelay="0s"
              hasHover={true}
            />
          </div>


          {/* Discord CTA */}
          <div className="mt-20 border-2 border-orange-500 bg-black p-8 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-mono font-bold text-white mb-4 tracking-wide uppercase-text">Join the Community</h3>
            <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed uppercase-text">
              Connect with other developers, get early access, and stay updated on Buckaroo's development.
            </p>
            <div className="flex justify-center">
              <DiscordButton variant="primary" className="industrial-button uppercase-text">
                Join Discord
              </DiscordButton>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative px-6 py-12 border-t border-orange-500 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-6 h-6 bg-orange-500 border border-orange-400 flex items-center justify-center">
              <div className="w-3 h-3 bg-black"></div>
            </div>
            <span className="text-white font-mono font-bold tracking-wider military-heading">Buckaroo</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-gray-400 text-sm font-mono">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <span className="uppercase-text">Built with Rust • Powered by Cloudflare</span>
              <a 
                href="https://github.com/mackenly/buckaroo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                GitHub
              </a>
              <span>
                <span className="uppercase-text">Made with ❤️ by <a href="https://x.com/mackenlyjones" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">Mackenly Jones</a></span>
              </span>
            </div>
            <div className="text-xs text-gray-500 text-center max-w-2xl">
              <span className="uppercase-text">Buckaroo is not affiliated with Rust Foundation or Cloudflare, Inc. Rust and Cloudflare are trademarks of their respective owners.</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="scan-line"></div>
    </div>
  );
}
