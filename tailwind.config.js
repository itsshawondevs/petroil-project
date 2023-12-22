tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
            'container': '1144px',
        },
        colors: {
            'white': '#FFF',
            'red': '#F40404',
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