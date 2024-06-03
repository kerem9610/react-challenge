import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0'
    },
    plugins: [react()],
    resolve: {

        alias: {
            '~hooks': resolve(__dirname, 'src/hooks'),
            '~components': resolve(__dirname, 'src/components'),
            '~graphql': resolve(__dirname, 'src/graphql'),
            '~types': resolve(__dirname, 'src/types'),
            '~context': resolve(__dirname, 'src/context'),
            '~helpers': resolve(__dirname, 'src/helpers'),
        }
    },
});
