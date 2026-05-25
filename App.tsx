import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, Phone, Clock, Menu as MenuIcon, X, ChefHat, Leaf, ShieldCheck, Heart, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from './data/menuData';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-brand-black/90 backdrop-blur-md border-b-2 border-brand-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl md:text-3xl tracking-widest text-brand-orange font-bold">SWAGAT</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="font-sans font-bold hover:text-brand-orange transition-colors text-sm uppercase tracking-widest">About</a>
              <a href="#menu" className="font-sans font-bold hover:text-brand-orange transition-colors text-sm uppercase tracking-widest">Menu</a>
              <a href="#reviews" className="font-sans font-bold hover:text-brand-orange transition-colors text-sm uppercase tracking-widest">Reviews</a>
              <a href="#contact" className="font-sans font-bold hover:text-brand-orange transition-colors text-sm uppercase tracking-widest">Contact</a>
              <a 
                href="#menu" 
                className="bg-brand-orange text-brand-black px-6 py-3 font-sans font-black uppercase tracking-widest text-sm hover:bg-brand-cream transition-colors"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-cream hover:text-brand-orange focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-black border-t-2 border-brand-card overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col space-y-6 text-center">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-sans font-bold text-xl uppercase tracking-widest">About</a>
                <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="font-sans font-bold text-xl uppercase tracking-widest">Menu</a>
                <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="font-sans font-bold text-xl uppercase tracking-widest">Reviews</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-sans font-bold text-xl uppercase tracking-widest">Contact</a>
                <a 
                  href="#menu" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-orange text-brand-black px-6 py-4 font-sans font-black uppercase tracking-widest text-lg"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2000" 
            alt="Rich Indian Cuisine" 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-block bg-brand-card border border-brand-orange/30 px-4 py-2 mb-8 text-brand-orange text-sm font-black uppercase tracking-widest">
                Authentic Taste • Family Vibes
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 text-white uppercase drop-shadow-2xl">
                Freshly<br />Cooked<br />
                <span className="text-brand-orange">Happiness.</span>
              </h1>
              <p className="text-lg md:text-xl font-sans text-brand-cream/80 mb-10 max-w-lg leading-relaxed font-semibold">
                From creamy chaap rolls to rich North Indian curries — every bite is loaded with bold, unforgettable flavor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#menu" className="bg-brand-orange hover:bg-brand-orange/90 text-brand-pure-black font-black font-sans uppercase tracking-widest px-8 py-5 text-center flex justify-center items-center gap-2 group transition-all">
                  View Full Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="bg-transparent border-2 border-brand-cream font-black font-sans uppercase tracking-widest px-8 py-5 text-center hover:bg-brand-cream hover:text-brand-black transition-colors">
                  Book a Table
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider text-brand-cream/60">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-orange fill-brand-orange" />
                  <span>4.8 Rating</span>
                </div>
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                <span>Hygienic Kitchen</span>
              </div>
            </motion.div>

            {/* Right side floating elements - Hidden on smaller screens for impact */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800" 
                alt="Signature Dish" 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] object-cover rounded-full border-4 border-brand-card shadow-[0_0_100px_rgba(231,111,0,0.15)] z-10"
              />
              {/* Floating badges */}
              <div className="absolute top-20 right-80 bg-brand-card shadow-2xl p-4 flex items-center gap-4 z-20 border-l-4 border-brand-orange">
                <ShieldCheck className="w-8 h-8 text-brand-orange" />
                <div>
                  <div className="text-xs text-brand-cream/70 font-black uppercase tracking-widest">Quality</div>
                  <div className="font-bold">100% Fresh</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY CHOOSE US --- */}
      <section className="py-24 bg-brand-pure-black relative border-t-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl text-brand-cream">Why <span className="text-brand-orange">Swagat</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Leaf />, title: "Fresh Ingredients", desc: "No compromises. Only the best." },
              { icon: <Heart />, title: "Family Dining", desc: "Warm vibes for perfect evenings." },
              { icon: <ShieldCheck />, title: "Hygiene First", desc: "Spotless kitchen, guaranteed." },
              { icon: <Star />, title: "Taste Loaded", desc: "Bold spices, authentic recipes." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-card p-8 border border-brand-card hover:border-brand-orange transition-colors group">
                <div className="w-16 h-16 bg-brand-black flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="font-sans font-black text-xl mb-2 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-brand-cream/70 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ABOUT US --- */}
      <section id="about" className="py-32 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000" 
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-8 border-brand-black mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-orange text-brand-pure-black p-8 max-w-xs shadow-2xl hidden md:block">
                <div className="font-serif text-6xl font-black mb-2">5K+</div>
                <div className="font-sans font-black uppercase tracking-widest text-sm">Happy Guests Since We Started</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl text-brand-cream mb-8">More Than <br/><span className="text-brand-orange">Just A Meal.</span></h2>
              <p className="font-sans text-xl text-brand-cream/80 mb-8 font-semibold leading-relaxed">
                At Swagat Family Restaurant, food is an experience shared with family and friends. From authentic North Indian favorites to flavorful street-style delights, every dish is freshly prepared with rich ingredients, traditional recipes, and a touch of love.
              </p>
              <ul className="space-y-4 mb-12">
                {['Crafted With Love & Spices', 'Pure Taste, Pure Happiness', 'The Taste Your Family Deserves'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans font-bold text-lg">
                    <CheckCircle2 className="text-brand-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#menu" className="inline-block bg-brand-card text-brand-orange border border-brand-orange font-black uppercase tracking-widest px-8 py-4 hover:bg-brand-orange hover:text-brand-black transition-colors">
                Taste the Tradition
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MENU --- */}
      <section id="menu" className="py-32 bg-brand-pure-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6">Our <span className="text-brand-orange">Menu</span></h2>
            <p className="font-sans font-bold text-brand-cream/60 uppercase tracking-widest">Discover our signature flavors</p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {MENU_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-sans font-black uppercase tracking-widest px-6 py-3 transition-colors text-sm md:text-base border-2 ${
                  activeCategory === category 
                  ? 'bg-brand-orange text-brand-black border-brand-orange' 
                  : 'bg-transparent text-brand-cream border-brand-card hover:border-brand-orange/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {MENU_ITEMS.filter(item => item.category === activeCategory).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-card p-6 border-l-4 border-transparent hover:border-brand-orange transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-sans font-black text-xl md:text-2xl tracking-wide flex items-center gap-3">
                        {item.name}
                        {item.isVeg && <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]" title="Vegetarian"></div>}
                      </h3>
                    </div>
                    <div className="font-serif font-black text-2xl text-brand-orange ml-4 whitespace-nowrap">
                      ₹{item.price}
                    </div>
                  </div>
                  <p className="font-sans text-brand-cream/60 mb-4 font-medium leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                  {item.chefSpecial && (
                    <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange px-3 py-1 text-xs font-black uppercase tracking-wider">
                      <ChefHat size={14} /> Chef's Special
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CHEF'S SPECIAL SHOWCASE (INVERTED BOLD) --- */}
      <section className="py-32 bg-brand-orange text-brand-pure-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-4 text-brand-pure-black">Chef's Special</h2>
            <div className="w-24 h-2 bg-brand-pure-black mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-brand-cream/95 p-8 md:p-12 shadow-2xl">
            <div className="order-2 lg:order-1">
              <div className="font-sans font-black uppercase tracking-widest text-brand-orange mb-4 text-sm bg-brand-pure-black inline-block px-4 py-1 text-brand-cream">Must Try</div>
              <h3 className="text-4xl md:text-5xl mb-6 text-brand-pure-black font-black leading-tight">
                Honey Chilli Potato
              </h3>
              <p className="font-sans text-lg md:text-xl font-bold text-gray-800 mb-8 leading-relaxed">
                Crispy fried potato wedges tossed in a sweet, spicy, and tangy honey chili glaze. Finished with toasted sesame seeds and fresh scallions for the ultimate flavor explosion.
              </p>
              <a href="#contact" className="inline-block bg-brand-pure-black text-brand-orange font-black uppercase tracking-widest px-8 py-5 hover:bg-brand-orange hover:text-brand-pure-black hover:outline hover:outline-4 hover:outline-brand-pure-black hover:-outline-offset-4 transition-all">
                Order Now
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chilli_Potato.jpg" 
                alt="Honey Chilli Potato" 
                className="w-full aspect-square object-cover shadow-[20px_20px_0px_#121212]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CUSTOMER REVIEWS --- */}
      <section id="reviews" className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl text-center mb-16 text-brand-cream">
            What They <span className="text-brand-orange">Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Best family restaurant experience nearby! The flavors are incredibly authentic and bold.", author: "Rahul Sharma" },
              { text: "The Malai Chaap is out of this world. Spotless hygiene and fantastic service every time we visit.", author: "Priya Singh" },
              { text: "Affordable luxury dining at its best. The Chole Bhature transported me straight to Punjab.", author: "Amit Verma" }
            ].map((review, i) => (
              <div key={i} className="bg-brand-pure-black border-2 border-brand-card p-10 flex flex-col justify-between hover:border-brand-orange transition-colors">
                <div>
                  <div className="flex text-brand-orange mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-brand-orange" />)}
                  </div>
                  <p className="font-sans text-lg font-medium text-brand-cream/90 italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="font-sans font-black uppercase tracking-widest text-brand-orange">
                  — {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: GALLERY --- */}
      <section className="py-4 bg-brand-pure-black">
        {/* Zero gap, high impact grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 aspect-[4/1] md:aspect-[4/2] max-h-[800px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800" alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800" alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=800" alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1626779878235-51527abeb5d0?auto=format&fit=crop&q=80&w=800" alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </section>

      {/* --- SECTION 8: CONTACT & LOCATION --- */}
      <section id="contact" className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card p-4 md:p-8 border border-brand-card border-t-8 border-t-brand-orange shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <div className="bg-brand-pure-black min-h-[400px] flex items-center justify-center border border-brand-card relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000"></div>
                <div className="relative z-10 text-center font-sans">
                  <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <div className="font-black text-2xl uppercase tracking-widest mb-2">Interactive Map</div>
                  <div className="text-brand-cream/60">Click to open directions</div>
                </div>
              </div>
              
              {/* Info */}
              <div className="flex flex-col justify-center py-8">
                <h2 className="text-4xl md:text-5xl mb-10 text-brand-cream text-center lg:text-left">
                  Visit <span className="text-brand-orange">Us</span> Today
                </h2>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-black p-3 text-brand-orange">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="font-sans font-black uppercase tracking-widest mb-1">Location</h4>
                      <p className="font-sans text-brand-cream/70 font-medium">123 Food Street, Culinary Avenue<br />New Delhi, India 110001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-black p-3 text-brand-orange">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-sans font-black uppercase tracking-widest mb-1">Contact</h4>
                      <p className="font-sans text-brand-cream/70 font-medium">+91 98765 43210<br />hello@swagat.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-black p-3 text-brand-orange">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="font-sans font-black uppercase tracking-widest mb-1">Open Daily</h4>
                      <p className="font-sans text-brand-cream/70 font-medium">11:00 AM - 11:30 PM<br />Dine-in, Takeaway & Delivery</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-brand-orange text-brand-pure-black font-black font-sans uppercase tracking-widest py-5 text-xl hover:bg-brand-cream transition-colors text-center">
                  Reserve a Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-pure-black py-16 border-t border-brand-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="font-serif text-3xl font-black tracking-widest text-brand-orange mb-6">SWAGAT</div>
          <div className="font-sans font-bold text-brand-cream/50 mb-8 uppercase tracking-widest text-sm max-w-sm leading-relaxed">
            Authentic Flavors. Warm Family Moments. The Taste Your Family Deserves.
          </div>
          <div className="flex gap-6 mb-12">
             <a href="#" className="text-brand-cream/50 hover:text-brand-orange transition-colors font-sans font-bold uppercase tracking-widest text-xs">Instagram</a>
             <a href="#" className="text-brand-cream/50 hover:text-brand-orange transition-colors font-sans font-bold uppercase tracking-widest text-xs">Facebook</a>
             <a href="#" className="text-brand-cream/50 hover:text-brand-orange transition-colors font-sans font-bold uppercase tracking-widest text-xs">Zomato</a>
          </div>
          <div className="w-24 h-1 bg-brand-card mb-8"></div>
          <div className="font-sans font-semibold text-brand-cream/40 text-xs tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Swagat Family Restaurant. All rights reserved.
          </div>
        </div>
      </footer>

      {/* --- FLOATING ACTION BUTTON (MOBILE PRIORITY) --- */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-brand-orange text-brand-pure-black p-4 md:p-5 rounded-full shadow-[0_0_30px_rgba(231,111,0,0.4)] z-50 hover:scale-110 transition-transform group"
        aria-label="Order on WhatsApp"
      >
        <Utensils className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
      </a>
    </div>
  );
}
