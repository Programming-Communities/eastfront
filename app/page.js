'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div')
    cursor.style.position = 'fixed'
    cursor.style.width = '30px'
    cursor.style.height = '30px'
    cursor.style.backgroundColor = '#ff00ff'
    cursor.style.borderRadius = '50%'
    cursor.style.pointerEvents = 'none'
    cursor.style.zIndex = '9999'
    cursor.style.mixBlendMode = 'exclusion'
    cursor.style.transform = 'translate(-50%, -50%)'
    cursor.style.boxShadow = '0 0 20px #ff00ff, 0 0 40px #ff00ff'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }
    
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          EASTFRONT
        </h1>

        {/* Introduction */}
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-8 mb-8 border border-cyan-400/20 font-jameel">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">تعارف</h2>
          <p className="text-lg leading-relaxed">
            "سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق 24/7 براہ راست تازہ ترین سیاسی ، عسکری اور سفارتی پیشرفت و حقائق پر مبنی خبریں، پولنگ، تحقیقاتی و تجزیاتی تحریریں، ہائی کوالٹی ویڈیو فوٹیجز، تصاویر، حکمت عملی پر مبنی نقشے، آڈیو/ویڈیو نشید اور ترانے، روزانہ تازہ اخبارات اور کتابیں نشر کی جاتی ہیں"
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 font-jameel">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">مقصد</h3>
            <p>ظہور امام مہدی ع کی تیاری</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 font-jameel">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">مشن</h3>
            <p>حکمت ، قوت ، دیانت</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 font-jameel">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">اداریہ</h3>
            <p>مزمل حسن حاتمی - ایم فل بین الاقوامی تعلقات</p>
            <a href="tel:+923412786433" className="text-yellow-300 hover:text-yellow-200 block mt-2">
              +92 341 2786433
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-cyan-400/20 font-jameel">
          <h3 className="text-2xl font-bold mb-2 text-pink-500">پتہ</h3>
          <p>سولجر بازار جمشید ٹاؤن کراچی شرقی پاکستان</p>
        </div>

        {/* Telegram */}
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 mb-8 border border-pink-500/20 font-jameel">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">ٹیلی گرام</h3>
          <a 
            href="https://t.me/eastfront_pk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-200 text-lg break-all"
          >
            https://t.me/eastfront_pk
          </a>
        </div>

        {/* WhatsApp Groups */}
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 font-jameel">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">واٹس اپ گروپس</h3>
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
                className="bg-black/50 hover:bg-black/70 border border-white/10 rounded-lg p-3 transition-all hover:scale-[1.02]"
              >
                <span className="text-yellow-300">واٹس اپ گروپ {index + 1}</span>
                <div className="text-white/50 text-sm truncate">{link}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
