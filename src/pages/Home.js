import { useState } from 'react';
import { Info } from '../components/Info';
import Insert from '../components/Insert';

export function Home() {
  const users = [
    { id: 1, name: "Andrea", lastname: "Sabato" },
    { id: 2, name: "Giovanni", lastname: "Tricheco" },
    { id: 3, name: "Alessia", lastname: "Frangetta" }
  ]

  const [list, setList] = useState(users);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLastname(event) {
    setLastname(event.target.value);
  }

  function handleAdd() {
    // const newList = list.concat({ name, lastname });
    const newList = [...list, {name, lastname}];

    setList(newList);
  }

  return (
    <div className='Home'>
      {/* <Insert
        name={name}
        lastname={lastname}
        onChangeName={handleChangeName}
        onChangeLastname={handleChangeLastname}
        onAdd={handleAdd}
      /> */}

      <Info list={list} />
    </div>
  );
}