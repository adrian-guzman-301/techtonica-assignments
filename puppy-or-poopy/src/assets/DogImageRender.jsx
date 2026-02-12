import { useState, useEffect } from 'react';

export default function DogImageRender() {
  const [dogImage, setDogImage] = useState('');
  
  useEffect(() => {
    fetch(/** */)
      .then(/** */)
      .then(/** */)
  }, [])

  return (
    <div>
      <img src={dogImage} alt="random dog" />
    </div>
  )
}
//import a random dog image from dog ceo website in the div