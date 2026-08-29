/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ericssongomes.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 5000,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
}