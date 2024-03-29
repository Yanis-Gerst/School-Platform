import React, { useEffect, useState } from "react";
import Slider from "../../componenents/Slider";
import FeatureGrid from "../FeatureGrid";
import { IFeature } from "../../@types/global";
import FeatureCard from "../FeatureCard";
import FeatureGridItem from "../FeatureGrid/FeatureGridItem";

import { desktopBreakpoint } from "../../pages";

interface Props {
  featuresList: IFeature[];
}
const FeaturesSection = ({ featuresList }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowStateOnResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowStateOnResize);
    return () => {
      window.removeEventListener("resize", updateWindowStateOnResize);
    };
  });

  return (
    <>
      <section className="feature-section-wrapper">
        <h1 className="text--header4 feature-section__header">
          Name c&apos;est Quoi ?
        </h1>
        {windowWidth > desktopBreakpoint ? (
          <FeatureGrid>
            {featuresList.map((feature: IFeature) => {
              return <FeatureGridItem key={feature.title} feature={feature} />;
            })}
          </FeatureGrid>
        ) : (
          <Slider>
            {featuresList.map((feature) => {
              return <FeatureCard key={feature.title} feature={feature} />;
            })}
          </Slider>
        )}
      </section>
    </>
  );
};

export default FeaturesSection;
