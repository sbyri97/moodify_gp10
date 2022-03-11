import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist } from '../../store/playlist';

const NewPlaylistForm = ({closeModal}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [mood, setMood] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const userId = useSelector(state => state?.session?.user?.id);
    const user_id = userId;
    let mood_id = mood;

    const submitPlaylistForm = async(e) => {
        e.preventDefault();

        const data = await dispatch(createPlaylist({name, mood_id, user_id}))
                if (data && data.errors) {
                    setValidationErrors(data.errors)
                }
                // else {
                //     setShowModal(false)
                // }
                if (data && !data.errors) {
                    closeModal()
                }

                // else {
                //     onClose()
                // }
    }


    return (
        <div className='playlist-form'>
            <form className='new-playlist-form' onSubmit={submitPlaylistForm}>
            <div className='errors'>
              {validationErrors?.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
                <label htmlFor='name'>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='mood'>
                    <select name='mood_id' onChange={(e) => setMood(e.target.value)} >
                        <option value=''>
                            Select a mood
                        </option>
                        <option value='1'>
                            Happy
                        </option>
                        <option value='2'>
                            Energetic
                        </option>
                        <option value='3'>
                            Romantic
                        </option>
                        <option value='4'>
                            Serene
                        </option>
                        <option value='5'>
                            Chill
                        </option>
                        <option value='6'>
                            Gloomy
                        </option>
                        <option value='7'>
                            Angry
                        </option>
                        <option value='8'>
                            Heartbreak
                        </option>
                        <option value='9'>
                            Productive
                        </option>
                    </select>
                </label>
                <button type='submit'>
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewPlaylistForm;
