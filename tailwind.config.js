/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-navy': '#0a192f',
                'brand-orange': '#ff5e14',
                'brand-grey': '#333333',
                'brand-light': '#ccd6f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2000&auto=format&fit=crop')", // Industrial background placeholder
            }
        },
    },
    plugins: [],
}
