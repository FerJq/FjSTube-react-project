import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  console.log(channel);

  useEffect(() => {
    fetchFromAPI(`channels?part"=snippet&id=${id}`).then((data) =>
      setChannel(data?.items[0])
    );
  }, [id]);

  return <Box></Box>;
};

export default ChannelDetail;
