import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPlaylist, getPlaylist } from '../../store/playlist';
// import 'EditPlaylist.css'

const EditPlaylistForm = ({playlist, playlistId}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(playlist?.name);
    const [mood, setMood] = useState(playlist?.mood_id);
    const [validationErrors, setValidationErrors] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const userId = useSelector(state => state.session.user.id);
    const user_id = userId;
    let mood_id = mood;

    const submitEditPlaylistForm = async(e) => {
        e.preventDefault();

        const editedPlaylist = {user_id, mood_id, name, playlistId}

        const data = await dispatch(editPlaylist(editedPlaylist))
            if (data && data.errors) {
                setValidationErrors(data.errors)
            } else {
                // hideForm()
            }

    }

    useEffect(() => {
            dispatch(getPlaylist(playlistId));
          }, [dispatch, playlistId]);


    return (
        <div className='edit-playlist-form-main-container'>
            <form className='edit-playlist-form' onSubmit={submitEditPlaylistForm}>
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
                    <select name='mood_id' onChange={(e) => setMood(e.target.value)} value={mood}>
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
                    Edit
                </button>
            </form>
        </div>
    )
}

export default EditPlaylistForm;
