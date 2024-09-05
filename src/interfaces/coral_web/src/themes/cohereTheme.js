const defaultTheme = require('tailwindcss/defaultTheme');

// Any changes to the theme should be reflected into our `customTwMerge` in `utils/cn.ts`
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#212121',
        white: '#FAFAFA',
        // Simulated Coral
        coral: {
          950: '#ffffff',
          900: '#e3edf5',
          800: '#c6dbec',
          700: '#aac9e2',
          600: '#8eb7d8',
          500: '#71a5cf',
          400: '#5593c5',
          300: '#3981bb',
          200: '#1c6fb2',
          150: '#005da8',
        },
        // Mushroom Grey
        mushroom: {
          950: '#ededed',
          900: '#e1e1e1',
          800: '#D2CDC4',
          700: '#BDB6A8',
          600: '#ffea8e',
          500: '#91856E',
          400: '#70695C',
          300: '#575042',
          200: '#3A352C',
          150: '#8f6c00',
        },
        // Evolved Mushroom Grey
        'evolved-mushroom': {
          500: '#FFAA00',
          600: '#FFBB33',
          800: '#FFDC97',
        },
        // Marble White
        marble: {
          1000: '#FFFFFF',
          980: '#F9F9FB',
          950: '#EFEFF5',
          900: '#DFDFEC',
          850: '#D0D0E2',
          800: '#C4C4C4',
        },
        // Volcanic Black
        volcanic: {
          950: '#F2F2F2',
          900: '#E6E6E6',
          800: '#CBCBCB',
          700: '#B3B3B3',
          600: '#999999',
          500: '#808080',
          400: '#666666',
          300: '#4D4D4D',
          200: '#333333',
          150: '#262626',
          100: '#292929',
          60: '#0F0F0F',
        },
        // Coniferous Green
        green: {
          950: '#F0F5F3',
          900: '#E0EBE7',
          800: '#C0D6CD',
          700: '#A2C3B6',
          600: '#84AE9D',
          500: '#659A84',
          400: '#517B6A',
          250: '#324D42',
          200: '#283E35',
          150: '#141F1B',
        },
        // Evolved Coniferous Green
        'evolved-green': {
          500: '#0DF293',
          700: '#6EF7BE',
          900: '#CFFCE9',
        },
        // Synthetic Quartz
        quartz: {
          950: '#F7EBFA',
          900: '#EFD6F5',
          800: '#DDACEA',
          700: '#CE85E0',
          600: '#BD5DD5',
          500: '#AD34CB',
          400: '#8A2AA2',
          300: '#681F7A',
          200: '#451551',
          150: '#34103D',
        },
        // Evolved synthetic quartz
        'evolved-quartz': {
          500: '#C40DF2',
          700: '#DC6EF7',
          900: '#F3CFFC',
        },
        // Acrylic Blue
        blue: {
          950: '#E9EDFC',
          900: '#D2DBF9',
          800: '#A4B5F2',
          700: '#7992EC',
          600: '#4D6EE5',
          500: '#204ADF',
          400: '#193BB2',
          300: '#132C86',
          200: '#0D1D59',
          150: '#0A1643',
        },
        // Evolved Acrylic Blue
        'evolved-blue': {
          500: '#0039FF',
        },
        // Safety Green
        success: {
          950: '#E7FEE9',
          300: '#089113',
          200: '#05610C',
          150: '#044909',
        },
        // Safety Red
        danger: {
          950: '#FFE5E5',
          500: '#FF0000',
          350: '#B30000',
        },
      },
      fontSize: {
        // rem values calculated with a base font of 16px
        caption: ['0.75rem', { letterSpacing: '-0.01em', lineHeight: '136%' }], // 12px - Caption
        'label-sm': ['0.625rem', { letterSpacing: '0.04em', lineHeight: '136%' }], // 10px - Small Label
        label: ['0.75rem', { letterSpacing: '0.04em', lineHeight: '136%' }], // 12px - Label
        overline: ['0.875rem', { letterSpacing: '0.04em', lineHeight: '136%' }], // 14px - Overline
        'p-xs': ['0.625rem', { letterSpacing: '0.0025em', lineHeight: '150%' }], // 10px - XSmall Paragraph
        'p-sm': ['0.75rem', { letterSpacing: '-0.01em', lineHeight: '150%' }], // 12px - Small Paragraph
        p: ['0.875rem', { letterSpacing: '0.0025em', lineHeight: '150%' }], // 14px - Paragraph
        'p-lg': ['1rem', { letterSpacing: '0em', lineHeight: '150%' }], // 16px - Large Paragraph
        code: ['1rem', { letterSpacing: '0.03em', lineHeight: '136%' }], // 16px - Code
        'code-sm': ['0.75rem', { letterSpacing: '0.03em', lineHeight: '136%' }], // 12px - Small Code
        // Headings
        logo: ['1.5rem', { letterSpacing: '0em', lineHeight: '100%' }], // 24px - Logo Application
        'h5-m': ['1.125rem', { letterSpacing: '0em', lineHeight: '136%' }], // 18px - Mobile Heading 5
        h5: ['1.3125rem', { letterSpacing: '0em', lineHeight: '136%' }], // 21px - Desktop Heading 5
        'h4-m': ['1.3125rem', { letterSpacing: '0em', lineHeight: '136%' }], // 21px - Mobile Heading 4
        h4: ['1.75rem', { letterSpacing: '0em', lineHeight: '136%' }], // 28px - Desktop Heading 4
        'h3-m': ['1.75rem', { letterSpacing: '0em', lineHeight: '136%' }], // 28px - Mobile Heading 3
        h3: ['2.375rem', { letterSpacing: '0em', lineHeight: '120%' }], // 38px - Desktop Heading 3
        'h2-m': ['2.375rem', { letterSpacing: '0em', lineHeight: '120%' }], // 38px - Mobile Heading 2
        h2: ['3.1875rem', { letterSpacing: '0em', lineHeight: '116%' }], // 51px - Desktop Heading 2
        'h1-m': ['3.1875rem', { letterSpacing: '0em', lineHeight: '116%' }], // 51px - Mobile Heading 1
        h1: ['4.1875rem', { letterSpacing: '0em', lineHeight: '116%' }], // 67px - Desktop Heading 1
        'icon-sm': ['12px', { lineHeight: '100%' }],
        'icon-md': ['16px', { lineHeight: '100%' }],
        'icon-lg': ['24px', { lineHeight: '100%' }],
        'icon-xl': ['36px', { lineHeight: '100%' }],
      },
      fontFamily: {
        body: ['CohereText', 'Arial', ...defaultTheme.fontFamily.sans],
        variable: ['CohereVariable', 'Arial', ...defaultTheme.fontFamily.serif],
        code: ['CohereMono', ...defaultTheme.fontFamily.mono],
        iconOutline: ['CohereIconOutline'],
        iconDefault: ['CohereIconDefault'],
      },
      fontWeight: {
        // Bolded fonts will always use Cohere Variable with the weight 525
        medium: '525',
      },
    },
  },
};
