import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    name: "Succession",
    plot: "Succession is an American satirical comedy-drama television series created by Jesse Armstrong that aired on HBO from June 3, 2018, to May 28, 2023. The series centers on the Roy family, the owners of global media and entertainment conglomerate Waystar RoyCo, and their fight for control of the company amidst uncertainty about the health of the family's patriarch.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    name: "The White Lotus",
    plot: "The White Lotus is an American dark comedy-drama anthology television series created by Mike White for HBO. It follows the guests and employees of the fictional White Lotus resort chain, whose interactions are affected by their various psychosocial dysfunctions. The press release notes that 'each passing day, a darker complexity emerges in these picture-perfect travelers, the hotel's cheerful employees, and the idyllic locale itself'.The first two seasons are set in Maui and Sicily, respectively.",
  },
];

export function App() {
  const [entries, setEntries] = useState(initialEntries);
  function handleAddEntry(newEntry) {
    newEntry.id = uid();
    newEntry.date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    setEntries([...entries, newEntry]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
