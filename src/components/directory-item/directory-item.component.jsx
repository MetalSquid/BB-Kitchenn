import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";

import {
  DirectoryItemContainerDiv,
  BodyDiv,
  BackgroundImageDiv,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route); 

  return (
    <DirectoryItemContainerDiv onClick={onNavigateHandler}>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <BodyDiv>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyDiv>
    </DirectoryItemContainerDiv>
  );
};

export default DirectoryItem;
