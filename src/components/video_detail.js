import React from 'react';

const VideoDetail = ({video}) => {

  /*
  React intenta renderizar todos los componentes que pueda, al principio no tenemos una lista de videos
  cargada, ya que el servidor demora. Entonces en el componente que lo necesite agrego un control para evitar que
  pinche. Video(27)
  */
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
