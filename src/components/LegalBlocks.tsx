import type { Block } from "@/content/privacy/types";
import { RichText } from "./RichText";

// Renders one content block of a legal document (privacy policy, terms).
// The block model lives in content/privacy/types.ts; the text is plain
// strings with RichText's inline markup.
export const BlockView = ({ block, basisLabel = "Legal basis:" }: { block: Block; basisLabel?: string }) => {
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "lead":
      return (
        <p className="font-semibold text-foreground">
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-1 pl-6">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-border">
                {block.head.map((h) => (
                  <th key={h} className="py-2 pr-4 font-semibold text-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((cells, i) => (
                <tr key={i} className="border-b border-border align-top">
                  {cells.map((cell, j) => (
                    <td key={j} className="py-2 pr-4">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "basis":
      return (
        <p className="text-base">
          <strong>{basisLabel}</strong> <RichText text={block.text} />
        </p>
      );
  }
};
