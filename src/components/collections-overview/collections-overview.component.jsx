import React from "react";
import './collections-overview.style.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsPreview } from '../../redux/shop/shop.selectors.js';

const CollectionsOverview=({collections})=>(
    <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps=createStructuredSelector ({
    collections:selectCollectionsPreview
  });

export default connect(mapStateToProps)(CollectionsOverview);  