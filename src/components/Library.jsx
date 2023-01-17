import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config";
import SpinnerL from "./Spinner1";

export const Library = () => {
  const baseurl = "http://localhost:1111/";
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logget out");
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(baseurl + "playlists?fbId=" + user.uid)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const createPlaylist = () => {
    const playlist = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      fbId: user.uid,
    };
    axios.post(baseurl + "playlists", playlist);
  };
  // const deletePlaylist = () => {
  //   axios
  //     .delete(baseurl + "playlist/" )
  //     .then((res) => {
  //       console.log("Deleted", res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  if (!data) {
    return <SpinnerL />;
  }

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
                <p>{data[i].title}</p>
                {/* <button onClick={deletePlaylist}>X</button>  */}
              </>
            ))
          : console.log("null")}
      </div>
    </div>
  );
};
