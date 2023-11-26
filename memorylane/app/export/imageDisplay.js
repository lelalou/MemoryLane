// ImageDisplay.js
import Image from 'next/image';

export default function ImageDisplay({ imageId }) {
  const imageUrl = `http://localhost:8000/images/${imageId}`;

  return (
    <div>
      {/* ... (other content) */}
      <Image src={imageUrl} alt="Memory" width="600" height="400" unoptimized />
    </div>
  );
}
