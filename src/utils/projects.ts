import voice from '../../public/images/voice.png';
import ffvote from '../../public/images/ffvote.png'
import scribe from '../../public/images/scribe.png'

export const projects = [
    {
        description: `Portfolio page for voice actor Marcelo Flores. Showcases some of his work history with audio demos as well as youtube links.`,
        github: "https://github.com/Seo-the-platinum/marcelos-portfolio",
        source: voice,
        tech: ['react','typescript','css' ],
        title: 'Voice Actor Portfolio',
        url: 'https://marcelovoice.netlify.app/',
    },
    {
        description: `A website to determine once and for all who the best Final Fantasy character and best game are! 
            Users can vote for their favorite character and game and watch them climb the leader board.`,
        github: "https://github.com/Seo-the-platinum/finalfantasyfanvote",
        source: ffvote,
        tech: ['react','nextjs', 'typescript', 'postgresql', 'prisma', 'tailwind' ],
        title: 'Final Fantasy Fan Vote',
        url: 'https://finalfantasyfanvote.vercel.app/'
    },
    {
        description: `A website to determine once and for all who the best Final Fantasy character and best game are!`,
        source: scribe,
        tech: ['react','nextjs', 'typescript', 'postgresql', 'prisma', 'tailwind', 'trpc' ],
        title: 'Scribe',
        
    }
]