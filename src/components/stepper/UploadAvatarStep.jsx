import * as React from "react";
import uploadImg from "../../assets/icons/uploadImg.svg";


function UploadAvatarStep({userObj}) {

    const uploadImgHandler = (event, id) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.addEventListener('load', () => {
            localStorage.setItem(`${id}`, reader.result);
        });
    };

    return (<div>
            <div className={"flex flex-col my-3"}>
                <p className={"bold"}>
                    Nice to meet you, {userObj.name}
                </p>
                <p className={"inline"}>
                    If you’d like to add an image for your Goalify account, feel free to do so below.
                </p>
            </div>
            <input
                type="file"
                id="uploadImg-btn"
                className={'hidden'}
                //
            />
            <label
                htmlFor="uploadImg-btn"
                onChange={(e) => {
                    uploadImgHandler(e, milestone.id);
                }}>
                <div
                    className={
                         'flex items-center gap-3 h-9 border rounded-3xl w-fit p-2 bg-indigo-50 mr-4 hover:bg-indigo-100 cursor-pointer'
                    }>

                    <img src={uploadImg} /> Add Image
                </div>
            </label>
        </div>
    )
}

export default UploadAvatarStep;
