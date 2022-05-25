import  './featuredCities.css'

const FeaturedCities = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/833211.webp?k=e062b3fc9b69ec0461c041712380d9c9455fc9e1d6ac052ec2189b2773a70856&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Hunstanton</h1>
                <h2>61 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/968030.webp?k=5d038abc1684d1478f8dadec7b7453be25b75315a142b911e27725a5c0b25066&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Exeter</h1>
                <h2>170 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/540x270/916441.webp?k=3186bd8396edd8c93ad21999de6ca71cf7bb19b12e8b9f907f96f22878556556&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Motherwell</h1>
                <h2>22 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCities