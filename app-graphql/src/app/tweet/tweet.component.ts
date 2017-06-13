import { Component, Input } from '@angular/core';
import { DEFAULT_PROFILE_PIC } from '../utils/helpers'
import { timeSince } from '../utils/helpers';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  DEFAULT_PIC = DEFAULT_PROFILE_PIC;
  @Input() tweet;

  formatDate(date) {
    return timeSince(new Date(date*1000));
  }

}
