import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@config': path.resolve(__dirname, 'resources/scss/config'),
            '@core': path.resolve(__dirname, 'chunker2i/base/resources/scss/core')
        }
    },
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
