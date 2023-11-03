import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";
import { useState } from "react";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "Succession",
    notes:
      "Succession is an American satirical comedy-drama television series created by Jesse Armstrong that aired on HBO from June 3, 2018, to May 28, 2023. The series centers on the Roy family, the owners of global media and entertainment conglomerate Waystar RoyCo, and their fight for control of the company amidst uncertainty about the health of the family's patriarch.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "The White Lotus",
    notes:
      "The White Lotus is an American dark comedy-drama anthology television series created by Mike White for HBO.[4][5] It follows the guests and employees of the fictional White Lotus resort chain, whose interactions are affected by their various psychosocial dysfunctions. The press release notes that 'each passing day, a darker complexity emerges in these picture-perfect travelers, the hotel's cheerful employees, and the idyllic locale itself'.The first two seasons are set in Maui and Sicily, respectively.",
  },
];

//hier weitermachen mit Form!
export default function EntriesSection() {
  const [entries, setEntries] = useState(initialEntries);

  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map(({ id, date, motto, notes }) => (
          <Fragment key={id}>
            <Entry key={id} date={date} motto={motto} notes={notes} />
            <Divider />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
