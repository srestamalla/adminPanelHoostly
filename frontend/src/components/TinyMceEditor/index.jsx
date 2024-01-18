import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import CustomButton from "../../shared/CustomButton";

const TinyMceEditor = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="2o1iuwvyqimc4wvu04gwm25li6krurffwl3qra781smd55i4"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 400,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="md:px-4 space-x-2 md:space-x-4 pt-4 md:pt-8 pb-4 flex items-center text-[13px] justify-end ">
        <button className="bg-black text-white text-[9px] w-16 px-2 py-1 md:text-sm md:w-28 md:px-4 md:py-2 rounded-sm">
          Cancel
        </button>
        <button className="bg-primaryYellow text-black text-[9px] md:text-sm w-16 px-2 py-1 md:w-28 md:px-4 md:py-2 rounded-sm">
          Update
        </button>
      </div>
      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default TinyMceEditor;
