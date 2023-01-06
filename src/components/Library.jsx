import axios from "axios";
import { useRef } from "react";

export const Library = () => {
    const Name = useRef()
axios.post("http://localhost:1111/playlists",  )
  return (
    <>
      <button>Create playlist</button>
      <input placeholder="Playlist Name"></input>
    </>
  );
};
