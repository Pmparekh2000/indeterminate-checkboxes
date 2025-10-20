import logo from "./logo.svg";
import "./App.css";
import { DUMMY_CHECKBOX_DATA, STATUS } from "./utils/constant";
import IndeterminateCheckboxes from "./components/IndeterminateCheckboxes";
import { useState } from "react";

function App() {
  const [checkBoxState, setCheckBoxState] = useState(DUMMY_CHECKBOX_DATA);

  const computeStatus = (node) => {
    let checkedCount = 0;
    let uncheckedCount = 0;
    let indeterminateCount = 0;

    node?.children?.map((child) => {
      if (child?.status === STATUS.CHECKED) checkedCount++;
      if (child?.status === STATUS.UNCHECKED) uncheckedCount++;
      if (child?.status === STATUS.INDETERMINATE) indeterminateCount++;
    });

    if (node?.children?.length === checkedCount) {
      node.status = STATUS.CHECKED;
    } else if (node?.children?.length === uncheckedCount) {
      node.status = STATUS.UNCHECKED;
    } else if (checkedCount > 0 || indeterminateCount > 0) {
      node.status = STATUS.INDETERMINATE;
    }

    return;
  };

  const traverse = (targetId, node, isDescendent, ancestorStatus) => {
    // DFS - Iterating over the entire tree
    if (node?.id === targetId) {
      if (node?.status === STATUS.CHECKED) {
        node.status = STATUS.UNCHECKED;
      } else {
        node.status = STATUS.CHECKED;
      }
    }

    if (isDescendent) {
      node.status = ancestorStatus;
    }

    node?.children?.forEach((child) => {
      traverse(
        targetId,
        child,
        node?.id === targetId || isDescendent,
        node?.status
      );
    });
    computeStatus(node);
  };

  const handleChange = (targetId) => {
    const cloneCheckboxState = JSON.parse(JSON.stringify(checkBoxState));

    // We have 3 root nodes here.
    cloneCheckboxState?.map((rootNode) => {
      traverse(targetId, rootNode);
    });

    setCheckBoxState(cloneCheckboxState);
  };

  return (
    <div className="App">
      <IndeterminateCheckboxes
        data={checkBoxState}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
