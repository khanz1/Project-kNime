import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import VanillaTilt from "vanilla-tilt";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    // VanillaTilt.init(document.querySelectorAll(".card")!, {
    //   glare: true,
    //   reverse: true,
    //   "max-glare": 0.5,
    // });
  }, [])
  return (
    <main className={`main ${inter.className}`}>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="date">4 days ago</span>
          <h2>Post One</h2>
          <p>
            Lorem ipsum dolor sit demoise amet consectetur, Ducimusele,
            repudiandae temporibus omnis illum maxime quod deserunt eligendi
            dolor
          </p>
        </div>
      </div>
      <div className="card rgb">
        <div className="card-image card2"></div>
        <div className="card-text card2">
          <span className="date">1 week ago</span>
          <h2>Post Two</h2>
          <p>
            Adipisicing elit. Ducimus, repudiandae corrupti tialeno des ameto
            temporibus omnis provident illum maxime quod. Lorem ipsum dolor
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-image card3"></div>
        <div className="card-text card3">
          <span className="date">3 week ago</span>
          <h2>Post Three</h2>
          <p>
            Repudiandae repudiandae de corrupti amet temporibus omnis si
            provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit
          </p>
        </div>
      </div>
    </main>
  );
}
