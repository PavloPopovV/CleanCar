import React from 'react'
import MainTitle from '../../ui/Title'
import ModelCard from "../../components/ModelCard";
import { models } from "../../data/models";
import RenderList from "../../components/RenderList";
import { ModelWrapper } from './styles';

export default function Models({title}) {
  return (
    <section id='models'>
      <MainTitle title={title}/>
      <ModelWrapper>
        <RenderList items={models} Component={ModelCard}/>
      </ModelWrapper>
    </section>
  )
}
