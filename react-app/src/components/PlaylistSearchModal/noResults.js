import React from "react";
import { useSelector} from 'react-redux'
import '../Playlist/Playlist.css'
import '../Search/search.css'


export default function NoResultsPlaylistSearch({results}) {

    const songs = useSelector((state) => state.library.itemLibrary?.songs)


    return (
        <div>
            {(results) ? null :
                ((!songs?.length)) ?
                <div>
                    <h2 className="noResultsSearchText">No Results Found</h2>
                </div>
                : null
            }
        </div>
    )
}
