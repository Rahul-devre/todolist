app.js
import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function App() {
  const [val, setval] = useState([]);
  const [edit, setedit] = useState(null);
  const addRef = useRef();

  const addval = (e) => {
    e.preventDefault();
    let newData = {
      id: val.length !== 0 ? val[val.length - 1].id + 1 : 1,
      name: addRef.current.value,
    };
    setval([...val, newData]);
    addRef.current.value = "";
  };
  const delval = (id) => {
    let newVal = val.filter((el) => {
      return el.id !== id;
    });
    setval(newVal);
  };

  const editval = (id) => {
    let newVal = val.filter((el) => {
      return el.id === id;
    });
    addRef.current.value = newVal[0].name;
    setedit(newVal[0].id);
  };

  const updateval = () => {
    let index = val.findIndex((el) => el.id == edit);
    const newItem = [...val];
    newItem[index].name = addRef.current.value;
    setval(newItem);
    setedit(null);
    addRef.current.value = "";
  };

  return (
    <>
      <div className="container">
        <h1>
          <i>TO DO LIST</i>
        </h1>
        <form className="form" onSubmit={addval}>
          <input ref={addRef}></input>
          {edit === null && (
            <button type="button" className="btn" onClick={addval}>
              ADD
            </button>
          )}
          {edit !== null && (
            <button type="button" className="btn" onClick={updateval}>
              UPDATE
            </button>
          )}
        </form>
        {val.map((el) => {
          return (
            <div className="para">
              <p key={el.id} key1={el.name}>
                {el.id}&nbsp;{el.name} &nbsp;&nbsp;&nbsp;
                <span>
                  <button
                    className="btn1"
                    onClick={() => {
                      editval(el.id);
                    }}
                  >
                    <MdEdit />{" "}
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn1"
                    onClick={() => {
                      delval(el.id);
                    }}
                  >
                    <MdDelete />{" "}
                  </button>
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;


app.css
h1 {
  padding: 12, 14px;
  text-align: center;
  color: white;
}

input {
  height: 20px;
  width: 150px;
}
.btn {
  transition-duration: 0.4s;
  background-color: bisque;
  height: 40px;
  width: 120px;
  color: black;
  margin: 20px;
  border-style: hidden;
  border-radius: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: grab;
  padding: 12px 10px;
}
.btn:hover {
  background-color: darkorange;
  color: black;
}
.container {
  /* background-image: url(https://www.itl.cat/pics/b/36/366050_dark-aesthetic-wallpaper.jpg); */
  background-color: black;
  position: absolute;
  top: 20%;
  left: 30%;
  border: 5px solid red;
}

.btn1 {
  border: none;
  height: 20px;
  width: 30px;
  background-color: blanchedalmond;
  padding: 0px 0px;
}
.form {
  margin-left: 49px;
}
.para {
  margin-left: 49px;
  color: white;
}
body {
  color: aquamarine;
}
