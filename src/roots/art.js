import { Link, Outlet } from 'react-router-dom';

export function Art() {
  return (
    <div>
      <h2>Art</h2>
      <div>
        <Link to="animalArt">All Birds & Wildlife Art</Link>
        <Link to="adultColoring">Adult Colouring</Link>
        <Link to="fantasyArt">Fantasy Art</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function AnimalArt() {
  return (
    <div>
      <h2>All Birds & Wildlife Art</h2>

      {/*<Link to="/irish_raptors/">Irish Raptors</Link>
      <Link to="/feathers_of_tales/">Feathers of Tales</Link>*/}
    </div>
  );
}

export function AdultColoring() {
  return (
    <div>
      <h2>Adult Colouring</h2>
    </div>
  );
}

export function FantasyArt() {
  return (
    <div>
      <h2>Fantasy Art</h2>
    </div>
  );
}
