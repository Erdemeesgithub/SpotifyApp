import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Library = () => {
  // const nameRef = useRef();
  const baseurl = "http://localhost:1111/";
  // const param = useParams();
  const [data, setData] = useState({});
  // const [songs, setSongs] = useState([]);
  // const uid = localStorage.getItem("uid");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(null);
  // const {user} = useAuth()

  // const addPlaylist = (_, index) => {
  //   if (nameRef.current.value) {
  //     axios
  //       .post(baseurl + "playlists", {
  //         title: nameRef.current.value,
  //       })
  //       .then((res) => {
  //         // axios
  //         //   .put(baseurl + "playlist" + param.id, {
  //         //     id: res.data._id,
  //         //   })
  //         //   .then((res) => {
  //         //     console.log(res);
  //         //   })
  //         //   .catch((err) => {
  //         //     console.log(err);
  //         //   });
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   axios
  //     .get(baseurl + "playlist" + param.id)

  //     .then((res) => {
  //       console.log(param.id);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  //   axios
  //     .get(baseurl + "songs")
  //     .then((res) => {
  //       setSongs(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }, []);
  const createPlaylist = () => {
    const playlist = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      // createdBy: uid,
    };
    axios.post(baseurl + "playlists", playlist);
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
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <input
        id="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></input>
      <button onClick={createPlaylist}>create</button>
      <div>
        {data.map((playlist, i) => (
          <p>{data[i].title}</p>
        ))}
      </div>
    </div>
  );
};
