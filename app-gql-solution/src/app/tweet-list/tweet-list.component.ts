import { QueryResponse } from './../models/QueryResponse';
import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const TWEETS_QUERY = gql`
  query tweets {
    Tweet(first:50) {
      created
      postedBy {
        screen_name
        profile_image_url
      }
      text 
    }
  }
`;

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  tweets;
  loading: boolean;
  empty: boolean = false;
  
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: TWEETS_QUERY
    }).subscribe(({data}) => {
      this.tweets = data.Tweet;
      this.empty = (!data.Tweet || data.Tweet.length === 0);
    });
  }

}
