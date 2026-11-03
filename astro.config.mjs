import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-kennedys.me.uk',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/recipe_contents.html': '/',
    '/recipe_contents': '/',
    '/recipe_index.html': '/recipe-index',
    '/recipe_index': '/recipe-index',
    '/ingredients': '/recipe-index',
    '/recipes/base-gravy.html': '/recipes/base-gravy',
    '/recipes/bean-and-spinach.html': '/recipes/bean-and-spinach',
    '/recipes/bolognese.html': '/recipes/bolognese',
    '/recipes/broc-and-blue-soup.html': '/recipes/broc-and-blue-soup',
    '/recipes/carrot-and-coriander.html': '/recipes/carrot-and-coriander',
    '/recipes/chilli.html': '/recipes/chilli',
    '/recipes/five-spice-madras.html': '/recipes/five-spice-madras',
    '/recipes/jalfrezi.html': '/recipes/jalfrezi',
    '/recipes/jambalaya.html': '/recipes/jambalaya',
    '/recipes/leek-and-barley.html': '/recipes/leek-and-barley',
    '/recipes/mushroom-and-chestnut.html': '/recipes/mushroom-and-chestnut',
    '/recipes/mushroom-soup.html': '/recipes/mushroom-soup',
    '/recipes/rat-and-halloumi.html': '/recipes/rat-and-halloumi',
    '/recipes/rogan-josh.html': '/recipes/rogan-josh',
    '/recipes/sausage-and-bean.html': '/recipes/sausage-and-bean',
    '/recipes/sweet-pot-and-beet.html': '/recipes/sweet-pot-and-beet',
    '/recipes/wholemeal-malted-loaf.html': '/recipes/wholemeal-malted-loaf',
  },
});
