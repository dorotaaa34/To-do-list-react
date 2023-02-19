import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "Przejść na reacta", done: true },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <section className="section">
        <header className="section__header">
          <h2>Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          <button className="buttons__b"></button>
          <button className="buttons__b"></button>
        </header>
        <div className="section__body">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
      <li className="tasks__item tasks__item--hidden">
        <button className="tasks__button tasks__button--toggleDone"></button>
        <span className="tasks__content tasks__content--done"> </span>
        <button className="tasks__button tasks__button--remove"></button>
      </li>
    </main>
  );
}

export default App;
