import { useState } from "react";
const Profile = () => {
    const [ profile, setProfile ] = useState({
        name: '',
        age: ''
    })

    const handleChange = e => {
        const {name, value} = e.target

        setProfile((prevProfile) => ({
            ...prevProfile, [name]:value,
        }))
    }
    return(
    <>  
        <h1>This is the Profile Information</h1>
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </div>

        <div>
            <label>Age:</label>
            <input type="number" name="age"  value={profile.age} onChange={handleChange} />
        </div>

        <h2>Profile Information</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </>)
}

export default Profile;