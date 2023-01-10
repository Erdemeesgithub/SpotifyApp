import axios from "axios";
import { useRef, useEffect, useState } from "react";

export const Library = () => {
  const baseurl = "http://localhost:1111/";
  const [data, setData] = useState(null);
  const uid = localStorage.getItem("uid");
  console.log(uid);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createPlaylist = () => {
    const playlist = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      // createdBy: uid,
    };
    axios.post(baseurl + "playlists", playlist);
  };
  const deletePlaylist = () => {
    axios
      .delete(baseurl + "playlist" + uid)
      .then((res) => {
        console.log(uid);
        console.log("Deleted", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(baseurl + "playlists")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginLeft: 400 }}>
      <input
        placeholder="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <input
        placeholder="description"
        id="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></input>
      <button onClick={createPlaylist}>create</button>
      <div>
        {data
          ? data.map((playlist, i) => (
              <>
                {" "}
                <p>{data[i].title}</p>
                <button onClick={deletePlaylist}>X</button>
              </>
            ))
          : console.log("null")}
      </div>
    </div>
  );
};
