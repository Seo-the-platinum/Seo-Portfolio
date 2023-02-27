import voice from '../../public/images/voice.png';
import ffvote from '../../public/images/ffvote.png'

export const projects = [
    {
        description: `Portfolio page for voice actor Marcelo Flores.Showcases some of his work history with audio demos as well as youtube.`,
        github: "https://github.com/Seo-the-platinum/marcelos-portfolio",
        source: voice,
        tech: ['react','typescript','css' ],
        title: 'Voice Actor Portfolio',
        url: 'https://marcelovoice.netlify.app/',
    },
    {
        description: `A website to determine once and for all who is the best Final Fantasy Charater and Game!Users can vote for any character and game and check the results.`,
        github: "https://github.com/Seo-the-platinum/ffvote",
        source: ffvote,
        tech: ['react','nextjs', 'typescript', 'postgresql', 'prisma', 'tailwind' ],
        title: 'Final Fantasy Vote',
        url: 'https://google.com/'
    }
]