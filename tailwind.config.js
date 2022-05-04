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
                }
            },
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
    }
}