function Meme() {
  return (
    <main>
      <form className="form">
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
        <button>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
