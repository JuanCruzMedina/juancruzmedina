import { Chip } from "@heroui/chip";

interface ProjectTagsProps {
  tags?: string[];
}

const ProjectTags = ({ tags = [] }: ProjectTagsProps) => {
  return tags.map((tag: string) => (
    <Chip key={tag} color="secondary" radius="lg" variant="flat">
      {tag}
    </Chip>
  ));
};

export default ProjectTags;
