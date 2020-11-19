module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Rubik', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto',
                "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol", "Noto Color Emoji"],
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
        },
        fill: theme => ({
            'white': theme('colors.white'),
        }),
        inset: {
            '0': 0,
            '1/2': '50%',
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        extend: {},
    },
    plugins: [],
}

