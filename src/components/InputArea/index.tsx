import { useState } from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { Field } from "../Field";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);

  const handleAddEvent = () => {
    const newItem: Item = {
      date: new Date(date),
      category,
      title,
      value,
    };

    onAdd(newItem);

    setDate("");
    setCategory("");
    setTitle("");
    setValue(0);
  };

  return (
    <C.Container>
      <Field
        title="Data"
        field={
          <input
            type="date"
            className="field"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        }
      />
      <Field
        title="Categoria"
        field={
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="field"
          >
            <option></option>
            {Object.entries(categories).map((item) => (
              <option value={item[0]}>{item[1].title}</option>
            ))}
          </select>
        }
      />
      <Field
        title="Título"
        field={
          <input
            type="text"
            className="field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        }
      />
      <Field
        title="Valor"
        field={
          <input
            type="number"
            className="field"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
        }
      />
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
