interface EnvelopeOpenProps {
  phase: number;
}
const EnvelopeOpen = ({
  phase
}: EnvelopeOpenProps) => {
  return <div className="relative w-full max-w-md mx-auto min-h-[300px]">
      {/* Opened Envelope Container */}
      <div className="relative w-full aspect-[3/2] transition-all duration-700 ease-out">
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-lg shadow-elegant" />
        
        {/* Opened Flap - Animated */}
        <div className={`absolute top-0 left-0 w-full h-32 origin-top ${phase >= 2 ? 'animate-envelope-open' : ''}`} style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
      }}>
          <div className="w-full h-full bg-burgundy-dark opacity-90 rounded-t-lg" />
        </div>

        {/* Inner Card with Names */}
        <div className={`absolute inset-8 flex items-center justify-center ${phase >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-cream rounded-lg p-4 shadow-card text-center w-full h-full flex flex-col items-center justify-center gap-3">
            <h1 className="md:text-4xl font-ornamental text-gold animate-shimmer bg-gradient-to-r from-gold via-gold-dark to-gold bg-[length:200%_auto] bg-clip-text text-transparent leading-tight text-4xl">
              Unaish & Rayya
            </h1>
            <div className="flex items-center justify-center gap-2 w-full px-2">
              <div className="h-px flex-1 bg-gold/50" />
              <p className="text-[10px] font-serif text-burgundy tracking-wider uppercase whitespace-nowrap">Request's the Pleasure of Your Company</p>
              <div className="h-px flex-1 bg-gold/50" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default EnvelopeOpen;