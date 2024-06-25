"use client";

import React, { useState } from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Card from "@/components/molecules/Card";
import { projects } from "../../../public/data/projects/projects";
import { TypeTechStack, techStack } from "../../../public/data/techStack";

type TechItem = {
  name: TypeTechStack;
  active: boolean;
};

export default function ProjectsList() {
  const createTechItem = (name: TypeTechStack): TechItem => ({
    name,
    active: false,
  });

  const initialTechStack: TechItem[] = techStack.map(createTechItem);
  const [filter, setFilter] = useState<TechItem[]>(initialTechStack);

  const filteredProjects = filter.some((item) => item.active)
    ? projects.filter((project) =>
        filter.some(
          (key) =>
            key.active &&
            project.techStack.some(
              (tech) => tech.toLowerCase() === key.name.toLowerCase()
            )
        )
      )
    : projects;

  const resetFilter = () => {
    setFilter(initialTechStack);
  };

  const projectCards = filteredProjects.map((project) => (
    <Card key={project.slug + project.name} project={project} />
  ));

  const buttonBaseStyle =
    "glass-dark px-6 py-1 rounded-full active:scale-95 hover:scale-110 duration-500 select-none";
  const clearButtonStyle = `${buttonBaseStyle} bg-zinc-500 hover:bg-zinc-800 active:bg-zinc-800`;
  const filterButtonStyle = (active: boolean) =>
    `${buttonBaseStyle} font-bold hover:scale-110 duration-500 select-none ${
      active
        ? "bg-blue-500 hover:bg-blue-800 active:bg-blue-800"
        : "hover:bg-zinc-900 active:bg-zinc-900"
    }`;

  const headerStyle = "flex flex-col text-center py-20 w-11/12 mx-auto";
  const filterContainerStyle = "flex flex-wrap justify-center gap-2 my-12";
  const gridContainerStyle = "grid md:grid-cols-2 gap-4 w-full";

  const handleSelectFilter = (index: number) => {
    const updatedFilter = [...filter]; // Criar uma cópia do array filter
    updatedFilter[index].active = !updatedFilter[index].active; // Atualizar a propriedade active para true
    setFilter(updatedFilter); // Atualizar o estado com o novo array
  };

  return (
    <div className={headerStyle}>
      <Title gradient>Projects</Title>
      <div className={filterContainerStyle}>
        <button className={clearButtonStyle} onClick={resetFilter}>
          <Text>Clear</Text>
        </button>
        {filter.map((item, index) => (
          <button
            key={item.name}
            className={filterButtonStyle(item.active)}
            onClick={() => handleSelectFilter(index)}
          >
            <Text>{item.name}</Text>
          </button>
        ))}
      </div>
      <div className={gridContainerStyle}>{projectCards}</div>
    </div>
  );
}
