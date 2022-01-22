
import AceEditor from "react-ace";

function App() {
  return (
    <div>
      <AceEditor
        mode="json"
        theme="github"
        name="editor1"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default App;
