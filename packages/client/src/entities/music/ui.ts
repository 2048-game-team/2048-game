import { soundUrl } from 'entities/music';
import { $envData } from 'app/model';

let baseUrl: string;
$envData.watch(env => ({ baseUrl } = env));

class Sfx {
  private clickSound: HTMLAudioElement | undefined;
  private finishSound: HTMLAudioElement | undefined;

  playClick(volume: number) {
    if (volume === 0) return;
    if (!this.clickSound) {
      this.clickSound = new Audio(`${baseUrl}${soundUrl.click}`);
    }
    this.clickSound.volume = volume;
    if (this.clickSound.paused) {
      this.clickSound.play();
    } else {
      this.clickSound.currentTime = 0;
    }
  }

  playFinish(volume: number) {
    if (volume === 0) return;
    if (!this.finishSound) {
      this.finishSound = new Audio(`${baseUrl}${soundUrl.finish}`);
    }
    this.finishSound.volume = 1;
    this.finishSound.play();
  }
}

export const sfx = new Sfx();
