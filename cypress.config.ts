import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100',
    specPattern: '**/*.cy.ts',
    supportFile: false,
  },
});
