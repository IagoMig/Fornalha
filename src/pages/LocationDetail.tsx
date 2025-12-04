import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ClockIcon, MapPinIcon, FileTextIcon, StarIcon, BikeIcon, ShoppingBagIcon, InstagramIcon, FacebookIcon, PhoneIcon, UtensilsIcon } from 'lucide-react';
type LocationData = {
  id: string;
  name: string;
  address: string;
  fullAddress: string;
  image: string;
  menuPdf: string;
  phone: string;
  mapEmbed: string;
};
const locationData: Record<string, LocationData> = {
  curitiba: {
    id: 'curitiba',
    name: 'Curitiba',
    address: 'Centro, Curitiba - PR',
    fullAddress: 'Rua XV de Novembro, 1234 - Centro, Curitiba - PR',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=600&fit=crop',
    menuPdf: '#',
    phone: '5541999999999',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.27!3d-25.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQ4LjAiUyA0OcKwMTYnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890'
  },
  araucaria: {
    id: 'araucaria',
    name: 'Araucária',
    address: 'Centro, Araucária - PR',
    fullAddress: 'Av. Victor do Amaral, 567 - Centro, Araucária - PR',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=600&fit=crop',
    menuPdf: '#',
    phone: '5541999999998',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.40!3d-25.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzI0LjAiUyA0OcKwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890'
  },
  'fazenda-rio-grande': {
    id: 'fazenda-rio-grande',
    name: 'Fazenda Rio Grande',
    address: 'Centro, Fazenda Rio Grande - PR',
    fullAddress: 'Rua Curitiba, 890 - Centro, Fazenda Rio Grande - PR',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=600&fit=crop',
    menuPdf: '#',
    phone: '5541999999997',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.31!3d-25.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzM2LjAiUyA0OcKwMTgnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890'
  }
};
const popularItems = [{
  name: 'Pizza Margherita',
  description: 'Molho de tomate, mussarela, manjericão fresco',
  price: 'R$ 45,90',
  image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop'
}, {
  name: 'Pizza Calabresa',
  description: 'Calabresa fatiada, cebola, azeitonas',
  price: 'R$ 42,90',
  image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop'
}, {
  name: 'Combo Sushi',
  description: '20 peças variadas de sushi e sashimi',
  price: 'R$ 69,90',
  image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=400&fit=crop'
}, {
  name: 'Porção de Fritas',
  description: 'Batata frita crocante com cheddar e bacon',
  price: 'R$ 32,90',
  image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop'
}];
const testimonials = [{
  name: 'Rubio B',
  rating: 5,
  text: 'Fiz a encomenda para entrega em casa! Excelente opção para festas e reuniões! Muito bem montada e muito saborosa! Vale a pena!',
  date: 'Agosto de 2018',
  occasion: 'Família'
}, {
  name: 'Cesar',
  rating: 5,
  text: 'Estivemos em 20 pessoas era buffet muito organizado... Pessoas maravilhosas...tudo quentinho...valeu cada centavo',
  date: 'Novembro de 2017',
  occasion: 'Amigos'
}, {
  name: 'Marjorye L',
  rating: 5,
  text: 'A maior e melhor pizza de Curitiba. Estávamos em 12. Pedimos a maior que tem, e ainda sobrou dois pedaços. Realmente a pizza é MUITO GRANDE, assim como sua qualidade é sensacional.',
  date: 'Fevereiro de 2016',
  occasion: ''
}];
const galleryImages = ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop'];
type LocationDetailProps = {
  locationId: string;
  onBack: () => void;
};
export function LocationDetail({
  locationId,
  onBack
}: LocationDetailProps) {
  const location = locationData[locationId];
  if (!location) {
    return <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Unidade não encontrada</p>
      </div>;
  }
  return <div className="min-h-screen w-full bg-black">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <motion.img initial={{
        opacity: 0,
        scale: 1.1
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} src={location.image} alt={`Fornalha Pizzaria - ${location.name}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Back Button */}
        <motion.button initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.3
      }} onClick={onBack} className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-[#722F37]">
          <ArrowLeftIcon className="h-4 w-4" />
          Voltar
        </motion.button>

        {/* Logo */}
        <motion.img initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} src="/fornalha_logo.png" alt="Fornalha Pizzaria" className="absolute right-4 top-4 w-24 md:w-32" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }}>
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Unidade {location.name}
          </h1>
          <div className="mb-8 h-1 w-24 bg-[#722F37]" />
        </motion.div>

        {/* Delivery Options */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.45
      }} className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <BikeIcon className="h-6 w-6 text-[#722F37]" />
            <div>
              <p className="text-sm font-medium text-white">Delivery</p>
              <p className="text-xs text-white/60">Entrega rápida</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <ShoppingBagIcon className="h-6 w-6 text-[#722F37]" />
            <div>
              <p className="text-sm font-medium text-white">Retirada</p>
              <p className="text-xs text-white/60">10% desconto</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <ClockIcon className="h-6 w-6 text-[#722F37]" />
            <div>
              <p className="text-sm font-medium text-white">18h às 23h</p>
              <p className="text-xs text-white/60">Todos os dias</p>
            </div>
          </div>
          <a href={`tel:+${location.phone}`} className="flex items-center gap-3 rounded-xl border border-[#722F37]/50 bg-[#722F37]/10 p-4 transition-colors hover:bg-[#722F37]/20">
            <PhoneIcon className="h-6 w-6 text-[#722F37]" />
            <div>
              <p className="text-sm font-medium text-white">Ligar</p>
              <p className="text-xs text-white/60">Fazer pedido</p>
            </div>
          </a>
        </motion.div>

        {/* iFood CTA Button - NEW */}
        <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        delay: 0.48,
        duration: 0.5
      }} className="mb-8">
          <motion.a href="https://www.ifood.com.br/delivery/curitiba-pr/fornalha-pizzaria" target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-[#EA1D2C] via-[#722F37] to-[#EA1D2C] p-[2px]" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#EA1D2C] via-[#722F37] to-[#EA1D2C] opacity-75 blur-xl" animate={{
            opacity: [0.5, 0.8, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

            <div className="relative flex items-center justify-center gap-4 rounded-2xl bg-black px-8 py-6 md:py-8">
              <motion.div animate={{
              scale: [1, 1.1, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EA1D2C] md:h-16 md:w-16">
                <UtensilsIcon className="h-7 w-7 text-white md:h-8 md:w-8" />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Faça seu pedido aqui
                </p>
                <p className="mt-1 text-sm text-white/70 md:text-base">
                  Peça pelo iFood e receba em casa 🍕
                </p>
              </div>

              <motion.div className="hidden md:block" animate={{
              x: [0, 5, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Info Cards */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="space-y-4">
            {/* Address Card */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#722F37]/20">
                  <MapPinIcon className="h-5 w-5 text-[#722F37]" />
                </div>
                <h3 className="font-semibold text-white">Endereço</h3>
              </div>
              <p className="text-white/70">{location.fullAddress}</p>
            </div>

            {/* Hours Card */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#722F37]/20">
                  <ClockIcon className="h-5 w-5 text-[#722F37]" />
                </div>
                <h3 className="font-semibold text-white">
                  Horário de Funcionamento
                </h3>
              </div>
              <p className="text-white/70">Segunda a Domingo</p>
              <p className="text-xl font-bold text-[#722F37]">18:00 às 23:00</p>
            </div>
          </motion.div>

          {/* Menu Card */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="rounded-xl border border-[#722F37]/30 bg-gradient-to-br from-[#722F37]/20 to-transparent p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#722F37]">
                <FileTextIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-white">Cardápio</h3>
            </div>
            <p className="mb-6 text-white/70">
              Confira nosso cardápio completo com pizzas, sushis e porções
              deliciosas.
            </p>
            <a href={location.menuPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#722F37] px-6 py-3 font-medium text-white transition-colors hover:bg-[#8B2E3B]">
              <FileTextIcon className="h-5 w-5" />
              Ver Cardápio em PDF
            </a>
            <p className="mt-4 text-xs text-white/40">
              * O cardápio será aberto em uma nova aba
            </p>
          </motion.div>
        </div>

        {/* Popular Items Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">
            🔥 Mais Pedidos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularItems.map((item, index) => <motion.div key={item.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="relative h-40 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-2 right-2 rounded-full bg-[#722F37] px-3 py-1 text-sm font-bold text-white">
                    {item.price}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-white/60">
                    {item.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8
      }} className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">📸 Galeria</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {galleryImages.map((image, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.8 + index * 0.05
          }} className="group relative aspect-square overflow-hidden rounded-xl">
                <img src={image} alt={`Galeria ${index + 1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#722F37]/0 transition-colors duration-300 group-hover:bg-[#722F37]/30" />
              </motion.div>)}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9
      }} className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">
            ⭐ Avaliações dos Clientes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9 + index * 0.1
          }} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  {testimonial.occasion && <span className="rounded-full bg-[#722F37]/20 px-2 py-1 text-xs text-[#722F37]">
                      {testimonial.occasion}
                    </span>}
                </div>
                <p className="mb-4 text-white/80">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#722F37]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/40">{testimonial.date}</p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1
      }} className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">📍 Como Chegar</h2>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <iframe src={location.mapEmbed} width="100%" height="300" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Mapa - Fornalha Pizzaria ${location.name}`} className="grayscale" />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.1
      }} className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-lg font-medium tracking-widest text-white/40">
              PIZZA • SUSHI • PORÇÕES
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/fornalhapizzaria" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-[#722F37] hover:text-white" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/fornalhapizzaria" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-[#722F37] hover:text-white" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-white/30">
            © 2024 Fornalha Pizzaria. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </div>;
}