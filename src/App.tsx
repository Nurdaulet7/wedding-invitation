import './styles/global.scss';
import Hero from './sections/Hero/Hero';
import Invite from './sections/Invite/Invite';
import { useMusic } from './hooks/useMusic';

function App() {
  const { isPlaying, toggle } = useMusic('/music.mp3');

  return (
    <>
      <Hero isMusicPlaying={isPlaying} onMusicToggle={toggle} />
      <Invite />
    </>
  );
}

export default App;
