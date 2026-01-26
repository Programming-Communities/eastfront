import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title') || 'EastFront PK';
    const description = searchParams.get('description') || 'Islamic Resistance Movement Since 2011';
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'linear-gradient(to bottom right, #991b1b, #7c2d12)',
            padding: '50px',
          }}
        >
          {/* Logo/Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dc2626',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
              }}
            >
              <span style={{ fontSize: '36px', color: 'white', fontWeight: 'bold' }}>EF</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>EASTFRONT PK</span>
              <span style={{ fontSize: '16px', color: '#fca5a5' }}>Islamic Resistance Movement</span>
            </div>
          </div>
          
          {/* Main Title */}
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              maxWidth: '800px',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h1>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#e5e5e5',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: '1.5',
              marginBottom: '40px',
            }}
          >
            {description}
          </p>
          
          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '40px',
              paddingTop: '20px',
              borderTop: '2px solid #dc2626',
            }}
          >
            <span style={{ fontSize: '18px', color: '#a3a3a3' }}>eastfront.pk</span>
            <span style={{ fontSize: '18px', color: '#a3a3a3' }}>Since 2011</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}