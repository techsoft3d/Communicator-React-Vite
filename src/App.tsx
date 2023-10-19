import React, { useEffect, useRef } from "react";

function App() {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const hwvRef = useRef<Communicator.WebViewer | null>(null);

  useEffect(() => {
    if (!viewerRef.current || hwvRef.current) {
      return;
    }

    const hwv = new Communicator.WebViewer({
      container: viewerRef.current,
      endpointUri: "microengine.scs",
    });

    hwv.start();

    hwvRef.current = hwv;
  });

  return (
    <div
      ref={viewerRef}
      style={{
        width: 640,
        height: 480,
        position: "relative",
        border: "solid 1px black",
      }}
    ></div>
  );
}

export default App;
