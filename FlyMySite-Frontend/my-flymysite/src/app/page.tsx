"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Plane,
  User,
  Stethoscope,
  Briefcase,
  Scissors,
  Heart,
  Camera,
  Dumbbell,
  Check,
  ArrowRight,
  Mail,
  Instagram,
} from "lucide-react"

// Tipos de negocio con plan y categoría para definir precios personalizados
const tiposDeNegocio = [
  { icon: Stethoscope, label: "Dentista", plan: "professional", categoria: "grupo1" },
  { icon: Heart, label: "Psicólogo", plan: "premium", categoria: "grupo1" },
  { icon: Scissors, label: "Estética", plan: "starter", categoria: "grupo3" },
  { icon: Briefcase, label: "Abogado", plan: "premium", categoria: "grupo1" },
  { icon: User, label: "Coach", plan: "professional", categoria: "grupo2" },
  { icon: Camera, label: "Fotógrafo", plan: "professional", categoria: "grupo2" },
  { icon: Dumbbell, label: "Entrenador", plan: "starter", categoria: "grupo2" },
]

// Precios personalizados por grupo y plan
const preciosPorGrupo: Record<string, Record<string, string>> = {
  grupo1: { starter: "€20", professional: "€35", premium: "€50" }, // Dentista, Psicólogo, Abogado
  grupo2: { starter: "€20", professional: "€30", premium: "€40" }, // Coach, Fotógrafo, Entrenador
  grupo3: { starter: "€10", professional: "€25", premium: "€35" }, // Estética
}

// Definición base de planes con características (sin precio)
const planesBase = {
  starter: {
    name: "Inicial",
    features: [
      "Sitio web profesional",
      "Sistema de reservas básico",
      "Integración de pagos",
      "Recordatorios por email",
      "Alojamiento y actualizaciones",
    ],
  },
  professional: {
    name: "Profesional",
    features: [
      "Sitio web profesional",
      "Sistema de reservas avanzado",
      "Integración de pagos",
      "Recordatorios por SMS y email",
      "Alojamiento y actualizaciones",
      "Panel de analíticas",
    ],
  },
  premium: {
    name: "Premium",
    features: [
      "Sitio web profesional",
      "Sistema de reservas avanzado",
      "Integración de pagos",
      "Recordatorios por SMS y email",
      "Alojamiento y actualizaciones",
      "Panel de analíticas",
      "Marca personalizada",
      "Soporte prioritario",
    ],
  },
}

export default function FlyMySiteLanding() {
  // Estado para plan seleccionado
  const [planSeleccionado, setPlanSeleccionado] = useState<string>("")
  // Estado para categoría de precios según negocio
  const [categoriaPrecios, setCategoriaPrecios] = useState<string>("grupo1")
  // Estado para animación visibilidad
  const [esVisible, setEsVisible] = useState(false)

  useEffect(() => {
    setEsVisible(true)
  }, [])

  const scrollASeccion = (idSeccion: string) => {
    document.getElementById(idSeccion)?.scrollIntoView({ behavior: "smooth" })
  }

  const manejarClickTipoNegocio = (tipoPlan: string, categoria: string) => {
    setPlanSeleccionado(tipoPlan)
    setCategoriaPrecios(categoria)
    scrollASeccion("pricing")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      {/* Elementos animados de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-sky-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping"></div>

        {/* SVG de la trayectoria de vuelo */}
        <svg className="absolute top-1/4 right-10 w-64 h-32 opacity-20" viewBox="0 0 200 100">
          <path
            d="M10,80 Q50,20 100,50 T190,30"
            stroke="#0ea5e9"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Sección principal (Hero) */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${esVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mb-8">
              <div className="inline-block animate-bounce">
                <img src="/logo.png" alt="Logo" className="w-45 h-45 object-contain" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-ping"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Lanza tu negocio online fácilmente
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Presencia digital completa para tu negocio: sitio web, reservas, pagos y recordatorios — todo gestionado para ti
            </p>

            <Button
              onClick={() => scrollASeccion("business-types")}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Selector de tipo de negocio */}
      <section id="business-types" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">¿Cuál es tu negocio?</h2>
            <p className="text-xl text-gray-600">Elige tu profesión para ver el plan perfecto para ti</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {tiposDeNegocio.map((negocio, index) => {
              const Icono = negocio.icon
              return (
                <Card
                  key={negocio.label}
                  className={`cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl bg-white/80 backdrop-blur-sm border-2 hover:border-sky-300 rounded-2xl ${
                    planSeleccionado === negocio.plan ? "border-sky-500 shadow-lg scale-105" : "border-gray-200"
                  }`}
                  onClick={() => manejarClickTipoNegocio(negocio.plan, negocio.categoria)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center">
                      <Icono className="w-8 h-8 text-sky-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{negocio.label}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Planes de precios */}
      <section id="pricing" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Elige tu plan </h2>
            <p className="text-xl text-gray-600">Todos los planes incluyen todo lo que necesitas para despegar online</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(planesBase).map(([clave, plan]) => {
              // Obtener precio personalizado para esta categoría y plan
              const precio = preciosPorGrupo[categoriaPrecios]?.[clave] ?? "€--"

              return (
                <Card
                  key={clave}
                  className={`relative transition-all duration-300 hover:scale-105 rounded-3xl overflow-hidden ${
                    planSeleccionado === clave
                      ? "border-2 border-sky-500 shadow-2xl scale-105"
                      : "border border-gray-200 hover:shadow-xl"
                  } ${clave === "professional" ? "md:scale-110 border-sky-400 shadow-lg" : ""}`}
                >
                  {clave === "professional" && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center py-2 text-sm font-semibold">
                      Más popular
                    </div>
                  )}

                  <CardHeader className={`text-center ${clave === "professional" ? "pt-12" : "pt-8"}`}>
                    <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-sky-600 mt-4">
                      {precio}
                      <span className="text-lg text-gray-500">/mes</span>
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-4">
                      {plan.features.map((caracteristica, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full mt-8 rounded-full py-3 transition-all duration-300 ${
                        clave === "professional"
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                          : "bg-white border-2 border-sky-500 text-sky-600 hover:bg-sky-50"
                      }`}
                    >
                      Elegir {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Cómo funciona</h2>
            <p className="text-xl text-gray-600">Tres pasos simples hacia el éxito digital</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { paso: "1", titulo: "Elige tu plan", descripcion: "Escoge el plan perfecto para las necesidades de tu negocio" },
              {
                paso: "2",
                titulo: "Construimos tu sitio",
                descripcion: "Nuestro equipo crea toda tu presencia digital",
              },
              {
                paso: "3",
                titulo: "Tú enfócate en tu negocio",
                descripcion: "Nosotros gestionamos actualizaciones, hosting y mantenimiento",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {item.paso}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-sky-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.titulo}</h3>
                <p className="text-gray-600 text-lg">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Plane className="w-12 h-12 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Preguntas? Contáctanos en cualquier momento.</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:contact@flymysite.com"
              className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-3" />
              contact@flymysite.com
            </a>

            <a
              href="https://instagram.com/flymysite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-3" />
              @flymysite
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
