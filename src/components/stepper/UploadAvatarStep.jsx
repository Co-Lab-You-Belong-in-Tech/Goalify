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
            <div className={"flex flex-col my-8"}>
                <p className={"font-bold text-2xl pb-1 text-[#152e40]"}>
                    Nice to meet you, {userObj.name} 😎
                </p>
                <p className={"font-normal text-[#415472] pb-5 text-sm mt-2"}>
                    If you’d like to add an avatar to your Goalify account, feel free to do so below.
                 </p>
                 <p className={" flex-wrap font-normal text-[#454749] pl-1 text-xs mt-3"}>
                    <b>Tip✨:</b>For a more personal experience, it's highly recommended.
                 </p>
            </div>
       
          <div>  <img src={localStorage.getItem('userAvatar')} alt="your-avatar-preview" className={'my-8 h-32 w-32 border border-blue-500 rounded-full  '}></img></div>
        
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
                         'flex items-center gap-2 h-9  font-semibold text-xs rounded-3xl w-fit p-2 bg-[#F4F6FF] mr-4 hover:bg-indigo-50 cursor-pointer'
                    }>

                    <img src={uploadImg} /> Add Image
                </div>
            </label>
        </div>
    )
}

export default UploadAvatarStep;
