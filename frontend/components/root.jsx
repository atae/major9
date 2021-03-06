import React from "react";
import { Provider } from 'react-redux';
import {Router, Route, hashHistory,IndexRoute,IndexRedirect, DefaultRoute } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import StoreFrontContainer from './storefront/storefront_container';
import AlbumContainer from './storefront/album/album_container';
import TrackContainer from './storefront/track/track_container';
import SplashContainer from './splash/splash_container';
import {fetchAlbums, fetchArtists} from '../actions/album_actions';
import {fetchTracks, fetchTrack} from '../actions/track_actions';
import {receiveErrors} from '../actions/session_actions';
// const _redirectIfLoggedIn = (store) => {
//   if (store.getState().session.currentUser) {
//     location.replace('/');
//   }
// };

//If no artist, don't render anything (if/else statements)
// Or use loaders

const Root = ({store}) => {
  const requestAlbumsOnEnter = (nextState, replace) => {
    if (nextState.params.albumId !== undefined || nextState.params.trackId !== undefined) {
    store.dispatch(fetchAlbums(nextState.params.artistId, false))
  } else if (nextState.params.artistId) {
    store.dispatch(fetchAlbums(nextState.params.artistId, true))
  }
    let albumIds = Object.keys(store.getState().albums.albums)
  }

  const redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(receiveErrors([""]))
    if(store.getState().session.currentUser!== null) {
      replace(`/artist/${store.getState().session.currentUser.id}`)
    }
  }

  const redirectIfLoggedOut = (nextState, replace) => {
    return e => {
      if(store.getState().session.currentUser=== null) {
        replace(`splash`)
      }
    }
  }

  const redirectToFeatured = (nextState, replace) => {
    if (nextState.params.albumId === 'featured') {
    let albumIds = Object.keys(store.getState().albums.albums)
    store.dispatch(fetchTracks(nextState.params.albumId))
    replace(`/artist/${nextState.params.artistId}/album/${albumIds[0]}`)
    }
  }

  const redirectToRequestedTrack = (nextState, replace) => {
    store.dispatch(fetchTrack(nextState.params.trackId))
  }
  const requestTracksOnEnter = (nextState) => {
    store.dispatch(fetchTracks(nextState.params.albumId))
  }

  const requestArtistsOnEnter = (nextState) => {
    store.dispatch(fetchArtists())
  }
//make whole page for logged out user with access to session form
//Add a featured artists/albums page as indexroute/defaultroute
// Maybe need to add featured_rank_num: to albums?

//Remember that onEnters run from the children first (DFS)

  return (<Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path="/" component={App} onEnter={redirectIfLoggedOut} >
        <IndexRoute component={SplashContainer} onEnter={requestArtistsOnEnter}/>
        <Route path="/artist/:artistId" component={StoreFrontContainer}
           onEnter={requestAlbumsOnEnter}>
          <Route path="album/:albumId" component={AlbumContainer}>
            <Route path="track/:trackId" component={TrackContainer}/>
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
