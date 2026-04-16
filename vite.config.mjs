import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                register: resolve(process.cwd(), 'register.html'),
                partnership: resolve(process.cwd(), 'partnership.html'),
                exhibition: resolve(process.cwd(), 'exhibition.html'),
                mediaPartner: resolve(process.cwd(), 'media-partner.html')
            }
        }
    }
});