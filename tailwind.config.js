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
            'banner': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./images/banner-img.jpg')",
            'service_1': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./images/service-img1.jpg')",
            'service_2': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./images/service-img2.jpg')",
            'service_3': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('./images/service-img3.jpg')",
        },
      }
    }
  }