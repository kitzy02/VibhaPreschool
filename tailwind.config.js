/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Primary Palette - Playful & Energetic
        sunshine: {
          50: '#FFFBEB',
          100: '#FFF3C4',
          200: '#FFE88C',
          300: '#FFD93D',
          400: '#FFC107',
          500: '#FF9800',
          600: '#F57C00',
        },
        skyBlue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
        },
        coral: {
          50: '#FFE9F0',
          100: '#FFCCE0',
          200: '#FFB3D3',
          300: '#FF6B9D',
          400: '#FF4081',
          500: '#F50057',
          600: '#C51162',
        },
        lavender: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#C77DFF',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
        },
        mint: {
          50: '#E0F7F4',
          100: '#B2EBE4',
          200: '#80DED3',
          300: '#72EFDD',
          400: '#26C6B8',
          500: '#00BFA5',
          600: '#00897B',
        },
        
        // Accent Colors for CTAs & Highlights
        orange: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FF9A3C',
          400: '#FF9800',
          500: '#F57C00',
          600: '#E65100',
        },
        teal: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4ECDC4',
          400: '#26A69A',
          500: '#009688',
          600: '#00796B',
        },
        rose: {
          50: '#FCE4EC',
          100: '#FFB6D9',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
          600: '#D81B60',
        },
        
        // Neutral Palette - Warm & Inviting
        cream: {
          50: '#FFFEF7',
          100: '#FFF8E7',
          200: '#FFF4D9',
          300: '#FFEFC7',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#95A5A6',
          300: '#607D8B',
          400: '#455A64',
          500: '#2C3E50',
          600: '#1A252F',
        },
        
        // Legacy support (keep for backward compatibility)
        primaryBlue: "#2196F3",
        primaryOrange: "#FF9A3C",
        earlyGreen: "#00BFA5",
        accentYellow: "#FFD93D",
      },
      
      fontFamily: {
        // Display font for headings - Rounded, playful
        heading: ['"Fredoka"', '"Baloo 2"', '"Comic Sans MS"', 'cursive', 'system-ui'],
        // Body font - Clean, friendly, readable
        body: ['"Quicksand"', '"Nunito"', 'sans-serif', 'system-ui'],
        // Accent font for special highlights
        accent: ['"Baloo 2"', '"Fredoka"', 'cursive'],
      },
      
      fontSize: {
        'display-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 12px 30px -4px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 40px -5px rgba(0, 0, 0, 0.2), 0 20px 50px -8px rgba(0, 0, 0, 0.15)',
        'glow-sunshine': '0 0 20px rgba(255, 217, 61, 0.4), 0 0 40px rgba(255, 217, 61, 0.2)',
        'glow-coral': '0 0 20px rgba(255, 107, 157, 0.4), 0 0 40px rgba(255, 107, 157, 0.2)',
        'glow-lavender': '0 0 20px rgba(199, 125, 255, 0.4), 0 0 40px rgba(199, 125, 255, 0.2)',
        'playful': '8px 8px 0px rgba(0, 0, 0, 0.1)',
        'playful-lg': '12px 12px 0px rgba(0, 0, 0, 0.1)',
      },
      
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-rainbow': 'linear-gradient(90deg, #FF6B9D 0%, #C77DFF 25%, #72EFDD 50%, #FFD93D 75%, #FF9A3C 100%)',
        'gradient-sunshine': 'linear-gradient(135deg, #FFD93D 0%, #FF9A3C 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #72EFDD 0%, #2196F3 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF6B9D 0%, #FF9A3C 100%)',
        'gradient-lavender': 'linear-gradient(135deg, #C77DFF 0%, #FF6B9D 100%)',
        'dots-pattern': 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      },
      
      backgroundSize: {
        'dots': '20px 20px',
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}