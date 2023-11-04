import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({ entries, onToggleFavorite }) {
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
        {entries.map(({ id, date, name, plot, isFavorite }) => (
          <Fragment key={id}>
            <Entry
              date={date}
              name={name}
              plot={plot}
              isFavorite={isFavorite}
              id={id}
              onToggleFavorite={onToggleFavorite}
            />
            <Divider />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
