import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './style.css';
import{ FiUpload } from 'react-icons/fi';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {



    const [selectedFIleUrl, setSelectedFIleUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFIleUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])
  const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>
      {
          selectedFIleUrl
            ? <img src={selectedFIleUrl} alt="Point thumbnail"/>
            : (
                <p>Imagem do estabelecimento</p>
            )   
      }
    </div>
  )
}

export default Dropzone;