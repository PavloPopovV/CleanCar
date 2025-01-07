import React from "react";
import MainTitle from "../../ui/Title";
import { TITLES } from "../../data/titles";
import { about } from "../../data/about";
import AccentButton from "../../ui/AccentButton";
import ImgComponent from "../../components/ImgComponent";
import RenderList from "../../components/RenderList";
import { AboutWrapper, AboutWrapperImgList, AboutWrapperInfo } from "./styles";

export default function About() {
  const { text, images } = about;
  return (
    <section id="about">
      <MainTitle title={TITLES.ABOUT} />
      <AboutWrapper>
        <AboutWrapperInfo>
          <div>
            <p>{text}</p>
          </div>
          <AccentButton text={"Welcome"} />
        </AboutWrapperInfo>
        <AboutWrapperImgList>
          <RenderList items={images} Component={ImgComponent} />
        </AboutWrapperImgList>
      </AboutWrapper>
    </section>
  );
}
