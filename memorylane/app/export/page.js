'use client'
import ImageDisplay from './imageDisplay'; // Adjust the path as necessary
export default function HomePage() {
    // Example ID, replace with the actual ID you get after uploading the image
    const imageId = '65627a091d6439b7cddb6c1c';
  
    return (
      <div>
        <ImageDisplay imageId={imageId} />
      </div>
    );
  }
  