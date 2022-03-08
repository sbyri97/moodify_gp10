import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist } from '../../store/playlist';

const NewPlaylistForm = ({hideForm}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [mood, setMood] = useState(1)
    const userId = useSelector(state => state.session.user.id);
    // TO DO: dynamically enter user_id and mood_id
    const user_id = 1;
    let mood_id = 1

    const submitPlaylistForm = async(e) => {
        e.preventDefault();

        // TO DO: add error handling

        // TO DO: connect mood in form to mood id

        const result = dispatch(createPlaylist({name, mood_id, user_id}))
         if (result) {
            hideForm()
        }
    }


    return (
        <div className='playlist-form'>
            <form className='new-playlist-form' onSubmit={submitPlaylistForm}>
                {/* TO DO: add ul of form validation errors */}
                <label htmlFor='name'>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='mood'>
                    <select name='mood_id'
                    //  onChange={(e) => setMood(e.target.value)}
                    >
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
