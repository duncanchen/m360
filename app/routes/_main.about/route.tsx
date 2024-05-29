import { Button } from "~/components/ui/button";

const links = [
  "https://www.lgrc.us/wp-content/uploads/2020/09/Bussinesswoman-Headshot-Placeholder.jpg",
  "https://ssw.uga.edu/wp-content/uploads/2018/03/Headshot-Placeholder-1.png",
  "https://pcad.edu/wp-content/uploads/2017/07/headshot-placeholder.jpg",
  "https://avatars.githubusercontent.com/u/1509420?v=4",
  "https://avatars.githubusercontent.com/u/11976836?v=4",
  "https://avatars.githubusercontent.com/u/952007?v=4",
  "https://yt3.googleusercontent.com/ytc/AIdro_m0JgCBMCYDFIhw7p5T9hzaXP71VvZbEiGDL33_kzeasw=s160-c-k-c0x00ffffff-no-rj",
  "https://yt3.googleusercontent.com/BOqXoLaL-2P-5-XDqgefvYkDKwYFdODfWwo5ljNa5C92fOJOLyFjzi8GLv2hphOsdoz6G80VTQ=s160-c-k-c0x00ffffff-no-rj",
  "https://yt3.googleusercontent.com/ky8pQskjM1aU_mHCqL_Atpa2Oqsg1B7cCbXBdl5Yhqy4Ml928vUgH6sMv9-VaOiAYHGU6U8PZQ=s160-c-k-c0x00ffffff-no-rj",
];

const getRandomLink = () => links[Math.floor(Math.random() * links.length)];

export default function About() {
  return (
    <div className="container max-auto">
      <div className="grid grid-cols-2 gap-4 font-mono">
        <div>
          <img alt="random headshot" className="w-32" src={getRandomLink()} />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          deserunt dicta nihil necessitatibus enim facere illum suscipit
          doloremque saepe molestias soluta, harum ullam iusto minima itaque ea
          et iste eum.
        </div>
        <div>
          <Button variant="default">Register</Button>
        </div>
      </div>
    </div>
  );
}
