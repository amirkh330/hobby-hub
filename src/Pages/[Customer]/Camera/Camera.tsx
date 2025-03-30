import { chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const Camera = () => {
  const [data, setData] = useState("No result");
  return (
    <chakra.div>
      <QrReader
        onResult={(result: any, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        // style={{ width: "100%" }}
        constraints={{ facingMode: "environment" }} 
      />
    </chakra.div>
  );
};
