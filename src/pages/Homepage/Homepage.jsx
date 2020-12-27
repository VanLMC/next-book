import React, { useState } from 'react';
import './css/style.css';

export default function Homepage() {
  const [Pokemon, setPokemon] = useState();

  return (
    <div>
      <div class="container">
        <form>
          <input type="text" />
          <input type="submit" value="Capturar" />
        </form>

        <div class="content">
          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>

          <figure>
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
