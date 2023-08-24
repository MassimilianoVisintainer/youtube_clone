import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


const Videos = ({ videos }) => {
  const video = videos[0];

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {(() => {
        const renderedItems = [];
        let idx
        for (idx in video) {
          const item = video[idx];
          renderedItems.push(
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        }
        return renderedItems;
      })()}
    </Stack>
  )
}
export default Videos;