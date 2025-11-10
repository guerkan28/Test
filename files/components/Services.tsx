'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Droplets, Wind, Sparkles, Shield, Car, Wand2 } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Droplets,
      title: 'Außenreinigung',
      description: 'Professionelle Handwäsche mit Premium-Produkten für strahlenden Glanz',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wind,
      title: 'Innenreinigung',
      description: 'Tiefenreinigung des Innenraums inklusive Polster und Teppiche',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Premium Detailing',
      description: 'Komplette Aufbereitung für showroom-würdigen Zustand',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Versiegelung',
      description: 'Langanhaltender Schutz durch Keramik- oder Nano-Versiegelung',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Car,
      title: 'Motorwäsche',
      description: 'Schonende Reinigung des Motorraums für optimale Pflege',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Wand2,
      title: 'Politur',
      description: 'Professionelle Lackpolitur für perfekte Oberfläche',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professionelle Autoreinigung für jeden Anspruch
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(to right, ${service.color})`,
                }}
              />
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services