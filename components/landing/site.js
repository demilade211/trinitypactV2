// Company facts shared across the site — the single source for contact details.
const POSTAL = {
  street: '7, Bailey Street, Off Oguntolu Street',
  locality: 'Shomolu',
  region: 'Lagos',
  country: 'NG',
}

export const SITE = {
  name: 'TPL Trinitypact Limited',
  postal: POSTAL,
  // Display lines, as printed on the site.
  address: [`${POSTAL.street},`, `${POSTAL.locality}, ${POSTAL.region}.`],
  email: 'trinitypactlimited@gmail.com',
  phones: ['+234 806 078 7963', '+234 802 143 1957'],
  hours: 'Monday – Friday, 8:00am – 6:00pm',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100071851962525' },
    { label: 'Instagram', href: 'https://www.instagram.com/trinitypact1' },
  ],
}

export const NAV_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
]

// Figures already published on the site.
export const STATS = [
  { label: 'Property development projects delivered', value: 10, suffix: '+' },
  { label: 'Clients guided through their property journey', value: 200, suffix: '+' },
  { label: 'Years developing property in Lagos', value: 4, suffix: '+' },
  { label: 'Average rating from our clients', value: 5, decimals: 1, suffix: '/5' },
]

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`
