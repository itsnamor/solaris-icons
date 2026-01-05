'use client'
import metadata from "$/data/metadata.json";
import { Input, Label, Radio, RadioGroup, Separator, Surface, Tooltip } from "@heroui/react";
import { create, insertMultiple, search } from "@orama/orama";

import * as icons from "@solaris-icons/react";
import { debounce, groupBy, startCase } from "lodash-es";
import { useRef, useState } from "react";

const db = create({
  schema: {
    icon: "string",
    category: "string",
    keywords: "string[]",
  },
});

insertMultiple(db, metadata)


type GroupIcon = {
  category: string;
  iconsMetadata: Array<{ icon: string; category: string; keywords: string[] }>;
}

const DEFAULT_GROUP_ICONS: GroupIcon[] = Object.entries(groupBy(metadata, metadata => metadata.category)).map(([category, iconsMetadata]) => ({
  category,
  iconsMetadata,
}));

const variants = ["broken", "bold", "linear", "outline", "bold-duotone", "line-duotone"] as const;

export function IconsExplorer() {
  const [displayIcons, setDisplayIcons] = useState<GroupIcon[]>(DEFAULT_GROUP_ICONS);

  const [variant, setVariant] = useState<typeof variants[number]>("bold-duotone");
  const [color, setColor] = useState("#697689");

  const handleSearch = useRef(debounce(async (value) => {
    if (!value) {
      setDisplayIcons(DEFAULT_GROUP_ICONS);
      return;
    }

    const { hits } = await search(db, {
      term: value,
      limit: 100,
      tolerance: 2,
      properties: ["icon", "category", "keywords"],
      boost: {
        icon: 3,
        keywords: 1,
        category: 0.5,
      }
    });

    console.log(hits);

    const groupedIcons = Object.entries(groupBy(hits.map(hit => hit.document), doc => doc.category)).map(([category, iconsMetadata]) => ({
      category,
      iconsMetadata,
    }))

    setDisplayIcons(groupedIcons);

  }, 400));

  return (
    <Surface className="p-4 m-4 rounded-lg h-[calc(100vh-90px)] flex flex-col gap-4 overflow-hidden">
      <div className="mb-4 flex gap-4 items-center">
        <Input className="h-10 w-80" onChange={e => handleSearch.current(e.target.value)} placeholder="Search by name, category, keywords, ..." />

        <Separator orientation="vertical" />

        <RadioGroup orientation="horizontal" value={variant} onChange={e => setVariant(e as typeof variants[number])}>
          {variants.map(variant =>
            <Radio value={variant} key={variant}>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>{startCase(variant)}</Label>
              </Radio.Content>
            </Radio>)}
        </RadioGroup>

        <Separator orientation="vertical" />

        <Input type="color" className="px-2 py-1" value={color} onChange={e => setColor(e.target.value)} />
      </div>

      <div className="flex gap-4 grow overflow-auto">
        <div className="overflow-auto grow">
          {displayIcons.map(({ category, iconsMetadata }) =>
            <div key={category} className="flex flex-col gap-2 mb-10">
              <div className="font-semibold mb-2">{category} ({iconsMetadata.length})</div>

              <div className="flex flex-wrap gap-8" >
                {
                  iconsMetadata.map(({ icon }) => {

                    const Icon = icons[startCase(icon).replace(/ /g, "") as keyof typeof icons];

                    return <div key={icon} className="size-12 flex flex-col items-center">
                      <Tooltip delay={0}>
                        <Tooltip.Trigger>
                          <Icon size={40} variant={variant} color={color} />
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                          {icon}
                        </Tooltip.Content>
                      </Tooltip>
                    </div>
                  })
                }
              </div>
            </div>
          )}

        </div>
      </div>
    </Surface>
  );
}