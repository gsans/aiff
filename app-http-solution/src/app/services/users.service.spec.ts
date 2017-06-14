import { TestBed, inject } from '@angular/core/testing';
import { async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, HttpModule, XHRBackend, Response, BaseRequestOptions, ResponseOptions } from '@angular/http';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});

fdescribe('MockBackend: UsersService', () => {
  let mockbackend, service;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      { provide: Http,
        useFactory: (backend, options) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions] },
      UsersService
    ]
  }));
  
  beforeEach(inject([MockBackend, UsersService], (m, s) => {
    mockbackend = m;
    service = s;
  }))

  it('should return mocked response', done => {
    //setup mock response
    let response = { users: [{
        "id": 67,
        "username": "Chris",
        "roles": [
          "user"
        ],
        "superuser": false
      }]
    };
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response),
        status: 200
      })));
    });

    //check expectations
    service.get().subscribe(users => {
      expect(users[0].username).toBe("Chris");
      expect(users.length).toBe(1);
      done();
    });
  });
});
