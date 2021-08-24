import UploadFileForm from '@/components/uploadFile'
import axios from 'axios'

/* We're going to use axios to upload for us 

/* This is a function wrap in a constant but woudl still work as a regular function. 
const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    console.log(formData)

    const response = await axios.post('/api/upload', formData, config);

    console.log('response', response.data);
}

function addMedia() { 
return (
            <div className="container"> 
            
                <UploadFileForm allowMultipleFiles={true} 
                acceptedFileTypes="" 
                onChange = {onChange}
                uploadFileName="theFiles"
                >

                </UploadFileForm>
            </div>
        )
}
