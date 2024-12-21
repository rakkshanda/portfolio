
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  assets: {
    'index.csr.html': {size: 503, hash: 'f51b7875d8dd1fd20b22d36f1fd46a469c84d192606b30c17e2a1ca3a4e96ae9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '5639c714d964d1aa8ca7d0f04abf75a91db584a60421b2df1db628b4eac70a27', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20844, hash: '689404af5e4d4d88f341cac414181bc2644a6a067529bf096a5f3d2b6f27b257', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
