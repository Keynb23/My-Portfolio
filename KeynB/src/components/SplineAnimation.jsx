import { useRef } from 'react'; // Removed useEffect if it's only for Spline import

const SplineAnimation = ({ splineUrl, ...props }) => {
  const splineViewerRef = useRef(null); // Keep the ref if you plan to interact with the viewer later

  return (
    <spline-viewer ref={splineViewerRef} url={splineUrl} {...props}></spline-viewer>
  );
};

export default SplineAnimation;