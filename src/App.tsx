import { useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Navbar } from './components/Navbar'

function App() {
  const [textureUrl, setTextureUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setTextureUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-[100vh] flex items-center pt-24 md:pt-0">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            shadows
            dpr={[1, 1.5]} // Lower max DPR for performance
          >
            <Suspense fallback={null}>
              <Experience textureUrl={textureUrl} />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full px-6 sm:px-12 pointer-events-none flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-right mt-32 md:mt-0">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-[1.2] drop-shadow-2xl">
              <span className="block text-white">
                نحول أفكارك إلى
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-blue-600">
                واقع رقمي
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light mx-auto md:mx-0">
              نحن في <span className="text-purple-400 font-bold">كود بلس</span>،
              نبني تطبيقات الهاتف ومواقع الويب بأحدث التقنيات.
              نبتكر حلولاً برمجية ذكية تضمن نمو وتطور مشروعك.
            </p>

            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="pointer-events-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all flex items-center gap-2 text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                جرب تصميمك
              </button>
              <a href="https://wa.me/message/K3AEW6WKCK37L1" target="_blank" rel="noopener noreferrer" className="pointer-events-auto px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all backdrop-blur-md text-sm">
                اطلب خدمتك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-6 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white font-bold mb-3">خدماتنا المتميزة</h2>
            <p className="text-white/50 text-sm">نقدم حلولاً تقنية متكاملة لتلبية احتياجاتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "تطوير التطبيقات", desc: "تصميم وبرمجة تطبيقات iOS و Android احترافية بأداء عالي.", icon: "📱" },
              { title: "تصميم المواقع", desc: "مواقع ويب متجاوبة وسريعة، تعكس هوية علامتك التجارية.", icon: "💻" },
              { title: "الحلول السحابية", desc: "أنظمة برمجية قابلة للتوسع وآمنة لإدارة أعمالك بكفاءة.", icon: "☁️" }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-10 py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl text-white font-bold mb-3">أحدث أعمالنا</h2>
              <p className="text-white/50 text-sm">مشاريع نفخر بإنجازها لعملائنا</p>
            </div>
            <button className="hidden md:block text-purple-400 hover:text-white transition-colors text-sm">عرض الكل &larr;</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors" />
              <span className="text-white/30 font-mono text-lg group-hover:scale-110 transition-transform">Project Alpha</span>
            </div>
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors" />
              <span className="text-white/30 font-mono text-lg group-hover:scale-110 transition-transform">Project Beta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="relative z-10 py-20 px-6 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            هل أنت جاهز للبدء؟
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-lg">
            دعنا نتحدث عن مشروعك القادم وتحدياتك التقنية. فريقنا جاهز للمساعدة.
          </p>
          <a href="https://wa.me/message/K3AEW6WKCK37L1" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform text-sm">
            تواصل معنا الآن عبر واتساب
          </a>

          <div className="mt-16 flex gap-6 text-white/30 text-xs">
            <span>&copy; 2026 Code Pulse. جميع الحقوق محفوظة.</span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
