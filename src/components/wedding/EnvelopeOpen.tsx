interface EnvelopeOpenProps {
  phase: number;
}

const EnvelopeOpen = ({ phase }: EnvelopeOpenProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Opened Envelope Container */}
      <div className="relative w-full aspect-[3/2]">
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg shadow-elegant" />
        
        {/* Opened Flap - Animated */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 origin-top ${
            phase >= 2 ? 'animate-envelope-open' : ''
          }`}
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="w-0 h-0 border-l-[12rem] border-r-[12rem] border-t-[8rem] border-l-transparent border-r-transparent border-t-burgundy-dark mx-auto" />
        </div>

        {/* Inner Card with Names */}
        <div className={`absolute inset-x-8 top-12 ${phase >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-cream rounded-lg p-8 shadow-card text-center">
            <h1 className="text-5xl md:text-6xl font-ornamental text-gold mb-2 animate-shimmer bg-gradient-to-r from-gold via-gold-dark to-gold bg-[length:200%_auto] bg-clip-text text-transparent">
              Unaish & Rayya
            </h1>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gold/50" />
              <p className="text-xs font-serif text-burgundy tracking-widest uppercase">
                Request the Pleasure of Your Company
              </p>
              <div className="h-px w-12 bg-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeOpen;
