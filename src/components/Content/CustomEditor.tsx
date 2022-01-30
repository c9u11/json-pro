import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom/themeAtoms";
function onChange(newValue: string) {
  console.log("change", newValue);
}
export const CustomEditor = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <AceEditor
      mode="json"
      theme={isDark ? "twilight" : "tomorrow"}
      name="editor1"
      onChange={onChange}
      tabSize={2}
      wrapEnabled={true}
      editorProps={{
        $blockScrolling: true
      }}
    // annotations={[{ row: 0, column: 2, type: 'error', text: 'Some error.' }]}
    />
  )
}