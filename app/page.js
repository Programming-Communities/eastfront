'use client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import './globals.css'

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Mouse position tracking for title movement
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Neon cursor and text particles effect
    const initNeonCursor = async () => {
      try {
        const { neonCursor } = await import('threejs-toys')
        
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
          particleColor: '#ff00ff',
          trailColor: '#00ffff'
        })

        const createTextParticles = () => {
          const text = 'EASTFRONT'
          const particles = []
          const radius = 100
          let mouseX = window.innerWidth / 2
          let mouseY = window.innerHeight / 2
          
          const handleParticleMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
          }
          document.addEventListener('mousemove', handleParticleMove)

          text.split('').forEach((char, i) => {
            const particle = document.createElement('div')
            particle.className = 'eastfront-particle'
            particle.textContent = char
            particle.style.color = `hsl(${i * 40}, 100%, 70%)`
            particle.style.position = 'fixed'
            particle.style.fontSize = '2rem'
            particle.style.fontWeight = 'bold'
            particle.style.pointerEvents = 'none'
            particle.style.zIndex = '9999'
            particle.style.transition = 'all 0.2s ease-out'
            particle.style.textShadow = '0 0 10px currentColor'
            document.body.appendChild(particle)
            particles.push(particle)
          })

          const animate = () => {
            particles.forEach((p, i) => {
              const angle = (Date.now() / 1000) + (i * (2 * Math.PI / particles.length))
              const x = mouseX + Math.cos(angle) * radius
              const y = mouseY + Math.sin(angle) * radius
              
              p.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              p.style.opacity = 0.8 + 0.2 * Math.sin(Date.now() / 200 + i)
              
              const rotationAngle = Math.atan2(y - mouseY, x - mouseX) * (180 / Math.PI)
              p.style.transform += ` rotate(${rotationAngle + 90}deg)`
            })
            requestAnimationFrame(animate)
          }
          animate()

          return () => {
            particles.forEach(p => p.remove())
            document.removeEventListener('mousemove', handleParticleMove)
          }
        }

        const cleanupText = createTextParticles()
        
        return () => {
          if (cursor && cursor.destroy) cursor.destroy()
          cleanupText()
          window.removeEventListener('mousemove', handleMouseMove)
        }
      } catch (error) {
        console.error('Error initializing effects:', error)
      }
    }
    
    initNeonCursor()
  }, [])

  return (
    <div id="app" className="min-h-screen flex flex-col items-center py-10 px-4 overflow-auto touch-pan-up text-white text-center">
      <Head>
        <title>EASTFRONT - اسلامی مزاحمت و مقاومت</title>
        <meta name="description" content="سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق تازہ ترین خبریں اور تجزیے" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      <h1 
        className="text-[60px] leading-[80px] my-5 uppercase font-bold relative transition-transform duration-300"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
          background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <span className="animate-pulse">EASTFRONT</span>
        ) : (
          <span className="hover:animate-bounce">EASTFRONT</span>
        )}
      </h1>
      
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