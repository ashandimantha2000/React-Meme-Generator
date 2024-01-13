import React from "react";
import memeData from "./memeData";

export default function Meme() {

  const [memeImage, setMemeImage] = React.useState("");

function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);

}
  return (
    <main>
      <div className="form">
        <div>
          <label className="form-label">Top Text</label>
          <br />
          <input type="text" placeholder="Shut Up" className="form-input" />
        </div>
        <div>
          <label className="form-label">Bottom Text</label>
          <br />
          <input
            type="text"
            placeholder="and take my money"
            className="form-input"
          />
        </div>
        <button onClick={getMemeImage} >Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} alt="meme" className="meme-image" />
    </main>
  );
}


