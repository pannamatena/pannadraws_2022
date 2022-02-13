import { Outlet, useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import ListGallery from '../components/ListGallery';
import ArtPageComp from '../components/ArtPage';
import imgDataAnimalArt_2021 from '../resources/pictures/2021/imgData_animalArt_2021';
import imgDataAnimalArt_2020 from '../resources/pictures/2020/imgData_animalArt_2020';
import imgDataFantasyArt_2020 from '../resources/pictures/2020/imgData_fantasyArt_2020';
import imgData_adultColoring_2021 from '../resources/pictures/adult_coloring/imgData_adultColoring_2021';

export function AnimalArt() {
  let params = useParams();
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          <h1>All Birds & Wildlife Art</h1>
          <h3 className="galleryTitle">2021</h3>
          <Gallery imgData={imgDataAnimalArt_2021} imgRoot="art/animalArt" />
          <h3 className="galleryTitle">2020</h3>
          <Gallery imgData={imgDataAnimalArt_2020} imgRoot="art/animalArt" />
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
  let params = useParams();
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          <h1>Adult Colouring</h1>
          <ListGallery imgData={imgData_adultColoring_2021} />
        </>
      )}
    </>
  );
}

export function FantasyArt() {
  let params = useParams();
  return (
    <>
      {params.imgTitle ? (
        <Outlet />
      ) : (
        <>
          <h1>Fantasy Art</h1>
          <h3 className="galleryTitle">2020</h3>
          <Gallery imgData={imgDataFantasyArt_2020} imgRoot="art/fantasyArt" />
        </>
      )}
    </>
  );
}
