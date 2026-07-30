export const projects = [
  {
    name: 'ShareMyTimer',
    stack: ['Next.js', 'TypeScript', 'WebSockets', 'Razorpay', 'Clerk', 'AWS'],
    url: 'https://www.sharemytimer.live/',
    badges: ['LIVE', '500+ SIGNUPS', '50K+ USERS', '9+ SUBSCRIBERS', '$300+'],
    live: true,
    description: [
      'Grew the product to 500+ signups, served more than 50K users overall, with 9+ paying subscribers and $300+ in subscription revenue, running it end to end as a live subscription business.',
      'Built a real time collaborative timer with WebSocket powered multi user sync, role based access control, and QR or link based sharing, deployed on an AWS EC2 instance to handle real time connections in production.',
      'Integrated Razorpay and Clerk with webhook driven state sync for billing and authentication.',
    ],
  },
  {
    name: 'Atithi Stay',
    stack: ['Next.js', 'MongoDB', 'AWS'],
    url: 'https://www.atithistaymumbai.com/',
    badges: ['LIVE'],
    live: true,
    description: [
      'Launched a production ready accommodation listing platform with full stack search, listing management, and an admin dashboard for end to end CRUD operations, using AWS S3 to store and serve uploaded images and videos.',
    ],
  },
]
