import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { textLink, textWithColor } from "@/components/primitives";
import { getPrivacyLabel } from "@/utils/projectUtils";

interface ProjectLinksProps {
    link?: string | null;
    sourceLink?: string | null;
    privacy: string;
}

const ProjectLinks = ({ link, sourceLink, privacy }: ProjectLinksProps) => {
    return (
        <div className="flex h-5 items-center space-x-0.1 md:space-x-2">
            <div hidden={!link}>
                <Link
                    href={link || ""}
                    size="sm"
                    showAnchorIcon
                    className={textLink({ size: "onlyIcon" })}
                >
                    View
                </Link>
            </div>
            
            {link && sourceLink && (
                <Divider orientation="vertical" />
            )}
            
            <div hidden={!sourceLink}>
                <Link
                    href={sourceLink || ""}
                    size="sm"
                    showAnchorIcon
                    className={textLink({ size: "onlyIcon" })}
                >
                    Source
                </Link>
            </div>
            
            {(link || sourceLink) && privacy !== "open" && (
                <Divider orientation="vertical" />
            )}
            
            <div hidden={privacy === "open"}>
                <p className={textWithColor({ size: "xs" })}>
                    {getPrivacyLabel(privacy)}
                </p>
            </div>
        </div>
    );
};

export default ProjectLinks;