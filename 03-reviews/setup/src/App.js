import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div class="title">
          <h2>our reviews</h2>
          <div class="underline"></div>
        </div>

        <Review />
      </section>
    </main>
  );
}

export default App;
