//your JS code here. If required. 
function remove() {

 const dropDown = documnet.getElementBtId("colorDropDown");
	const selectIndex = dropDown.selectedIndex;
	if(selectIndex !== -1){
		selectIndex.remove();
	}
}
 