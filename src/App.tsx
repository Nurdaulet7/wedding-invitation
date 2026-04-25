import './styles/global.scss';
import Hero from './sections/Hero/Hero';
import Invite from './sections/Invite/Invite';
import DateTime from './sections/DateTime/DateTime';
import Venue from './sections/Venue/Venue';
import Countdown from './sections/Countdown/Countdown';
import Hosts from './sections/Hosts/Hosts';
import OrnamentDivider from './components/OrnamentDivider/OrnamentDivider';
import { useMusic } from './hooks/useMusic';

function App() {
  const { isPlaying, toggle } = useMusic('/music.mp3');

  return (
    <>
      <Hero isMusicPlaying={isPlaying} onMusicToggle={toggle} />
      <Invite />
      <OrnamentDivider />
      <DateTime />
      <OrnamentDivider />
      <Venue />
      <Countdown />
      <Hosts />
    </>
  );
}

export default App;
