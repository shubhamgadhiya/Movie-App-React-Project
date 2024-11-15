import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../utils/useFetch";
import Cast from "./cast/Cast";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendations";
// import VideosSection from "./videosSection/VideosSection";

const Details = () => {
    const { mediaType, id } = useParams();

    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

console.log('data',data )
console.log('loading',data )
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            {/* <VideosSection data={data} loading={loading} /> */}
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;