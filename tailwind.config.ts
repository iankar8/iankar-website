import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		spacing: {
  			xs: 'var(--space-xs)',
  			sm: 'var(--space-sm)',
  			md: 'var(--space-md)',
  			lg: 'var(--space-lg)',
  			xl: 'var(--space-xl)'
  		},
  		colors: {
  			'warm-bg': '#F4F0DB',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			geist: [
  				'var(--font-geist)',
  				'Geist',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'sans-serif'
  			],
  			playfair: [
  				'var(--font-playfair)',
  				'serif'
  			],
  			inter: [
  				'var(--font-geist)',
  				'Geist',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1'
  				}
  			]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'dash': 'dash 1.5s ease-in-out infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			dash: {
  				'0%': {
  					strokeDashoffset: '283'
  				},
  				'50%': {
  					strokeDashoffset: '0'
  				},
  				'100%': {
  					strokeDashoffset: '-283'
  				}
  			}
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					color: '#2B2B2B',
  					maxWidth: 'none',
  					fontFamily: 'var(--font-geist), Geist, system-ui, sans-serif',
  					fontSize: '1rem',
  					lineHeight: '1.75rem',
  					a: {
  						color: '#2B2B2B',
  						textDecoration: 'underline',
  						fontWeight: '500',
  						'&:hover': {
  							color: '#4A4A4A'
  						}
  					},
  					'h1': {
  						fontFamily: 'var(--font-playfair), serif',
  						fontWeight: '600',
  						fontSize: '2.25rem',
  						lineHeight: '2.5rem',
  						letterSpacing: '-0.025em',
  						color: '#2B2B2B'
  					},
  					'h2': {
  						fontFamily: 'var(--font-playfair), serif',
  						fontWeight: '500',
  						fontSize: '1.5rem',
  						lineHeight: '2rem',
  						color: '#2B2B2B'
  					},
  					'h3, h4': {
  						fontFamily: 'var(--font-playfair), serif',
  						fontWeight: '600',
  						color: '#2B2B2B'
  					},
  					'p, ul, ol': {
  						fontFamily: 'var(--font-geist), Geist, system-ui, sans-serif',
  						fontSize: '1rem',
  						lineHeight: '1.75rem',
  						color: '#4A4A4A'
  					},
  					img: {
  						borderRadius: '0.5rem'
  					},
  					code: {
  						color: '#2B2B2B',
  						backgroundColor: '#F5F5F5',
  						padding: '0.2em 0.4em',
  						borderRadius: '0.25rem',
  						fontWeight: '400'
  					},
  					pre: {
  						backgroundColor: '#F5F5F5',
  						color: '#2B2B2B',
  						padding: '1rem',
  						borderRadius: '0.5rem',
  						code: {
  							backgroundColor: 'transparent',
  							padding: '0'
  						}
  					}
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addUtilities, theme }) {
      const fontSize4xl = theme('fontSize.4xl') as [string, { lineHeight: string }] | undefined;
      const fontSize2xl = theme('fontSize.2xl') as [string, { lineHeight: string }] | undefined;
      const fontSizeBase = theme('fontSize.base') as [string, { lineHeight: string }] | undefined;
      
      addUtilities({
        // Typography utilities
        '.text-h1': {
          fontSize: fontSize4xl?.[0] || '2.25rem',
          lineHeight: '2.5rem', // leading-9 equivalent
          fontWeight: '600', // semibold
          letterSpacing: '-0.025em', // tracking-tight
          fontFamily: theme('fontFamily.playfair')?.join(', ') || 'serif',
        },
        '.text-h2': {
          fontSize: fontSize2xl?.[0] || '1.5rem',
          lineHeight: fontSize2xl?.[1]?.lineHeight || '2rem',
          fontWeight: '500', // medium
          fontFamily: theme('fontFamily.playfair')?.join(', ') || 'serif',
        },
        '.text-body': {
          fontSize: fontSizeBase?.[0] || '1rem',
          lineHeight: '1.75rem', // leading-7
          fontFamily: theme('fontFamily.geist')?.join(', ') || 'sans-serif',
        },
        // Reduced motion support
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      });
    }),
      require("tailwindcss-animate")
],
};

export default config;
