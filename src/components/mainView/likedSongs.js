import { useSelector, shallowEqual } from 'react-redux';
import PlayButton from '../playButton';
import SongList from "../songList";

const LikedSongs = () => {
  const data = useSelector(state => state.songs.data, shallowEqual);

  return (
    <div className='view'>
      <div className='view__titleBox'>
        <h1 className='view__title'>Liked Songs</h1>
        <PlayButton />
      </div>
      <SongList data={data} type='likedSongs'/>
    </div>
  );
}

export default LikedSongs;