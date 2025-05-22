"use client";
import {
	EditorState,
	ParagraphNode,
	SerializedEditorState,
	TextNode,
} from "lexical";
import {
	InitialConfigType,
	LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { useState } from "react";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ImageNode } from "@/components/editor/nodes/image-node";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { editorTheme } from "@/components/editor/themes/editor-theme";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ImagesPlugin } from "@/components/editor/plugins/images-plugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { ContentEditable } from "@/components/editor/editor-ui/content-editable";
import { ActionsPlugin } from "@/components/editor/plugins/actions/actions-plugin";
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin";
import { LinkToolbarPlugin } from "@/components/editor/plugins/toolbar/link-toolbar-plugin";
import { FormatQuote } from "@/components/editor/plugins/toolbar/block-format/format-quote";
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading";
import { HistoryToolbarPlugin } from "@/components/editor/plugins/toolbar/history-toolbar-plugin";
import { ClearEditorActionPlugin } from "@/components/editor/plugins/actions/clear-editor-plugin";
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph";
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list";
import { FontSizeToolbarPlugin } from "@/components/editor/plugins/toolbar/font-size-toolbar-plugin";
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin";
import { FontColorToolbarPlugin } from "@/components/editor/plugins/toolbar/font-color-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin";
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin";
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list";
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list";
import { FontBackgroundToolbarPlugin } from "@/components/editor/plugins/toolbar/font-background-toolbar-plugin";
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin";
import { ClearFormattingToolbarPlugin } from "@/components/editor/plugins/toolbar/clear-formatting-toolbar-plugin";

const editorConfig: InitialConfigType = {
	namespace: "Editor",
	theme: editorTheme,
	nodes: [
		HeadingNode,
		ParagraphNode,
		TextNode,
		QuoteNode,
		ListNode,
		ListItemNode,
		LinkNode,
		AutoLinkNode,
		ImageNode,
	],
	onError: (error: Error) => {
		console.error(error);
	},
};

export function Editor({
	editorState,
	editorSerializedState,
	onChange,
	onSerializedChange,
}: {
	editorState?: EditorState;
	editorSerializedState?: SerializedEditorState;
	onChange?: (editorState: EditorState) => void;
	onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
}) {
	return (
		<div className="overflow-hidden rounded-lg border bg-background shadow">
			<LexicalComposer
				initialConfig={{
					...editorConfig,
					...(editorState ? { editorState } : {}),
					...(editorSerializedState
						? { editorState: JSON.stringify(editorSerializedState) }
						: {}),
				}}>
				<TooltipProvider>
					<Plugins />

					<OnChangePlugin
						ignoreSelectionChange={true}
						onChange={(editorState) => {
							onChange?.(editorState);
							onSerializedChange?.(editorState.toJSON());
						}}
					/>
				</TooltipProvider>
			</LexicalComposer>
		</div>
	);
}

const placeholder = "Description..";

export function Plugins() {
	const [floatingAnchorElem, setFloatingAnchorElem] =
		useState<HTMLDivElement | null>(null);

	const onRef = (_floatingAnchorElem: HTMLDivElement) => {
		if (_floatingAnchorElem !== null) {
			setFloatingAnchorElem(_floatingAnchorElem);
		}
	};

	return (
		<div className="relative">
			{/* toolbar plugins */}
			<div className="flex w-full items-center">
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<HistoryToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<BlockFormatDropDown>
								<FormatParagraph />
								<FormatHeading levels={["h1", "h2", "h3"]} />
								<FormatNumberedList />
								<FormatBulletedList />
								<FormatCheckList />
								<FormatQuote />
							</BlockFormatDropDown>
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<FontFamilyToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<FontSizeToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<FontFormatToolbarPlugin format="bold" />
							<FontFormatToolbarPlugin format="italic" />
							<FontFormatToolbarPlugin format="underline" />
							<FontFormatToolbarPlugin format="strikethrough" />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<ClearFormattingToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<LinkToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<FontColorToolbarPlugin />
							<FontBackgroundToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
				<ToolbarPlugin>
					{({ blockType }) => (
						<div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
							<ElementFormatToolbarPlugin />
						</div>
					)}
				</ToolbarPlugin>
			</div>

			<div className="relative">
				<RichTextPlugin
					contentEditable={
						<div className="">
							<div
								className=""
								ref={onRef}>
								<ContentEditable
									placeholder={placeholder}
									className="ContentEditable__root relative block min-h-72 overflow-auto px-8 py-4 focus:outline-none h-72"
								/>
							</div>
						</div>
					}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<HistoryPlugin />
				<ListPlugin />
				<CheckListPlugin />
				<ImagesPlugin />
				{/* rest of the plugins */}
			</div>
			<ActionsPlugin>
				<div className="clear-both flex items-center justify-between border-t p-1 overflow-auto gap-2">
					<div className="flex justify-start flex-1">
						{/* left side action buttons */}
					</div>
					<div>{/* center action buttons */}</div>
					<div className="flex justify-end flex-1">
						{/* right side action buttons */}
						<>
							<ClearEditorActionPlugin />
							<ClearEditorPlugin />
						</>
					</div>
				</div>
			</ActionsPlugin>
		</div>
	);
}
