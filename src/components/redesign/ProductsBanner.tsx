import React from 'react';
import { Reveal } from './Reveal';

export const ProductsBanner: React.FC = () => (
  <section className="editorial-intro" aria-labelledby="dealer-heading">
    <Reveal>
      <p className="theme-eyebrow">Partners in progress</p>
      <h2 id="dealer-heading">Built for your business.<br />Committed to your growth.</h2>
      <p>Genuine products, dependable distribution and people who care.<br className="hidden sm:block" /> Discover why dealers across India choose Realtech Vision.</p>
    </Reveal>
  </section>
);
export default ProductsBanner;
