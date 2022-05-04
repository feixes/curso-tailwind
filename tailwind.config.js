module.exports = {
    theme: {
        extend: {

            screens: {
                'xs': { 'max': '768px' }
            },
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')",
                'banner-image': "url('../img/bakbaner.png')"
            }),
            backgroundPosition: {
                "banner-position": "-200px -200px"
            }
            ,
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                "spin-low": "spin 2s linear infinite",
                "from-below": "fromBelow 500ms linear",
                "from-right": "fromRight 500ms linear",
                "back-banner": "backBanner 10000ms linear",
                "text-banner": "showBannerText 10000ms linear"
            },
            keyframes: {
                fromBelow: {
                    '0%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translatey(200%)' },
                    '100%': { transform: 'translateY(0%)' }
                },
                fromRight: {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(200%)' },
                    '100%': { transform: 'translateX(0%)' }
                },
                backBanner: {
                    '0%': { 'background-position': '0px 0px' },
                    '100': { 'background-position': '-200px -200px' }
                },
                showBannerText: {
                    '0%': {
                        transform: 'translateX(-600%) scale(5,5)',
                        opacity: 1
                    },
                    '50%': {
                        transform: 'translateX(600%)',
                        opacity: 1
                    },
                    '75%': {
                        transform: 'translateX(-600%) scale(5,5)',
                        'text-shadow': 'none',
                        color: 'transparent',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translateX(0%) scale(1,1)',
                        'text-shadow': '2px 2px 1px black',
                        color: 'white',
                        opacity: 1
                    }
                }
            },
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
    }
}