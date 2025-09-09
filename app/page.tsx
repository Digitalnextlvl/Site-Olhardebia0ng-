"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award, ArrowRight, Menu, X } from "lucide-react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Clean Simple Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Simple Pill Container */}
          <div className="bg-gradient-to-r from-[#92239B] via-[#8E1FA8] to-[#92239B] rounded-full shadow-lg">
            <nav className="flex items-center justify-between px-8 py-4">
              {/* Logo and Brand Text */}
              <div className="flex items-center space-x-4">
                {/* Simple Logo */}
                <div className="relative">
                  <Image src="/logo-olhar-de-bia.png" alt="Olhar de Bia" width={45} height={45} className="h-11 w-11" />
                </div>

                {/* Brand Text */}
                <div>
                  <h1 className="text-white text-xl font-bold tracking-wide">Olhar de Bia</h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {[
                  { name: "Home", href: "/" },
                  { name: "Quem Somos", href: "/quem-somos" },
                  { name: "Programas", href: "/programas" },
                  { name: "Impacto", href: "/impacto" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contato", href: "/contato" },
                  { name: "Alicerce", href: "/alicerce" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-5 py-2.5 text-white font-medium transition-colors duration-200 hover:text-yellow-300 rounded-full hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </nav>
          </div>

          {/* Simple Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4">
              <div className="bg-gradient-to-r from-[#92239B] via-[#8E1FA8] to-[#92239B] rounded-3xl shadow-lg">
                <div className="px-8 py-6">
                  <div className="flex flex-col space-y-3">
                    {[
                      { name: "Home", href: "/" },
                      { name: "Quem Somos", href: "/quem-somos" },
                      { name: "Programas", href: "/programas" },
                      { name: "Impacto", href: "/impacto" },
                      { name: "Blog", href: "/blog" },
                      { name: "Contato", href: "/contato" },
                      { name: "Alicerce", href: "/alicerce" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-6 py-4 text-white font-medium transition-colors duration-200 hover:text-yellow-300 rounded-2xl hover:bg-white/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-lg">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Gradient Light Effects */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 pt-24">
        {/* Animated Background with Gradient Lights */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#92239B] via-[#7B1FA2] to-[#6A1B9A]">
          {/* Floating Light Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-300/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#92239B]/50 to-transparent"></div>
        </div>
      </section>

      {/* Story Section - Moved before Mission */}
      <section className="py-20 bg-gradient-to-r from-[#92239B]/10 to-[#7B1FA2]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#92239B] mb-6">Um olhar que muda o mundo</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Em agosto de 2006, na cidade de Guarulhos-SP, Beatriz Martins tinha seis anos de idade quando se
                  deparou com uma cena comum nas grandes cidades, que a inspirou a fazer a diferença.
                </p>
                <p>
                  Crianças, numa realidade totalmente diferente à sua, pedindo doces no farol. Aquilo impactou tanto
                  aquela menininha que, com o apoio de seu pai, resolveu fazer algo para mudar a realidade daquelas
                  crianças.
                </p>
                <p className="font-semibold text-[#92239B]">
                  Assim nasceu o Olhar de Bia, que em 18 anos de história, impactou mais de 500.000 vidas atuando por
                  meio da Solidariedade, Capacitação Profissional e Compartilhamento em rede.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/bia-story-photo.png"
                  alt="Beatriz Martins com doações do Olhar de Bia"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#92239B] to-[#7B1FA2] rounded-2xl p-6 text-white text-center shadow-xl">
                <div className="text-3xl font-bold mb-2">500.000+</div>
                <div className="text-sm">Vidas Impactadas</div>
                <div className="text-xs opacity-90 mt-1">em 18 anos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#92239B] mb-4">Empresas parceiras do bem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aqui, estão as empresas que transformam o mundo com a gente!
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              {[
                { src: "/partners/gonube.png", alt: "GONube Soluções Cloud", width: 180 },
                { src: "/partners/sheraton.png", alt: "Sheraton São Paulo WTC Hotel", width: 160 },
                { src: "/partners/clinicorp.png", alt: "CliniCorp", width: 200 },
                { src: "/partners/compass.png", alt: "Compass", width: 180 },
                { src: "/partners/barreto.png", alt: "Barreto Advogados", width: 160 },
                { src: "/partners/galo-no-ar.png", alt: "Galo no Ar", width: 140 },
                { src: "/partners/vegus.png", alt: "Vegus", width: 120 },
                { src: "/partners/teixeira-duarte.png", alt: "Teixeira Duarte", width: 220 },
                { src: "/partners/rv-imola.png", alt: "RV Ímola", width: 140 },
                { src: "/partners/wtc.png", alt: "World Trade Center São Paulo", width: 180 },
              ].map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
                  style={{ minWidth: "240px", height: "120px" }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.alt}
                      width={partner.width}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { src: "/partners/gonube.png", alt: "GONube Soluções Cloud", width: 180 },
                { src: "/partners/sheraton.png", alt: "Sheraton São Paulo WTC Hotel", width: 160 },
                { src: "/partners/clinicorp.png", alt: "CliniCorp", width: 200 },
                { src: "/partners/compass.png", alt: "Compass", width: 180 },
                { src: "/partners/barreto.png", alt: "Barreto Advogados", width: 160 },
                { src: "/partners/galo-no-ar.png", alt: "Galo no Ar", width: 140 },
                { src: "/partners/vegus.png", alt: "Vegus", width: 120 },
                { src: "/partners/teixeira-duarte.png", alt: "Teixeira Duarte", width: 220 },
                { src: "/partners/rv-imola.png", alt: "RV Ímola", width: 140 },
                { src: "/partners/wtc.png", alt: "World Trade Center São Paulo", width: 180 },
              ].map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
                  style={{ minWidth: "240px", height: "120px" }}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.alt}
                      width={partner.width}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Sua empresa também pode fazer parte dessa transformação!</p>
            <Button
              size="lg"
              className="bg-[#92239B] hover:bg-[#7B1FA2] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Seja Nosso Parceiro
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#92239B] mb-6">Uma organização social com propósito</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nosso modelo inovador conecta empresas com projetos sociais através do conceito "Social as a Service",
              criando um ecossistema sustentável de impacto positivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12 text-[#92239B]" />,
                title: "Solidariedade",
                description: "Conectamos corações e mentes para transformar realidades através da solidariedade ativa.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#92239B]" />,
                title: "Capacitação",
                description: "Oferecemos capacitação profissional para criar oportunidades reais de crescimento.",
              },
              {
                icon: <Target className="h-12 w-12 text-[#92239B]" />,
                title: "Compartilhamento",
                description:
                  "Criamos uma rede de compartilhamento de conhecimento e recursos para maximizar o impacto.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#92239B] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS do Bem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#92239B] mb-6">SaaS do Bem</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Nosso papel é ser o braço social das empresas, por isso criamos o SaaS do Bem, o social as a service.
                </p>
                <p>
                  Somos o Braço Social das Empresas, criando soluções viáveis, reais, sustentáveis e duradouras para
                  companhias gerarem mais resultados através do impacto social com base no ESG.
                </p>
                <p className="font-semibold text-[#92239B]">
                  Conectamos empresas com projetos sociais através de um modelo inovador que gera valor compartilhado e
                  impacto mensurável para todos os envolvidos.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Seja Nosso Parceiro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/saas-do-bem-photo.png"
                  alt="Apresentação do SaaS do Bem para empresas parceiras"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#92239B] to-[#7B1FA2] rounded-2xl p-6 text-white text-center shadow-xl">
                <div className="text-2xl font-bold mb-2">ESG</div>
                <div className="text-sm">Compliance</div>
                <div className="text-xs opacity-90 mt-1">Certificado</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { icon: <Award />, label: "ESG Compliance", desc: "Certificação completa" },
              { icon: <Target />, label: "Impacto Mensurável", desc: "Resultados transparentes" },
              { icon: <Users />, label: "Rede de Parceiros", desc: "Conexões estratégicas" },
              { icon: <Heart />, label: "Transparência Total", desc: "Prestação de contas" },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4 text-[#92239B]">{item.icon}</div>
                <h4 className="font-bold text-[#92239B] mb-2">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#92239B] mb-6">
            Somos transparentes, porque estamos no mesmo time
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Nossa parceria é uma via de mão dupla. Por isso, nós sempre estaremos dispostos a esclarecer qualquer
            dúvida. Sua empresa é nossa aliada na luta por um Brasil melhor.
          </p>
          <Button
            size="lg"
            className="bg-[#92239B] hover:bg-[#7B1FA2] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Conheça Nosso Time
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#92239B] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo-olhar-de-bia.png" alt="Olhar de Bia" width={50} height={50} className="h-12 w-12" />
                <span className="text-2xl font-bold">Olhar de Bia</span>
              </div>
              <p className="text-white/90 leading-relaxed mb-8">
                O Olhar de Bia é uma Organização Não-Governamental (ONG) com o propósito de transformar comunidades por
                meio da Educação.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg mb-4">Fale com a gente aqui:</h4>
                <div className="space-y-2">
                  <a
                    href="mailto:contato@olhardebia.org.br"
                    className="block text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    contato@olhardebia.org.br
                  </a>
                  <a
                    href="mailto:ouvidoria@olhardebia.org.br"
                    className="block text-white/90 hover:text-yellow-400 transition-colors"
                  >
                    ouvidoria@olhardebia.org.br
                  </a>
                </div>
                <div className="mt-4 text-white/80">
                  <p>Guarulhos | São Paulo BR</p>
                  <p>A07022-200</p>
                </div>
              </div>
            </div>

            {/* Work With Us */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-lg mb-6">Quer trabalhar conosco?</h4>
              <p className="text-white/90 leading-relaxed">
                Estamos sempre procurando talentos para fazer parte da nossa equipe. Se você acredita no nosso propósito
                e deseja contribuir para a transformação das comunidades, entre em contato conosco!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
