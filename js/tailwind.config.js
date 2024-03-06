tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
          basecolour: '#4262FF',
          textcolor: '#050038',
          primary: "#050038",
          secondary: "#4262FF",
        },
        fontFamily: {
          'inter': ['"Inter", sans-serif'],
        },
        maxWidth: {
            'container': '1140px',
            'navbar': '1380px'
        },
        screens: {
          'xs': '350px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          'xxl': '1400px',
        },
        
      }
    }
  }