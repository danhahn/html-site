import React from "react";
import Icon from "react-fontawesome";

import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/tags.module.scss";
import taglist from "../utils/tags";

const HtmlTagList = () => {
  return (
    <ExtendLayout>
      <div className={styles.tags}>
        <h1>{taglist.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: taglist.intro }} />
        <div className={styles.overflow}>
          <table className="table">
            <tbody>
              <tr className="header">
                <th>Tag</th>
                <th />
                <th>Desc</th>
                <th>Type</th>
              </tr>
              {taglist.tags.map(tag => (
                <tr className="template" key={tag.tag}>
                  <td>
                    <code>{tag.tag}</code>
                  </td>
                  <td className={styles.isHTML5}>
                    {tag.isHTML5 ? <Icon name="html5" /> : null}
                  </td>
                  <td>{tag.desc}</td>
                  <td>{tag.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ExtendLayout>
  );
};

export default HtmlTagList;
