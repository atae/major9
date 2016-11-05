import React from "react";
import {Link} from "react-router";

class Track extends React.Component{
  constructor(props){
    super(props)
    this.currentAlbum = this.currentAlbum.bind(this)
    this.currentArtist = this.currentArtist.bind(this)
    this.currentTrack = this.currentTrack.bind(this)
  }


  currentTrack(prop) {
    console.log(this.props.tracks);
    console.log(this.props);
    console.log('break');
      if (Object.keys(this.props.tracks.tracks).length !== 0){
      return this.props.tracks.tracks[this.props.params.trackId][prop]
    }
  }

  currentAlbum(prop) {
    // debugger
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.currentTrack.albumId][prop]
    }
  }

  currentArtist(prop) {
    if (Object.keys(this.props.albums.albums).length !== 0){
    return this.props.albums.albums[this.props.params.albumId].artist[prop]
    }
  }

  // <h3>by <Link to={artistLink}>
  //   {this.currentArtist('username')}
  // </Link></h3>
  // <h2> Song Player goes here</h2>
  // <h3>Buy the Full Digital Album</h3>
  // <br/>
  // <h2> Purchasing Component </h2>
  // <h2>Buy Now {this.currentAlbum('price')}</h2>
  // <ol>
  //   {this.displayTracks()}
  // </ol>
  // <br />
  // <h4>released {this.currentAlbum('release_date')} </h4>
  // <br />
  // <h4>{this.currentAlbum('description')}</h4>
  // <br />
  // <h4>Created by {this.currentArtist('username')}</h4>
  // <br />
  // <h4> {this.currentAlbum('credits')}</h4>
  // <br />

  render() {
    // debugger
    let featAlbumId = Object.keys(this.props.albums.albums)[0]
    let artistLink = `artist/${this.currentArtist('id')}/album/${featAlbumId}`
    return(
    <div className="Tracks">
      <h1>{this.currentTrack('track_name')}</h1>
        <h3>by <Link to={artistLink}>
          {this.currentArtist('username')}
        </Link></h3>
    </div>
    )
  }
}

export default Track;
