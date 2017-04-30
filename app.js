import Rx from 'rx';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery/dist/jquery.js';
import addUser, { randNum } from './util';

const container = document.getElementById('users');
const refresh = document.getElementById('refresh');

const refreshClickStream = Rx.Observable.fromEvent(refresh, 'click');

const requestStream = refreshClickStream.map(() => 'http://127.0.0.1:3000/users');

const responseStream = requestStream.flatMap(url => Rx.Observable.fromPromise($.getJSON(url)));

responseStream.subscribe(response => {
    container.innerHTML = '';
    response.splice(randNum(response.length - 3), 3)
    .forEach(user => container
    .insertAdjacentHTML('beforeEnd', addUser(user)))
});
