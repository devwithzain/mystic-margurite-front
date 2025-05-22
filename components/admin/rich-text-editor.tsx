"use client";

import { useState } from "react";
import { SerializedEditorState } from "lexical";
import { Editor } from "@/components/blocks/editor-00/editor";

export default function RichTextEditor() {
	const [editorState, setEditorState] = useState<SerializedEditorState>();
	return (
		<Editor
			editorSerializedState={editorState}
			onSerializedChange={(value) => setEditorState(value)}
		/>
	);
}
