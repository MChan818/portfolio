interface PropType {
	children: JSX.Element | JSX.Element[];
}

const FocusedList = ({ children }: PropType) => {
	return <ul className="group/list">{children}</ul>;
};

export default FocusedList;
