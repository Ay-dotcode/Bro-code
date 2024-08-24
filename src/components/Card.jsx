import profilePic from '../assets/Bear.jpg';
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" width={176}/>
            <h2 className='card-title'>Owolabi Joseph</h2>
            <p className='card-text'>I&#39;m a student, i&#39;m studying software engineering & play video games</p>
        </div>
    )
}

export default Card;