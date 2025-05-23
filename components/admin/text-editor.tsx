"use client";
import { TtextEditorProps } from "@/types";
import { SerializedEditorState } from "lexical";
import { useCallback, useEffect, useState } from "react";
import { Editor } from "@/components/blocks/editor-x/editor";

export const initialEditorState = {
	root: {
		children: [
			{
				children: [],
				direction: "ltr",
				format: "",
				indent: 0,
				type: "paragraph",
				version: 1,
			},
		],
		direction: "ltr",
		format: "",
		indent: 0,
		type: "root",
		version: 1,
	},
} as unknown as SerializedEditorState;

export default function TextEditor({ value, onChange }: TtextEditorProps) {
	const [initialState, setInitialState] =
		useState<SerializedEditorState>(initialEditorState);

	useEffect(() => {
		if (value && !value.startsWith("<")) {
			try {
				setInitialState(JSON.parse(value));
			} catch {
				setInitialState(initialEditorState);
			}
		}
	}, [value]);

	const handleChange = useCallback(
		(editorState: SerializedEditorState) => {
			const html = convertLexicalToHtml(editorState);
			onChange?.(html);
		},
		[onChange],
	);

	return (
		<Editor
			editorSerializedState={initialState}
			onSerializedChange={handleChange}
		/>
	);
}

function convertLexicalToHtml(editorState: SerializedEditorState): string {
	if (!editorState?.root?.children) return "<p></p>";

	const paragraphs = editorState.root.children
		.map((paragraph: any) => {
			if (paragraph.type === "paragraph") {
				const texts =
					paragraph.children
						?.map?.((textNode: any) => {
							let content = textNode.text || "";
							if (textNode.format & 1) content = `<strong>${content}</strong>`;
							if (textNode.format & 2) content = `<em>${content}</em>`;
							if (textNode.format & 4) content = `<u>${content}</u>`;
							return content;
						})
						.join("") || "";
				return `<p>${texts}</p>`;
			}
			return "";
		})
		.join("");

	return paragraphs || "<p></p>";
}
