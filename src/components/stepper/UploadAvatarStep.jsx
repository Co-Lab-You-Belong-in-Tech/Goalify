import * as React from "react";
import uploadImg from "../../assets/icons/uploadImg.svg";
import {useSelector} from "react-redux";


function UploadAvatarStep({userObj, setUser}) {

    const user = useSelector(state => state.user)
    const uploadImgHandler = (event) => {
        console.log(localStorage.getItem('userAvatar'))
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.addEventListener('load', () => {
            localStorage.setItem('userAvatar', reader.result);
        });
        // setUser((prev) => {
        //     return {...prev, imgUrl: e.target.value}
        // })
    };

    return (<div>
            <div className={"flex flex-col my-5"}>
                <p className={"font-bold text-xl text-[#152e40]"}>
                    Nice to meet you, {userObj.name}
                </p>
                <p className={"font-semibold text-[#415472] text-base mt-3"}>
                    If you’d like to add an image for your Goalify account, feel free to do so below.
                </p>
            </div>
            <input
                type="file"
                id="uploadImg-btn"
                className={'hidden'}
                onChange={uploadImgHandler}
                //
            />
            <label
                htmlFor="uploadImg-btn"
                >
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
