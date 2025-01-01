import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const getItems = () =>
    Array(20)
      .fill(0)
      .map((_, ind) => ({ id: `element-${ind}` }));
export default function Projects() {
    const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id),
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );

  
const LeftArrow = () => {
    const visibility = React.useContext < publicApiType > VisibilityContext;
    const isFirstItemVisible = visibility.useIsVisible('first', true);
    return (
      <Arrow
        disabled={isFirstItemVisible}
        onClick={() => visibility.scrollPrev()}
        className="left"
      >
        Left
      </Arrow>
    );
  };
  
  const RightArrow = () => {
    const visibility = React.useContext < publicApiType > VisibilityContext;
    const isLastItemVisible = visibility.useIsVisible('last', false);
    return (
      <Arrow
        disabled={isLastItemVisible}
        onClick={() => visibility.scrollNext()}
        className="right"
      >
        Right
      </Arrow>
    );
  };
  
  function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext < publicApiType > VisibilityContext;
    const visible = visibility.useIsVisible(itemId, true);
  
    return (
      <div
        onClick={() => onClick(visibility)}
        style={{
          width: '160px',
        }}
        tabIndex={0}
      >
        <div className="card">
          <div>{title}</div>
          <div>visible: {JSON.stringify(visible)}</div>
          <div>selected: {JSON.stringify(!!selected)}</div>
        </div>
        <div
          style={{
            height: '200px',
          }}
        />
      </div>
    );
}
}
