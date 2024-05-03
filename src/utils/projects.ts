import voice from "../../public/images/voice.png";
import ffvote from "../../public/images/ffvote.png";
import scribe from "../../public/images/scribe.png";
import pocketpool from "../../public/images/pocketpool.png";

export const projects = [
  {
    description: `A freelance project designed to manage sports pools. Users can create Pools from NBA and NFL games and invite friends to join. Users can then
        pick squares they want in each pool and the app will track current winners and winning quarters. The app uses a 3rd party API to get the latest scores and
        determine winners.`,
    github: "https://github.com/Seo-the-platinum/pocket_pool_auth",
    source: pocketpool,
    tech: ["react", "nextjs", "typescript", "postgresql", "prisma", "tailwind"],
    title: "Pocket Pool",
    url: "https://pocket-pool-auth.vercel.app/",
  },
  {
    description: `Portfolio page for voice actor Marcelo Flores. Showcases some of his work history with audio demos as well as youtube links.`,
    github: "https://github.com/Seo-the-platinum/marcelos-portfolio",
    source: voice,
    tech: ["react", "typescript", "css"],
    title: "Voice Actor Portfolio",
    url: "https://marcelovoice.netlify.app/",
  },
  {
    description: `A website to determine once and for all who the best Final Fantasy character and best game are! 
            Users can vote for their favorite character and game and watch them climb the leader board.`,
    github: "https://github.com/Seo-the-platinum/finalfantasyfanvote",
    source: ffvote,
    tech: ["react", "nextjs", "typescript", "postgresql", "prisma", "tailwind"],
    title: "Final Fantasy Fan Vote",
    url: "https://finalfantasyfanvote.vercel.app/",
  },
  {
    description: `In the era of Artificial Intelligence, scribe is here to help people looking for a means of expressing their creative writing. 
        Users can choose a prompt based on a category and write entries that they can share with the rest of the scribe community. Shared entries can be voted on and
        top performing entries are displayed on the scribe leaderboards.`,
    source: scribe,
    tech: ["react", "nextjs", "typescript", "postgresql", "prisma", "tailwind"],
    title: "Scribe",
  },
];
