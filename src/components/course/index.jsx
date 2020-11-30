import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

function Course() {
  const { courseId } = useParams();
  return (
    <Text>Course id: {courseId}</Text>
  );
}

export default Course;
