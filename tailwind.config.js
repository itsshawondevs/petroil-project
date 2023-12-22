tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
            'container': '1144px',
        },
        colors: {
            'white': '#FFF',
            'red': '#F40404',
            'black': '#000000',
            'paragraph': '#6C6C6C',
        },
        fontFamily: {
            'poppins': ["'Poppins', sans-serif;"],
        },
        backgroundImage: {
            'banner': " linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./images/banner-img.jpg')",
        },
      }
    }
  }