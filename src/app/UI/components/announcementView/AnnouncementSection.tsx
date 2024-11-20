import { CardHorizontal } from './CardHorizontal'

export const AnnouncementSection = () => {
  const ads = [
    {
      title: 'Casa corral',
      price: '$55',
      location: 'New York, NY',
      badges: ['2 amb', 'Temporal', 'Amueblado'],
      description: 'Mi querido hogar en Recoleta: El refugio perfecto para quien busca comodidad y calidez.',
    },
    {
      title: 'Casa corral',
      price: '$55',
      location: 'New York, NY',
      badges: ['2 amb', 'Temporal', 'Amueblado'],
      description: 'Mi querido hogar en Recoleta: El refugio perfecto para quien busca comodidad y calidez.',
    },
    {
      title: 'Casa corral',
      price: '$55',
      location: 'New York, NY',
      badges: ['2 amb', 'Temporal', 'Amueblado'],
      description: 'Mi querido hogar en Recoleta: El refugio perfecto para quien  busca comodidad y calidez.',
    },
    {
      title: 'Casa corral',
      price: '$55',
      location: 'New York, NY',
      badges: ['2 amb', 'Temporal', 'Amueblado'],
      description: 'Mi querido hogar en Recoleta: El refugio perfecto para quien busca comodidad y calidez.',
    },
    {
      title: 'Casa corral',
      price: '$55',
      location: 'New York, NY',
      badges: ['2 amb', 'Temporal', 'Amueblado'],
      description: 'Mi querido hogar en Recoleta: El refugio perfecto para quien busca comodidad y calidez.',
    },
  ]

  return (
    <>
      {ads.map((ad, index) => (
        <CardHorizontal
          key={index}
          title={ad.title}
          price={ad.price}
          location={ad.location}
          badges={ad.badges}
          description={ad.description}
        />
      ))}
    </>
  )
}
