import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if (typeof window !== 'undefined') {
    const target = document.getElementById('root');
    import.meta.env.DEV ? createRoot(target).render(<App url={window.location.pathname} />) : hydrateRoot(target, <App url={window.location.pathname} />);
}

export async function prerender(data) {
    const { renderToString } = await import('react-dom/server');
    const { parseLinks } = await import('vite-prerender-plugin/parse');

    const html = await renderToString(<App {...data} />);
    const links = parseLinks(html);

    return { html, links };
}