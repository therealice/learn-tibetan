import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import Button from 'preact-material-components/Button';
import Character from '../Character';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class SimpleCharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  play = () => {
    this.audio.load();
    this.audio.play();  
  }

  render({character}) {
    return (
      <Card class={style.cardBody}>
        <Button class={style.btn} raised ripple onClick={this.play}> 
          <Character character={character} characterStyle={style.character} />
          <audio ref={(audio) => { this.audio = audio }}>
            <source src={`./assets/audio/alphabet/row${character.row}-col${character.col}.m4a`} type="audio/mp4" />
          </audio>
        </Button> 
      </Card>
    );
  }
}
