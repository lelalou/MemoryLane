'use client'
import './style.css';
export default function UploadForm() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const response = await fetch('http://127.0.0.1:8000/upload', {
  method: 'POST',
  body: formData,
}).then(response => {
  if (response.ok) {
    console.log('Memory uploaded successfully');
  } else {
    console.error('Upload failed');
  }
}).catch(error => {
  console.error('Fetch error:', error);
});

      
    };
  
    return (
      <div style={{ backgroundColor: '#CBB89D', fontFamily: 'Times New Roman' }} className="flex justify-center items-center h-screen">
      <div style={{ backgroundColor: '#6A6F4C' }} className="max-w-md mx-auto p-4 border border-gray-300 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="keyPhrase" className="block text-sm font-medium text-gray-700">
              Key Phrase (comma-separated):
            </label>
            <input
              type="text"
              name="keyPhrase"
              id="keyPhrase"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ backgroundColor: 'rgb(61, 66, 61)', color: 'black', fontFamily: 'Times New Roman' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="mt-1 block w-full"
              style={{ backgroundColor: 'rgb(61, 66, 61)', color: 'black', fontFamily: 'Times New Roman' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700">
              Video (optional):
            </label>
            <input
              type="file"
              name="video"
              id="video"
              accept="video/*"
              className="mt-1 block w-full"
              style={{ backgroundColor: 'rgb(61, 66, 61)', color: 'black', fontFamily: 'Times New Roman' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Text:
            </label>
            <textarea
              name="text"
              id="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              style={{ backgroundColor: 'rgb(61, 66, 61)', color: 'black', fontFamily: 'Times New Roman' }}
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-353b33 text-white py-2 rounded-md hover:bg-353b33-dark">
            Upload Memory
          </button>
        </form>
      </div>
    </div>
    
    );
  }