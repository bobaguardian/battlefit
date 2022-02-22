// For the purpose of uploading to AWS S3 bucket easily!
// Remove for production

import { useState, useEffect } from "react";

const UploadImage = () => {
    const [image, setImage] = useState(null);
	const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
		return () => {
			setImage(null);
			setImageLoading(false);
		};
	}, []);

    const updateImage = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (image) {
            formData.append("image", image);
			setImageLoading(true);
        }

        const data = await fetch('/api/images/', {
            method: 'POST',
            body: formData
        })
        if (data?.errors) {
            alert(data.errors);
            setImageLoading(false);
            return;
        }
        setImageLoading(false);
        console.log("upload success!");

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={updateImage}
            ></input>
            <div className="preview-image-container">
            {image && (
                <img
                alt="preview"
                src={URL.createObjectURL(image)}
                className="preview-image"
                ></img>
            )}
            </div>
            {imageLoading && (
            <p>
                <i className="fas fa-spinner fa-pulse">Loading</i>
            </p>
            )}
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadImage;
