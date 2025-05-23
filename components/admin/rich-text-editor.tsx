"use client";

import { useCallback } from "react";
import { SerializedEditorState } from "lexical";
import { Editor } from "@/components/blocks/editor-00/editor";

interface RichTextEditorProps {
	value: string;
	onChange: (value: string) => void;
}

export default function RichTextEditor({
	value,
	onChange,
}: RichTextEditorProps) {
	const handleChange = useCallback(
		(serializedState: SerializedEditorState) => {
			// Convert Lexical state to HTML string
			const html = convertLexicalToHtml(serializedState);
			onChange(html);
		},
		[onChange],
	);

	return (
		<Editor
			editorSerializedState={value ? JSON.parse(value) : undefined}
			onSerializedChange={handleChange}
		/>
	);
}

function convertLexicalToHtml(serializedState: SerializedEditorState): string {
	if (!serializedState) return "";

	// Create a dummy editor to parse the state
	const editor = {
		getEditorState: () => serializedState,
		update: (callback: () => void) => callback(),
		getRootElement: () => document.createElement("div"),
	};

	let html = "";
	editor.update(() => {
		const root = editor.getEditorState().read(() => {
			const root = editor.getEditorState()._nodeMap.get("root");
			if (root) {
				html = root.__children
					.map((childKey) => {
						const node = editor.getEditorState()._nodeMap.get(childKey);
						return node ? node.__html : "";
					})
					.join("");
			}
		});
	});

	return html || "";
}
