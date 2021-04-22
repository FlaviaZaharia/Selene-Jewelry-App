import {useState,useEffect} from 'react';
import axios from 'axios';

const ImageUpload=()=>{
    const [fileInputState,setFileInputState]=useState("");
    const [selectedFile,setSelectedFile]=useState("");
    const [previewSource,setPreviewSource]=useState("");

    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
  
    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);
      };
  };

 const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
        uploadImage(reader.result);
    };

};
const uploadImage = async (base64EncodedImage) => {
    try {
            await fetch('/api/items/upload', {
            method: 'POST',
            body: JSON.stringify({ data: base64EncodedImage }),
            headers: { 'Content-Type': 'application/json' },
        });
        setFileInputState('');
        setPreviewSource('');
        setSuccessMsg('Image uploaded successfully');
    } catch (err) {
        console.error(err);
        setErrMsg('Something went wrong!');
    }
};
return(
    <div>
    <form onSubmit={handleSubmitFile}>
                <div className='form-inputs'>
                <label htmlFor='image' className='form-label'>
                    Image: 
                </label>
                <input
                    type="file" required
                    id='image'
                    className='input'
                    placeholder='Enter image'
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    
                />
                </div>
                <div className="submitButton">
                <button  className='btnn' type="submit">Upload</button>
                </div> 
                </form>
                {previewSource && (
                    <img
                        src={previewSource}
                        alt="chosen"
                        style={{ height: '300px', width:'300px',borderRadius:'50px' }}
                    />)}
                    </div>

);

}
export default ImageUpload;