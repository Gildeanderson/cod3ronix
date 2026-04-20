/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { TechStack } from './components/sections/TechStack';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { BudgetLead } from './components/sections/BudgetLead';

export default function App() {
  return (
    <div className="bg-dark selection:bg-primary selection:text-white relative">
      <div className="atmosphere" />
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BudgetLead />
    </div>
  );
}

