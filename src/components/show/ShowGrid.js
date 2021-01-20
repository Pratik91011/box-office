import React, {useCallback} from 'react'
import ShowCard from './ShowCard'
import { FlexGrid } from "../styled";

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data, removeShowFromState }) => {
  const [starredShows, dispatchStarred] = useShows();

  // NEW: moved here in order to 'share' onStarClick across children of <ShowGrid />
  // In old version each data.map(...) element had its own copy of onStarClick
  const onStarClick = useCallback(
    (showId, isStarred) => {
      if (isStarred) {
        dispatchStarred({ type: 'REMOVE', showId });
        // NEW: check if removeShowFromState was passed as a prop
        // If passed, call removeShowFromState with current showId
        if (removeShowFromState) {
          removeShowFromState(showId);
        }
      } else {
        dispatchStarred({ type: 'ADD', showId });
      }
    },
    [dispatchStarred, removeShowFromState]
  );

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            // onStarClick={onStarClick} <-- OLD, can't pass any argument
            // NEW: wrap onStarClick in a function so we can pass arguments
            onStarClick={() => onStarClick(show.id, isStarred)}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid
