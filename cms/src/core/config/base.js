export default {
  host: process.env.HOST || 'localhost',
  port: process.env.SSR_PORT,
  boldr: {
    htmlAttributes: { lang: 'en' },
    title: 'Boldr',
    titleTemplate: '%s | Powered by Boldr',
    meta: [
      { name: 'description', content: 'Why shouldnt your CMS be a little Boldr?' }
    ]
  }
};
