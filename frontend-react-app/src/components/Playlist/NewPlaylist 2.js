import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const NewPlaylistForm = () => {
    const [name, setName] = useState('');
    const [mood, setMood] = useState(1)
    const userId = useSelector(state => state.session.user.id);

    const submitPlaylistForm = async(e) => {
        e.preventDefault();

        // TO DO: add error handling

        // TO DO: connect mood in form to mood id
        const newPlaylist = {
            name,
            mood,
            userId
        }

        // dispatch createPlaylist thunk
    }


    return (
        <div className='playlist-form'>
            <form className='new-playlist-form' onSubmit={submitPlaylistForm}>
                {/* TO DO: add ul of form validation errors */}
                <label htmlFor='name'>
                    <input>
                    </input>
                </label>
                <label htmlFor='mood'>
                    <select name='mood' onChange={(e) => setMood(e.target.value)}>
                        <option value=''>
                            Select a mood
                        </option>
                        {/* TO DO: render mood type for each mood */}
                        <option value='1'>
                            Happy
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
