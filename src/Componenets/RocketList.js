import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from './Rockets';
import { getRockets } from '../Redux/Rockets/rocket';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <>
      <section className="Home">
        <article className="intro">
          <div className="introDet">
            <p>So you want to Tarvel </p>
            <h1>SPACE</h1>
          </div>
          <p>
            Lets face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because
            we will give you a truly out of this world
            experience!
          </p>
          <a href="#rockets" className="btn btn-special">Explore</a>
        </article>

      </section>
      <section className="Rocket-List" id="rockets">
        {rockets.map((item) => (
          <Rockets
            key={item.id}
            rocketImage={item.flickr_images[0]}
            rocketName={item.rocket_name}
            rocketDescription={item.description}
          />
        ))}
      </section>
    </>
  );
};
export default RocketList;
