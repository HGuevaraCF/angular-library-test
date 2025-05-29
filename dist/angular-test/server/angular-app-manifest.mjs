
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-library-test',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-library-test"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: 'f638bffaa84538fe7720ac1818e3ae28ce2e4124ea79a80cfdb8aa4f9f4965ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '6970f8297fa026ed686754a63202c82e37395dae61228bc223716c9d5172633a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20860, hash: '0eb812cbd9d798e5b643a8e1c5380685c53d98c5a9e95ad66d79fad798f429b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
