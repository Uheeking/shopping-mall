import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;
function CheckBox(props) {
  const [Checked, setChecked] = useState([]);
  const handleToggle = (value)=>{
    //누른 것의 index를 구하고 + 없는 값은 -1이 나오고, 있는 값은 0이 나옴
    const currentIndex = Checked.indexOf(value)
    //전체 Checked된 state에서 현재 누른 checkbox가 이미 있다면
    const newChecked = [...Checked]
    // state 넣어준다.
    if(currentIndex === -1){
      newChecked.push(value)
      //빼주기
    }else{
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    props.handleFilters(newChecked)
  }
  const renderCheckboxLists = () =>
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox onChange={()=> handleToggle(value._id)} 
        checked={Checked.indexOf(value._id) === -1 ? false:true} />
          <span>{value.name}</span>
      </React.Fragment>
    ));
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Continents" key="1">
          {renderCheckboxLists()}
          <Checkbox>Checkbox</Checkbox>
        </Panel>
      </Collapse>
    </div>
  );
}
export default CheckBox;
