import uploadImg from "../../assets/icons/uploadImg.svg";
import selectEmoji from "../../assets/icons/selectEmoji.svg";
import hide from "../../assets/icons/hide.svg";
import show from "../../assets/icons/show.svg";
import {updateGoalMilestone} from "../../redux/goal/goalSlice.js";
import saveWhite from "../../assets/icons/saveWhite.svg";
import save from "../../assets/icons/save.svg";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Reflection = ({setVisible, visible, milestone, goal}) =>
{
    const dispatch = useDispatch();
    const [onChange, setOnChange] = useState(false);
    const [reflection, setReflection] = useState(milestone.reflection?.content || '');

    const uploadImgHandler = (event) => {
        console.log("Uploading image for milestone ID", milestone.id)
        // setSelectedFile(event.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.addEventListener('load', () => {
            localStorage.setItem(`${goal.id}#${milestone.id}`, reader.result);
            dispatch(updateGoalMilestone({
                goal,
                currentMilestoneId: milestone.id,
                milestoneUpdates: {reflection : {...milestone.reflection, imgSrc: localStorage.getItem(`${goal.id}#${milestone.id}`)}}
            }));
        });
    }

    return (
        <div>
            <div className={'pl-4 pr-2 pb-2 mb-4 flex bg-white  flex-col'}>
                {/*visible.reflectionImhg && */}
                {localStorage.getItem(`${goal.id}#${milestone.id}`) ? (
                    <div>
                        <img
                            className={`h-96 object-contain`}
                            src={localStorage.getItem(`${goal.id}#${milestone.id}`)}
                        />
                        <p> {milestone.id} </p>
                    </div>
                ) :''}

                <div className={'flex mt-4 justify-between'}>
                    <div className={'flex'}>
                        {/**/}
                        <input
                            type="file"
                            id={`uploadImg-btn-${milestone.id}`}
                            className={'hidden'}
                            onClick={() => console.log("clicked for milestone", milestone.id)}
                            onChange={(e) => {
                                uploadImgHandler(e);
                            }}
                        />
                        <label
                            htmlFor={`uploadImg-btn-${milestone.id}`}
                        >
                            <div
                                className={
                                    'h-9  rounded-3xl w-fit p-2 bg-[#F4F6FF]  mr-4 hover:bg-blue-100 cursor-pointer'
                                }
                            >
                                <img src={uploadImg}/>
                            </div>
                        </label>
                        <div
                            className={'h-8 bg-[#F4F6FF]  rounded-3xl w-fit p-2  mr-4'}
                        >
                            <img src={selectEmoji}/>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setVisible({
                                ...visible,
                                reflectionImhg: !visible.reflectionImhg,
                            });
                        }}
                    >
                        <div
                            className={
                                'hover:bg-blue-100 font-semibold text-xs h-9 rounded-3xl w-fit p-2 bg-[#F4F6FF] mr-2 flex justify-between items-center'
                            }
                        >
                            <img
                                className={'mr-3'}
                                src={visible.reflectionImhg ? hide : show}
                            />
                            <p> {visible.reflectionImhg ? 'Hide image ' : ' View image'}</p>
                        </div>
                    </button>
                </div>
            </div>

            <div className={'pl-4'}>
                <div className={' bg-gray-100 text-xs w-full pr-4  mb-3'}>
                    <p><b> Reflection</b></p>
                    <input
                        onChange={(e) => {
                            setOnChange(true)
                            setReflection(e.target.value)
                        }}
                        className={
                            'my-2 bg-gray-50 border border-gray-200 w-full p-2 rounded-lg'
                        }
                        value={`${reflection}`}
                    />
                </div>
                <button
                    className={`${milestone.reflection?.content && !onChange ? 'hidden' : 'block'} ${
                        onChange ? 'bg-[#535edb] text-white hover:scale-[.95]' : 'bg-gray-200'
                    } bg-gray-200 flex p-2 rounded-3xl text-sm`}
                    onClick={() => {
                        setOnChange(false);
                        dispatch(updateGoalMilestone({
                            goal,
                            currentMilestoneId: milestone.id,
                            milestoneUpdates: {reflection: {content: reflection }}
                        }))
                        setReflection("")
                    }}
                >
                    <img className={'mr-3'} src={onChange ? saveWhite : save}/>
                    <p><b> Save reflection</b></p>
                </button>
            </div>
        </div>
    );
}

export default Reflection
