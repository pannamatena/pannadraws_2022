import { Outlet, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ArtPageComp from '../components/ArtPage';
import imgDataAnimalArt_2021 from '../resources/pictures/2021/imgData_animalArt_2021';

export function AnimalArt() {
  let params = useParams();
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          <h2>All Birds & Wildlife Art</h2>
          <Gallery imgData={imgDataAnimalArt_2021} />
        </>
      )}

      {/*<Link to="/irish_raptors/">Irish Raptors</Link>
      <Link to="/feathers_of_tales/">Feathers of Tales</Link>*/}
    </>
  );
}

export function ArtPage() {
  let params = useParams();
  return <ArtPageComp imgTitle={params.imgTitle} />;
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
