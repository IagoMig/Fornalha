import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, SparklesIcon, InstagramIcon, FacebookIcon, TrophyIcon, PizzaIcon, UtensilsCrossedIcon, ClockIcon } from 'lucide-react';
type Location = {
  id: string;
  name: string;
  address: string;
};
const locations: Location[] = [{
  id: 'curitiba',
  name: 'Curitiba',
  address: 'Centro, Curitiba - PR'
}, {
  id: 'araucaria',
  name: 'Araucária',
  address: 'Centro, Araucária - PR'
}, {
  id: 'fazenda-rio-grande',
  name: 'Fazenda Rio Grande',
  address: 'Centro, Fazenda Rio Grande - PR'
}];
type LocationSelectorProps = {
  onSelectLocation: (locationId: string) => void;
};
export function LocationSelector({
  onSelectLocation
}: LocationSelectorProps) {
  return <div className="min-h-screen w-full bg-black px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-8 text-center">
          <img src="/4.png" alt="Fornalha Pizzaria" className="mx-auto mb-6 w-48 md:w-64" />
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Bem-vindo à Fornalha Pizzaria
          </h1>
          <p className="mt-3 text-lg text-white/70 md:text-xl">
            Pizza • Sushi • Porções
          </p>
        </motion.div>



        {/* Main CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            Escolha sua unidade
          </h2>
          <p className="text-white/60">
            Selecione a unidade mais próxima para ver o cardápio e fazer seu
            pedido
          </p>
        </motion.div>

        {/* Location Cards - PROMINENT */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {locations.map((location, index) => <motion.button key={location.id} initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4 + index * 0.1
        }} onClick={() => onSelectLocation(location.id)} className="group relative overflow-hidden rounded-2xl border-2 border-[#722F37]/50 bg-black/50 p-10 text-left transition-all duration-300 hover:border-[#722F37] hover:bg-[#722F37]/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#722F37]/0 to-[#722F37]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#722F37]/20 text-[#722F37] transition-all duration-300 group-hover:bg-[#722F37] group-hover:text-white group-hover:scale-110">
                  <MapPinIcon className="h-8 w-8" />
                </div>

                <h2 className="mb-3 text-2xl font-bold text-white">
                  {location.name}
                </h2>
                <p className="mb-6 text-white/60">{location.address}</p>

                <div className="flex items-center text-base font-medium text-[#722F37] transition-colors duration-300 group-hover:text-white">
                  <span>Ver cardápio e fazer pedido</span>
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.button>)}
        </div>

        {/* Features Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8
      }} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Por que escolher a Fornalha?
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/10 to-transparent p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#722F37]/20">
                <TrophyIcon className="h-6 w-6 text-[#722F37]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Qualidade Premium
              </h3>
              <p className="text-sm text-white/60">
                Ingredientes selecionados e receitas tradicionais
              </p>
            </div>

            <div className="rounded-xl border border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/10 to-transparent p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#722F37]/20">
                <PizzaIcon className="h-6 w-6 text-[#722F37]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Massa Artesanal</h3>
              <p className="text-sm text-white/60">
                Feita diariamente com ingredientes frescos
              </p>
            </div>

            <div className="rounded-xl border border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/10 to-transparent p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#722F37]/20">
                <UtensilsCrossedIcon className="h-6 w-6 text-[#722F37]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Grande Variedade
              </h3>
              <p className="text-sm text-white/60">
                Pizzas, sushis e porções para todos os gostos
              </p>
            </div>

            <div className="rounded-xl border border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/10 to-transparent p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#722F37]/20">
                <ClockIcon className="h-6 w-6 text-[#722F37]" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Entrega Rápida</h3>
              <p className="text-sm text-white/60">
                Delivery eficiente e pontual
              </p>
            </div>
          </div>
        </motion.div>

        {/* Customer Testimonials Preview */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9
      }} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            ⭐ O que nossos clientes dizem
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="mb-3 text-sm text-white/80">
                "Excelente opção para festas! Muito bem montada e saborosa!"
              </p>
              <p className="text-xs font-medium text-[#722F37]">Rubio B</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="mb-3 text-sm text-white/80">
                "Buffet muito organizado, pessoas maravilhosas, tudo quentinho.
                Valeu cada centavo!"
              </p>
              <p className="text-xs font-medium text-[#722F37]">Cesar</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="mb-3 text-sm text-white/80">
                "A maior e melhor pizza de Curitiba! Qualidade sensacional!"
              </p>
              <p className="text-xs font-medium text-[#722F37]">Marjorye L</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="text-center">
          <p className="text-white/40 mb-6">
            Horário de funcionamento: 18:00 às 23:00
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="https://instagram.com/fornalhapizzaria" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-[#722F37] hover:text-white" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://facebook.com/fornalhapizzaria" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-[#722F37] hover:text-white" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>;
}
