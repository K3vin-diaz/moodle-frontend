import { CourseSectionAccordion } from '@/components/course-section-accordion';
import { MoodleApi } from '@/lib/moodle/moodleApi';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export function CourseDetailView() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery("getCourseById", {
    queryFn: () => MoodleApi.getCourseById(id!),
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Error al cargar el curso</p>
  }

  return (
    <div>
      <h1>WIP course name</h1>
      <div className="mr-64">
        {data.map((section) => {
          return <CourseSectionAccordion
            key={section.id}
            name={section.name}
            visible={section.visible}
          />
        })}
      </div>
    </div>
  )
}