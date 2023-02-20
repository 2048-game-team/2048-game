import { soundUrl } from 'entities/music';
import { BASE_URL } from 'root/const';

class Sfx {
  private clickSound: HTMLAudioElement | undefined;
  private finishSound: HTMLAudioElement | undefined;

  playClick(volume: number) {
    if (volume <= 0.01) return;
    if (!this.clickSound) {
      this.clickSound = new Audio(`${BASE_URL}${soundUrl.click}`);
    }
    this.clickSound.volume = volume;
    if (this.clickSound.paused) {
      this.clickSound.play();
    } else {
      this.clickSound.currentTime = 0;
    }
  }

  playFinish(volume: number) {
    if (volume <= 0.01) return;
    if (!this.finishSound) {
      this.finishSound = new Audio(`${BASE_URL}${soundUrl.finish}`);
    }
    this.finishSound.volume = 1;
    this.finishSound.play();
  }
}

export const sfx = new Sfx();
