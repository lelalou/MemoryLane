// ImageDisplay.js
import Image from 'next/image';

// ImageDisplay.js
export default function ImageDisplay({ keyPhrase }) {
    const imageUrl = `http://localhost:8000/images/byKeyPhrase?keyPhrase=${keyPhrase}`;
  
    return (
      <div>
        {/* ... other content */}
        <Image src={imageUrl} alt="Memory" width="600" height="400" unoptimized />
      </div>
    );
  }
  