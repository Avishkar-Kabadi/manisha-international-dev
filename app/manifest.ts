import type {
    MetadataRoute
} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Manisha International Solution',
        short_name: 'MIS',
        description: 'Global trade specialist in Agro and Engineering. Export premium spices, dryfruits, and engineering goods. Your trusted partner in international business.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}