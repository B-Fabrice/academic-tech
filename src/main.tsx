import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/theme_context.tsx'
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "./l10n/en.json";
import global_fr from "./l10n/fr.json";

i18next.init({
  interpolation: {
      escapeValue: false,
  },
  lng: localStorage.getItem('i18nextLng') || 'en',
  resources: {
      en: {
          global: global_en,
      },
      fr: {
          global: global_fr,
      },
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
)
