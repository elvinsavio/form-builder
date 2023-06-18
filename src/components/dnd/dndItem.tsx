import { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type { DraggableSyntheticListeners, UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Icon from "../icon";
import { MdDragIndicator } from "react-icons/md";
import { editorStyle } from "../../style/editor";

interface Props {
  id: UniqueIdentifier;
}

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const DNDItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ref() {},
});

export function DNDItem({ children, id }: PropsWithChildren<Props>) {
  const { attributes, isDragging, listeners, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({
    id,
  });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style: CSSProperties = {
    opacity: isDragging ? 0 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
    ...editorStyle?.section?.container?.styles?.style,
  };

  return (
    <DNDItemContext.Provider value={context}>
      <li className={editorStyle?.section?.container?.styles?.className} ref={setNodeRef} style={style}>
        {children}
      </li>
    </DNDItemContext.Provider>
  );
}

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(DNDItemContext);

  return (
    <span {...attributes} {...listeners} ref={ref}>
      <Icon icon={<MdDragIndicator />} />
    </span>
  );
}
