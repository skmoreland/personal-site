import Profile from '../../components/Profile/Profile'
import topLeftGraphic from '../../assets/images/topleft-graphic.png'
import topRightGraphic from '../../assets/images/topright-graphic.png'

function Home() {
    return (
    <div className="Home">
        <div>
          <div className="flex justify-between">
            <img className="w-1/2 lg:w-2/12" src={topLeftGraphic} alt=""/>
            <img className="w-1/2 lg:w-2/12" src={topRightGraphic} alt=""/>
        </div>
        <div className="py-16 px-16 -mt-12 lg:-mt-32">
          <Profile />
        </div>
        </div>
    </div>
  );
}

export default Home;