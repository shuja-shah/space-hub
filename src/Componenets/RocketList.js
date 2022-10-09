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
            <p className="det basicTXT">So you want to Tarvel </p>
            <h1 className="heading">SPACE</h1>
            <p className="Paragraph">
              Lets face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because
              we will give you a truly out of this world
              experience!
            </p>
          </div>
          <a href="#rockets" className=" btn-special">Explore</a>
        </article>
      </section>
      <section className="technologies">
        <article className="intro techIntro">
          <article className="techDet introDet">
            <p className="det">
              The terminology...
            </p>
            <h2 className="heading h-tech">LAUNCH VEHICLE</h2>
            <p className="Paragraph">
              A launch vehicle or carrier rocket is a
              rocket-propelled vehicle used to carry a
              payload from Earth surface to space,
              usually to Earth orbit or beyond.
              Our WEB-X carrier rocket is the
              most powerful in operation. Standing
              150 metres tall, its quite an awe-inspiring
              sight on the launch pad!
            </p>
          </article>
          <div className="rkIMG" />
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
