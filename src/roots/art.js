import MasonryLayout from '../components/MasonryLayout';
import imgData from '../resources/pictures/2021/imgData_2021';

export function AnimalArt() {
  return (
    <div>
      <h2>All Birds & Wildlife Art</h2>

      <MasonryLayout imgData={imgData} />
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
