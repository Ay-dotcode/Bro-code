import profilePic from '../assets/Bear.jpg';
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" width={176}/>
            <h2>Owolabi Joseph</h2>
            <p>I&#39;m a student, i&#39;m studying software engineering & play video games</p>
        </div>
    )
}

export default Card;