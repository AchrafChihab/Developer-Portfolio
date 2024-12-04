// import { type Image } from '@/lib/strapi/sanity-image';
// import groq from 'groq';

export type Project = {
  src: string | undefined;
  slug: { current: string };
  name: string;
  poster: {
    alt: string;
    asset: {
      metadata: {
        palette: {
          dominant: {
            background: string;
          };
        };
      };
    };
  };
  date: string;
  tags?: string[];
  description: string;
};

// _id: string;
// _type: 'project';
// _createdAt: string;
// _updatedAt: string;
// _rev: string;
// name: string;
// slug: { _type: 'slug'; current: string };
// date: string;
// description: string;
// poster: Image;
// images: Image[];
// tags?: string[];
// githuburl?: string;
// projecturl?: string;

// Adapter le retour de `getProjects` pour correspondre à ce type
export async function getProjects() {
  return {
    data: [
      {
        _id: 1,
        slug: { current: 'lalla-essaouira' },
        name: 'Lalla Essaouira',
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        src: '/lallaessaouira.png', // Add the image path here
        poster: {
          alt: 'lalla-essaouira',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2024-08-01',
        tags: ['Wordpress', 'Développement'],
        description: 'Site E-commerce de booking de villa  dans essaouira ',
      },
      {
        _id: 2,
        slug: { current: 'pan-maroc' },
        name: 'Pan Maroc',
        src: '/panmaroc.png', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Pan Maroc',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2024-08-02',
        tags: ['Symfony', 'Easyadmin'],
        description:
          'Pan Maroc anti nuisibles se concentre sur l’importation, la conception/fabrication et la distribution de solutions anti-nuisibles performantes et novatrices ',
      },
      {
        _id: 3,
        slug: { current: 'cooper-pharma' },
        name: 'Cooper Pharma',
        src: '/cooperpharma.png', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Cooper Pharma',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2024-08-02',
        tags: ['Wordpress', 'Pharmaciy'],
        description:
          'Cooper Pharma is a leading pharmaceutical laboratory in Morocco, established in 1933. It partners with around fifteen labs and represents about a hundred products in its portfolio.',
      },
      {
        _id: 6,
        slug: { current: 'passesimplelogo.png' },
        name: 'Passe Simple Avocat',
        src: '/passesimplelogo.png', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Passe Simple Avocat',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: '#2c926c',
                },
              },
            },
          },
        },
        date: '2024-05-02',
        tags: ['Symfony'],
        description:
          'Une séparation c’est un univers qui s’écroule. Tout est à (re)construire. Un divorce met fin à un lien juridique et, au-delà, à une histoire personnelle mêlant sentiments, souvenirs, affection, liens psychologiques.',
      },
      {
        _id: 4,
        slug: { current: 'excelsa' },
        name: 'Excelsa',
        src: '/excelsa.png', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Excelsa',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2023-08-02',
        tags: ['Wordpress', ''],
        description:
          'Excelsa Maroc is a company with over 30 years of experience that specializes in the design, manufacturing, and installation of custom space arrangements and specific furniture',
      },
      {
        _id: 5,
        slug: { current: 'prevas' },
        name: 'Prevas',
        src: '/prevas.svg', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Prevas',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2024-05-02',
        tags: ['PHP', ''],
        description:
          'PREVAS est un cabinet de conseil et de courtage spécialisé dans laudit des risques et leurs couvertures auprès du marché de lassurance et de la réassurance.',
      },
      {
        _id: 5,
        slug: { current: 'lematelas' },
        name: 'Lematelas.com',
        src: '/lematlas.png', // Add another image path
        projecturl: 'https://lallaessaouira.com',
        images: [{ alt: '/lallaessaouira.png' }],
        poster: {
          alt: 'Lematelas.com',
          asset: {
            metadata: {
              palette: {
                dominant: {
                  background: 'white',
                },
              },
            },
          },
        },
        date: '2024-05-02',
        tags: ['Magento'],
        description:
          'Les meilleures offres de matelas de bonne qualité. Avec plus de 50 références de marques locales et internationales. Livraison Disponible. Lire Nos Conseils. Modes De Paiement Variés. Retour Possible. SAbonner À La Newsletter. Marques: Tempur, Sealy, Bultex, Epeda.',
      },

      // Ajoutez plus de projets si nécessaire
    ],
  };
}
