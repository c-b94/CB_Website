import React from "react";
import pic1 from '../assets/mixing.jpg'
import pic2 from '../assets/small crowd.jpg'

export default function About() {
  return (
    <main className="main-container">
      <div className="spacer"></div>
      <section className="flex flex-row">
        <div className="w-1/2 overflow-hidden">
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src={pic1}/>
            </div>
            <div className="carousel-item h-full">
              <img src={pic2}/>
            </div>
          </div>
        </div>
        <article className="text-lg w-1/2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit
            hic repudiandae mollitia minus eveniet ab temporibus similique
            velit. Beatae, labore! Dolores ullam quibusdam, voluptatibus
            corporis ea doloremque accusantium tenetur.
          </p>
        </article>
      </section>
      <div className="spacer"></div>
    </main>
  );
}
