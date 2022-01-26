import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import 'ace-builds/webpack-resolver';
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
      editorProps={{
        $blockScrolling: true
      }}
    />
  )
}