import React from "react";
import { IFeature } from "../../../@types/global";
import Image from "next/image";
interface Props {
  feature: IFeature;
}
const FeatureGridItem = ({ feature }: Props) => {
  return (
    <article className="feature-grid__item" key={feature.title}>
      <Image src={feature.illustration} alt={feature.alt} />
      <h2 className="text--semi-header5">{feature.title}</h2>
      <p className="text--base-text">{feature.text}</p>
    </article>
  );
};

export default FeatureGridItem;
