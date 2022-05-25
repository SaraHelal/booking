import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o=" alt="" className="fpImg" />
            <span className='fpTitle'>Aparthotel Stare Miasto</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting from 120£</span>
            <div className="fpRating">
                <span className='number'>8.5</span>
                <span className='degree'>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/60345914.jpg?k=847c9404a7398f20d1c41febf7c96ab0f8ad5ad74062faae44a3efa73e709d62&o=" alt="" className="fpImg" />
            <span className='fpTitle'>Villa Wellness</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting from 120£</span>
            <div className="fpRating">
                <span className='number'>8.5</span>
                <span className='degree'>Excellent</span>
            </div>
        </div>


        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" alt="" className="fpImg" />
            <span className='fpTitle'>Cheval Three Quays at The Tower of London</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting from 120£</span>
            <div className="fpRating">
                <span className='number'>8.5</span>
                <span className='degree'>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/88692583.jpg?k=bf17849699a57c81c033dc21050062c071ce6d6282f4e74181ce6acc47ba9f33&o=" alt="" className="fpImg" />
            <span className='fpTitle'>Sugar Loft Apartments</span>
            <span className='fpCity'>London</span>
            <span className='fpPrice'>Starting from 120£</span>
            <div className="fpRating">
                <span className='number'>8.5</span>
                <span className='degree'>Excellent</span>
            </div>
        </div>

    </div>
  )
}

export default FeaturedProperties