'use client'
import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    const initNeonCursor = async () => {
      const { neonCursor } = await import('threejs-toys')
      
      // Enhanced cursor with EASTFRONT branding
      const cursor = neonCursor({
        el: document.getElementById('app'),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
        // Custom particle colors matching EASTFRONT theme
        particleColor: '#ff00ff',
        trailColor: '#00ffff'
      })

      // EASTFRONT text particles effect
      const createTextParticles = () => {
        const text = 'EASTFRONT'
        const particles = []
        
        text.split('').forEach((char, i) => {
          const particle = document.createElement('div')
          particle.className = 'eastfront-particle'
          particle.textContent = char
          particle.style.color = `hsl(${i * 40}, 100%, 70%)`
          document.body.appendChild(particle)
          particles.push(particle)
        })

        const animate = () => {
          particles.forEach((p, i) => {
            const angle = Date.now() / 1000 + i
            const x = Math.sin(angle) * 50
            const y = Math.cos(angle) * 50
            p.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            p.style.opacity = Math.abs(Math.sin(angle * 2))
          })
          requestAnimationFrame(animate)
        }
        animate()

        return () => particles.forEach(p => p.remove())
      }

      const cleanupText = createTextParticles()
      
      return () => {
        if (cursor && cursor.destroy) cursor.destroy()
        cleanupText()
      }
    }
    
    initNeonCursor()
  }, [])

  return (
    <div id="app" className="min-h-screen flex flex-col items-center py-10 px-4 overflow-auto touch-pan-up text-white text-center">
      <h1 className="text-[60px] leading-[80px] my-5 uppercase">EASTFRONT</h1>
      
      <div className="bg-black/70 rounded-xl p-8 max-w-4xl w-full my-5 shadow-lg shadow-pink-500/50 border border-white/20 text-right">
        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h2 className="text-[28px] font-bold text-pink-500 mb-4">تعارف</h2>
          <p className="text-lg leading-relaxed">
            "سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق 24/7 براہ راست تازہ ترین سیاسی ، عسکری اور سفارتی پیشرفت و حقائق پر مبنی خبریں، پولنگ، تحقیقاتی و تجزیاتی تحریریں، ہائی کوالٹی ویڈیو فوٹیجز، تصاویر، حکمت عملی پر مبنی نقشے، آڈیو/ویڈیو نشید اور ترانے، روزانہ تازہ اخبارات اور کتابیں نشر کی جاتی ہیں"
          </p>
        </div>

        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h3 className="text-[22px] font-bold text-cyan-400 mb-2">مقصد</h3>
          <p className="text-lg">ظہور امام مہدی ع کی تیاری</p>
        </div>

        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h3 className="text-[22px] font-bold text-cyan-400 mb-2">مشن</h3>
          <p className="text-lg">حکمت ، قوت ، دیانت</p>
        </div>

        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h3 className="text-[22px] font-bold text-cyan-400 mb-2">اداریہ</h3>
          <p className="text-lg mb-2">مزمل حسن حاتمی - ایم فل بین الاقوامی تعلقات، موضوع پاک ایران ( محقق دفاعی امور برائے مشرق وسطی)</p>
          <a href="tel:+923412786433" className="text-yellow-300 hover:text-yellow-500 block">+923412786433</a>
        </div>

        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h3 className="text-[22px] font-bold text-pink-500 mb-2">پتہ</h3>
          <p className="text-lg">سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان</p>
        </div>

        <div className="mb-6 pb-6 border-b border-dashed border-white/20">
          <h3 className="text-[22px] font-bold text-cyan-400 mb-4">ٹیلی گرام</h3>
          <a href="https://t.me/eastfront_pk" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500 text-lg break-all block">
            https://t.me/eastfront_pk
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-[22px] font-bold text-pink-500 mb-4">واٹس اپ گروپس</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                 "https://chat.whatsapp.com/GZJmBmUDH6TAWGs4suTI8R",
              "https://chat.whatsapp.com/HRr6iYtcC0q7eWiHu72Nkw",
              "https://chat.whatsapp.com/C57s4pVkQL34rZcGKLcjew",
              "https://chat.whatsapp.com/EMtO1UNopT85FqvVoYqWch",
              "https://chat.whatsapp.com/BQYftgpkz3z3qbLiCtcix4",
              "https://chat.whatsapp.com/EofDsqhArOELiKMhPXXYUh",
              "https://chat.whatsapp.com/DSOivpJVhzI8ckG3rDtwjM",
              "https://chat.whatsapp.com/DNeEppkyJteAzyKPpju0hO",
              "https://chat.whatsapp.com/DW78PRSHV865KauAAzS9tj",
              "https://chat.whatsapp.com/G4Wmb3MwoWc3JaekTXFQ7j",
              "https://chat.whatsapp.com/LjXk4Clg2ME2f72v5NyuI7",
              "https://chat.whatsapp.com/DWkpnsHLpfP2tQ16GeFX7G",
              "https://chat.whatsapp.com/FiItr3p2WHTKrThc1uZuKA",
              "https://chat.whatsapp.com/FUYQFooJepU2MgohEOrkMR",
              "https://chat.whatsapp.com/Ef46pt8FUITJukbJOsL15t",
              "https://chat.whatsapp.com/E3SqPJ6ES4PDaRjQfD2XSh",
              "https://chat.whatsapp.com/GzraA5uELGpDDK9PKMNYul",
              "https://chat.whatsapp.com/GRsOxck2R8U3MVBOQoER3n"
              // Add all your WhatsApp links here
            ].map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-500 text-lg break-all"
              >
                واٹس اپ گروپ {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}