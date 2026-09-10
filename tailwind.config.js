import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                nirva: {
                    navy: '#0B1120',
                    deep: '#0F1729',
                    card: '#111C33',
                    cyan: '#22D3EE',
                    sky: '#38BDF8',
                    mint: '#10B981',
                    muted: '#94A3B8',
                },
            },
        },
    },

    plugins: [forms],
};
