import React from "react";
function LibrarySong({
  isPlaying,
  audioRef,
  song,
  songs,
  setCurrentSong,
  id,
  setSongs,
}) {
  const songSelecthandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelecthandler}
      className={`library-song ${song.active ? `selected` : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="songDescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
