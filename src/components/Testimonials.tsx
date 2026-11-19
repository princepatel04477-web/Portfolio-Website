import React from 'react';
import { Quote, Star, MessageSquareQuote } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { profile } from '../data/profile';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="relative w-full py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
          <MessageSquareQuote size={14} /> / Direct Client Words
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Client Endorsements &amp; <span className="text-accent">Trust</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Authentic feedback from organizational leaders, founders, and managing directors following production deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profile.testimonials.map((review, i) => (
          <SpotlightCard
            key={i}
            className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-accent">
                <Quote size={28} className="opacity-40" />
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed italic">
                "{review.quote}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex flex-col">
              <span className="text-sm font-bold text-white">{review.author}</span>
              <span className="text-xs text-accent font-medium mt-0.5">{review.role}</span>
              <span className="text-[11px] text-zinc-500 font-mono mt-0.5">{review.company}</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
