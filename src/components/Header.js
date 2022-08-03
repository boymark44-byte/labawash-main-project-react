import React from 'react'


const Header = () => {
  return (
    // <!-- Header -->
    <header className='header'>
        <div className='container'>
            <div>
                <h1>Labawash</h1>
                <p> 
                    A Platform where you can find available laundry shops nearby.
                </p>
                <a href="/" className='btn'>Register Now &#8594;</a>
            </div>
            {/* <img src={"https://www.svgrepo.com/show/287692/laundry-washer.svg"}/> */}
            <img src={"https://media.istockphoto.com/photos/interior-of-a-modern-laundry-room-picture-id1173221762?k=20&m=1173221762&s=612x612&w=0&h=-CGXAzD0Ju7CL2L9p8bkHvhI6T1m7zx9nig_69Q5B0E="}/>
        </div>
    </header>
  )
}

export default Header