import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  position: string;
  business: readonly string[];
  description: string;
  tags: readonly string[];
  link?: string;
  logo?: StaticImageData;
  image?: string;
}

export function ProjectCard({
  title,
  position,
  business,
  description,
  tags,
  link,
  logo,
  image,
}: Props) {
  console.log("image", image);
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div>
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {logo && (
                  <Image
                    src={logo}
                    alt={title}
                    width={30}
                    height={30}
                    className="mr-1"
                  />
                )}
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="tagsContainer flex flex-wrap gap-2 mb-5 mt-2">
            <div className="flex flex-wrap gap-1 border-r-2 pr-4 last:border-r-0">
              {business.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                  variant="border"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 border-r-2 pr-4 last:border-r-0">
              <Badge
                className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                variant="default"
              >
                {position}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-1 last:border-r-0">
              {tags.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <div className="flex">
          <CardDescription className="me-8 w-full flex-1 hyphens-auto text-justify font-mono text-xs print:text-[10px]">
            {description}
          </CardDescription>
          {image && (
            <Image
              src={image}
              alt={title}
              className="mr-1 flex-[2]"
              width={200}
              height={200}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
